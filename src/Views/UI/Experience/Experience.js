import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"
import HeaderSection from "./Components/Header.js"
import ExpTemplate from "./Components/ExpTemplate.js"
import experiences from "../../database/experiences.js"
import CoursesSection from "./Components/Courses.js"


export function ExperienceButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "experience")
            parent.append(ExperiencePage())
            document.querySelector(".home-nav").classList.remove("animated")
            document.querySelector(".home-image").classList.remove("animated")
            parent.setAttribute("data-page", "experience")
        },
        class: "nav-button experience-page-button",
        children: [
            comket.img({ src: "./media/nav/experience.png" }),
            comket.span({ text: "experience" })
        ]
    })
    return parent
}

export default function ExperiencePage() {
    let parent = comket.div({
        class: "experience-page",
        children: [
            HeaderSection(),
            ...experiences.map((oneExp, index) => {
                return ExpTemplate(oneExp, index == experiences.length - 1 ? true : false)
            }),
            CoursesSection()
        ]
    })
    return parent
}