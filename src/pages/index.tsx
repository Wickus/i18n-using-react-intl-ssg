import Home from "../locale-pages/Home";
import {I18nProvider, LOCALS} from "../i18n";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Index() {
    const router = useRouter();
    const providerSettings = {
        locale: LOCALS.ENGLISH,
        page: "index"
    }

    useEffect(() => {
        if (navigator) {
            const browserLanguage = navigator.language.replace(/-.*/g, "");
            if (browserLanguage != "en") {
                (async () => {
                    await router.push(`/${browserLanguage}/index`)
                })();
            }
        }
    });

    return (
        <I18nProvider {...providerSettings}>
            <Home/>
        </I18nProvider>
    );
}
