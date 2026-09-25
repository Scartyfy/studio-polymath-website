import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function CyberGrid() {
  return (
    <>
      <div className="noise-overlay"></div>
      <div className="cyber-lines">
        <div className="cyber-cross desktop-show" style={{ top: '80px', left: '15vw' }}></div>
        <div className="cyber-cross desktop-show" style={{ top: '80px', left: '85vw' }}></div>
        <div className="cyber-cross desktop-show" style={{ top: '25vh', left: '15vw' }}></div>
        <div className="cyber-cross desktop-show" style={{ top: '25vh', left: '85vw' }}></div>
        <div className="cyber-cross desktop-show" style={{ top: '75vh', left: '15vw' }}></div>
        <div className="cyber-cross desktop-show" style={{ top: '75vh', left: '85vw' }}></div>
        
        <div className="cyber-cross mobile-show" style={{ top: '80px', left: '10vw' }}></div>
        <div className="cyber-cross mobile-show" style={{ top: '80px', left: '90vw' }}></div>
        <div className="cyber-cross mobile-show" style={{ top: '30vh', left: '10vw' }}></div>
        <div className="cyber-cross mobile-show" style={{ top: '30vh', left: '90vw' }}></div>
        <div className="cyber-cross mobile-show" style={{ top: '75vh', left: '10vw' }}></div>
        <div className="cyber-cross mobile-show" style={{ top: '75vh', left: '90vw' }}></div>
      </div>
    </>
  );
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen?: boolean, setIsMenuOpen?: (v: boolean) => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, lang, setLang } = useLanguage();

  const handleNavigate = (path: string) => {
    if (location.pathname === path) {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      navigate(path);
      try {
        window.scrollTo(0, 0);
      } catch {
        // Fallback
      }
    }
  };

  const navLinks = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'manifest', label: t('nav.manifest'), path: '/manifest' },
    { id: 'team', label: t('nav.team'), path: '/team' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 bg-black/90 backdrop-blur-md border-b border-white/15">
      {/* Studio Logo */}
      <div 
        onClick={() => handleNavigate('/')}
        className="cursor-pointer flex items-center gap-2.5 group"
      >
        <span className="font-mono text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] text-white group-hover:text-white/80 transition-colors uppercase">
          POLYMATH
        </span>
        <span className="hidden sm:inline-block w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-white transition-colors" />
        <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-white/50">
          Studio
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-1 sm:gap-2 md:gap-3">
        {navLinks.map((link) => {
          const isActive = (link.id === 'home' && location.pathname === '/') || location.pathname === link.path;
          return (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.path)}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer rounded border ${
                isActive 
                  ? 'border-white text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)] font-medium' 
                  : 'border-transparent text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          );
        })}

        {/* Language Switch */}
        <button
          onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
          className="ml-1 sm:ml-2 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-[0.16em] text-white/70 hover:text-white border border-white/20 hover:border-white/50 rounded transition-colors cursor-pointer flex items-center gap-1.5"
          title={lang === 'FR' ? 'Switch to English' : 'Passer en Français'}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{lang}</span>
        </button>
      </nav>
    </header>
  );
}

export function Footer() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <footer className="relative w-full h-[25vh] md:h-[35vh] bg-black border-t border-[var(--line-strong)] mt-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[25vh] md:w-[35vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
        <img src="/mur.jpg" className="w-full h-full object-cover" alt="Footer Background" />
      </div>
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Copyrights and Legal Mentions (placed in the corner just like Home.tsx) */}
      <div className="absolute bottom-4 right-4 text-right text-white/50 text-[10px] md:text-xs font-mono uppercase tracking-widest leading-relaxed z-20 pointer-events-auto">
        <span>{t('footer.rights')}</span><br />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/manifest')}>{t('footer.legal')}</span>
      </div>
    </footer>
  );
}
