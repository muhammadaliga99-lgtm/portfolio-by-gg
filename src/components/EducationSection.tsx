import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { EDUCATION_DATA, SCHOOL_SCHEDULE } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  Clock, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface EducationSectionProps {
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleSchedule = () => {
    sounds.playClick();
    setShowSchedule(!showSchedule);
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {EDUCATION_DATA.map((item, idx) => {
            const isSchool = idx === 0;
            const isMars = idx === 1;
            const isInter = idx === 2;

            const accentBorder = isSchool 
              ? 'hover:border-cyan-500/40 from-cyan-500/10' 
              : isMars 
              ? 'hover:border-amber-500/40 from-amber-500/10' 
              : 'hover:border-indigo-500/40 from-indigo-500/10';

            const badgeColor = isSchool
              ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
              : isMars
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300';

            const institution = lang === 'uz' ? item.institutionUz : item.institutionEn;
            const role = lang === 'uz' ? item.roleUz : item.roleEn;
            const desc = lang === 'uz' ? item.descUz : item.descEn;
            const badge = lang === 'uz' ? item.badgeUz : item.badgeEn;

            return (
              <div
                key={idx}
                onMouseEnter={() => sounds.playHover()}
                className={`relative flex flex-col justify-between rounded-2xl bg-[#0f121d]/80 border border-white/5 bg-gradient-to-b ${accentBorder} to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      {isSchool && <BookOpen className="w-6 h-6 text-cyan-400" />}
                      {isMars && <Award className="w-6 h-6 text-amber-400" />}
                      {isInter && <GraduationCap className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${badgeColor} flex items-center gap-1 font-semibold`}>
                      <Sparkles className="w-3 h-3" />
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-1">
                    {institution}
                  </h3>
                  <div className="text-xs text-cyan-400/90 font-medium mb-2">
                    {role}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-4">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{item.period}</span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {isSchool && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-mono">{lang === 'uz' ? 'Asosiy Yo\'nalish:' : 'Focus:'}</span>
                      <span className="text-cyan-400 font-mono font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {lang === 'uz' ? "Matematika & Informatika (A'lo)" : "Math & CS (High Honors)"}
                      </span>
                    </div>
                  </div>
                )}

                {isMars && (
                  <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-mono">{lang === 'uz' ? 'IT Kursi Imtihoni:' : 'IT Course Exam:'}</span>
                      <span className="text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        20 / 20 Ball (100%)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-mono">{lang === 'uz' ? 'Hackathon 2026:' : 'Hackathon 2026:'}</span>
                      <span className="text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        92.1 Ball (2-o'rin)
                      </span>
                    </div>
                  </div>
                )}

                {isInter && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-mono">IELTS Marrasi:</span>
                      <span className="text-indigo-300 font-mono font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        Band 7.5+ Nomzod
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Schedule Toggle Button */}
        <div className="text-center">
          <button
            onClick={toggleSchedule}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white text-xs font-mono transition-all cursor-pointer shadow-lg shadow-black/30"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>
              {showSchedule 
                ? (lang === 'uz' ? 'Dars jadvalini yopish' : 'Hide Weekly Schedule')
                : (lang === 'uz' ? "8-'A' Sinf Haftalik Dars Jadvalini Ko'rish" : 'View Grade 8-"A" Weekly Schedule')}
            </span>
            {showSchedule ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Weekly Schedule Table */}
        {showSchedule && (
          <div className="mt-8 bg-[#0f121d] border border-white/10 rounded-2xl p-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div>
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'uz' ? "Muhammad Alining Haftalik Tartibi (8-'A' sinf)" : "Muhammad Ali's Weekly Regimen (Grade 8-'A')"}</span>
                </h4>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  256-maktab + Dasturlash + Matematika + Xobbi
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 hidden sm:inline-block">
                Intizom & Rejim
              </span>
            </div>

            <div className="overflow-x-auto pb-2">
              <table className="w-full text-left text-xs font-mono min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-3 px-4">{lang === 'uz' ? 'Hafta Kuni' : 'Day of Week'}</th>
                    <th className="py-3 px-4">{lang === 'uz' ? 'Maktab Vaqti' : 'School Hours'}</th>
                    <th className="py-3 px-4">{lang === 'uz' ? "Qo'shimcha Mashg'ulot (IT / Matematika / Xobbi)" : 'After-School (IT / Math / Practice)'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {SCHOOL_SCHEDULE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-white font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{lang === 'uz' ? row.dayUz : row.dayEn}</span>
                      </td>
                      <td className="py-3 px-4 text-gray-300">
                        {row.school}
                      </td>
                      <td className="py-3 px-4 text-cyan-300 font-medium">
                        {lang === 'uz' ? row.extraUz : row.extraEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
