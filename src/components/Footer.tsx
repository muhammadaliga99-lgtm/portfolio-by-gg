import React from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { GithubIcon } from './Icons';
import { 
  ArrowUp, 
  Send, 
  Mail, 
  BookOpen 
} from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#06070a] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/5">
          {/* Logo & Bio */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0d0f17] rounded-[9px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-xs">
                  MA
                </div>
              </div>
              <span className="text-white font-bold text-lg">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-md font-mono">
              {lang === 'uz' ? PERSONAL_INFO.quoteUz : PERSONAL_INFO.quoteEn}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noreferrer"
              title="Telegram"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-cyan-400 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Email"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-emerald-400 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Yuqoriga qaytish"
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 text-cyan-300 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Obsidian Second Brain acknowledgment & copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{t.footer.obsidianNote}</span>
          </div>

          <div className="text-center md:text-right text-gray-500">
            &copy; 2026 {PERSONAL_INFO.fullName}. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
