import comket from "../../../dependencies/comket.js"


export default function LearningsSection() {
    let parent = comket.div({
        class: "learnings-section",
        children: [
            comket.h3({ text: "Learning" }),
            comket.div({
                class: "learning-details",
                children: [
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Systems and Computers Engineering • Al-Azhar University"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Computer Science 50 • Harvard Course"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Programming concepts in python then java"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "SQL & Mongodb Databases"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "HTML & CSS & Web design Concepts"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Javascript / Ecmascript"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "ReactJS & Other JS Libraries"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "PHP & Django & Back-end concepts"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "NodeJS / ExpressJS for Back-end"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Graphic, UI, and UX design"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Video Editing & Animations with coding and programs"})
                        ]
                    }),
                    comket.div({
                        class: "learning-card",
                        children: [
                            comket.Element("ion-icon", {name: "flame"}),
                            comket.span({text: "Continuous Learning • cause I love learning and teaching…"})
                        ]
                    })
                ]
            })
        ]
    })
    return parent
}