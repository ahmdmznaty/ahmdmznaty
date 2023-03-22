import comket from "../../../dependencies/comket.js"
import articles from "../../../database/articles.js"


export default function ArticlesSection() {
    let parent = comket.div({
        class: "articles-section",
        children: [
            comket.h3({ class: "title", text: "Articles I Wrote" }),
            comket.div({
                class: "articles-cards",
                children: articles.map(article => {
                    return comket.div({
                        class: "article-card",
                        children: [
                            comket.img({src: `./media/teaching/articles/${article.title.replaceAll(" ", "")}.jpg`}),
                            comket.div({
                                class: "article-card-details",
                                children: [
                                    comket.h4({text: article.title}),
                                    comket.p({text: article.description}),
                                    comket.a({target: "_blank", href: article.url, text: "Read Article"})
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    })
    return parent
}