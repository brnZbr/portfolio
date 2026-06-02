import { ArrowRight, ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next";
import project01 from '../assets/projects/01/preview01.png'
import gitHubSign from '../assets/github-sign.png'

const projects = [
    {
        id: 1,
        title: "Hypercar 3D Gallery",
        description: "Galeria interativa de carros esportivos construída com HTML, CSS e JavaScript puro (Vanilla). O projeto destaca a manipulação do DOM para a troca dinâmica de slides, animações CSS avançadas com transformações espaciais (3D) e layout responsivo para celular",
        image: project01,
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "https://brnzbr.github.io/projectCssHTMLjs01/",
        githubUrl: "https://github.com/brnZbr/projectCssHTMLjs01",
    },
];

export const ProjectsSection = () => {
    const { t } = useTranslation();
  
    return (
        <section id="projects" className="py-24 px-2 relative">
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t('contact.projectsTitle')} <span className="text-primary">{t('contact.projectsTitleSecond')} </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                   {t('contact.projectsSubTitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">  {project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <img src={gitHubSign} className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/brnZbr" target="_blank">
                        {t('contact.projectGitHub')} <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </section>
    )
}