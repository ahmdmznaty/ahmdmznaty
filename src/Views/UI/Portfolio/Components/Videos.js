import comket from "../../../dependencies/comket.js"
import videos from "../../../database/applying-videos.js"


export default function VideosSection() {
    let parent = comket.div({
        class: "videos-section",
        children: [
            comket.h3({
                class: "title",
                text: "Applying Videos"
            }),
            comket.div({
                class: "applying-videos-cards",
                children: videos.map(video => {
                    return comket.div({
                        class: "applying-videos-card",
                        children: [
                            comket.img({src: `./media/portfolio/videos/${video.title.replaceAll(" ", "")}.jpg`}),
                            comket.h4({text: video.title}),
                            comket.p({text: video.description}),
                            comket.a({ target: "_blank", href: video.url, text: "View Playlist" })
                        ]
                    })
                })
            })
        ]
    })
    return parent
}