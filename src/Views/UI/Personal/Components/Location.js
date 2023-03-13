import comket from "../../../dependencies/comket.js"


export default function LocationSection() {
    let parent = comket.div({
        class: "location-section",
        children: [
            comket.h1({ text: "Location Section" })
        ]
    })
    return parent
}