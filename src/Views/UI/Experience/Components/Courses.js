import comket from "../../../dependencies/comket.js"
import courses from "../../../database/coursestook.js"
import Swiper, {} from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js"


export default function CoursesSection() {
    let parent = comket.div({
        class: "courses-section",
        children: [
            comket.h3({ class: "title", text: "Courses I Took" }),
            comket.div({
                class: "courses-cards swiper",
                children: [
                    comket.div({
                        class: "swiper-wrapper",
                        children: courses.map(course => {
                            return comket.div({
                                class: "course-card swiper-slide",
                                children: [
                                    comket.img({src: `./media/experience/courses/${course.title.toLowerCase().replaceAll(" ", "")}-${course.owner.toLowerCase().replaceAll(" ", "")}.png`}),
                                    comket.h4({text: course.title}),
                                    comket.div({
                                        class: "owner",
                                        children: [
                                            comket.img({src: `./media/experience/coursesowners/${course.owner.toLowerCase().replaceAll(" ", "")}.png`}),
                                            comket.span({text: course.owner})
                                        ]
                                    }),
                                    comket.a({ href: course.url, target: "_blank", text: "View Course" })
                                ]
                            })
                        })
                    }),
                    comket.div({class: "swiper-button-next", style: {display: "none"}}),
                    comket.div({class: "swiper-button-prev", style: {display: "none"}}),
                ]
            }),
            comket.div({
                class: "cards-navigator",
                children: [ prevButton(), nextButton() ]
            })
        ]
    })
    function prevButton() {
        return comket.button({
            onclick: () => {
                parent.querySelector(".swiper-button-prev").click()
            },
            children: [ comket.Element("ion-icon", {name: "chevron-back"}) ]
        })
    }
    function nextButton() {
        return comket.button({
            onclick: () => {
                parent.querySelector(".swiper-button-next").click()
            },
            children: [ comket.Element("ion-icon", {name: "chevron-forward"}) ]
        })
    }
    new Swiper(parent.children[1], {
        module: [],
        effect: "coverflow",
        autoplay: {
            delay: 1300,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: "600",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
            nextEl: parent.querySelector(".swiper-button-next"),
            prevEl: parent.querySelector(".swiper-button-prev")
        }
    })
    return parent
}