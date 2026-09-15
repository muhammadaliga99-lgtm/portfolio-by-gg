import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { PROJECTS_LIST } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import {
  Layers,
  CheckCircle2,
  FolderOpen,
  Scissors,
  Camera,
  Crosshair,
  Box,
  Navigation,
  Bot,
  Home,
  HeartHandshake,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Scissors, Camera, Crosshair, Box, Navigation, Bot, Home, HeartHandshake, Layers, Send,
};

interface ProjectsGridProps {
  lang: Language;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  type Category = 'all' | 'enterprise' | 'games3d' | 'frontend' | 'backend';
  const [filter, setFilter] = useState<Category>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t.projects.all },
    { key: 'enterprise', label: t.projects.enterprise },
    { key: 'games3d', label: t.projects.games3d },
    { key: 'frontend', label: t.projects.frontend },
    { key: 'backend', label: t.projects.backend },
  ];

  const filtered = filter === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.category === filter);

  const statusLabel = (s: string) => {
    if (s === 'production') return { text: t.projects.statusProd, cls: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' };
    if (s === 'active') return { text: t.projects.statusActive, cls: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' };
    return { text: t.projects.statusDone, cls: 'bg-gray-500/20 text-gray-400 border-gray-500/30' };
  };

  const toggleExpand = (id: string) => {
    sounds.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.projects.title}</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">{t.projects.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => { sounds.playClick(); setFilter(c.key); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === c.key
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => {
            const Icon = ICON_MAP[project.iconName] || Layers;
            const st = statusLabel(project.status);
            const isExpanded = expandedId === project.id;
            const features = lang === 'uz' ? project.featuresUz : project.featuresEn;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all overflow-hidden group shadow-xl"
              >
                {/* Card Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                        style={{
                          backgroundColor: project.accentColor + '15',
                          borderColor: project.accentColor + '40',
                          color: project.accentColor,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                        {project.badge && (
                          <span
                            className="inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border"
                            style={{
                              backgroundColor: project.accentColor + '10',
                              borderColor: project.accentColor + '30',
                              color: project.accentColor,
                            }}
                          >
                            {project.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-mono border shrink-0 ${st.cls}`}>
                      {st.text}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {lang === 'uz' ? project.shortDescUz : project.shortDescEn}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 5).map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-300 font-mono">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-400">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Stats Mini-Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {project.stats.map((s, i) => (
                        <div key={i} className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                          <div className="text-[10px] text-gray-400 font-mono">{lang === 'uz' ? s.labelUz : s.labelEn}</div>
                          <div className="text-[11px] font-bold text-white mt-0.5 truncate">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-1.5 text-xs font-medium transition-all cursor-pointer"
                    style={{ color: project.accentColor }}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    <span>{t.projects.viewDetails}</span>
                  </button>
                </div>

                {/* Expandable Deep-Dive Panel */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="pt-4 space-y-4">
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {lang === 'uz' ? project.fullDescUz : project.fullDescEn}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" style={{ color: project.accentColor }} />
                          <span>{lang === 'uz' ? 'Asosiy Imkoniyatlar:' : 'Key Features:'}</span>
                        </h4>
                        <ul className="space-y-1.5 text-[11px] text-gray-300">
                          {features.map((f, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.architecture && (
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                          <span className="text-gray-400 font-mono">Arxitektura: </span>
                          <span className="text-white font-semibold">{project.architecture}</span>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2 text-[11px]">
                        <span className="text-gray-400 font-mono flex items-center gap-1">
                          <FolderOpen className="w-3 h-3" /> Full Tech Stack:
                        </span>
                        {project.techStack.map((ts, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300">{ts}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
