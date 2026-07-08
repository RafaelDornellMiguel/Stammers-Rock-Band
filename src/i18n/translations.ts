import type { Lang } from '../types';

const pt = {
  'menu.home': 'Home',
  'menu.bio': 'Biografia',
  'menu.clips': 'Vídeos',
  'menu.album': 'Álbum',
  'menu.tour': 'Agenda',
  'menu.photos': 'Fotos',
  'menu.contact': 'Contato',
  'hero.eyebrow': 'Hard rock autoral — Santa Catarina, Brasil',
  'hero.tagline': 'Identidade. Resistência. Paixão.',
  'hero.button': 'Conheça a banda',
  'sections.bio': 'Biografia',
  'sections.clips': 'Vídeos',
  'sections.album': 'Álbum',
  'sections.tour': 'Agenda',
  'sections.photos': 'Fotos',
  'sections.contact': 'Contato',
  'tour.caption': 'Próximas datas',
  'tour.empty': 'Novas datas em breve',
  'tour.note': 'Quer levar a Stammer para o seu palco? Fale com a gente.',
  'album.spotify_cta': 'Ouça a Stammer no Spotify',
  'bio.paragraph1':
    'A Stammer é a prova viva de que o rock autoral brasileiro ainda pulsa forte e tem muito a dizer. Com influências que vão do hard rock clássico aos elementos modernos do rock contemporâneo, a banda entrega um som autêntico, poderoso e cheio de personalidade.',
  'bio.paragraph2':
    'Formada por músicos experientes e apaixonados pela arte, a Stammer se destaca não só pela técnica apurada, mas pela energia crua e visceral que imprime em cada apresentação ao vivo. Com presença marcante e letras que misturam paixão, fé, crítica e introspecção.',
  'bio.paragraph3':
    'A banda lançou seu primeiro single Unbreakable, disponível em todas as plataformas digitais, e já marcou presença em diversos palcos catarinenses, conquistando o público com apresentações cheias de atitude e autenticidade.',
  'bio.paragraph4':
    'Stammer não é só música — é identidade, resistência e paixão. É o grito de quem acredita que o rock ainda pode emocionar, transformar e unir.',
  'bio.paragraph5': 'Gravado e produzido com peso e alma no Shokran Studios.',
  'contact.message': 'Shows, imprensa e parcerias — fale com a Stammer.',
  'contact.whatsapp': 'Fale com a Stammer',
  'contact.whatsapp_tooltip': 'Entre em contato com a Stammer!',
  'footer.copyright': '© 2026 Stammer. Todos os direitos reservados.',
} as const;

/** As chaves de PT são o contrato: EN é obrigado a ter exatamente as mesmas. */
export type TranslationKey = keyof typeof pt;

const en: Record<TranslationKey, string> = {
  'menu.home': 'Home',
  'menu.bio': 'Biography',
  'menu.clips': 'Videos',
  'menu.album': 'Album',
  'menu.tour': 'Tour',
  'menu.photos': 'Photos',
  'menu.contact': 'Contact',
  'hero.eyebrow': 'Original hard rock — Santa Catarina, Brazil',
  'hero.tagline': 'Identity. Resistance. Passion.',
  'hero.button': 'Meet the band',
  'sections.bio': 'Biography',
  'sections.clips': 'Videos',
  'sections.album': 'Album',
  'sections.tour': 'Tour',
  'sections.photos': 'Photos',
  'sections.contact': 'Contact',
  'tour.caption': 'Upcoming dates',
  'tour.empty': 'New dates coming soon',
  'tour.note': 'Want Stammer on your stage? Get in touch.',
  'album.spotify_cta': 'Listen to Stammer on Spotify',
  'bio.paragraph1':
    'Stammer is living proof that Brazilian original rock is still going strong and has a lot to say. With influences ranging from classic hard rock to modern elements of contemporary rock, the band delivers an authentic, powerful and personality-filled sound.',
  'bio.paragraph2':
    'Formed by experienced musicians passionate about their art, Stammer stands out not only for their refined technique but also for the raw, visceral energy they bring to each live performance. Their striking presence and lyrics blend passion, faith, critique, and introspection.',
  'bio.paragraph3':
    'The band released their first single Unbreakable, available on all digital platforms, and has already performed on several stages in Santa Catarina, winning over the public with performances full of attitude and authenticity.',
  'bio.paragraph4':
    'Stammer is not just music — it is identity, resistance and passion. It is the cry of those who believe that rock can still move, transform and unite.',
  'bio.paragraph5': 'Recorded and produced with weight and soul at Shokran Studios.',
  'contact.message': 'Shows, press and partnerships — reach out to Stammer.',
  'contact.whatsapp': 'Talk to Stammer',
  'contact.whatsapp_tooltip': 'Get in touch with Stammer!',
  'footer.copyright': '© 2026 Stammer. All rights reserved.',
};

export const translations: Record<Lang, Record<TranslationKey, string>> = { pt, en };
