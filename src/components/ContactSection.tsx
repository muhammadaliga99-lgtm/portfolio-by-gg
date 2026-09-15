import React, { useState } from 'react';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { triggerConfetti } from '../utils/confetti';
import { GithubIcon } from './Icons';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    sounds.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sounds.playClick();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      sounds.playSuccess();
      triggerConfetti();
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status card */}
            <div className="bg-[#0f121d] border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  {lang === 'uz' ? 'Hozirgi Holat: Faol' : 'Current Status: Active'}
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                {lang === 'uz'
                  ? "Yangi istiqbolli loyihalar, xakatlon jamoalari va texnologik hamkorliklar uchun ochiqman."
                  : "Open to innovative engineering projects, hackathon teams, and technical collaborations."}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'uz' ? "Javob berish vaqti: 2-4 soat ichida" : "Typical response time: within 2-4 hours"}</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="bg-[#0f121d] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                {lang === 'uz' ? 'To\'g\'ridan-to\'g\'ri Aloqa' : 'Direct Channels'}
              </h3>

              {/* Telegram */}
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Telegram</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300">
                      {PERSONAL_INFO.telegramUser}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-gray-300 flex items-center justify-center">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">GitHub</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300">
                      {PERSONAL_INFO.githubUser}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Email with copy */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Email</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Nusxa olish"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-center text-xs font-mono text-emerald-400 animate-in fade-in">
                  ✓ {t.contact.copySuccess}
                </div>
              )}

              {/* Location badge */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-gray-400">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{lang === 'uz' ? PERSONAL_INFO.locationUz : PERSONAL_INFO.locationEn}</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#0f121d] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'uz' ? 'Xabar Qoldirish' : 'Send a Direct Message'}
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              {lang === 'uz' 
                ? "Formani to'ldiring, xabaringiz to'g'ridan-to'g'ri tizimga yuboriladi." 
                : "Fill out the form below to initiate direct correspondence."}
            </p>

            {isSent && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-3 animate-in fade-in">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.contact.success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  {lang === 'uz' ? 'Ismingiz' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  {lang === 'uz' ? 'Email manzilingiz' : 'Your Email'}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">
                  {lang === 'uz' ? 'Xabar matni' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={t.contact.msgPlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t.contact.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
