export function SwitchLanguage(language) {
    const ContentPage = {
        en:{
            aboutMe:{
                heading:"Hi, I'm Maciek",
                aFewWordAboutMe:
                <>
                    <p>I am an ambitious 20 years old who wants to become the best Front-End developer.</p>
                    <p>I've always been curious about how games and apps work with a main interest on how the development process looks like.</p>
                    <span>Creating pages from a visual point of view is not my strong point,
                        because my favorite part of creating a page is logic in JS.</span>
                </>,
            },
            techStack:{
                heading:"Tech Stack",
            },
            myProject:{
                heading:"My Projects",
            },
            footer:{
                heading:"Contact",
            }
        },
        pl:{
            aboutMe:{
                heading:"Cześć, tutaj Maciek",
                aFewWordAboutMe:
                <>
                    <p>Jestem ambitnym 20 latkiem, który chce zostać najlepszym Front-End developerem.</p>
                    <p>Zawsze byłem ciekaw jak działają gry i aplikacje, a najbardziej
                        interesowało mnie jak wygląda proces ich tworzenia.</p>
                    <span>Tworzenie stron z wizualnego punktu widzenia nie jest moją
                        mocną stroną, ponieważ moją ulubioną częścią tworzenia stron jest logika w JS.</span>
                </>,
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