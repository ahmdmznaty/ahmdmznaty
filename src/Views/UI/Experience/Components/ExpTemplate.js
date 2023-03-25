import comket from "../../../dependencies/comket.js"
import TimeLine from "./TimeLine.js"


export default function ExperienceSection(experience, final) {
    let parent = comket.div({
        class: "experience-section",
        children: [
            comket.div({
                class: "experience-top",
                children: [
                    comket.h3({text: experience.title}),
                    comket.p({text: experience.type}),
                    comket.div({
                        class: "experience-timeline",
                        children: [
                            comket.span({text: experience.start}),
                            comket.div({}),
                            comket.span({text: experience.end})
                        ]
                    })
                ]
            }),
            comket.div({
                class: "experience-center",
                children: [
                    comket.img({src: `./media/experience/${experience.company.toLowerCase().replaceAll(" ", "")}.png`}),
                    comket.p({text: experience.company})
                ]
            }),
            comket.p({text: experience.description}),
            TimeLine(true, true, final)
        ]
    })
    return parent
}