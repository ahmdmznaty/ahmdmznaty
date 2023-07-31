import comket from "../../../dependencies/comket.js"
import courses from "../../../database/coursestook.js"

export default function CoursesSection() {
    let parent = comket.div({
        class: "courses-section",
        children: [
            comket.h3({ class: "title", text: "Courses I Took" }),
            comket.div({
                class: "courses-cards swiper swiper-container",
                style: { width: "100%" },
                children: [
                    comket.div({
                        class: "swiper-wrapper",
                        style: {
                            width: "100%",
                            display: "flex",
                            flexFlow: "row",
                            gap: "20px",
                            overflow: "scroll",
                            padding: "20px"
                        },
                        children: courses.map(course => {
                            return comket.div({
                                class: "course-card swiper-slide",
                                children: [
                                    comket.img({ src: `./media/experience/courses/${course.title.toLowerCase().replaceAll(" ", "")}-${course.owner.toLowerCase().replaceAll(" ", "")}.png` }),
                                    comket.h4({ text: course.title }),
                                    comket.div({
                                        class: "owner",
                                        children: [
                                            comket.img({ src: `./media/experience/coursesowners/${course.owner.toLowerCase().replaceAll(" ", "")}.png` }),
                                            comket.span({ text: course.owner })
                                        ]
                                    }),
                                    comket.a({ href: course.url, target: "_blank", text: "View Course" })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    })
    return parent
}