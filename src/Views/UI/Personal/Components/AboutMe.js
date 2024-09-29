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
                            "Welcome mr visitor, it’s an honor to see you reading my modest cv.",
                            "I’ve been a software engineer for more than { 6 } years.",
                            "I have good programming skills and I’m a specialist back-end developer.",
                            "I love working in teams, and adore solving problems."
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