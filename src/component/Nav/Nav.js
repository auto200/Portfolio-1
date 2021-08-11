import './Nav.scss'
import { FaLanguage } from "react-icons/fa";
import { ChangeTheme } from "../ChangeTheme";

export  function Nav(props) {
    return <>
     <nav className='row pt-2 nav-bar'>
            <div className="col d-flex justify-content-end">
                <button onClick={props.switchLanguagecallback}
                className="action-button language-switch d-flex justify-content-around">
                    <div className="language-switch__label">
                        {props.language}
                    </div>
                    <div className="language-switch__icon">
                        <FaLanguage/>
                    </div>
                </button>
                <ChangeTheme/>
            </div>
        </nav>
        <div className="row">
                <div className='hr'/>
        </div>
        </>
}
