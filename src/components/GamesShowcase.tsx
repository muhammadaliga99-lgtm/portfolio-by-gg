import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { GAMES_DATA } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { 
  Gamepad2, 
  Crosshair, 
  Box, 
  Sparkles, 
  Volume2, 
  Sun, 
  Moon, 
  Compass, 
  CheckCircle2, 
  Code2
} from 'lucide-react';

interface GamesShowcaseProps {
  lang: Language;
}

export const GamesShowcase: React.FC<GamesShowcaseProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'cs2' | 'minecraft'>('cs2');
  const [simulatedDay, setSimulatedDay] = useState<'day' | 'night'>('day');
  const [activeWeapon, setActiveWeapon] = useState<'ak47' | 'awp' | 'knife'>('ak47');

  const cs2Game = GAMES_DATA[0];
  const mcGame = GAMES_DATA[1];

  const handleTabChange = (tab: 'cs2' | 'minecraft') => {
    sounds.playClick();
    setActiveTab(tab);
  };

  const handleWeaponClick = (wpn: 'ak47' | 'awp' | 'knife') => {
    sounds.playClick();
    setActiveWeapon(wpn);
  };

  const toggleDayNight = () => {
    sounds.playClick();
    setSimulatedDay(simulatedDay === 'day' ? 'night' : 'day');
  };

  return (
    <section id="games" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{t.games.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.games.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            {t.games.subtitle}
          </p>
        </div>

        {/* Game Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 max-w-xl mx-auto">
          <button
            onClick={() => handleTabChange('cs2')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'cs2'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-xl shadow-amber-500/20 scale-100 sm:scale-105'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            <Crosshair className="w-4 h-4 shrink-0" />
            <span>Counter-Strike 2 (3D Mirage)</span>
          </button>

          <button
            onClick={() => handleTabChange('minecraft')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'minecraft'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-black shadow-xl shadow-emerald-500/20 scale-100 sm:scale-105'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            <Box className="w-4 h-4 shrink-0" />
            <span>Minecraft 3D (Voxel Engine)</span>
          </button>
        </div>

        {/* CS2 Showcase Display */}
        {activeTab === 'cs2' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left: 3D Game Visual Mockup & Interactive HUD */}
            <div className="lg:col-span-6 p-6 rounded-3xl bg-[#0c0e17] border border-amber-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                    Three.js WebGL Engine
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    60 FPS Mirage 3D
                  </span>
                </div>

                {/* Simulated CS2 In-Game View */}
                <div className="relative rounded-2xl bg-gradient-to-b from-[#181a28] to-[#0d0f17] border border-white/10 p-6 min-h-[260px] flex flex-col justify-between overflow-hidden">
                  {/* Top: 2D Radar & Scoreboard Mini HUD */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-black/60 flex items-center justify-center relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute" />
                        <div className="w-1 h-1 rounded-full bg-red-400 absolute top-2 right-3 animate-ping" />
                        <Compass className="w-6 h-6 text-amber-400/40" />
                      </div>
                      <div className="text-[10px] font-mono text-gray-300">
                        <div className="text-amber-400 font-bold">A-Site / Palace</div>
                        <div>Botlar: 4 ta dushman</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-black/60 px-3 py-1 rounded-xl border border-white/10 text-xs font-mono">
                      <span className="text-cyan-400 font-bold">CT 07</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-amber-400 font-bold">08 T</span>
                    </div>
                  </div>

                  {/* Center: Dynamic Crosshair */}
                  <div className="flex flex-col items-center justify-center my-4">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <div className="absolute top-0 w-0.5 h-2 bg-emerald-400" />
                      <div className="absolute bottom-0 w-0.5 h-2 bg-emerald-400" />
                      <div className="absolute left-0 h-0.5 w-2 bg-emerald-400" />
                      <div className="absolute right-0 h-0.5 w-2 bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 mt-2">
                      {activeWeapon === 'ak47' ? 'AK-47 Spray Recoil Enabled' : activeWeapon === 'awp' ? 'AWP Sniper Scope Zoom' : 'Tactical Knife Ready'}
                    </span>
                  </div>

                  {/* Bottom: Player HP & Ammo HUD */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-bold flex items-center gap-1">
                        <span>❤️</span> 100 HP
                      </span>
                      <span className="text-cyan-400 font-bold flex items-center gap-1">
                        <span>🛡️</span> 100 Armor
                      </span>
                    </div>
                    <div className="text-amber-400 font-bold text-sm">
                      {activeWeapon === 'ak47' ? '30 / 90' : activeWeapon === 'awp' ? '10 / 30' : '∞'}
                    </div>
                  </div>
                </div>

                {/* Interactive Weapon Selector */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-mono">Qurolni sinash:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWeaponClick('ak47')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                        activeWeapon === 'ak47'
                          ? 'bg-amber-500 text-black'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      AK-47
                    </button>
                    <button
                      onClick={() => handleWeaponClick('awp')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                        activeWeapon === 'awp'
                          ? 'bg-amber-500 text-black'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      AWP
                    </button>
                    <button
                      onClick={() => handleWeaponClick('knife')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                        activeWeapon === 'knife'
                          ? 'bg-amber-500 text-black'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      Pichoq
                    </button>
                  </div>
                </div>
              </div>

              {/* Local Path Tag */}
              <div className="mt-4 text-[11px] font-mono text-gray-400 flex items-center gap-1.5 truncate">
                <Code2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Lokal manzil: {cs2Game.localPath}</span>
              </div>
            </div>

            {/* Right: Technical Features Breakdown */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {cs2Game.stats.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#0d0f17]/90 border border-white/10">
                    <div className="text-[11px] font-mono text-gray-400">
                      {lang === 'uz' ? st.labelUz : st.labelEn}
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm mt-0.5 truncate">
                      {st.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Asosiy Muhandislik Yechimlari:</span>
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {(lang === 'uz' ? cs2Game.featuresUz : cs2Game.featuresEn).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spatial Audio Highlight */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-3 text-xs text-amber-200">
                <Volume2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Web Audio API:</strong> Dushman qadamlari va o'q yo'nalishlarini quloqchinda aniq fazoviy ajratuvchi maxsus tovush dvigateli.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Minecraft Showcase Display */}
        {activeTab === 'minecraft' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            {/* Left: 3D Voxel Simulated Canvas */}
            <div className={`lg:col-span-6 p-6 rounded-3xl border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-colors duration-500 ${
              simulatedDay === 'day' ? 'bg-[#091512]' : 'bg-[#060a0f]'
            }`}>
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                    1,700 Qator Sof JS Dvigateli
                  </span>
                  <button
                    onClick={toggleDayNight}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white cursor-pointer"
                  >
                    {simulatedDay === 'day' ? (
                      <>
                        <Sun className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Kun (6000K)</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Tun (Yulduzlar)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Voxel Chunk Simulation Box */}
                <div className={`relative rounded-2xl border border-white/10 p-6 min-h-[260px] flex flex-col justify-between overflow-hidden transition-all duration-500 ${
                  simulatedDay === 'day'
                    ? 'bg-gradient-to-b from-sky-900/40 via-emerald-950/30 to-[#0a1a14]'
                    : 'bg-gradient-to-b from-indigo-950/50 via-gray-950 to-[#05090c]'
                }`}>
                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-300">
                    <div>XYZ: 32.5 / 64.0 / -18.2</div>
                    <div>Biom: O'rmon va Tog'lar</div>
                  </div>

                  {/* Voxel Blocks Stack Graphic */}
                  <div className="flex items-center justify-center gap-2 my-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-emerald-500 to-amber-800 border border-emerald-400/50 flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform" title="O't Bloki">
                      <span className="text-[10px] font-mono text-white font-bold">O'T</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-cyan-400 to-blue-700 border border-cyan-300/50 flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform" title="Olmos Ruda">
                      <span className="text-[10px] font-mono text-white font-bold">OLMOS</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-yellow-400 to-amber-600 border border-yellow-300/50 flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform" title="Oltin Ruda">
                      <span className="text-[10px] font-mono text-black font-bold">OLTIN</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-red-600 to-red-800 border border-red-500/50 flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform" title="TNT Portlovchi">
                      <span className="text-[10px] font-mono text-white font-bold">TNT</span>
                    </div>
                  </div>

                  {/* Hotbar Slots Simulation */}
                  <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-xl bg-black/60 border border-white/10 max-w-xs mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((slot) => (
                      <div
                        key={slot}
                        className={`w-7 h-7 rounded-lg border text-[10px] font-mono flex items-center justify-center ${
                          slot === 1
                            ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 font-bold'
                            : 'border-white/10 text-gray-500'
                        }`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-300 mt-3">
                  Simplex/Perlin shovqini asosida cheksiz relyef va o'zbek tiliga mahalliylashtirilgan bloklar arxitekturasi.
                </p>
              </div>

              {/* Local Path Tag */}
              <div className="mt-4 text-[11px] font-mono text-gray-400 flex items-center gap-1.5 truncate">
                <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Lokal manzil: {mcGame.localPath}</span>
              </div>
            </div>

            {/* Right: Technical Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {mcGame.stats.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#0d0f17]/90 border border-white/10">
                    <div className="text-[11px] font-mono text-gray-400">
                      {lang === 'uz' ? st.labelUz : st.labelEn}
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm mt-0.5 truncate">
                      {st.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-3xl bg-[#0d0f17]/90 border border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Dvigatelning O'ziga Xos Xususiyatlari:</span>
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {(lang === 'uz' ? mcGame.featuresUz : mcGame.featuresEn).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engine Highlight Box */}
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-200">
                <strong>100% Original JavaScript:</strong> Barcha fizika, gravitatsiya (26.0), qulash tezligi va AABB to'qnashuv algoritmlari noldan dasturlashtirilgan.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
