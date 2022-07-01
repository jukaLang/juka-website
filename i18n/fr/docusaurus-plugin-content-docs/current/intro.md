---
sidebar_position: 1
slug: /
---

# Introduction

L'objectif principal de Juka est d'être un langage de programmation universel qui peut fonctionner sur n'importe quelle plate-forme, y compris sur les appareils mobiles.

La philosophie de Juka est le code une fois, exécuté partout.

![jukaRun](https://user-images.githubusercontent.com/11934545/176820860-9ff1eff4-cbde-4e90-a56f-b0826f4760a5.gif)

__Périphérique actuel pris en charge :__
- Fenêtres (x64)
- Windows (x86 32 bits)
- ARM Windows (bras x64)
- Linux (CentOS, Debian, Fedora, Ubuntu et dérivés)
- Linux ARM (Linux Distributions qui exécutent ARM par exemple Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (serveur JukaAPI)
- Docker (JukaAPI)
- Web Assembly (CDN/Browser/HTML server)

__Bientôt disponible:__
- Android App
- AndroidTV App
- Application iOS (iPhone/iPad)
- Application MacOS
- Application Windows (Windows 10+)

__Soutien futur potentiel :__
- AWS (Amazon Web Service)
- Google Cloud


### Téléchargement de Juka
Juka peut être téléchargé depuis https://jukalang.com/download

Si vous avez besoin d'une "nightly built", vous pouvez télécharger la dernière version sur https://github.com/jukaLang/juka/releases

Assurez-vous de télécharger une version appropriée sur l'appareil. Il existe généralement 2 versions de Juka pour chaque OS: Juka et JukaAPI.
- Juka - Application principale, téléchargez ceci si vous n'êtes pas sûr.
- JukaAPI - serveur pour servir l'API JUKA via REST (ne téléchargez pas ceci si vous n'êtes pas sûr de comment l'utiliser)

Les fichiers doivent être autonomes (vous n'êtes pas requis pour télécharger d'autres fichiers ou installer d'autres programmes)

## Exécution de Juka

### Fenêtres

Exécutez la commande suivante pour démarrer l'éditeur Juka :

```jsx
./juka.exe
```

Si vous voulez exécuter le code Juka à partir d'un fichier, exécutez la commande suivante (remplacez HelloWorld.juk par votre nom de fichier)

```jsx
./juka.exe HelloWorld.juk
```

### Linux/MacOS/FreeBSD/UNIX/Raspberry PI

Exécutez la commande suivante pour démarrer l'éditeur Juka :
```jsx
./juka
```

Si vous voulez exécuter le code Juka à partir d'un fichier, exécutez la commande suivante (remplacez HelloWorld.juk par votre nom de fichier)

```jsx
HelloWorld.juk
```


### Fonction Microsoft Azure

Télécharger le package sur Azure Web Server Utiliser le déploiement web pour publier Juka (Azure Function) sur le cloud

### Référence dans le projet C#

Vous pouvez référencer le compilateur Juka en C#, en téléchargeant C# .dll et en le référencant dans le projet.
