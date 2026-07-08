import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollState } from '../hooks/useScrollState';
import { useShows } from '../hooks/useShows';
import { Reveal } from './Reveal';
import { VIDEOS } from '../data/videos';
import { GALLERY, type GalleryPhoto } from '../data/gallery';

/* ---------- Progress bar ---------- */
export function ProgressBar() {
  const { progress } = useScrollState();
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ---------- Hero (entrada orquestrada) ---------- */
export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-bg" role="presentation" />
      <div className="hero-grain" role="presentation" />
      <motion.div
        className="hero-content"
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : 'hidden'}
        animate={reduce ? undefined : 'visible'}
      >
        <motion.p className="hero-eyebrow" variants={reduce ? undefined : item}>
          {t('hero.eyebrow')}
        </motion.p>
        <motion.h1 className="hero-title" id="hero-heading" variants={reduce ? undefined : item}>
          STAMMER
        </motion.h1>
        <motion.p className="hero-tagline" variants={reduce ? undefined : item}>
          {t('hero.tagline')}
        </motion.p>
        <motion.div variants={reduce ? undefined : item}>
          <a href="#biography" className="hero-btn">
            {t('hero.button')}
          </a>
        </motion.div>
      </motion.div>
      <a href="#biography" className="scroll-cue" aria-hidden="true">
        <span />
      </a>
    </section>
  );
}

/* ---------- Biografia ---------- */
export function Biography() {
  const { t } = useLanguage();
  return (
    <section id="biography" className="section bio-section" aria-labelledby="bio-heading">
      <Reveal>
        <h2 className="section-title" id="bio-heading">
          {t('sections.bio')}
        </h2>
      </Reveal>
      <div className="bio-container">
        <Reveal from="left" className="bio-text">
          <p>{t('bio.paragraph1')}</p>
          <p>{t('bio.paragraph2')}</p>
          <p>{t('bio.paragraph3')}</p>
          <p className="bio-highlight">{t('bio.paragraph4')}</p>
          <p className="bio-credit">{t('bio.paragraph5')}</p>
        </Reveal>
        <Reveal from="right" delay={0.15}>
          <figure className="bio-image">
            <img
              src="/IMG/integrantes da banda.png"
              alt="Integrantes da banda Stammer"
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Vídeos (playlist) ---------- */
export function Videos() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(VIDEOS[0]?.id ?? '');

  return (
    <section id="clips" className="section clips-section" aria-labelledby="clips-heading">
      <Reveal>
        <h2 className="section-title" id="clips-heading">
          {t('sections.clips')}
        </h2>
      </Reveal>
      <div className="playlist-container">
        <Reveal className="video-main">
          <iframe
            src={`https://www.youtube.com/embed/${activeId}`}
            title="Videoclipe da Stammer no YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Reveal>
        <Reveal delay={0.15} className="video-list">
          {VIDEOS.map((video) => (
            <motion.button
              key={video.id}
              className={`video-thumb ${video.id === activeId ? 'active' : ''}`}
              onClick={() => setActiveId(video.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={`Thumbnail: ${video.title}`}
                loading="lazy"
              />
              <span className="vt-title">{video.title}</span>
            </motion.button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Álbum — player oficial do Spotify ---------- */
const SPOTIFY_ARTIST_ID = '07zMyr1PAJIWGAE1aPNp0p';

export function Album() {
  const { t } = useLanguage();
  return (
    <section id="album" className="section album-section" aria-labelledby="album-heading">
      <Reveal>
        <h2 className="section-title" id="album-heading">
          {t('sections.album')}
        </h2>
      </Reveal>
      <div className="spotify-container">
        <Reveal>
          <div className="spotify-embed">
            <iframe
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
              title="Stammer no Spotify"
              width="100%"
              height="480"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={`https://open.spotify.com/intl-pt/artist/${SPOTIFY_ARTIST_ID}`}
            className="spotify-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify" /> {t('album.spotify_cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Agenda / Tour (Supabase) ---------- */
export function Tour() {
  const { t } = useLanguage();
  const { shows, loading } = useShows();

  return (
    <section id="tour" className="section tour-section" aria-labelledby="tour-heading">
      <Reveal>
        <h2 className="section-title" id="tour-heading">
          {t('sections.tour')}
        </h2>
      </Reveal>
      <Reveal className="tour-container">
        <table className="tour-table">
          <caption className="tour-caption">{t('tour.caption')}</caption>
          <tbody>
            {loading ? (
              <tr className="tour-empty">
                <td colSpan={4}>…</td>
              </tr>
            ) : shows.length === 0 ? (
              <tr className="tour-empty">
                <td colSpan={4}>{t('tour.empty')}</td>
              </tr>
            ) : (
              shows.map((show) => (
                <tr key={`${show.date}-${show.venue}`}>
                  <td className="tour-date">{show.date}</td>
                  <td className="tour-city">{show.city}</td>
                  <td className="tour-venue">{show.venue}</td>
                  <td className="tour-link">
                    {show.link && (
                      <a href={show.link} target="_blank" rel="noopener noreferrer">
                        Info
                      </a>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <p className="tour-note">{t('tour.note')}</p>
      </Reveal>
    </section>
  );
}

/* ---------- Fotos (masonry + modal animado) ---------- */
export function Photos() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<GalleryPhoto | null>(null);

  return (
    <section id="photos" className="section photos-section" aria-labelledby="photos-heading">
      <Reveal>
        <h2 className="section-title" id="photos-heading">
          {t('sections.photos')}
        </h2>
      </Reveal>
      <div className="gallery-container">
        {GALLERY.map((photo, i) => (
          <Reveal key={photo.src} delay={(i % 3) * 0.08}>
            <div className="gallery-item" onClick={() => setSelected(photo)}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal open"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="close-modal"
                aria-label="Fechar visualização"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <img src={selected.src} alt={selected.alt} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Contato ---------- */
const WHATSAPP_URL = 'https://wa.me/554791652056';

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <Reveal>
        <h2 className="section-title" id="contact-heading">
          {t('sections.contact')}
        </h2>
      </Reveal>
      <Reveal className="contact-container">
        <p className="contact-message">{t('contact.message')}</p>
        <div className="socials">
          <motion.a
            href="https://www.instagram.com/stammerofficial/"
            className="social-link"
            aria-label="Instagram da Stammer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
          >
            <i className="fab fa-instagram" />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@stammerofficial"
            className="social-link"
            aria-label="YouTube da Stammer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
          >
            <i className="fab fa-youtube" />
          </motion.a>
          <motion.a
            href={`https://open.spotify.com/intl-pt/artist/${SPOTIFY_ARTIST_ID}`}
            className="social-link"
            aria-label="Spotify da Stammer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
          >
            <i className="fab fa-spotify" />
          </motion.a>
        </div>
        <a href={WHATSAPP_URL} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp" /> <span>{t('contact.whatsapp')}</span>
        </a>
      </Reveal>
    </section>
  );
}

/* ---------- WhatsApp float ---------- */
export function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp" />
      <div className="whatsapp-tooltip">{t('contact.whatsapp_tooltip')}</div>
    </a>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <img src="/IMG/LOGO completa.png" alt="Logo da banda Stammer" className="logo_footer" />
      <p>{t('footer.copyright')}</p>
    </footer>
  );
}
