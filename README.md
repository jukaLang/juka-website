[![Netlify Status](https://api.netlify.com/api/v1/badges/44911841-1d05-4a57-84f0-dfbd41b3d202/deploy-status)](https://app.netlify.com/sites/juka/deploys)
[![Crowdin](https://badges.crowdin.net/juka-website/localized.svg)](https://crowdin.com/project/juka-website)

[![Twitter](https://img.shields.io/twitter/follow/jukaLang.svg?style=social)](https://twitter.com/jukaLang)
[![Discord](https://img.shields.io/discord/975787212954275910)](https://discord.gg/MsKWsErzfp)


**Official Website:** https://jukalang.com

**TOR Link:** http://jukawebwjtic5aa4y7sb3mcxaeruw53ejswmrrv2qbsdua6owy6555qd.onion

**Mirror 1:** https://juka-website.herokuapp.com

**Mirror 2:** https://jukaweb-prod-juka-5ufe4u.mo1.mogenius.io

**Mirror 3:** https://juka.netlify.app

If you would like to add a mirror, add your link to this file (README.md) and create a pull request

Use the following services to test your changes for Juka website before creating a pull request:

[![Netlify Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jukaLang/juka-website)
[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jukaLang/juka-website)

![website](https://user-images.githubusercontent.com/11934545/176821804-219938b9-d8cb-4cbd-a429-13eb6648b75e.png)

# Juka Programming Language

Juka Programming Language website is built on top of [Docusaurus 2](https://docusaurus.io/).
Feel free to contribute to our website!
Please edit "docs/*.md" files.
Any help is appreciated!

### Local Deployment

#### Requirements
```jsx
Node.js version 16.14+
```

You might need to install dependencies by running npm install in the home directory
```jsx
npm install
```

Run the following command to deploy the server locally:
```jsx
npm run docusaurus clear
npm run docusaurus start
```

or

```jsx
npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Generating Translations
It's important to generate translation before you commit.
Run the following command before submitting the site to GitHub

```jsx
npm run write-translations
```
If you are on Windows, please run "run.bat" instead:
```jsx
./run.bat
```
