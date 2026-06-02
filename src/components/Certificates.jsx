import { Download, Eye, View } from "lucide-react";
import { useTranslation } from "react-i18next"
import certificate01Img from '../assets/certificates/ITformation/picture.png'
import certificate01Pdf from '../assets/certificates/ITformation/certificate.pdf'

export const Certificates = () => {
    const { t } = useTranslation();

    const certificates = [
        {
            id: 1,
            title: t("certificates.ITFormationTitle"),
            description: t("certificates.ITFormationDescription"),
            image: certificate01Img,
            pdf: certificate01Pdf,
            demoUrl: "#",
        },
    ];

    return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t('contact.certificatesTitle')} <span className="text-primary">{t('contact.certificatesTitleSecond')} </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t('contact.certificatesSubTitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-cols-3 gap-8">
                    {certificates.map((certificate, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-md card-hover">
                            <div className="h-48 overflow-hidden" >
                                <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{certificate.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{certificate.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-5">
                                        {certificate.pdf && (
                                            <a
                                                href={certificate.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
                                                title="Ver PDF"
                                            >
                                                <Eye size={25} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}