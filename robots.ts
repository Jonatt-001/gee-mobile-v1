import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/login/',
        '/api/',
        '/gfox-home.html',
        '/index.html',
        '/editor.html',
        '/explorer.html',
        '/upload.html',
        '/settings.html',
        '/repo-settings.html',
        '/timeline.html',
        '/star-repo.html',
        '/private/',
        '/bin/',
      ],
    },
    sitemap: 'https://mobile.geefox.xyz/sitemap.xml',
  }
}
