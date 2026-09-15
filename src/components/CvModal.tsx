import React from 'react';
import type { Language } from '../types/portfolio';
import { PERSONAL_INFO, HACKATHON_DATA, PROJECTS_LIST, EDUCATION_DATA } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { GithubIcon } from './Icons';
import { X, Printer, Award, Mail, Send, MapPin } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0f121d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Top bar controls */}
        <div className="bg-[#151928] border-b border-white/10 px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">
              {lang === 'uz' ? 'Rezyume / CV Ko\'rinishi' : 'Professional Resume / CV'}
            </span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-medium transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'uz' ? 'Chop etish / PDF Saqlash' : 'Print / Save as PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-gray-200 space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="text-sm font-semibold text-cyan-400 mt-1">
                {lang === 'uz' ? PERSONAL_INFO.titleUz : PERSONAL_INFO.titleEn}
              </div>
              <div className="text-xs text-gray-400 mt-1 font-mono">
                {PERSONAL_INFO.age} yosh (2013-01-15) • {lang === 'uz' ? PERSONAL_INFO.schoolUz : PERSONAL_INFO.schoolEn}
              </div>
            </div>

            <div className="text-xs font-mono space-y-1 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.telegramUser}</span>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>github.com/{PERSONAL_INFO.githubUser}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'uz' ? PERSONAL_INFO.locationUz : PERSONAL_INFO.locationEn}</span>
              </div>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              {lang === 'uz' ? 'Profil va Mutaxassislik' : 'Summary & Philosophy'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {lang === 'uz' 
                ? "13 yoshli professional Full-Stack va 3D WebGL muhandisi. React 19, Next.js 16 (App Router), Feature-Sliced Design (FSD) arxitekturasi, korporativ Node.js/Express, JWT xavfsizlik protokollari hamda Three.js o'yin dvigatellari bo'yicha amaliy tajribaga ega. Mars Hackathon 2026 da 92.1 ball bilan 2-o'rin sohibi."
                : "13-year-old Full-Stack and 3D WebGL engineer with proven expertise in React 19, Next.js 16 (App Router), Feature-Sliced Design (FSD), enterprise Node.js/Express with JWT token rotation, and autonomous Three.js WebGL game engines. Mars Hackathon 2026 Vice-Champion (92.1 pts)."}
            </p>
          </div>

          {/* Hackathon Achievement */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
              <Award className="w-4 h-4" />
              <span>Mars Hackathon 2026 — 2-o'rin (Vitse-Chempion) | 92.1 / 100 Ball</span>
            </div>
            <p className="text-xs text-gray-300">
              Loyiha: <span className="text-white font-semibold">{HACKATHON_DATA.projectName}</span> (Jamoa: {HACKATHON_DATA.team}). Muhammad Ali o'qituvchilar va ma'murlar uchun SaaS Teacher Analytics Core arxitekturasini noldan mustaqil ishlab chiqqan.
            </p>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              {lang === 'uz' ? 'Asosiy Loyihalar' : 'Key Projects'}
            </h2>
            <div className="space-y-4">
              {PROJECTS_LIST.slice(0, 4).map((p) => (
                <div key={p.id} className="border-l-2 border-cyan-500/50 pl-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <span className="text-[11px] font-mono text-cyan-300">{p.techStack.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">
                    {lang === 'uz' ? p.shortDescUz : p.shortDescEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              {lang === 'uz' ? 'Texnologik Ko\'nikmalar' : 'Technical Skills'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="font-bold text-cyan-400 mb-1">Frontend</div>
                <div className="text-gray-300 text-[11px] space-y-0.5">
                  <div>React 19, Next.js 16</div>
                  <div>TypeScript, FSD</div>
                  <div>Tailwind CSS v4</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="font-bold text-emerald-400 mb-1">Backend</div>
                <div className="text-gray-300 text-[11px] space-y-0.5">
                  <div>Node.js, Express v5</div>
                  <div>JWT, Bcrypt, Token Rot.</div>
                  <div>Swagger OpenAPI 3.0</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="font-bold text-purple-400 mb-1">3D Games</div>
                <div className="text-gray-300 text-[11px] space-y-0.5">
                  <div>Three.js (WebGL)</div>
                  <div>Voxel Terrain Engine</div>
                  <div>AABB Physics & Audio</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="font-bold text-amber-400 mb-1">Languages</div>
                <div className="text-gray-300 text-[11px] space-y-0.5">
                  <div>O'zbek tili (Ona tili)</div>
                  <div>Ingliz tili (IELTS 7.5+)</div>
                  <div>Rus tili (Erkin)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              {lang === 'uz' ? 'Ta\'lim va Sertifikatlar' : 'Education'}
            </h2>
            <div className="space-y-3 text-xs">
              {EDUCATION_DATA.map((e, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-white">
                      {lang === 'uz' ? e.institutionUz : e.institutionEn}
                    </div>
                    <div className="text-gray-400">
                      {lang === 'uz' ? e.roleUz : e.roleEn}
                    </div>
                  </div>
                  <span className="font-mono text-cyan-400 shrink-0 ml-4 font-semibold">
                    {lang === 'uz' ? e.badgeUz : e.badgeEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
