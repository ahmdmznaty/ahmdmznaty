import comket from "../../../dependencies/comket.js"


export default function ContactMeSection() {
    let parent = comket.div({
        class: "contact-me-section",
        children: [
            comket.h3({
                class: "title",
                text: "Contact Me"
            }),
            comket.div({
                class: "contact-me-details",
                children: [
                    comket.a({
                        class: "contact-me-card", target: "_blank",
                        href: "https://wa.me/+201100134340",
                        children: [
                            comket.img({ src: "./media/contacts/whatsapp.png" }),
                            comket.span({ text: "Whatsapp" })
                        ]
                    }),
                    comket.a({
                        class: "contact-me-card", target: "_blank",
                        href: "mailto:ahmdmznaty@gmail.com",
                        children: [
                            comket.img({ src: "./media/contacts/gmail.png" }),
                            comket.span({ text: "Gmail" })
                        ]
                    }),
                    comket.a({
                        class: "contact-me-card", target: "_blank",
                        href: "tg://resolve?domain=ahmdmznaty",
                        children: [
                            comket.img({ src: "./media/contacts/telegram.png" }),
                            comket.span({ text: "Telegram" })
                        ]
                    }),
                    comket.a({
                        class: "contact-me-card", target: "_blank",
                        href: "https://www.facebook.com/messages/t/ahmdmznaty",
                        children: [
                            comket.img({ src: "./media/contacts/messenger.png" }),
                            comket.span({ text: "Messenger" })
                        ]
                    }),
                ]
            })
        ]
    })
    return parent
}