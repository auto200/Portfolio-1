import Legbook from "./image/legbook.PNG";
import ValorantDamage from "./image/valorantdamage.PNG";
import Quiz from "./image/quiz.PNG";

export  function GetBackground(name) {
    if(name==="LegBook") return <img src={Legbook} alt="LegBook" className='project-box__hyperlink-img'/>
    if(name==="Valorant Damage") return <img src={ValorantDamage} alt="ValorantDamage" className='project-box__hyperlink-img'/>
    if(name==="Quiz") return <img src={Quiz} alt="Quiz" className='project-box__hyperlink-img'/>
}
