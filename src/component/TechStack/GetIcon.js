import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiGit } from "react-icons/si";

export function GetIcon(image){
    if(image==='FaHtml5') return  <FaHtml5 color='#e44d26'/>
    if(image==='FaCss3Alt') return  <FaCss3Alt color='#264de4'/>
    if(image==='SiJavascript') return  <SiJavascript color='#f7e018'/>
    if(image==='FaSass') return  <FaSass color='#ce679a'/>
    if(image==='FaReact') return  <FaReact color='#61dafb'/>
    if(image==='SiGit') return  <SiGit color='#f34e28'/>
    if(image==='FaBootstrap') return  <FaBootstrap color='#6c10f4'/>
}