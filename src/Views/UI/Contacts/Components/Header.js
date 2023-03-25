import comket from "../../../dependencies/comket.js"


export default function HeaderSection() {
    let parent = comket.div({
        class: "header-section",
        children: [
            comket.img({ src: "./media/contacts/contact.png" }),
            comket.div({
                class: "header-details",
                children: [
                    comket.h2({ text: "I'm here for you anytime" }),
                    comket.h3({ text: "Just Contact Me" })
                ]
            }),
            comket.div({
                class: "scroll-down",
                children: [
                    comket.button({
                        text: "Scroll Down",
                        onclick: () => {
                            document.querySelector(".contacts-page").scrollBy({
                                top: window.innerHeight - 50,
                                behavior: "smooth"
                            })
                        },
                    }),
                    comket.Element("ion-icon", { name: "chevron-down" })
                ]
            })
        ]
    })
    return parent
}