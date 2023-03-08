import comket from "../../dependencies/comket.js"


export function PersonalButton() {
    let parent = comket.button({
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
        class: "personal-page"
    })
    return parent
}