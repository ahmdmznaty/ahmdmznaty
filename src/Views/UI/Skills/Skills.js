import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"
import HeaderSection from "./Components/Header.js"


export function SkillsButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "skills")
            parent.append( SkillsPage() )
        },
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
        class: "skills-page",
        children: [
            HeaderSection(),
        ]
    })
    return parent
}