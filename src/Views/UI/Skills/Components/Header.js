import comket from "../../../dependencies/comket.js"


export default function HeaderSection() {
    let parent = comket.div({
        class: "header-section",
        children: [
            comket.h2({ text: "Take a look on my skills" }),
            comket.div({
                class: "skills-types",
                children: [
                    comket.div({
                        class: "skill-type-card",
                        children: [
                            comket.img({ src: "./media/skills/types/technicalskills.png" }),
                            comket.h3({ text: "Technical Skills" })
                        ]
                    }),
                    comket.div({
                        class: "skill-type-card",
                        children: [
                            comket.img({ src: "./media/skills/types/languages.png" }),
                            comket.h3({ text: "Languages" })
                        ]
                    }),
                    comket.div({
                        class: "skill-type-card",
                        children: [
                            comket.img({ src: "./media/skills/types/softskills.png" }),
                            comket.h3({ text: "Soft Skills" })
                        ]
                    })
                ]
            }),
            comket.div({
                class: "scroll-down",
                children: [
                    comket.button({ text: "Scroll Down" }),
                    comket.Element("ion-icon", { name: "chevron-down" })
                ]
            })
        ]
    })
    return parent
}