import React from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { HACKATHON_DATA } from '../data/portfolioData';
import { triggerGoldenFireworks } from '../utils/confetti';
import { sounds } from '../utils/soundEffects';
import { 
  Award, 
  Sparkles, 
  Users, 
  GitCommit, 
  BarChart3, 
  Quote
} from 'lucide-react';

interface HackathonTrophyProps {
  lang: Language;
}

export const HackathonTrophy: React.FC<HackathonTrophyProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const handleCelebrate = () => {
    sounds.playSuccess();
    triggerGoldenFireworks();
  };

  return (
    <section id="trophy" className="py-20 relative overflow-hidden">
      {/* Golden/Silver Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.trophy.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.trophy.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            {t.trophy.subtitle}
          </p>
        </div>

        {/* Grand Showcase Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#161324]/90 via-[#0f111c]/90 to-[#0d0f17]/90 border border-amber-500/30 backdrop-blur-2xl shadow-2xl shadow-amber-500/10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Trophy & Score Badge */}
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-[3px] shadow-2xl shadow-amber-500/30 animate-pulse">
                  <div className="w-full h-full bg-[#0d0f17] rounded-[22px] flex flex-col items-center justify-center">
                    <Award className="w-14 h-14 sm:w-16 sm:h-16 text-amber-400 mb-1" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                      Vitse-Chempion
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-black font-extrabold text-xs shadow-lg">
                  🥈 2-O'RIN
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  Ball: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">92.1 / 100</span>
                </div>
                <p className="text-xs text-gray-300 max-w-sm">
                  Toshkent shahrida o'tkazilgan eng nufuzli IT akademiyasi hackathonida yuzlab ishtirokchilar orasida ikkinchi o'rin.
                </p>
              </div>

              {/* Celebrate Action Button */}
              <button
                onClick={handleCelebrate}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.trophy.celebrateBtn}</span>
              </button>
            </div>

            {/* Right Column: Project Architecture & Routes Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gray-400 font-mono text-[11px]">{t.trophy.teamLabel}</div>
                  <div className="font-bold text-white mt-0.5">{HACKATHON_DATA.team}</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gray-400 font-mono text-[11px]">{t.trophy.mentorLabel}</div>
                  <div className="font-bold text-cyan-300 mt-0.5">{HACKATHON_DATA.mentor}</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-gray-400 font-mono text-[11px]">Texnik Topshiriq</div>
                  <div className="font-mono text-amber-300 mt-0.5">{HACKATHON_DATA.specId}</div>
                </div>
              </div>

              {/* Muhammad Ali's Specific Role */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4" />
                  <span>{t.trophy.roleLabel}:</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-200">
                  {t.trophy.roleVal}
                </div>
              </div>

              {/* Muhammad Ali's 4 Routes breakdown */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-1.5">
                  <GitCommit className="w-4 h-4 text-amber-400" />
                  <span>{t.trophy.routesTitle}:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {HACKATHON_DATA.routes.map((route, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all">
                      <div className="font-mono font-bold text-amber-300">{route.path}</div>
                      <div className="text-gray-400 text-[11px] mt-1">
                        {lang === 'uz' ? route.descUz : route.descEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jury Recognition Quote */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-300 mb-1">{t.trophy.juryTitle}:</strong>
                  <p className="italic leading-relaxed">
                    "{lang === 'uz' ? HACKATHON_DATA.juryFeedbackUz : HACKATHON_DATA.juryFeedbackEn}"
                  </p>
                </div>
              </div>

              {/* Teammates acknowledgement */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-400">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                <span>Jamoa:</span>
                {HACKATHON_DATA.teammates.map((m, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
