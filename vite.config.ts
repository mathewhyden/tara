import {defineConfig, loadEnv, type Plugin} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const seoFiles = (siteUrl: string): Plugin => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

  return {
    name: 'tara-mindcare-seo-files',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', siteUrl);
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const pathname = request.url?.split('?')[0];
        if (pathname === '/robots.txt' || pathname === '/sitemap.xml') {
          response.setHeader('Content-Type', pathname.endsWith('.xml') ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
          response.end(pathname === '/robots.txt' ? robots : sitemap);
          return;
        }
        next();
      });
    },
    generateBundle() {
      this.emitFile({type: 'asset', fileName: 'robots.txt', source: robots});
      this.emitFile({type: 'asset', fileName: 'sitemap.xml', source: sitemap});
    },
  };
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || 'https://taramind.vercel.app').replace(/\/+$/, '');

  return {
    plugins: [react(), tailwindcss(), seoFiles(siteUrl)],
    build: {assetsInlineLimit: 4096, chunkSizeWarningLimit: 3000},
  };
});
