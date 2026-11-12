// Post-build : génère un index.html par page (titre, description, canonical, Open Graph,
// contenu texte de repli) + 404.html + sitemap.xml. Exécuté après `vite build`.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const seo = JSON.parse(readFileSync(join(root, 'src', 'seo.json'), 'utf8'));
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const LANG = 'FR';

function setTag(html, regex, replacement) {
  if (!regex.test(html)) throw new Error(`Balise introuvable : ${regex}`);
  return html.replace(regex, replacement);
}

function render(path) {
  const d = seo.routes[path][LANG];
  const url = seo.siteUrl + (path === '/' ? '/' : path + '/');
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(d.title)}</title>`);
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(d.description)}" />`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(d.title)}" />`);
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(d.description)}" />`);
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(d.title)}" />`);
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(d.description)}" />`);
  const nav = Object.keys(seo.routes)
    .map((p) => `<a href="${p}">${esc(seo.routes[p][LANG].h1.split(' — ')[0])}</a>`)
    .join(' ');
  const fallback = `<main style="padding:24px;font-family:monospace"><h1>${esc(d.h1)}</h1><p>${esc(d.text)}</p><nav>${nav}</nav></main>`;
  return setTag(html, /<!--prerender-->/, fallback);
}

for (const path of Object.keys(seo.routes)) {
  const out = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(path));
}

// 404 : même application, mais non indexable (GitHub Pages renvoie ce fichier avec un statut 404).
let notFound = template.replace(/<!--prerender-->/, '');
notFound = notFound.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />');
notFound = notFound.replace(/<link rel="canonical"[^>]*>\s*/, '');
writeFileSync(join(dist, '404.html'), notFound);

const today = new Date().toISOString().slice(0, 10);
const urls = Object.keys(seo.routes)
  .map((p) => `  <url>\n    <loc>${seo.siteUrl}${p === '/' ? '/' : p + '/'}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p === '/' ? '1.0' : p === '/projects' ? '0.9' : '0.7'}</priority>\n  </url>`)
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`Prérendu : ${Object.keys(seo.routes).length} pages + 404.html + sitemap.xml`);
