import { useEffect, useState } from 'react';

interface ScrollState {
  /** true quando a página rolou o suficiente para encolher o header */
  shrunk: boolean;
  /** progresso de leitura 0..100 */
  progress: number;
  /** id da seção atualmente visível */
  activeSection: string;
}

const SECTION_IDS = ['home', 'biography', 'clips', 'album', 'tour', 'photos', 'contact'];

export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    shrunk: false,
    progress: 0,
    activeSection: 'home',
  });

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      let active = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 120) active = id;
      }

      setState({
        shrunk: scrollY > 50,
        progress: height > 0 ? (scrollY / height) * 100 : 0,
        activeSection: active,
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(measure);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}
