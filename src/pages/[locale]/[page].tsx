import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {I18nProvider} from "../../i18n";
import {pageHelper} from "../../helpers/pageHelper";

interface pageParams {
    locale: string,
    page: string
}

const Page: React.FC<{ pageParams: pageParams }> = ({pageParams}) => {
    const {locale, page} = pageParams;
    const i18nSettings = {
        locale: locale,
        page: page
    }

    return <I18nProvider {...i18nSettings}>
        {pageHelper[page]}
    </I18nProvider>;
}

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            pageParams: context.params
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {locale: "en", page: "index"}},
            {params: {locale: "fr", page: "index"}},
            {params: {locale: "es", page: "index"}},
            {params: {locale: "en", page: "contact"}},
            {params: {locale: "fr", page: "contact"}},
            {params: {locale: "es", page: "contact"}},
        ],
        fallback: false
    };
}
