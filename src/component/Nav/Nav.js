import './Nav.scss'
import { ThemeButton } from "./ThemeButton";
import { Menu } from './Menu';
import { MenuMobile } from './MenuMobile';
import LanguageButton from './LanguageButton';

export  function Nav({language, switchLanguagecallback}) {
    return  <div className='row pt-2 nav-bar'>

                <div className="col d-flex justify-content-start">
                    <Menu/>
                    <MenuMobile/>
                </div>

                <div className="col d-flex justify-content-end">
                    <LanguageButton language={language} callback={switchLanguagecallback}/>
                    <ThemeButton/>
                </div>

            </div>
}
