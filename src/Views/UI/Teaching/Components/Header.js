import comket from "../../../dependencies/comket.js"


export default function HeaderSection() {
    let parent = comket.div({
        class: "header-section",
        children: [
            comket.img({ src: "./media/teaching/teaching.png" }),
            comket.div({
                class: "header-details",
                children: [
                    comket.h2({ text: "Here you'll find some courses and articles of mine" }),
                    comket.h3({ text: "Enjoy learning" })
                ]
            }),
            comket.div({
                class: "scroll-down",
                children: [
                    comket.button({
                        text: "Scroll Down",
                        onclick: () => {
                            document.querySelector(".teaching-page").scrollBy({
                                top: window.innerHeight - 50,
                                behavior: "smooth"
                            })
                        }
                    }),
                    comket.Element("ion-icon", { name: "chevron-down" })
                ]
            })
        ]
    })
    return parent
}