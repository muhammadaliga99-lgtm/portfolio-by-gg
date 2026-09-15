import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { SKILLS_LIST } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { 
  Code2, 
  Server, 
  Boxes, 
  Wrench, 
  Languages, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  type SkillCategory = 'all' | 'frontend' | 'backend' | 'gamedev3d' | 'tools' | 'languages';
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { key: SkillCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { key: 'all', label: t.skills.all, icon: Cpu },
    { key: 'frontend', label: t.skills.frontend, icon: Code2 },
    { key: 'backend', label: t.skills.backend, icon: Server },
    { key: 'gamedev3d', label: t.skills.gamedev3d, icon: Boxes },
    { key: 'tools', label: t.skills.tools, icon: Wrench },
    { key: 'languages', label: t.skills.languages, icon: Languages },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_LIST
    : SKILLS_LIST.filter(s => s.category === activeCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'from-cyan-500 to-blue-600 border-cyan-500/30 text-cyan-400';
      case 'backend': return 'from-emerald-500 to-teal-600 border-emerald-500/30 text-emerald-400';
      case 'gamedev3d': return 'from-purple-500 to-indigo-600 border-purple-500/30 text-purple-400';
      case 'tools': return 'from-amber-500 to-orange-600 border-amber-500/30 text-amber-400';
      case 'languages': return 'from-rose-500 to-pink-600 border-rose-500/30 text-rose-400';
      default: return 'from-cyan-500 to-blue-600 border-cyan-500/30 text-cyan-400';
    }
  };

  const getBarGradient = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500/30';
      case 'backend': return 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-emerald-500/30';
      case 'gamedev3d': return 'bg-gradient-to-r from-purple-500 to-indigo-500 shadow-purple-500/30';
      case 'tools': return 'bg-gradient-to-r from-amber-500 to-orange-400 shadow-amber-500/30';
      case 'languages': return 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-rose-500/30';
      default: return 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = activeCategory === c.key;
            return (
              <button
                key={c.key}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategory(c.key);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const barStyle = getBarGradient(skill.category);
            const badgeStyle = getCategoryColor(skill.category);

            return (
              <div
                key={skill.name}
                onMouseEnter={() => sounds.playHover()}
                className="group relative bg-[#0f121d]/80 hover:bg-[#151928]/90 border border-white/5 hover:border-cyan-500/30 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-gray-500 font-mono capitalize">
                      {skill.category}
                    </span>
                  </div>
                  {skill.badge && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border bg-black/40 ${badgeStyle}`}>
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Progress bar container */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span className="text-[11px] flex items-center gap-1 text-gray-400">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>{lang === 'uz' ? 'Tajriba darajasi' : 'Proficiency'}</span>
                    </span>
                    <span className="font-bold text-white">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/50 overflow-hidden border border-white/5 p-[1px]">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${barStyle}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Architecture Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/5 border border-cyan-500/20">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">Feature-Sliced Design (FSD)</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {lang === 'uz' 
                ? "Katta masshtabdagi frontend ilovalarni modullarga, qatlamlarga (app, pages, widgets, features, entities, shared) ajratib boshqarish qobiliyati."
                : "Enterprise architecture isolating app, pages, widgets, features, entities, and shared slices for zero cyclic dependencies."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-600/5 border border-emerald-500/20">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">JWT Security & Token Rotation</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {lang === 'uz'
                ? "Qisqa muddatli Access token (5m) va Refresh token (7d) juftligi, bir martalik rotatsiya, Bcrypt xesh va Swagger OpenAPI spetsifikatsiyalari."
                : "Dual-token authentication with 5-minute access, 7-day refresh token rotation, salted Bcrypt password encryption, and OpenAPI 3.0.3 docs."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-600/5 border border-purple-500/20">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Boxes className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">WebGL 3D Games (60 FPS)</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {lang === 'uz'
                ? "Three.js da 1,700 qatorli sof dvigatellar, protsessual generatsiya, AABB to'qnashuv fizikasi va Web Audio fazoviy tovush tizimlari."
                : "Autonomous Three.js game engines written from scratch in pure JS, Simplex voxel world generation, and spatial 3D Web Audio."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
