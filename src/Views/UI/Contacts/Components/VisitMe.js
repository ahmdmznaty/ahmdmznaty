import comket from "../../../dependencies/comket.js"


export default function VisitMeSection() {
    let parent = comket.div({
        class: "visit-me-section",
        children: [
            comket.h3({
                class: "title",
                text: "Visit Me"
            }),
            comket.div({
                class: "visit-me-details",
                children: [
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://github.com/ahmdmznaty",
                        children: [ comket.img({ src: "./media/contacts/github.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://codepen.io/ahmdmznaty",
                        children: [ comket.img({ src: "./media/contacts/codepen.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://stackoverflow.com/users/20708566/ahmed-m-znaty",
                        children: [ comket.img({ src: "./media/contacts/stackoverflow.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://linkedin.com/in/ahmdmznaty",
                        children: [ comket.img({ src: "./media/contacts/linkedin.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://facebook.com/ahmdmznaty",
                        children: [ comket.img({ src: "./media/contacts/facebook.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://twitter.com/ahmdmznaty",
                        children: [ comket.img({ src: "./media/contacts/twitter.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://youtube.com/c/webket-learn",
                        children: [ comket.img({ src: "./media/contacts/youtube.png" }) ]
                    }),
                    comket.a({
                        class: "visit-me-card", target: "_blank",
                        href: "https://www.upwork.com/freelancers/~016c0254f4053a631a",
                        children: [ comket.img({ src: "./media/contacts/upwork.png" }) ]
                    }),
                ]
            })
        ]
    })
    return parent
}