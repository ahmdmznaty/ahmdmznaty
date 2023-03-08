import comket from "../../dependencies/comket.js"


export function SkillsButton() {
    let parent = comket.button({
        class: "nav-button skills-page-button",
        children: [
            comket.img({src: "./media/nav/skills.png"}),
            comket.span({text: "skills"})
        ]
    })
    return parent
}

export default function SkillsPage() {
    let parent = comket.div({
        class: "skills-page"
    })
    return parent
}