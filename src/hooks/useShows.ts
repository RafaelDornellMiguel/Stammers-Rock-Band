import { useEffect, useState } from 'react';
import type { Show } from '../types';
import { SHOWS as STATIC_SHOWS } from '../data/shows';
import { supabase } from '../lib/supabase';

interface ShowRow {
  date_label: string;
  city: string;
  venue: string;
  link: string | null;
}

interface ShowsState {
  shows: Show[];
  loading: boolean;
}

/**
 * Fonte primária: tabela stammer_shows no Supabase (agenda sem redeploy).
 * Fallback: array estático em data/shows.ts — se a rede falhar ou as
 * env vars faltarem, o site continua de pé. Circuit breaker de pobre,
 * mas honesto.
 */
export function useShows(): ShowsState {
  const [state, setState] = useState<ShowsState>({ shows: STATIC_SHOWS, loading: !!supabase });

  useEffect(() => {
    if (!supabase) return;

    let cancelled = false;

    supabase
      .from('stammer_shows')
      .select('date_label, city, venue, link')
      .order('show_date', { ascending: true })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error || !data) {
          setState({ shows: STATIC_SHOWS, loading: false });
          return;
        }
        const shows: Show[] = (data as ShowRow[]).map((row) => ({
          date: row.date_label,
          city: row.city,
          venue: row.venue,
          link: row.link ?? undefined,
        }));
        setState({ shows, loading: false });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
