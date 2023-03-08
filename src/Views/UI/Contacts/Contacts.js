import comket from "../../dependencies/comket.js"


export function ContactsButton() {
    let parent = comket.button({
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
        class: "contacts-page"
    })
    return parent
}