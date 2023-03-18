import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"
import HeaderSection from "./Components/Header.js"
import ProjectsSection from "./Components/Projects.js"


export function PortfolioButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "portfolio")
            parent.append( PortfolioPage() )
        },
        class: "nav-button portfolio-page-button",
        children: [
            comket.img({src: "./media/nav/portfolio.png"}),
            comket.span({text: "portfolio"})
        ]
    })
    return parent
}

export default function PortfolioPage() {
    let parent = comket.div({
        class: "portfolio-page",
        children: [
            HeaderSection(),
            ProjectsSection(),
        ]
    })
    return parent
}