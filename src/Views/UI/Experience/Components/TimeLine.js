import comket from "../../../dependencies/comket.js"


export default function TimeLine(top, bottom, final) {
    let parent = comket.div({
        class: "time-line",
        children: [
            top ? comket.div({class: "time-line-top"}) : "",
            bottom ? comket.div({class: `time-line-bottom ${final ? "final" : ""}`}) : ""
        ]
    })
    return parent
}