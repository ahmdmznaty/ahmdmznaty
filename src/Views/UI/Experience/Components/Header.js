import comket from "../../../dependencies/comket.js"
import TimeLine from "./TimeLine.js"


export default function HeaderSection() {
    let parent = comket.div({
        class: "header-section",
        children: [
            comket.img({ src: "./media/experience/briefcase.png" }),
            comket.div({
                class: "header-details",
                children: [
                    comket.h2({ text: "My Learning & Work Journey" }),
                ]
            }),
            TimeLine(false, true)
        ]
    })
    return parent
}