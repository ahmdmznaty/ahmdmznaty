import comket from "../../../dependencies/comket.js";


export default function Image() {
    let parent = comket.div({
        class: "home-image",
        children: [
            comket.div({class: "img-overlay"}),
            comket.img({class: "img clip-image", src: "./media/clip.svg"}),
            comket.img({class: "img my-image", src: "./media/myImage.jpg"}),
        ]
    })
    return parent
}