import React from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { Award, Code2, GraduationCap, Globe, Zap } from 'lucide-react';

interface QuickStatsProps {
  lang: Language;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const stats = [
    {
      icon: Award,
      label: t.stats.hackathonLabel,
      value: t.stats.hackathonVal,
      detailUz: "TezCode By Behruz jamoasi",
      detailEn: "Team TezCode By Behruz",
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400"
    },
    {
      icon: Code2,
      label: t.stats.projectsLabel,
      value: t.stats.projectsVal,
      detailUz: "Monorepo, 3D & FSD Web",
      detailEn: "Monorepo, 3D & FSD Web",
      color: "from-cyan-500/20 to-blue-600/5",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: GraduationCap,
      label: t.stats.schoolLabel,
      value: t.stats.schoolVal,
      detailUz: "Mars IT Academy kursi",
      detailEn: "Mars IT Academy Course",
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Globe,
      label: t.stats.ieltsLabel,
      value: t.stats.ieltsVal,
      detailUz: "Inter Nation English School",
      detailEn: "Inter Nation English School",
      color: "from-fuchsia-500/20 to-fuchsia-600/5",
      borderColor: "border-fuchsia-500/30",
      iconColor: "text-fuchsia-400"
    },
    {
      icon: Zap,
      label: t.stats.ageLabel,
      value: t.stats.ageVal,
      detailUz: "15-yanvar, 2013-yil",
      detailEn: "Born Jan 15, 2013",
      color: "from-indigo-500/20 to-indigo-600/5",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          const isLast = idx === stats.length - 1;
          return (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl bg-[#0d0f17]/80 backdrop-blur-xl border ${item.borderColor} bg-gradient-to-b ${item.color} shadow-xl hover:-translate-y-1 transition-all duration-300 group ${isLast ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                  #{idx + 1}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-semibold text-gray-300 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-gray-400 font-mono mt-1 truncate">
                {lang === 'uz' ? item.detailUz : item.detailEn}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
