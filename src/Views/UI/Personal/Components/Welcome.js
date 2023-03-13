import comket from "../../../dependencies/comket.js"


export default function WelcomeSection() {
    let jobTitles = [" Full-Stack Developer    ", " UI/UX Designer    ", " CEO of webket    "]
    let animatedJobTitle = comket.h3({ id: "animatedJobTitle", text: "" })
    let index = 0
    let letter = 0
    let fillin = setInterval(() => {
        if( document.querySelector("#animatedJobTitle") ) {
            if( jobTitles[index].length == letter ) {
                letter = 0
                if( index == jobTitles.length - 1 ) index = 0
                else index += 1
            }
            else {
                if( letter == 0 ) animatedJobTitle.innerHTML = ""
                animatedJobTitle.innerHTML += jobTitles[index][letter]
                letter++
            }
        }
        else clearInterval(fillin)
    }, 200);
    let parent = comket.div({
        class: "welcome-section",
        children: [
            comket.img({ class: "main-image", src: "./media/cutted.png", draggable: "false" }),
            comket.div({
                class: "welcome-details",
                children: [
                    comket.p({ text: "welcome mr visitor" }),
                    comket.h1({ children: [ "I'm ", comket.span({text: "Ahmed M. Znaty"}) ] }),
                    animatedJobTitle,
                    comket.a({ href:"#", text: "Hire Me" }),
                    comket.a({ href:"#", text: "Download CV" })
                ]
            })
        ]
    })
    return parent
}