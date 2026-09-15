import { useState, useEffect } from 'react';
import type { Language } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { QuickStats } from './components/QuickStats';
import { AboutSection } from './components/AboutSection';
import { HackathonTrophy } from './components/HackathonTrophy';
import { GamesShowcase } from './components/GamesShowcase';
import { ProjectsGrid } from './components/ProjectsGrid';
import { BackendEvolution } from './components/BackendEvolution';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { GamingSection } from './components/GamingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { CvModal } from './components/CvModal';
import { sounds } from './utils/soundEffects';

export function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'trophy',
      'games',
      'projects',
      'backend',
      'skills',
      'education',
      'gaming',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    sounds.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const targetPos = elRect - bodyRect - offset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
        activeSection={activeSection}
      />

      <main className="relative">
        {/* 1. Hero 3D with Interactive Three.js WebGL & Constellations */}
        <Hero3D
          lang={lang}
          onExploreProjects={() => scrollToSection('projects')}
          onViewTrophy={() => scrollToSection('trophy')}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onContact={() => scrollToSection('contact')}
        />

        {/* 2. Key Metrics Bar */}
        <QuickStats lang={lang} />

        {/* 3. About Section / Dossier */}
        <AboutSection lang={lang} />

        {/* 4. Mars Hackathon 2026 Trophy & Winner Showcase */}
        <HackathonTrophy lang={lang} />

        {/* 5. 3D WebGL Games (CS2 Mirage Web & Minecraft Voxel Engine) */}
        <GamesShowcase lang={lang} />

        {/* 6. Systems & Projects Grid (SaaS, FSD, E-commerce, Bots) */}
        <ProjectsGrid lang={lang} />

        {/* 7. Backend Evolution Hub (Native Node -> Express -> Token Auth -> JWT & Swagger) */}
        <BackendEvolution lang={lang} />

        {/* 8. Skills & Tech Stack Matrix */}
        <SkillsSection lang={lang} />

        {/* 9. Education & Weekly Schedule (School 256, Mars IT, Inter Nation IELTS) */}
        <EducationSection lang={lang} />

        {/* 10. Hobby, CS2 (m0NESY) & London System Chess */}
        <GamingSection lang={lang} />

        {/* 11. Contact & Socials */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        lang={lang}
      />

      {/* Professional CV / Resume Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
