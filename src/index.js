import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const userLanguage = navigator.language;

if(userLanguage == "es-ES")
{
    ReactDOM.render(
        <IntlProvider locale="es-ES" messages= {localeEsMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );
}
else if(userLanguage == "en-US")
{
    ReactDOM.render(
        <IntlProvider locale="en-US" messages= {localeEnMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );
}




