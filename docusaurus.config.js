// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juka Programming Language',
  tagline: 'Code once, Run everywhere',
  url: 'https://jukalang.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'jukaLang',
  projectName: 'juka-website',

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
        gtag: {
          trackingID: 'G-B35NSQ9XV5',
          anonymizeIP: true,
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
      image: 'img/juka.png',
      metadata: [{name: 'keywords', content: 'juka,programming,language,future, runeverywhere, buildonce'},{name: 'twitter:card', content: 'A new programming language! Build once, run everywhere. Visit our official page at https://jukaLang.com Got a question? Connect with us via Discord or Twitter'}],
      announcementBar: {
        id: 'support_us',
        content:
            'We need help creating the docs. Please consider contributing to the documentation at <a target="_blank"  href="https://github.com/JukaLang/juka-website">https://github.com/JukaLang/juka-website</a>',
        backgroundColor: '#ddd',
        textColor: '#091E42',
        isCloseable: false,
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
                to: '/docs/intro',
              },
              {
                label: 'Learn',
                to: '/learn',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/7BNpwKH8JC/',
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
                label: 'Instagram',
                href: 'https://www.instagram.com/jukalanguage/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Privacy',
                to: '/privacy',
              },
              {
                label: 'License',
                to: '/license',
              },
              {
                label: 'GitHub Source',
                href: 'https://github.com/jukaLang/juka',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
