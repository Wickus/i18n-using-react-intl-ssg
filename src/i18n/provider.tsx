import React, { Fragment, ReactElement } from "react";
import { IntlProvider } from "react-intl";
import json from "./json";

const Provider = ({ children, locale = "en", page = "landing-page" }: { children: ReactElement | ReactElement[]; locale: string; page: string }) => {
    const jsonData = json as ILocaleDataFile;
    return (
        <IntlProvider locale={locale} defaultLocale={"en"} textComponent={Fragment} messages={jsonData[locale][page]}>
            {children}
        </IntlProvider>
    );
};

export default Provider;
