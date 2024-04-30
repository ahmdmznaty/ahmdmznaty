import comket from "../../../dependencies/comket.js"


export default function AboutMeSection() {
    let parent = comket.div({
        class: "about-me-section",
        children: [
            comket.h3({ text: "About Me" }),
            comket.div({
                class: "about-me-details",
                children: [
                    comket.p({
                        class: "summary-text",
                        children: [
                            "Welcome mr visitor, it’s an honor to see you here in my modest portfolio. ",
                            "I’m Ahmed M. Znaty, a Software Engineer for more than { 6 } years. ",
                            "I can help you in your tech journey, building staff and increase your community or sales. ",
                            "Managing your tech teams, working on your existing projects, and anything related to tech world can be my job with you. ",
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
                                    comket.span({text: "24 years old"})
                                ]
                            }),
                            comket.div({
                                class: "about-me-card",
                                children: [
                                    comket.Element("ion-icon", {name: "location"}),
                                    comket.span({text: "Egypt, Sadat City"})
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