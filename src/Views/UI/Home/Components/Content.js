import comket from "../../../dependencies/comket.js";


export function closeContent() {
    let parent = document.querySelector(".content-page")
    parent.classList.remove("active")
    parent.replaceChildren(parent.children[0])
    parent.setAttribute("data-page", "closed")
}

export default function Content() {
    window.addEventListener("keyup", event => {
        if(document.querySelector(".content-page").classList.contains("active") && event.key == "Escape") {
            closeContent()
        }
    })
    let parent = comket.div({
        "data-page": "personal",
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