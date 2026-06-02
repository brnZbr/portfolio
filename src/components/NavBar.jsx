import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const MAX_WIDTH_PX = "1024px";

    const navItems = [
        { name: t('contact.navBarHome'), href: "#hero" },
        { name: t('contact.navBarAbout'), href: "#about" },
        { name: t('contact.navBarSkills'), href: "#skills" },
        { name: t('contact.navBarProjects'), href: "#projects" },
        { name: t('contact.navBarCertificates'), href: "#certificates" },
        { name: t('contact.navBarContact'), href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    const toggleLanguage = () => {
        // Se a língua atual for inglês, muda pra português, senão, muda pra inglês
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        if (newLang === 'en') {
            document.documentElement.classList.add("en");
            localStorage.setItem("language", "en");
        } else {
            document.documentElement.classList.add("pt");
            localStorage.setItem("language", "pt");
        }
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage === "en") {
            document.documentElement.classList.add("en");
        } else {
            console.log("nao ta en")
            document.documentElement.classList.remove("en");
        }
        i18n.changeLanguage(storedLanguage);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadows-sm" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        {""}
                        <span className="text-glow text-foreground">Bruno dos Santos</span> Portfólio
                    </span>
                </a>

                {/* DESKTOP */}
                <div className="hidden lg:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors font-bold duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="text-foreground/80 font-bold duration-300 hover:cursor-pointer bg-transparent border-none p-0"
                    >
                        {i18n.language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT-BR '}
                    </button>
                </div>

                {/* MOBILE */}
                <div className="lg:hidden flex">
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={20} />}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="text-foreground/80 font-bold duration-300 hover:cursor-pointer bg-transparent border-none p-0"
                    >
                        {i18n.language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT-BR'}
                    </button>
                </div>
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-300 font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}