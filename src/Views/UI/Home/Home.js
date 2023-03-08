import comket from "../../dependencies/comket.js"
import Image from "./Components/Image.js"
import Nav from "./Components/Nav.js"


export default function HomePage() {
    let parent = comket.div({
        class: "home-page",
        children: [
            Image(),
            Nav()
        ]
    })
    return parent
}