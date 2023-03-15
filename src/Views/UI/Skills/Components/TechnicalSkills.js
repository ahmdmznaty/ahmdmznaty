import comket from "../../../dependencies/comket.js"


let technicalSkills = [
    {title: "HTML", percentage: 85, description: "Builds The Structure"},
    {title: "CSS", percentage: 75, description: "Style & Layout"},
    {title: "Javascript", percentage: 68, description: "Activity & Behavior"},
    {title: "Node JS", percentage: 60, description: "Server Side"},
    {title: "Express JS", percentage: 48, description: "API Controller"},
    {title: "React JS", percentage: 53, description: "Component Library :)"},
    {title: "Swiper JS", percentage: 74, description: "Colossal Library"},
    {title: "Sal JS", percentage: 71, description: "Scroll Animation Library"},
    {title: "Tailwind CSS", percentage: 47, description: "Utility Classes Library"},
    {title: "Bootstrap", percentage: 56, description: "Components & Utility Classes"},
    {title: "Sass", percentage: 47, description: "Style Preprocessor"},
    {title: "Snowpack", percentage: 40, description: "Bundler & Server Simulation"},
    {title: "Parcel", percentage: 40, description: "Bundler & Server Simulation"},
    {title: "Webpack", percentage: 37, description: "The Best Bundler In The World"},
    {title: "MongoDB", percentage: 42, description: "NoSQL Database"},
    {title: "MySQL", percentage: 43, description: "SQL Database"},
    {title: "MapBox", percentage: 64, description: "API For Maps & Locations"},
    {title: "Command Line", percentage: 79, description: "Control Our Computers :)"},
    {title: "Git", percentage: 70, description: "Version Control System"},
    {title: "GitHub", percentage: 65, description: "Git Remote Controller"},
    {title: "VS Code", percentage: 82, description: "Text Editor Or IDE :)"},
    {title: "Dev Tools", percentage: 75, description: "Tracking The Development Process"},
]

export default function TechnicalSkillsSection() {
    let newObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            setTimeout(() => {
                let percentage = +entry.target.getAttribute("data-percentage")
                const ctx = entry.target.getContext("2d");
                if (entry.target.getContext && entry.isIntersecting) {
                    let increment = 0
                    let drawCircle = setInterval(() => {
                        increment += 0.5
                        ctx.beginPath();
                        ctx.lineWidth = 13;
                        ctx.lineCap = "round";
                        ctx.strokeStyle = "#00a6ff";
                        ctx.lineJoin = "round";
                        ctx.arc(
                            160,  // x of center
                            160,  // y of center
                            140,  // radius of circle
                            (0 * Math.PI / 180),   // start angle
                            ((increment * 360 / 100) * Math.PI / 180), // end angle
                            false
                        );
                        ctx.stroke();
                        if(increment >= percentage) {
                            clearInterval(drawCircle)
                        }
                    }, 0.01)
                }
                else if( !entry.isIntersecting ) {
                    ctx.clearRect(0, 0, 320, 320)
                }
            }, 200);
        })
    }, {threshold: 0.2})
    let parent = comket.div({
        class: "technical-skills-section",
        children: [
            comket.h3({
                class: "title",
                text: "Technical Skills"
            }),
            comket.div({
                class: "technical-skills-list",
                children: technicalSkills.map(skill => {
                    let card = comket.div({
                        class: "technical-skill-card",
                        onclick: (e) => {
                            let item = e.target.classList.contains("technical-skill-card") ? e.target : (
                                e.target.parentElement.classList.contains("technical-skill-card") ? e.target.parentElement : e.target.parentElement.parentElement
                            );
                            [...document.querySelectorAll(".skills-page .technical-skills-section .technical-skills-list .technical-skill-card")].forEach(card =>{
                                if( card !== item && card.classList.contains("active-skill") ) card.classList.remove("active-skill")
                            })
                            item.classList.toggle("active-skill")
                            setTimeout(() => {
                                item.classList.remove("active-skill")
                            }, 1500);
                        },
                        children: [
                            comket.div({
                                class: "image-progress",
                                children: [
                                    comket.canvas({ class: "technical-skills-percentage", width: "320", height: "320", "data-percentage": skill.percentage }),
                                    comket.img({ src: `./media/skills/${skill.title.replaceAll(" ", "").toLowerCase()}.png` }),
                                ]
                            }),
                            comket.p({ text: skill.title }),
                            comket.span({ text: skill.description })
                        ]
                    })
                    setTimeout(() => {
                        newObs.observe( card.querySelector("canvas") )
                    }, 80);
                    return card
                })
            })
        ]
    })
    return parent
}