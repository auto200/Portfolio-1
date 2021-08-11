import { AboutMe } from "./component/AboutMe/AboutMe";
import { ButtonMoveUp } from "./component/ButtonMoveUp/ButtonMoveUp";
import { Footer } from "./component/Footer/Footer";
import { MyProject } from "./component/MyProject/MyProject";
import { Nav } from "./component/Nav/Nav";
import { SwitchLanguage } from "./component/SwitchLanguage";
import { TechStack } from "./component/TechStack/TechStack";
import { useState } from 'react'
import { ScrollProgressBar } from "./component/ScrollProgressBar/ScrollProgressBar";

export default function App() {
  const [languagePage , setLanguagePage] = useState('PL')
  const [contentPage , setContentPage ] = useState(SwitchLanguage('EN'))
  const [animateLanguage , setAnimateLanguage] = useState(false)

    const handleSwitchLanguage = () =>{
        setAnimateLanguage(!animateLanguage)
        setLanguagePage(languagePage === 'EN' ? 'PL' : 'EN')
        setContentPage(SwitchLanguage(languagePage))
    }

  return  <div className='container-xxl'>
            <ScrollProgressBar/>
            <Nav switchLanguagecallback={handleSwitchLanguage} language={languagePage} animate={animateLanguage}/>
            <AboutMe content={contentPage.aboutMe}/>
            <TechStack content={contentPage.techStack}/>
            <MyProject content={contentPage.myProject}/>
            <Footer content={contentPage.footer}/>
            <ButtonMoveUp/>
          </div>
}