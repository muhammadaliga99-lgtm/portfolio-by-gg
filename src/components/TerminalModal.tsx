import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../types/portfolio';
import { PERSONAL_INFO, HACKATHON_DATA, SKILLS_LIST } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { triggerConfetti } from '../utils/confetti';
import { Terminal, X } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface CommandLog {
  id: number;
  command: string;
  output: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 1,
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-cyan-400 font-bold">
            ⚡ Muhammad Ali Gafurov — Interactive Dev CLI v2.6.0
          </div>
          <div className="text-gray-400">
            {lang === 'uz' 
              ? <>Mavjud buyruqlarni ko'rish uchun <span className="text-amber-300 font-bold">help</span> deb yozing yoki quyidagi tugmalarni bosing.</>
              : <>Type <span className="text-amber-300 font-bold">help</span> to view available commands, or click any shortcut below.</>}
          </div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isOpen) return null;

  const runCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    sounds.playClick();
    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resultNode = (
          <div className="text-xs space-y-1 text-gray-300">
            <div className="text-cyan-400 font-bold">Mavjud buyruqlar / Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono text-[11px]">
              <div><span className="text-amber-300 font-bold">about</span> - Shaxsiy ma'lumotlar / Dossier</div>
              <div><span className="text-amber-300 font-bold">skills</span> - Texnologiyalar arsenali</div>
              <div><span className="text-amber-300 font-bold">projects</span> - Barcha yirik loyihalar</div>
              <div><span className="text-amber-300 font-bold">games</span> - 3D Three.js o'yin dvigatellari</div>
              <div><span className="text-amber-300 font-bold">trophy</span> - Mars Hackathon 2026 natijasi</div>
              <div><span className="text-amber-300 font-bold">education</span> - Maktab 256, Mars IT & IELTS</div>
              <div><span className="text-amber-300 font-bold">contact</span> - Aloqa kanallari</div>
              <div><span className="text-amber-300 font-bold">sudo hire</span> - Maxsus taklif! 🚀</div>
              <div><span className="text-amber-300 font-bold">clear</span> - Ekranni tozalash</div>
              <div><span className="text-amber-300 font-bold">exit</span> - Terminalni yopish</div>
            </div>
          </div>
        );
        break;

      case 'about':
        resultNode = (
          <div className="text-xs space-y-1.5 text-gray-300 font-mono">
            <div><span className="text-cyan-400">Ism:</span> {PERSONAL_INFO.fullName}</div>
            <div><span className="text-cyan-400">Yosh:</span> {PERSONAL_INFO.age} yosh (2013-yil)</div>
            <div><span className="text-cyan-400">Maktab:</span> {PERSONAL_INFO.schoolUz}</div>
            <div><span className="text-cyan-400">IT Kursi:</span> 20/20 ball (Maksimal)</div>
            <div><span className="text-cyan-400">Mars IT:</span> {PERSONAL_INFO.marsAcademyUz}</div>
            <div><span className="text-cyan-400">IELTS:</span> Inter Nation Oybek (Band 7.5+ Target)</div>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="text-xs space-y-1 font-mono text-gray-300">
            <div className="text-emerald-400 font-bold">Top Texnologiyalar & Daraja:</div>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              {SKILLS_LIST.slice(0, 10).map((s) => (
                <div key={s.name}>
                  <span className="text-cyan-300">{s.name}</span>: {s.level}%
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="text-xs space-y-1 text-gray-300 font-mono">
            <div className="text-amber-400 font-bold">Asosiy ishlab chiqilgan tizimlar:</div>
            <div>• <span className="text-white font-bold">Maktab AI Arena</span> (Teacher Analytics Core - Mars Hackathon)</div>
            <div>• <span className="text-white font-bold">CutZone CRM</span> (Barbershop bron & xodimlar boshqaruvi)</div>
            <div>• <span className="text-white font-bold">Furniro E-commerce</span> (React + Redux savdo platformasi)</div>
            <div>• <span className="text-white font-bold">Instagram Clone (FSD)</span> (Feature-Sliced Design arxitekturasi)</div>
            <div>• <span className="text-white font-bold">PetUy & RentUz</span> (Ijtimoiy platformalar va xaritalar)</div>
          </div>
        );
        break;

      case 'games':
        resultNode = (
          <div className="text-xs space-y-1 text-gray-300 font-mono">
            <div className="text-purple-400 font-bold">3D WebGL Three.js O'yinlar:</div>
            <div>1. <span className="text-white font-bold">CS2 Mirage 3D Web</span> — de_mirage xaritasi, AI botlar, C4 bomba, Web Audio 3D.</div>
            <div>2. <span className="text-white font-bold">Minecraft Voxel Engine</span> — 1,700 qator JS, protsessual dunyo, 20+ bloklar.</div>
          </div>
        );
        break;

      case 'trophy':
        resultNode = (
          <div className="text-xs space-y-1.5 text-amber-300 font-mono">
            <div className="font-bold text-amber-400">🏆 MARS HACKATHON 2026 VITSE-CHEMPIONI</div>
            <div>Ball: <span className="text-white font-bold">{HACKATHON_DATA.score} / {HACKATHON_DATA.maxScore}</span></div>
            <div>Loyiha: {HACKATHON_DATA.projectName}</div>
            <div>Jamoa: {HACKATHON_DATA.team} (Murabbiy: {HACKATHON_DATA.mentor})</div>
          </div>
        );
        break;

      case 'education':
        resultNode = (
          <div className="text-xs space-y-1.5 text-gray-300 font-mono">
            <div>🎓 256-maktab (8-"A" sinf) — Matematika va Informatika</div>
            <div>🚀 Mars IT Academy — 7 ta modul bitiruvchisi, Imtihon: 20/20 ball</div>
            <div>🇬🇧 Inter Nation English School (Oybek) — IELTS Band 7.5+ Target</div>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="text-xs space-y-1 text-cyan-300 font-mono">
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="underline">{PERSONAL_INFO.email}</a></div>
            <div>Telegram: <a href={PERSONAL_INFO.telegram} target="_blank" rel="noreferrer" className="underline">{PERSONAL_INFO.telegramUser}</a></div>
            <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="underline">{PERSONAL_INFO.githubUser}</a></div>
          </div>
        );
        break;

      case 'sudo hire':
        triggerConfetti();
        sounds.playSuccess();
        resultNode = (
          <div className="text-xs space-y-1 text-emerald-400 font-mono font-bold">
            <div>🎉 [ACCESS GRANTED]: Muhammad Ali muvaffaqiyatli jamoangizga qo'shildi!</div>
            <div>Keling, birgalikda ajoyib loyihalarni quramiz! Telegram: @ggmuhammadali</div>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        resultNode = (
          <div className="text-xs text-rose-400 font-mono">
            Buyruq topilmadi: "{cmdStr}". Barcha buyruqlar ro'yxatini ko'rish uchun <span className="underline font-bold">help</span> deb yozing.
          </div>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: cmdStr,
        output: resultNode,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(history[nextIndex]);
        }
      }
    }
  };

  const commandChips = ['help', 'about', 'skills', 'projects', 'trophy', 'games', 'sudo hire', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#0a0d14] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden flex flex-col h-[520px] max-h-[85vh]"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title Bar */}
        <div className="bg-[#0f1422] border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash - muhammadali@portfolio: ~</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef} 
          className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-4 select-text bg-[#07090e]"
        >
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-emerald-400">muhammadali@dev</span>
                <span className="text-gray-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-white">{log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 text-cyan-400 font-semibold pt-1">
            <span className="text-emerald-400">muhammadali@dev</span>
            <span className="text-gray-600">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 p-0"
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="bg-[#0b0e17] border-t border-white/5 p-2.5 flex items-center gap-1.5 overflow-x-auto">
          <span className="text-[10px] font-mono text-gray-500 uppercase shrink-0 mr-1">
            Quick:
          </span>
          {commandChips.map((chip) => (
            <button
              key={chip}
              onClick={() => runCommand(chip)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-[11px] font-mono text-gray-300 hover:text-cyan-300 transition-all cursor-pointer shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
