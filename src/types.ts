/** Tipos de domínio do site — a "fonte da verdade" estrutural. */

export interface Video {
  /** ID do vídeo no YouTube (o trecho após v=) */
  id: string;
  title: string;
}

export interface Show {
  date: string;
  city: string;
  venue: string;
  /** Link opcional para ingressos/info */
  link?: string;
}

export interface Track {
  title: string;
  /** Caminho do arquivo em public/AUD */
  src: string;
  duration: string;
}

export type Lang = 'pt' | 'en';
