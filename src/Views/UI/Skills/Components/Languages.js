import comket from "../../../dependencies/comket.js"


export default function LanguagesSection() {
    let parent = comket.div({
        class: "languages-section",
        children: [
            comket.h3({
                class: "title",
                text: "Languages I'm Speaking"
            }),
            comket.div({
                class: "languages-data",
                children: [
                    comket.div({
                        class: "language-card arabic",
                        children: [
                            comket.img({src: "./media/skills/languages/arabic.png"}),
                            comket.h4({ text: "Arabic" }),
                            comket.p({ text: "Native" })
                        ]
                    }),
                    comket.img({ src: "./media/skills/languages/speak.png" }),
                    comket.div({
                        class: "language-card english",
                        children: [
                            comket.img({src: "./media/skills/languages/english.png"}),
                            comket.h4({ text: "English" }),
                            comket.p({ text: "Conversational" })
                        ]
                    })
                ]
            })
        ]
    })
    return parent
}