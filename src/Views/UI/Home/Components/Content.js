import comket from "../../../dependencies/comket.js";


export function closeContent() {
    let parent = document.querySelector(".content-page")
    parent.classList.remove("active")
    parent.replaceChildren(parent.children[0])
    document.querySelector(".home-nav").classList.add("animated")
    document.querySelector(".home-image").classList.add("animated")
    document.querySelector(`.home-nav .column .nav-button.${parent.getAttribute("data-page")}-page-button`)?.focus()
    parent.setAttribute("data-page", "closed")
}

export default function Content() {
    window.addEventListener("keyup", event => {
        if(document.querySelector(".content-page").classList.contains("active") && event.key == "Escape") {
            closeContent()
        }
    })
    let parent = comket.div({
        "data-page": "closed",
        class: "content-page",
        children: [
            comket.button({
                class: "close-content",
                onclick: closeContent
            })
        ]
    })
    return parent
}