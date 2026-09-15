import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { BACKEND_STAGES } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { Server, ArrowRight, ShieldCheck, Lock, Play, CheckCircle2, Terminal } from 'lucide-react';

interface BackendEvolutionProps { lang: Language; }

export const BackendEvolution: React.FC<BackendEvolutionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeStage, setActiveStage] = useState(3);
  const [simResult, setSimResult] = useState<string | null>(null);
  const [simLoading, setSimLoading] = useState(false);

  const stage = BACKEND_STAGES[activeStage];

  const runSimulation = () => {
    sounds.playClick();
    setSimLoading(true);
    setSimResult(null);
    setTimeout(() => {
      const results: Record<number, string> = {
        0: '{ "status": 200, "users": [{ "name": "Muhammad Ali", "id": 1 }], "server": "Node.js core http" }',
        1: '{ "status": 200, "data": [{ "name": "Muhammad Ali", "age": 30, "email": "ggmuhammadali@gmail.com" }], "framework": "Express 5.2.1" }',
        2: '{ "status": 403, "error": "Forbidden", "message": "Invalid or missing Bearer token", "hint": "Authorization: Bearer <valid-token>" }',
        3: '{ "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "refreshToken": "eyJhbGciOiJIUzI1...", "expiresIn": "5m", "user": { "name": "Muhammad Ali" } }'
      };
      setSimResult(results[activeStage] ?? '{}');
      setSimLoading(false);
      sounds.playSuccess();
    }, 800);
  };

  const stageColors = ['#ec4899', '#60a5fa', '#34d399', '#fbbf24'];

  return (
    <section id="backend" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>{t.backend.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.backend.title}</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">{t.backend.subtitle}</p>
        </div>

        {/* Stage Selector Timeline */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {BACKEND_STAGES.map((s, idx) => (
            <React.Fragment key={idx}>
              <button
                onClick={() => { sounds.playClick(); setActiveStage(idx); setSimResult(null); }}
                className={`relative flex flex-col items-center gap-1.5 px-3 sm:px-5 py-3 rounded-2xl transition-all cursor-pointer ${
                  activeStage === idx
                    ? 'bg-white/10 border border-white/20 scale-105 shadow-lg'
                    : 'hover:bg-white/5'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-extrabold border"
                  style={{
                    backgroundColor: stageColors[idx] + '20',
                    borderColor: stageColors[idx] + '50',
                    color: stageColors[idx],
                  }}
                >
                  {s.stageNumber}
                </div>
                <span className="text-[10px] font-mono text-gray-400 hidden sm:block max-w-[80px] text-center truncate">
                  {t.backend.port}: {s.port}
                </span>
              </button>
              {idx < BACKEND_STAGES.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-500 mx-1 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Active Stage Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Stage Info */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0d0f17]/90 border border-white/10 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {lang === 'uz' ? stage.titleUz : stage.titleEn}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {lang === 'uz' ? stage.subtitleUz : stage.subtitleEn}
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-xl text-xs font-mono font-bold border"
                style={{ backgroundColor: stageColors[activeStage] + '15', borderColor: stageColors[activeStage] + '40', color: stageColors[activeStage] }}
              >
                Port {stage.port}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-5 text-xs font-mono text-gray-300">
              <span className="text-gray-400">Tech: </span>{stage.tech}
            </div>

            <ul className="space-y-2 text-xs text-gray-300 mb-5">
              {(lang === 'uz' ? stage.featuresUz : stage.featuresEn).map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: stageColors[activeStage] }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-gray-400 font-mono text-[11px] flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Auth
                </div>
                <div className="font-semibold text-white mt-0.5">{lang === 'uz' ? stage.authTypeUz : stage.authTypeEn}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-gray-400 font-mono text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Security
                </div>
                <div className="font-semibold text-white mt-0.5">{lang === 'uz' ? stage.securityUz : stage.securityEn}</div>
              </div>
            </div>
          </div>

          {/* Right: API Simulator */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#0a0c14] border border-emerald-500/20 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>{t.backend.tryApi}</span>
              </h4>
              <span className="text-[10px] font-mono text-gray-400">localhost:{stage.port}</span>
            </div>

            {/* Simulated Request */}
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-gray-300 mb-4 space-y-1">
              <div><span className="text-emerald-400">GET</span> /api/users</div>
              <div className="text-gray-500">Host: localhost:{stage.port}</div>
              {activeStage >= 2 && (
                <div className="text-amber-400">Authorization: Bearer {'<token>'}</div>
              )}
              {activeStage >= 3 && (
                <div className="text-cyan-400">Content-Type: application/json</div>
              )}
            </div>

            <button
              onClick={runSimulation}
              disabled={simLoading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-bold text-xs transition-all cursor-pointer disabled:opacity-50 mb-4"
            >
              <Play className="w-4 h-4" />
              <span>{simLoading ? '...' : t.backend.runSim}</span>
            </button>

            {/* Response Display */}
            {simResult && (
              <div className="p-3 rounded-xl bg-black/80 border border-emerald-500/20 font-mono text-[11px] text-emerald-300 max-h-44 overflow-auto animate-in fade-in duration-300 whitespace-pre-wrap break-all">
                <div className="text-gray-400 text-[10px] mb-1">← Response (simulated):</div>
                {simResult}
              </div>
            )}

            {!simResult && !simLoading && (
              <div className="text-center text-xs text-gray-500 py-6 font-mono">
                {lang === 'uz'
                  ? "So'rov yuborib, backend javobini ko'ring ↑"
                  : "Hit the button above to simulate an API request ↑"
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
