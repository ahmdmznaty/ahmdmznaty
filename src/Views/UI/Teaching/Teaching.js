import comket from "../../dependencies/comket.js"


export function TeachingButton() {
    let parent = comket.button({
        onclick: () => {
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "teaching")
            parent.append( TeachingPage() )
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
            comket.h1({ text: "Teaching" })
        ]
    })
    return parent
}