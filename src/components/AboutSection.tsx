import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO, SCHOOL_SCHEDULE } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { 
  User, 
  Calendar, 
  Layers, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Palette, 
  Terminal,
  ShieldCheck,
  Award
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'bio' | 'schedule' | 'philosophy'>('bio');

  const handleTabChange = (tab: 'bio' | 'schedule' | 'philosophy') => {
    sounds.playClick();
    setActiveTab(tab);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {t.about.summary}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#12141f]/90 border border-white/10 max-w-md mx-auto mb-10 shadow-lg">
          <button
            onClick={() => handleTabChange('bio')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'bio'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{t.about.tabs.bio}</span>
          </button>
          <button
            onClick={() => handleTabChange('schedule')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'schedule'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{t.about.tabs.schedule}</span>
          </button>
          <button
            onClick={() => handleTabChange('philosophy')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'philosophy'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>{t.about.tabs.philosophy}</span>
          </button>
        </div>

        {/* Tab 1: Personal Dossier & Bio */}
        {activeTab === 'bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            {/* Left Card: Identity Passport */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 p-[2px] shadow-lg shadow-cyan-500/30">
                  <div className="w-full h-full bg-[#08090d] rounded-[14px] flex items-center justify-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                    MA
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.nickname}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    {lang === 'uz' ? PERSONAL_INFO.titleUz : PERSONAL_INFO.titleEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.nav.available}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-gray-300 divide-y divide-white/5 font-sans">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>F.I.Sh:</span>
                  </span>
                  <span className="font-semibold text-white">{PERSONAL_INFO.fullName}</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Tug'ilgan sana / Yosh:</span>
                  </span>
                  <span className="font-semibold text-white">15.01.2013 ({PERSONAL_INFO.age} yosh)</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>Manzil:</span>
                  </span>
                  <span className="font-semibold text-white text-right">{lang === 'uz' ? PERSONAL_INFO.locationUz : PERSONAL_INFO.locationEn}</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Maktab:</span>
                  </span>
                  <span className="font-semibold text-white text-right">{lang === 'uz' ? PERSONAL_INFO.schoolUz : PERSONAL_INFO.schoolEn}</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'uz' ? 'IT Kursi Imtihoni:' : 'IT Course Exam:'}</span>
                  </span>
                  <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                    20/20 ball (100%)
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mars IT Academy:</span>
                  </span>
                  <span className="font-semibold text-white text-right">7 ta modul + Hackathon</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inter Nation:</span>
                  </span>
                  <span className="font-semibold text-cyan-300">IELTS Band 7.5+ Nomzod</span>
                </div>
              </div>
            </div>

            {/* Right Card: Full Ecosystem Pillars */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Dasturlash & Arxitektura Qamrovi</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  Muhammad Ali 13 yoshida nafaqat oddiy sahifalarni, balki to'liq zanjirli korporativ platformalar (Monorepo), qat'iy FSD arxitekturasidagi ijtimoiy tarmoqlar kloni va brauzerda 60 FPS tezlikda ishlovchi Three.js 3D WebGL o'yin dvigatellarini yaratish tajribasiga ega.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block">Next.js 15/16 & React 19</strong>
                      <span className="text-gray-400">Server Actions, Mapbox GL 3D va Tailwind v4 integratsiyasi.</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block">Three.js 3D Game Dev</strong>
                      <span className="text-gray-400">CS2 Mirage xaritasi, AI Botlar va 1,700 qatorlik voksel dvigatel.</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block">Enterprise Backend</strong>
                      <span className="text-gray-400">JWT Token Rotation, BullMQ kesh, Prisma ORM va Swagger UI.</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block">Feature-Sliced Design</strong>
                      <span className="text-gray-400">Sanoat standarti arxitekturasi va Vite PWA offline rejim.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages & Second Brain Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-indigo-950/20 to-fuchsia-950/20 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    Obsidian Second Brain & Tillar
                  </div>
                  <div className="text-sm font-semibold text-white">
                    O'zbek tili (Ona tili) · Rus tili (Erkin) · Ingliz tili (IELTS 7.5+)
                  </div>
                </div>
                <div className="text-xs font-mono bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-gray-300">
                  PARA Method System
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: School 256 Schedule */}
        {activeTab === 'schedule' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span>256-maktab, 8-"A" Sinf — Haftalik Dars va Mashg'ulot Rejimi</span>
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Intizom, maktab darslari va qo'shimcha IT/Matematika taqsimoti
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                  2020 – Hozirgacha (A'lochi o'quvchi)
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 uppercase font-mono text-[11px]">
                    <th className="py-3 px-4">Hafta Kuni</th>
                    <th className="py-3 px-4">Maktab Darslari</th>
                    <th className="py-3 px-4">Qo'shimcha Chuqurlashtirilgan Mashg'ulot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-200">
                  {SCHOOL_SCHEDULE.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{lang === 'uz' ? item.dayUz : item.dayEn}</span>
                      </td>
                      <td className="py-3 px-4 font-mono text-gray-300">{item.school}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 font-medium">
                          {lang === 'uz' ? item.extraUz : item.extraEn}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Design Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                1. {t.about.philosophy1Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.about.philosophy1Desc}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                2. {t.about.philosophy2Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.about.philosophy2Desc}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                3. {t.about.philosophy3Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.about.philosophy3Desc}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                4. {t.about.philosophy4Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.about.philosophy4Desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
