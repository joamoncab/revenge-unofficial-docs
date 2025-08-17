import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Revenge Unofficial Docs',
  description: 'Unofficial documentation for Revenge modded client',
  
  // Clean URLs - remove .html extension
  cleanUrls: true,
  
  // Base path for GitHub Pages (will be set to repo name if needed)
  base: '/',
  
  // Ignore dead links from old markdown files
  ignoreDeadLinks: true,
  
  // Head tags for favicon and meta
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Revenge Unofficial Docs' }],
    ['meta', { property: 'og:site_name', content: 'Revenge Unofficial Docs' }],
    ['meta', { property: 'og:image', content: 'https://joamoncab.github.io/revenge-unofficial-docs/og-image.png' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/joamoncab/revenge-unofficial-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'English Docs', link: '/en/' },
      { text: 'Documentación Español', link: '/es/' },
      {
        text: 'Quick Links',
        items: [
          { text: 'Xposed Installation', link: '/en/xposed/' },
          { text: 'FAQ', link: '/en/misc/faq' },
          { text: 'Instalación Xposed (ES)', link: '/es/xposed/' },
          { text: 'FAQ (ES)', link: '/es/misc/faq' }
        ]
      }
    ],

    sidebar: {
      '/en/xposed/': [
        {
          text: 'Revenge via Xposed',
          items: [
            { text: 'Overview', link: '/en/xposed/' },
            { text: 'Prerequisites', link: '/en/xposed/prerequisites' },
            { text: 'Installation', link: '/en/xposed/install' }
          ]
        }
      ],
      '/en/misc/': [
        {
          text: 'Miscellaneous',
          items: [
            { text: 'FAQ', link: '/en/misc/faq' }
          ]
        }
      ],
      '/en/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/en/' },
            { text: 'Xposed Installation', link: '/en/xposed/' },
            { text: 'FAQ', link: '/en/misc/faq' }
          ]
        }
      ],
      '/es/xposed/': [
        {
          text: 'Revenge vía Xposed',
          items: [
            { text: 'Resumen', link: '/es/xposed/' },
            { text: 'Prerrequisitos', link: '/es/xposed/prerequisites' },
            { text: 'Instalación', link: '/es/xposed/install' }
          ]
        }
      ],
      '/es/misc/': [
        {
          text: 'Varios',
          items: [
            { text: 'FAQ', link: '/es/misc/faq' }
          ]
        }
      ],
      '/es/': [
        {
          text: 'Comenzar',
          items: [
            { text: 'Resumen', link: '/es/' },
            { text: 'Instalación Xposed', link: '/es/xposed/' },
            { text: 'FAQ', link: '/es/misc/faq' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joamoncab/revenge-unofficial-docs' }
    ],

    footer: {
      message: 'Unofficial documentation for Revenge modded client',
      copyright: 'Made with ❤️ by the community'
    }
  }
})