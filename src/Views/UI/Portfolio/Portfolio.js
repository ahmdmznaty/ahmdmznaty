import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"


export function PortfolioButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "portfolio")
            parent.append( PortfolioPage() )
        },
        class: "nav-button personal-page-button",
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
            comket.h1({ text: "Portfolio" })
        ]
    })
    return parent
}