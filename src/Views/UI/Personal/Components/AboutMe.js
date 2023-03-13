import comket from "../../../dependencies/comket.js"


export default function AboutMeSection() {
    let parent = comket.div({
        class: "about-me-section",
        children: [
            comket.h2({ text: "About Me" }),
            comket.div({
                class: "about-me-details",
                children: [
                    comket.p({
                        class: "summary-text",
                        children: [
                            "Welcome mr visitor, it’s an honor to see you here in my modest portfolio. ",
                            "I’m Ahmed M. Znaty, a full-stack web developer and UI/UX designer for more than four years. ",
                            "I can help you create your website and increase your community or sales. ",
                            "And I can turn your website into an offline application, or responsive to be viewable on all devices, and there are many other techniques that will make your website unique. ",
                            "Don’t move back, take the step and contact me"
                        ]
                    }),
                    comket.div({
                        class: "about-me-data",
                        children: [
                            comket.div({
                                class: "about-me-card",
                                children: [
                                    comket.Element("ion-icon", {name: "time"}),
                                    comket.span({text: "23"})
                                ]
                            }),
                            comket.div({
                                class: "about-me-card",
                                children: [
                                    comket.Element("ion-icon", {name: "location"}),
                                    comket.span({text: "Egypt, Cairo"})
                                ]
                            }),
                            comket.div({
                                class: "about-me-card",
                                children: [
                                    comket.Element("ion-icon", {name: "mail"}),
                                    comket.span({text: "ahmdmznaty@gmail.com"})
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
    return parent
}