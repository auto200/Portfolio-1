export function SwitchLanguage(language) {
    const ContentPage = {
        en:{
            aboutMe:{
                heading:"Hi, I'm Maciek",
                aFewWordAboutMe:"I am an ambitious 20 year old who wants to become a front-end developer. I'd like to work on a big project. I’ve always been curious about games and how work apps  and how they are developed. I approach programming as a hobby",
            },
            techStack:{
                heading:"Tech Stack",
            },
            myProject:{
                heading:"My Project",
            },
            footer:{
                heading:"Contact",
            }
        },
        pl:{
            aboutMe:{
                heading:"Cześć, tutaj Maciek",
                aFewWordAboutMe:"Jestem ambitnym 20-latkiem, który chce zostać front-end developerem. Chciałbym pracować w dużym projektem. Zawsze ciekawiły mnie gry, jak działają aplikacje oraz jak sie je tworzy. Programowanie traktuję jako hobby",
            },
            techStack:{
                heading:"Poznane Technologie",
            },
            myProject:{
                heading:"Moje Projekty",
            },
            footer:{
                heading:"Kontakt",
            }
        },
    }

    if(language==='EN') return ContentPage.en
    if(language==='PL') return ContentPage.pl
}