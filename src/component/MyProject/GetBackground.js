import Legbook from "./image/legbook.PNG";
import ValorantDamage from "./image/valorantdamage.PNG";
import Quiz from "./image/quiz.PNG";

export  function GetBackground(name) {
    return <>
        {name==="LegBook" && <img src={Legbook}  alt="LegBook" className='project-box__hyperlink-img'/>}
        {name==="Valorant Damage" && <img src={ValorantDamage}  alt="ValorantDamage" className='project-box__hyperlink-img'/> }
        {name==="Quiz" && <img src={Quiz}  alt="Quiz" className='project-box__hyperlink-img'/>}
    </>
}
