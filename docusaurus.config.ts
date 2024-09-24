// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import PrismLight from './src/utils/prismLight';
import PrismDark from './src/utils/prismDark';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juka Programming Language',
  tagline: 'Easy Multithreading, Runs on Web3 and Web2, Inspired by Python',
  url: 'https://jukalang.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'jukaLang',
  projectName: 'juka-website',

  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-W6ZDC8V', // GTM Container ID
      }
    ],
      () => ({
        name: "inject-tag",
        injectHtmlTags() {
          return {
            postBodyTags: [`<input type="checkbox" id="btnControl"/>
                    <label id="btnControl2" for="btnControl">Chat<iframe title="discord" id="discord" src="https://e.widgetbot.io/channels/975787212954275910/975787212954275916" height="600" width="800" allow="clipboard-write; fullscreen"/></label>
                    `],
          };
        },
      }),
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/juka.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51, 52, 71)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'rgb(51, 52, 71)',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/juka_app.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(51, 52, 71)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/juka_app.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: 'rgb(51, 52, 71)',
          },
        ],
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en','ru','zh','es','fr','de'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jukaLang/juka-website/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jukaLang/juka-website/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // appId
        appId: 'IQBWLWIGTM',

        // Public API key: it is safe to commit it
        apiKey: '6506f7fbc2f367f0f997aaddf3f404b9',

        indexName: 'jukalang',
        contextualSearch: true,
      },
      "colorMode": {
        "defaultMode": "light",
        "disableSwitch": false,
        "respectPrefersColorScheme": true
      },
      image: 'img/juka.png',
      metadata: [{name: 'keywords', content: 'juka,programming,language,future, runeverywhere, buildonce'},{name: 'twitter:card', content: 'A new programming language! Build once, run everywhere. Visit our official page at https://jukaLang.com Got a question? Connect with us via Discord or Twitter'}],
      announcementBar: {
        id: 'support_us',
        content:
            'Please contribute to the documentation at <a target="_blank"  href="https://github.com/JukaLang/juka-website">https://github.com/JukaLang/juka-website</a>',
        backgroundColor: '#ddd',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: 'Juka Programming Language',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'learn',
            label: 'Learn',
            position: 'left'
          },
          {
            to: 'download',
            label: 'Download',
            position: 'left'
          },
          {
            to: 'https://ide.jukalang.com/',
            label: 'Try Online',
            position: 'right'
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/jukaLang/juka',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Juka Programming Language <br/> (Last updated on ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST)`,
        style: 'dark',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Learn',
                to: '/learn',
              },
              {
                label: 'Download Juka',
                to: '/download',
              },
              {
                label: 'Try Online',
                to: 'https://ide.jukalang.com',
              },
              {
                label: 'Get Certificate',
                to: '/quiz',
              }

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/MsKWsErzfp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/jukaLang',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/jukalang/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@jukalang'
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/jukalanguage/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Donate',
                href: '/donate',
              },
              {
                label: 'Privacy',
                to: '/privacy',
              },
              {
                label: 'License',
                to: '/license',
              },
              {
                label: 'Contact Us',
                to: '/contact'
              },
              {
                label: 'GitHub Source',
                href: 'https://github.com/jukaLang/juka',
              },
              {
                label: 'Operating System Juka',
                href: 'https://os.jukalang.com/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: PrismLight,
        darkTheme: PrismDark,
      },
    }),
};

module.exports = config;
