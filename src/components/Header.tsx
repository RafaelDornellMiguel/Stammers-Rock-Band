import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollState } from '../hooks/useScrollState';
import type { TranslationKey } from '../i18n/translations';

const NAV_ITEMS: { href: string; key: TranslationKey; id: string }[] = [
  { href: '#home', key: 'menu.home', id: 'home' },
  { href: '#biography', key: 'menu.bio', id: 'biography' },
  { href: '#clips', key: 'menu.clips', id: 'clips' },
  { href: '#album', key: 'menu.album', id: 'album' },
  { href: '#tour', key: 'menu.tour', id: 'tour' },
  { href: '#photos', key: 'menu.photos', id: 'photos' },
  { href: '#contact', key: 'menu.contact', id: 'contact' },
];

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const { shrunk, activeSection } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  // trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // fecha o menu se a viewport crescer para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header id="header" className={shrunk ? 'header-shrink' : ''}>
      <a href="#home" className="logo-link" aria-label="Voltar ao topo">
        <img src="/IMG/LOGO completa.png" alt="Logo da banda Stammer" className="logo" />
      </a>

      <div
        className={`menu-btn ${menuOpen ? 'open' : ''}`}
        aria-label="Menu de navegação"
        role="button"
        tabIndex={0}
        onClick={() => setMenuOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setMenuOpen((v) => !v);
        }}
      >
        <div className="menu-btn__burger" />
      </div>

      <nav id="nav" aria-label="Navegação principal" className={menuOpen ? 'open' : ''}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          <li className="language-switcher">
            <div className="lang-btns">
              <button
                className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
                onClick={() => setLang('pt')}
                aria-label="Português"
              >
                PT
              </button>
              <span className="lang-sep">/</span>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
