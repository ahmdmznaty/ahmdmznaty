import comket from "../../../dependencies/comket.js"


function ResponseMessage(status) {
    let parent = comket.p({ class: `response-message ${status}`, text: status == "done" ? "Your Message Is Sent" : "Your Message Failed To Sent" })
    document.body.append(parent)
    setTimeout(() => {
        parent.remove()
    }, 4000);
}
export default function MessageSection() {
    let parent = comket.div({
        class: "message-section",
        children: [
            comket.h3({ text: "Message Me" }),
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
    parent.querySelector("form").addEventListener("submit", e => {
        e.preventDefault()
        let data = {
            name: e.target.querySelector('input[name=name]').value,
            email: e.target.querySelector('input[name=email]').value,
            whatsapp: e.target.querySelector('input[name=whatsapp]').value,
            message: e.target.querySelector('textarea[name=message]').value
        }
        fetch("/api/message-me", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "x-www-form-urlencoded",
            }
        }).then(res => res.text()).then(data => {
            if(data == "done") ResponseMessage("done")
            else if(data == "error") ResponseMessage("error")
        })
    })
    return parent
}