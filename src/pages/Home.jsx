import { AboutSection } from "../components/AboutSection";
import { Certificates } from "../components/Certificates";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* <StarBackground /> */}
            <NavBar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <Certificates />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}

export default Home;