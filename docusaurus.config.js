// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juka Programming Language',
  tagline: 'Language of the Future',
  url: 'https://jukalang.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'jukaLang', // Usually your GitHub org/user name.
  projectName: 'juka-website', // Usually your repo name.

  plugins: [
    ['docusaurus2-dotenv',
    {
      systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
    }]
  ],
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
        googleAnalytics: {
          trackingID: process.env.ANALYTICS_ID,
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
      image: 'img/juka.png',
      metadata: [{name: 'twitter:card', content: 'A new programming language built on top of .NET Framework! Visit our official page at http://jukaLang.com Got a question? Connect with us via Teams or Twitter'}],
      announcementBar: {
        id: 'support_us',
        content:
            'We need help creating the docs. Please consider contributing to the documentation at <a target="_blank"  href="http://github.com/JukaLang/juka-website">http://github.com/JukaLang/juka-website</a>',
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
            href: 'https://github.com/jukaLang/juka',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Microsoft Teams',
                href: 'https://teams.microsoft.com/join/y6rcztsp6s9z',
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
        copyright: `Copyright © ${new Date().getFullYear()} Juka Programming Language`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
