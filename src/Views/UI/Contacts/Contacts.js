import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"


export function ContactsButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "contacts")
            parent.append( ContactsPage() )
        },
        class: "nav-button contacts-page-button",
        children: [
            comket.img({src: "./media/nav/contacts.png"}),
            comket.span({text: "contacts"})
        ]
    })
    return parent
}

export default function ContactsPage() {
    let parent = comket.div({
        class: "contacts-page",
        children: [
            comket.h1({ text: "Contacts" })
        ]
    })
    return parent
}