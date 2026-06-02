import { Briefcase, Code, User } from "lucide-react"
import { useTranslation } from "react-i18next";
import { handleScroll } from "../hooks/scroll";

export const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t('contact.about')} <span className="text-primary">{t('contact.aboutMe')}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t('contact.aboutMeTitle')}</h3>
                        <p className="text-muted-foreground">
                            {t('contact.aboutMeResume')}
                        </p>
                      
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="cosmic-button">
                               {t('contact.aboutMeTouch')}
                            </a>
                            <a href="#/" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                               {t('contact.aboutMeCv')}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t('contact.aboutMeFirstCardTitle')}</h4>
                                    <p className="text-muted-foreground">
                                       {t('contact.aboutMeFirstCardContent')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t('contact.aboutMeSecondCardTitle')}</h4>
                                    <p className="text-muted-foreground">
                                        {t('contact.aboutMeSecondCardContent')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t('contact.aboutMeThirdCardTitle')}</h4>
                                    <p className="text-muted-foreground">
                                       {t('contact.aboutMeThirdCardContent')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}