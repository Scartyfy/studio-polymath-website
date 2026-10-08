import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ExpandableActionBar } from './ui/expandable-action-bar';
import { BookOpen, Cpu, Fingerprint, Mail, Home as HomeIcon, Globe, Layers, X } from 'lucide-react';
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

export function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, lang, setLang } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const rawPath = location.pathname || '';
  const cleanPath = rawPath.replace(/^\/+/, '');
  const activeId = cleanPath || 'home';

  // Close mobile menu on Escape key or navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const handleNavigate = (path: string) => {
    setIsMobileOpen(false);
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
        // Safe fallback
      }
    }
  };

  const NAV_ITEMS = [
    { id: "home", label: t('nav.home'), icon: <HomeIcon className="w-4 h-4" />, onClick: () => handleNavigate('/'), active: activeId === 'home' },
    { id: "projects", label: t('nav.projects'), icon: <Layers className="w-4 h-4" />, onClick: () => handleNavigate('/projects'), active: activeId === 'projects' },
    { id: "manifest", label: t('nav.manifest'), icon: <BookOpen className="w-4 h-4" />, onClick: () => handleNavigate('/manifest'), active: activeId === 'manifest' },
    { id: "team", label: t('nav.team'), icon: <Cpu className="w-4 h-4" />, onClick: () => handleNavigate('/team'), active: activeId === 'team' },
    { id: "contact", label: t('nav.contact'), icon: <Mail className="w-4 h-4" />, onClick: () => handleNavigate('/contact'), active: activeId === 'contact' },
    { id: "lang", label: lang === 'EN' ? 'Français' : 'English', icon: <Globe className="w-4 h-4" />, onClick: () => { setLang(lang === 'EN' ? 'FR' : 'EN'); setIsMobileOpen(false); }, active: false }
  ];

  return (
    <>
      {/* Top Left Logo - Fixed to viewport (logo_simple.png on mobile, LOGO.png on desktop) */}
      <Link 
        to="/" 
        onClick={() => handleNavigate('/')}
        className="fixed left-4 sm:left-6 md:left-8 lg:left-12 top-5 sm:top-6 md:top-7 z-50 flex items-center group cursor-pointer transition-opacity pointer-events-auto"
        aria-label="Polymath Studio"
      >
        {/* Mobile: logo_simple.png (Square emblem) */}
        <img 
          src={`${import.meta.env.BASE_URL}logo_simple.png`} 
          alt="Polymath Studio" 
          style={{ opacity: 0.9 }}
          className="block md:hidden h-7 w-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
        />
        {/* Desktop / Tablet: full LOGO.png */}
        <img 
          src={`${import.meta.env.BASE_URL}LOGO.png`} 
          alt="Polymath Studio Logo" 
          style={{ filter: 'invert(1)', opacity: 0.9 }}
          className="hidden md:block h-6 md:h-7 w-auto object-contain invert opacity-90 group-hover:opacity-100 transition-opacity" 
        />
      </Link>

      {/* Desktop Navigation Bar (md+) */}
      <header className="hidden md:flex fixed top-6 md:top-7 left-1/2 -translate-x-1/2 z-50 justify-center pointer-events-auto">
        <ExpandableActionBar 
          items={NAV_ITEMS} 
          activeId={activeId} 
          expandOnHover={true}
          collapseDelay={200}
          size="md" 
        />
      </header>

      {/* Mobile Navigation Bar (< md) - Designed to never overflow */}
      <div className="flex md:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        {!isMobileOpen ? (
          /* Collapsed Mobile Pill */
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 border border-white/20 bg-neutral-950/90 shadow-2xl backdrop-blur-xl transition-transform active:scale-95"
            aria-label="Ouvrir le menu"
          >
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className={`relative p-1 transition-colors ${
                  item.active ? 'text-white' : 'text-white/40'
                }`}
              >
                <span className="w-3.5 h-3.5 block">{item.icon}</span>
                {item.active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"></span>
                )}
              </div>
            ))}
          </button>
        ) : (
          <>
            {/* Backdrop Dismiss */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" 
              onClick={() => setIsMobileOpen(false)} 
            />

            {/* Expanded Mobile Card - Constrained so it never overflows */}
            <div className="w-[calc(100vw-32px)] max-w-[310px] border border-white/20 bg-neutral-950/95 backdrop-blur-2xl shadow-2xl p-2.5 flex flex-col gap-1">
              {/* Header with Close */}
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/10 text-[10px] font-mono tracking-widest text-white/50 uppercase mb-1">
                <span>Navigation</span>
                <button 
                  type="button" 
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 text-white/60 hover:text-white"
                  aria-label="Fermer le menu"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Items List */}
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  className={`flex items-center gap-3 w-full px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors text-left ${
                    item.active 
                      ? 'text-white bg-white/10 font-medium' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="w-4 h-4 shrink-0 text-white/80">{item.icon}</span>
                  <span className="truncate flex-1">{item.label}</span>
                  {item.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export function MobileMenu({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) {
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 901 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <div 
      id="mobileMenu"
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!isMenuOpen}
      inert={isMenuOpen ? undefined : true}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsMenuOpen(false);
      }}
    >
      <nav className="mobile-menu__nav" aria-label="Main Mobile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {[
          { label: t('nav.projects'), href: '/projects' },
          { label: t('nav.manifest'), href: '/manifest' },
          { label: t('nav.team'), href: '/team' },
          { label: t('nav.contact'), href: '/contact' },
        ].map((link, i) => (
          <Link 
            key={link.label}
            to={link.href} 
            className="mobile-menu__link" 
            style={{ '--i': i } as React.CSSProperties}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        
        <div 
          className="mobile-menu__link"
          style={{ '--i': 3, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)' } as React.CSSProperties}
          onClick={() => {
            setLang(lang === 'EN' ? 'FR' : 'EN');
            setIsMenuOpen(false);
          }}
        >
          <Globe className="w-6 h-6" />
          {lang === 'EN' ? 'Passer en Français' : 'Switch to English'}
        </div>
      </nav>
    </div>
  );
}

export function Footer() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <footer className="relative w-full h-[25vh] md:h-[35vh] bg-black border-t border-[var(--line-strong)] mt-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[25vh] md:w-[35vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
        <img src={`${import.meta.env.BASE_URL}mur.jpg`} className="w-full h-full object-cover" alt="Footer Background" />
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
