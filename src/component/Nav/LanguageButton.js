import React from 'react'
import { FaLanguage } from "react-icons/fa";

export default function LanguageButton({language, callback}) {
    return <button onClick={callback}
                className="action-button shadow-sm language-switch d-flex justify-content-around">
            <div className="language-switch__label">
                {language}
            </div>
            <div className="language-switch__icon">
                <FaLanguage/>
            </div>
        </button>
}
