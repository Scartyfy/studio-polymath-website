import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ExpandableActionBar } from './ui/expandable-action-bar';
import { BookOpen, Cpu, Fingerprint, Mail, Home as HomeIcon, Globe } from 'lucide-react';
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
  const activeId = location.pathname.substring(1) || 'home';

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
        // Safe fallback
      }
    }
  };

  const NAV_ITEMS = [
    { id: "home", label: t('nav.home'), icon: <HomeIcon className="w-4 h-4" />, onClick: () => handleNavigate('/') },
    { id: "manifest", label: t('nav.manifest'), icon: <BookOpen className="w-4 h-4" />, onClick: () => handleNavigate('/manifest') },
    { id: "team", label: t('nav.team'), icon: <Cpu className="w-4 h-4" />, onClick: () => handleNavigate('/team') },
    { id: "contact", label: t('nav.contact'), icon: <Mail className="w-4 h-4" />, onClick: () => handleNavigate('/contact') },
    { id: "lang", label: lang === 'EN' ? 'Français' : 'English', icon: <Globe className="w-4 h-4" />, onClick: () => setLang(lang === 'EN' ? 'FR' : 'EN') }
  ];

  return (
    <header className="nav flex justify-center w-full relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <ExpandableActionBar items={NAV_ITEMS} activeId={activeId} size={window.innerWidth < 768 ? "sm" : "md"} />
      </div>
    </header>
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
