[![Netlify Status](https://api.netlify.com/api/v1/badges/44911841-1d05-4a57-84f0-dfbd41b3d202/deploy-status)](https://app.netlify.com/sites/juka/deploys)
[![Crowdin](https://badges.crowdin.net/juka-website/localized.svg)](https://crowdin.com/project/juka-website)

Official website: https://jukalang.com

![website](https://user-images.githubusercontent.com/11934545/171547205-35aec235-09c6-4d08-9e52-b5cde5bc6bb9.png)

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
