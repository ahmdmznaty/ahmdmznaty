import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"


export function ExperienceButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "experience")
            parent.append( ExperiencePage() )
        },
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
        class: "experience-page",
        children: [
            comket.h1({ text: "Experience" })
        ]
    })
    return parent
}