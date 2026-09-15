import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { GAMING_CHESS_DATA } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { 
  Gamepad2, 
  Target, 
  Headphones, 
  Mouse, 
  Map, 
  CheckCircle2, 
  Trophy, 
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';

interface GamingSectionProps {
  lang: Language;
}

export const GamingSection: React.FC<GamingSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'cs2' | 'chess'>('cs2');
  const [activeMoveIndex, setActiveMoveIndex] = useState<number>(0);

  const { cs2, chess } = GAMING_CHESS_DATA;

  const handleTabChange = (tab: 'cs2' | 'chess') => {
    sounds.playClick();
    setActiveTab(tab);
  };

  const handleMoveClick = (idx: number) => {
    sounds.playClick();
    setActiveMoveIndex(idx);
  };

  return (
    <section id="gaming" className="py-20 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{t.gaming.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.gaming.title}
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            {t.gaming.subtitle}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 max-w-xl mx-auto px-2">
          <div className="p-1 rounded-2xl bg-[#12141f] border border-white/10 flex flex-col sm:flex-row items-center gap-1 w-full sm:w-auto">
            <button
              onClick={() => handleTabChange('cs2')}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'cs2'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4 shrink-0" />
              <span>Counter-Strike 2 (m0NESY)</span>
            </button>
            <button
              onClick={() => handleTabChange('chess')}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'chess'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4 shrink-0" />
              <span>Chess.com (London System)</span>
            </button>
          </div>
        </div>

        {/* CS2 Tab */}
        {activeTab === 'cs2' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            {/* Player Card */}
            <div className="lg:col-span-5 bg-[#0f121d] border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500 animate-ping" />
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
                      Steam Profile
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-mono">
                    Competitive CS2
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
                  <div className="text-2xl font-black text-white tracking-wider font-mono">
                    {cs2.steamNick}
                  </div>
                  <div className="text-xs text-orange-400/90 font-mono mt-1">
                    {lang === 'uz' ? cs2.roleUz : cs2.roleEn}
                  </div>
                </div>

                {/* Peripherals */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    {lang === 'uz' ? 'O\'yin Qurilmalari (Hardware)' : 'Gaming Peripherals'}
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Headphones className="w-5 h-5 text-orange-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Havit H2002d</div>
                      <div className="text-[11px] text-gray-400 font-mono">
                        53mm drayverlar, 3D fazoviy audio & footsteps lokatsiyasi
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Mouse className="w-5 h-5 text-orange-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">VXE R1 SE PLUS</div>
                      <div className="text-[11px] text-gray-400 font-mono">
                        Ultra-yengil ergonomik optik sensor, tezkor nishon
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maps */}
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5 text-orange-400" />
                  <span>{lang === 'uz' ? 'Sevimli Xaritalar' : 'Favorite Maps'}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs2.favoriteMaps.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-mono font-bold"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tactics & Routine */}
            <div className="lg:col-span-7 bg-[#0f121d] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'uz' ? 'O\'yin Falsafasi va Taktik Qoidalar' : 'Tactics & Warmup Protocol'}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {lang === 'uz'
                    ? "CS2 o'yinidagi intizom dasturlashga ham to'g'ridan-to'g'ri bog'liq: tezkor qaror qabul qilish, jamoaviy kommunikatsiya va har bir harakatni oldindan hisoblash."
                    : "The strategic discipline of high-level CS2 directly transfers into software engineering: sub-second problem solving, spatial awareness, and rigorous teamwork."}
                </p>

                <div className="space-y-3">
                  {(lang === 'uz' ? cs2.tacticsUz : cs2.tacticsEn).map((tac, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 leading-relaxed font-mono">
                        {tac}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3D Mirage Web Link notice */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">
                    {lang === 'uz' ? 'Ushbu tajriba 3D o\'yinga aylandi!' : 'Turned into a 3D Game!'}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {lang === 'uz' ? "Muhammad Ali brauzerda Three.js bilan to'liq Mirage xaritasini yaratgan." : 'Playable Mirage map built with Three.js WebGL.'}
                  </div>
                </div>
                <a
                  href="#games"
                  className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-mono text-xs transition-colors shrink-0"
                >
                  3D Mirage &rarr;
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Chess Tab */}
        {activeTab === 'chess' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            {/* Chess Overview */}
            <div className="lg:col-span-5 bg-[#0f121d] border border-indigo-500/20 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">
                    Chess.com Profile
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
                    Target: 1000 Elo
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white font-mono mb-2">
                  London System
                </h3>
                <p className="text-xs text-indigo-300/90 font-mono mb-6">
                  {lang === 'uz' ? chess.favoriteOpening : 'The London System (White Opening Harmony)'}
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Platform:</span>
                    <span className="text-white font-bold">Chess.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Preferred Formats:</span>
                    <span className="text-indigo-300">{chess.formats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Target Rating:</span>
                    <span className="text-amber-400 font-bold">{chess.targetElo}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {lang === 'uz' ? chess.strategyUz : chess.strategyEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-gray-400 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Strategik rejalashtirish va sovuqqon tahlil</span>
              </div>
            </div>

            {/* Interactive London Moves */}
            <div className="lg:col-span-7 bg-[#0f121d] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>{t.gaming.movesTitle}</span>
                  </h3>
                  <span className="text-xs font-mono text-gray-500">
                    Oqlar sxemasi (7 qadam)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {chess.moves.map((m, idx) => (
                    <button
                      key={m}
                      onClick={() => handleMoveClick(idx)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-mono ${
                        activeMoveIndex === idx
                          ? 'bg-indigo-600/30 border-indigo-400 text-indigo-300 shadow-md shadow-indigo-500/20'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="text-[10px] text-gray-500 uppercase">{lang === 'uz' ? `${idx + 1}-yurish` : `Move ${idx + 1}`}</div>
                      <div className="text-base font-bold text-white mt-1">{m}</div>
                    </button>
                  ))}
                </div>

                {/* Move Explanation Banner */}
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20">
                  <div className="text-xs font-bold text-indigo-300 font-mono mb-1">
                    {lang === 'uz' ? `Tanlangan pozitsiya: ${chess.moves[activeMoveIndex]}` : `Active move: ${chess.moves[activeMoveIndex]}`}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-mono">
                    {activeMoveIndex === 0 && (lang === 'uz' ? "1. d4 — Markaziy d4 piyodasini surish va doska markaziga mustahkam da'vogarlik qilish." : "1. d4 — Establishing immediate central pawn presence.")}
                    {activeMoveIndex === 1 && (lang === 'uz' ? "2. Bf4 — London tizimining vizit kartasi! Oq filni e3 piyodasidan oldin tashqariga chiqarish." : "2. Bf4 — The signature London move: developing the dark-square bishop outside the pawn chain.")}
                    {activeMoveIndex === 2 && (lang === 'uz' ? "3. e3 — Markaziy d4 ni himoyalash va oq katakli fil uchun yo'l ochish." : "3. e3 — Solidifying the central pawn and freeing the light-square bishop.")}
                    {activeMoveIndex === 3 && (lang === 'uz' ? "4. c3 — London tizimining granit 'Piramida' poydevori hosil qilinadi." : "4. c3 — Completing the impenetrable granite pawn triangle (c3-d4-e3).")}
                    {activeMoveIndex === 4 && (lang === 'uz' ? "5. Nf3 — Otni faol rivojlantirish va qirol qanotini rokaga tayyorlash." : "5. Nf3 — Natural knight development preparing kingside castle.")}
                    {activeMoveIndex === 5 && (lang === 'uz' ? "6. Bd3 — Fil d3 ga joylashib, qoralar qanotiga (h7) bevosita xavf soladi." : "6. Bd3 — Aiming the active light-squared bishop at Black's future h7 king.")}
                    {activeMoveIndex === 6 && (lang === 'uz' ? "7. Nbd2 — Oxirgi yengil figurani uyg'unlashtirish va markazni e4 orqali yorib o'tishga tayyorlanish." : "7. Nbd2 — Final piece harmony, completing development ready for e4 strike.")}
                  </p>
                </div>
              </div>

              {/* Chess Philosophy Quote */}
              <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="text-xs italic text-gray-400">
                  "Shaxmatdagi har bir donaning o'z o'rni bo'lgani kabi, arxitekturadagi har bir funksiya va komponent ham o'z vazifasini aniq bajarishi lozim."
                </div>
                <div className="text-[11px] font-mono text-cyan-400 mt-1">
                  — Muhammad Ali Gafurov
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
