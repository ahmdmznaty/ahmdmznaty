import comket from "../../dependencies/comket.js"


export function PortfolioButton() {
    let parent = comket.button({
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
        class: "portfolio-page"
    })
    return parent
}