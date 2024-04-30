import comket from "../../../dependencies/comket.js"
import projects from "../../../database/projects.js"


function filterCards(parent) {
    parent.querySelector(".projects-filter-cards").replaceChildren(
        ...projects.filter(project => {
            let category = parent.querySelector(".projects-filter-nav .active-filter").innerHTML.toLowerCase()
            if( category == "all" ) return true
            else if( project.department.includes( category ) ) return true
            else return false
        }).map(project => {
            let card = comket.div({
                class: "project-card",
                children: [
                    comket.img({ src: `./media/portfolio/projects/${project.title.replaceAll(" ", "")}.png` }),
                    comket.h4({ text: project.title }),
                    comket.p({ text: project.description }),
                    comket.div({
                        class: "project-technologies",
                        children: project.technologies.map((technology, index) => {
                            return comket.img({ style: {translate: `-${index * 6}px 0`}, src: `./media/skills/${technology}.png` })
                        })
                    }),
                    comket.div({
                        class: "project-actions",
                        children: [
                            project.sourceURL ? comket.a({ text: "Source", target: "_blank", href: project.sourceURL }) : comket.i({}),
                            project.viewURL ? comket.a({ text: "View", target: "_blank", href: project.viewURL }) : comket.i({})
                        ]
                    })
                ]
            })
            setTimeout(() => { card.classList.add("shown") }, 1);
            return card
        })
    );
}
export default function ProjectsSection() {
    let departments = new Set()
    projects.forEach(project => {
        project.department.forEach(department => {
            departments.add(department)
        });
    })
    let parent = comket.div({
        class: "projects-section",
        children: [
            comket.h3({
                class: "title",
                text: "Projects & Applications"
            }),
            comket.div({
                class: "projects-filter",
                children: [
                    comket.div({
                        class: "projects-filter-nav",
                        children:
                            ["All", ...departments].map((department, index) => {
                                return comket.button({ class: `projects-filter-button ${!index ? "active-filter" : ""}`, text: department })
                            })
                    }),
                    comket.div({
                        class: "projects-filter-cards",
                        children: [
                            comket.span({ text: "loading..." })
                        ]
                    })
                ]
            })
        ]
    })
    parent.querySelectorAll(".projects-filter-button").forEach(button => {
        button.addEventListener("click", e => {
            document.querySelectorAll(".active-filter").forEach(active => active.classList.remove("active-filter"))
            button.classList.add("active-filter")
            filterCards(parent)
        })
    })
    filterCards(parent)
    setTimeout(() => {
        [...parent.querySelectorAll(".projects-filter-cards .project-card h4")].forEach(title => {
            if( title.scrollWidth > title.clientWidth ) {
                title.scrollDirection = "forward"
                setInterval(() => {
                    title.scrollBy({ left: title.scrollDirection == "forward" ? 1 : -1 })
                    if( title.scrollWidth < (title.clientWidth + title.scrollLeft + 1) ) title.scrollDirection = "backward"
                    if( title.scrollLeft == 0 ) title.scrollDirection = "forward"
                }, 80);
            }
        })
    }, 50);
    return parent
}