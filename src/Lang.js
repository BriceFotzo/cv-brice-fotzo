import React, { ChangeEvent, useState } from "react"
import { useTranslation } from 'react-i18next';
 
const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);
 
    let changeLanguage = (event) => {
        let language = event.target.value;
 
        switch (language) {
            case 'en':
                setLang('en');
                i18n.changeLanguage('en');
                break;
            case 'fr':
            default:
                setLang('fr');
                i18n.changeLanguage('fr');
                break;
        }
    }
 
    return (
        <div>
            <div>
                <select value={lang} name="language" onChange={changeLanguage}>
                    <option value={'fr'}>FR</option>
                    <option value={'en'}>EN</option>
                </select>
            </div>
        </div>
    )
}
 
export default Lang;