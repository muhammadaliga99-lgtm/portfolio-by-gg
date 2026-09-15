import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { sounds } from '../utils/soundEffects';
import { 
  Terminal, 
  Globe, 
  Volume2, 
  VolumeX, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  Award,
  ChevronDown,
  User,
  GraduationCap,
  Gamepad2,
  Cpu,
  Layers,
  Server,
  Mail
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenTerminal: () => void;
  onOpenCv: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenTerminal,
  onOpenCv,
  activeSection,
}) => {
  const t = TRANSLATIONS[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.isEnabled = next;
    if (next) sounds.playClick();
  };

  const toggleLang = () => {
    sounds.playClick();
    setLang(lang === 'uz' ? 'en' : 'uz');
  };

  const scrollToSection = (id: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Primary navigation links shown in desktop navbar
  const primaryLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'trophy', label: t.nav.trophy, highlight: true },
    { id: 'games', label: t.nav.games },
    { id: 'projects', label: t.nav.projects },
    { id: 'backend', label: t.nav.backend },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  // Secondary links nested in "More / Ko'proq" dropdown
  const secondaryLinks = [
    { id: 'about', label: t.nav.about, icon: User },
    { id: 'education', label: t.nav.education, icon: GraduationCap },
    { id: 'gaming', label: t.nav.gaming, icon: Gamepad2 },
  ];

  // All links for mobile drawer
  const allMobileLinks = [
    { id: 'hero', label: t.nav.home, icon: Sparkles },
    { id: 'trophy', label: t.nav.trophy, highlight: true, icon: Award },
    { id: 'games', label: t.nav.games, icon: Gamepad2 },
    { id: 'projects', label: t.nav.projects, icon: Layers },
    { id: 'backend', label: t.nav.backend, icon: Server },
    { id: 'skills', label: t.nav.skills, icon: Cpu },
    { id: 'about', label: t.nav.about, icon: User },
    { id: 'education', label: t.nav.education, icon: GraduationCap },
    { id: 'gaming', label: t.nav.gaming, icon: Gamepad2 },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  const isSecondaryActive = secondaryLinks.some((l) => l.id === activeSection);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#08090d]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo (Never shrinks) */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 tracking-wider text-sm font-mono">
              MA
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-semibold text-sm tracking-tight flex items-center gap-1.5 whitespace-nowrap">
              <span>Muhammad Ali</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Online" />
            </div>
            <div className="text-[11px] text-gray-400 font-mono tracking-wide whitespace-nowrap">
              Full-Stack & 3D Dev
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links (Spacious, No text-wrapping) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#12141f]/85 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg shadow-black/40">
          {primaryLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => sounds.playHover()}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer relative ${
                  isActive 
                    ? 'text-cyan-300 bg-cyan-500/15 shadow-sm shadow-cyan-500/30 font-semibold' 
                    : link.highlight
                    ? 'text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.highlight && <Award className="w-3.5 h-3.5 inline mr-1 text-amber-400" />}
                <span>{link.label}</span>
              </button>
            );
          })}

          {/* "More / Ko'proq" Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                sounds.playClick();
                setMoreDropdownOpen(!moreDropdownOpen);
              }}
              onMouseEnter={() => sounds.playHover()}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSecondaryActive
                  ? 'text-cyan-300 bg-cyan-500/15 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{t.nav.more}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {moreDropdownOpen && (
              <div className="absolute top-full right-0 mt-2.5 w-48 bg-[#0d101a]/98 border border-white/15 backdrop-blur-2xl rounded-2xl shadow-2xl p-1.5 space-y-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                {secondaryLinks.map((sub) => {
                  const SubIcon = sub.icon;
                  const isActive = activeSection === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => scrollToSection(sub.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <SubIcon className="w-4 h-4 text-cyan-400" />
                      <span>{sub.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls (Never shrinks) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Tovushni o'chirish" : "Tovushni yoqish"}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-400 transition-all cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            title="Tilni almashtirish (UZ / EN)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-gray-200 hover:text-cyan-400 transition-all cursor-pointer whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* CLI Terminal Launcher */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenTerminal();
            }}
            title="Terminalni ochish"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/20 text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI (&gt;_)</span>
          </button>

          {/* CV / Resume Modal Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCv();
            }}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.cv}</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f17]/98 border-b border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 mt-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {allMobileLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium text-left transition-all whitespace-nowrap ${
                    activeSection === link.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : link.highlight
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${link.highlight ? 'text-amber-400' : 'text-cyan-400'}`} />
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal (&gt;_)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cyan-500 text-white font-medium text-xs cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.cv}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
