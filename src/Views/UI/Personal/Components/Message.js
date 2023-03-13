import comket from "../../../dependencies/comket.js"


export default function MessageSection() {
    let parent = comket.div({
        class: "message-section",
        children: [
            comket.h2({ text: "Message Me" }),
            comket.form({
                class: "message-me-form",
                children: [
                    comket.input({ class: "form-control", required: "true", name: "name", type: "text", placeholder: "Name" }),
                    comket.input({ class: "form-control", required: "true", name: "email", type: "email", placeholder: "Email" }),
                    comket.input({ class: "form-control", required: "true", name: "whatsapp", type: "tel", placeholder: "Whatsapp" }),
                    comket.textarea({ class: "form-control", required: "true", name: "message", type: "text", placeholder: "Your Message" }),
                    comket.button({ class: "form-submit", text: "Send Message" })
                ]
            })
        ]
    })
    return parent
}