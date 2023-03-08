import comket from "../../dependencies/comket.js"


export function ExperienceButton() {
    let parent = comket.button({
        class: "nav-button experience-page-button",
        children: [
            comket.img({src: "./media/nav/experience.png"}),
            comket.span({text: "experience"})
        ]
    })
    return parent
}

export default function ExperiencePage() {
    let parent = comket.div({
        class: "experience-page"
    })
    return parent
}