import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "react-i18next";
import linkedinPicture from '../assets/linkedin.png'

export const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                {/* Títulos Principais */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t('contact.contactTitle')} <span className="text-primary"> {t('contact.contactTitleSecond')}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t('contact.contactSubTitle')}
                </p>
                <h3 className="text-2xl font-semibold mb-2 text-center">{t('contact.contactInfo')}</h3>
                
                <div className="py-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-10">

                    {/* Bloco 1: Email */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <h4 className="font-medium">{t('contact.contactInfo')}</h4>
                            <a href="mailto:brunosix48@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                brunosix48@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Bloco 2: Telefone */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <h4 className="font-medium">{t('contact.contactPhone')}</h4>
                            <a href="https://wa.me/5519988240891" className="text-muted-foreground hover:text-primary transition-colors">
                                +55 (19) 98824-0891
                            </a>
                        </div>
                    </div>

                    {/* Bloco 3: Localização */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <h4 className="font-medium">{t('contact.contactLocation')}</h4>
                            <a
                                href="https://maps.google.com/?q=Piracicaba, São Paulo, Brazil"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Piracicaba - SP, Brazil
                            </a>
                        </div>
                    </div>
                </div>

                {/* Redes Sociais */}
                <div className="pt-4 flex flex-col items-center">
                    <h4 className="font-medium mb-4 text-center">{t('contact.contactMe')}</h4>
                    <div className="flex space-x-4 justify-center">
                        <a
                            href="https://www.linkedin.com/in/bruno-dos-santos-gomes-2794a62ba/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <img src={linkedinPicture} alt="Linkedin" className="h-8 w-8" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}