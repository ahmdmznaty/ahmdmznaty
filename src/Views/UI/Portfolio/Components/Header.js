import comket from "../../../dependencies/comket.js"


export default function HeaderSection() {
    let parent = comket.div({
        class: "header-section",
        children: [
            comket.img({ class: "main-image", src: "./media/portfolio/folder.png" }),
            comket.div({
                class: "header-details",
                children: [
                    comket.h2({ text: "Take a tour in my projects" }),
                    comket.p({ text: "Here you'll find some of my projects, applications, and some videos that I'm applying projects or applications in." }),
                    comket.button({
                        onclick: () => {
                            document.querySelector(".portfolio-page").scrollBy({
                                top: window.innerHeight - 50,
                                behavior: "smooth"
                            })
                        },
                        text: "See Projects"
                    })
                ]
            })
        ]
    })
    return parent
}