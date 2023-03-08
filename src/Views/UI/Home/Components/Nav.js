import comket from "../../../dependencies/comket.js";
import { PersonalButton } from "../../Personal/Personal.js";
import { PortfolioButton } from "../../Portfolio/Portfolio.js";
import { SkillsButton } from "../../Skills/Skills.js";
import { TeachingButton } from "../../Teaching/Teaching.js";
import { ContactsButton } from "../../Contacts/Contacts.js";
import { ExperienceButton } from "../../Experience/Experience.js";


export default function Nav() {
    let parent = comket.div({
        class: "home-nav",
        children: [
            comket.div({
                class: "column",
                children: [
                    PersonalButton(),
                    ExperienceButton()
                ]
            }),
            comket.div({
                class: "column",
                children: [
                    SkillsButton(),
                    TeachingButton()
                ]
            }),
            comket.div({
                class: "column",
                children: [
                    PortfolioButton(),
                    ContactsButton()
                ]
            })
        ]
    })
    return parent
}