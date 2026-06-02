import { useTranslation } from "react-i18next";
import htmlImg from '../assets/html-5.png'
import cssImg from '../assets/css-3.png'
import jsImg from '../assets/js.png'
import tsImg from '../assets/typescript.png'
import tailwindImg from "../assets/tailwind.png"
import reactImg from '../assets/react.png'
import gitImg from '../assets/github-sign.png'
import linuxImg from '../assets/linux.png'

const skills = [
    { name: "HTML", category: "frontend", src: htmlImg },
    { name: "CSS", category: "frontend", src: cssImg },
    { name: "JavaScript", category: "frontend", src: jsImg },
    { name: "TypeScript", category: "frontend", src: tsImg },
    { name: "Styled Components", category: "frontend", src: "https://www.daggala.com/static/228867c3668e439101821568a8a03b54/ec333/sc.png" },
    { name: "Material UI", category: "frontend", src: "https://images.seeklogo.com/logo-png/36/2/material-ui-logo-png_seeklogo-363138.png" },
    { name: "Tailwind CSS", category: "frontend", src: tailwindImg },
    { name: "React", category: "frontend", src: reactImg },
    { name: "Echarts ", category: "frontend", src: "https://echarts.apache.org/en/images/favicon.png" },

    { name: "Git/GitHub", category: "tools", src: gitImg },
    { name: "VS Code", category: "tools", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/3840px-Visual_Studio_Code_1.35_icon.svg.png" },
    { name: "Linux", category: "tools", src: linuxImg },
]

export const SkillsSection = () => {
    const { t } = useTranslation();

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t('contact.mySkills')} <span className="text-primary">{t('contact.mySkillsSecond')} </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <img className="w-13 h-13 rounded-small" src={skill.src} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}