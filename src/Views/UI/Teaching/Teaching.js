import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"
import ArticlesSection from "./Components/Articles.js"
import CoursesSection from "./Components/Courses.js"
import HeaderSection from "./Components/Header.js"


export function TeachingButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "teaching")
            parent.append( TeachingPage() )
            document.querySelector(".home-nav").classList.remove("animated")
            document.querySelector(".home-image").classList.remove("animated")
            parent.setAttribute("data-page", "teaching")
        },
        class: "nav-button teaching-page-button",
        children: [
            comket.img({src: "./media/nav/teaching.png"}),
            comket.span({text: "teaching"})
        ]
    })
    return parent
}

export default function TeachingPage() {
    let parent = comket.div({
        class: "teaching-page",
        children: [
            HeaderSection(),
            CoursesSection(),
            ArticlesSection()
        ]
    })
    return parent
}