import comket from "../../dependencies/comket.js"
import { closeContent } from "../Home/Components/Content.js"
import ContactMeSection from "./Components/ContactMe.js"
import VisitMeSection from "./Components/VisitMe.js"
import Message from "../Personal/Components/Message.js"
import HeaderSection from "./Components/Header.js"


export function ContactsButton() {
    let parent = comket.button({
        onclick: () => {
            closeContent()
            let parent = document.querySelector(".content-page")
            parent.classList.add("active")
            parent.setAttribute("data-page", "contacts")
            parent.append( ContactsPage() )
            document.querySelector(".home-nav").classList.remove("animated")
            document.querySelector(".home-image").classList.remove("animated")
            parent.setAttribute("data-page", "contacts")
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
            HeaderSection(),
            ContactMeSection(),
            VisitMeSection(),
            Message()
        ]
    })
    return parent
}