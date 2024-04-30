import comket from "../../../dependencies/comket.js"


export default function SoftSkillsSection() {
    let parent = comket.div({
        class: "soft-skills-section",
        children: [
            comket.h3({
                class: "title",
                text: "Soft Skills"
            }),
            comket.div({
                class: "soft-skills-details",
                children: [
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Explanation skills"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Public speaking"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Presentation skills"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Problem solving"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Creative thinking"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Team management"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Team working"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Communication skills"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Agile methodology"})
                        ]
                    }),
                    comket.div({
                        class: "soft-skill-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Mentorship skills"})
                        ]
                    }),
                ]
            })
        ]
    })
    return parent
}