import React, { Fragment, ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { getResources } from "./json";

const Provider = ({ children, locale = "en", page = "landing-page" }: { children: ReactElement | ReactElement[]; locale: string; page: string }) => {
    const jsonData = getResources() as ILocaleDataFile;
    return (
        <IntlProvider locale={locale} defaultLocale={"en"} textComponent={Fragment} messages={jsonData[locale][page]}>
            {children}
        </IntlProvider>
    );
};

export default Provider;
