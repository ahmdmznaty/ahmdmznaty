import comket from "../../../dependencies/comket.js"
import courses from "../../../database/courses.js"


export default function CoursesSection() {
    let parent = comket.div({
        class: "courses-section",
        children: [
            comket.h3({ class: "title", text: "Courses Of Mine" }),
            comket.div({
                class: "courses-cards",
                children: courses.map(course => {
                    return comket.div({
                        class: "course-card",
                        children: [
                            comket.img({src: `./media/teaching/courses/${course.title.replaceAll(" ", "")}.jpg`}),
                            comket.h4({text: course.title}),
                            comket.p({text: course.description}),
                            comket.a({target: "_blank", href: course.url, text: "View Course"})
                        ]
                    })
                })
            })
        ]
    })
    return parent
}