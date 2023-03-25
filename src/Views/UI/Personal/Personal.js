import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"
import WelcomeSection from "./Components/Welcome.js"
import AboutMeSection from "./Components/AboutMe.js"
import LearningsSection from "./Components/Learnings.js"
import MessageSection from "./Components/Message.js"


export function PersonalButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "personal")
            parent.append( PersonalPage() )
            document.querySelector(".home-nav").classList.remove("animated")
            document.querySelector(".home-image").classList.remove("animated")
            parent.setAttribute("data-page", "personal")
        },
        class: "nav-button personal-page-button",
        children: [
            comket.img({src: "./media/nav/personal.png"}),
            comket.span({text: "personal"})
        ]
    })
    return parent
}

export default function PersonalPage() {
    let parent = comket.div({
        class: "personal-page",
        children: [
            WelcomeSection(),
            AboutMeSection(),
            LearningsSection(),
            MessageSection()
        ]
    })
    return parent
}