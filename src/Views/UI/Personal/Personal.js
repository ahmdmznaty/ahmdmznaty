import comket from "../../dependencies/comket.js"


export function PersonalButton() {
    let parent = comket.button({
        onclick: () => {
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "personal")
            parent.append( PersonalPage() )
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
            comket.h1({ text: "Personal" })
        ]
    })
    return parent
}