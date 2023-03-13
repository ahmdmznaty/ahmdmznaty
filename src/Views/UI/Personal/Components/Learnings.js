import comket from "../../../dependencies/comket.js"


export default function LearningsSection() {
    let parent = comket.div({
        class: "learnings-section",
        children: [
            comket.h1({ text: "Learnings Section" })
        ]
    })
    return parent
}