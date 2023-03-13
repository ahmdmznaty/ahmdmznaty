import comket from "../../../dependencies/comket.js"


export default function MessageSection() {
    let parent = comket.div({
        class: "message-section",
        children: [
            comket.h1({ text: "Message Section" })
        ]
    })
    return parent
}