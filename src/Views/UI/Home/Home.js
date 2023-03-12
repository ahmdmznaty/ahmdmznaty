import comket from "../../dependencies/comket.js"
import Image from "./Components/Image.js"
import Nav from "./Components/Nav.js"
import Content from "./Components/Content.js"


export default function HomePage() {
    let parent = comket.div({
        class: "home-page",
        children: [
            Image(),
            Nav(),
            Content()
        ]
    })
    return parent
}