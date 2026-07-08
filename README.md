# Stammer — Rock Band (v3 Premium)

Site oficial da banda Stammer. React + TypeScript + Vite, com:
- **Spotify embed oficial** — faixas direto do perfil da banda (sempre atualizadas)
- **Agenda dinâmica** — shows vêm do Supabase em runtime; show novo = INSERT, sem redeploy
- **Framer Motion** — animações de entrada, scroll-reveals e micro-interações (respeita prefers-reduced-motion)

## Rodar local
```bash
npm install
cp .env.example .env   # já vem preenchido com URL + publishable key
npm run dev
```

## Build
```bash
npm run build   # tsc + vite build → dist/
```

## Deploy (Vercel)
1. Push para o GitHub — preset **Vite** é detectado sozinho
2. Em **Settings → Environment Variables**, adicione:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   (valores no `.env.example`)

## Gerenciar a agenda de shows (sem redeploy!)
No Supabase Dashboard → Table Editor → `stammer_shows`:

| coluna       | exemplo                     |
|--------------|-----------------------------|
| show_date    | 2026-08-15 (para ordenação) |
| date_label   | 15 AGO                      |
| city         | Joinville - SC              |
| venue        | Metal Joinville             |
| link         | https://... (opcional)      |
| is_published | true                        |

Segurança: RLS ativo — o site (anon) só lê shows com `is_published = true`. Escrita apenas via dashboard.
Se o Supabase estiver fora do ar, o site cai no fallback estático (`src/data/shows.ts`) sem quebrar.

## Onde editar conteúdo
- Clipes: `src/data/videos.ts`
- Fotos: `src/data/gallery.ts`
- Textos PT/EN: `src/i18n/translations.ts` (chave nova em PT sem EN = erro de compilação, de propósito)
- Artista Spotify: constante `SPOTIFY_ARTIST_ID` em `src/components/Sections.tsx`
