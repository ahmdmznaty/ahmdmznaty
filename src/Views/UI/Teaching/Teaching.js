import comket from "../../dependencies/comket.js"


export function TeachingButton() {
    let parent = comket.button({
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
        class: "teaching-page"
    })
    return parent
}