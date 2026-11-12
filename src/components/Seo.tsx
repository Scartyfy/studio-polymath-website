import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import seo from '../seo.json';

type RouteSeo = { title: string; description: string };
const routes = seo.routes as unknown as Record<string, Record<'EN' | 'FR', RouteSeo>>;

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Met à jour title, description, canonical et Open Graph selon la page et la langue. */
export function Seo() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const entry = routes[path]?.[lang];
    const known = Boolean(entry);
    const data = entry ?? routes['/'][lang];
    const url = seo.siteUrl + (known && path !== '/' ? path + '/' : '/');

    document.title = known ? data.title : `404 — ${seo.siteName}`;
    setMeta('meta[name="description"]', 'name', 'description', data.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', data.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', data.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.description);
    setMeta('meta[name="robots"]', 'name', 'robots', known ? 'index, follow' : 'noindex, follow');

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }, [pathname, lang]);

  return null;
}
