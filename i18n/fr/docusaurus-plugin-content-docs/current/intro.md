---
sidebar_position: 1
---

# Introduction

L'objectif principal de Juka est d'être un langage de programmation universel qui peut fonctionner sur n'importe quelle plate-forme, y compris sur les appareils mobiles.

La philosophie de Juka est le code une fois, exécuté partout.

![jukaRun](https://user-images.githubusercontent.com/11934545/171545920-02493491-fa44-40d6-9a5b-46b2f90f8301.gif)

__Périphérique actuel pris en charge :__
- Fenêtres
- Linux (Debian et Redhat)
- MacOS (M1 et Intel Chipset)
- Azure (Microsoft Azure Function)
- HTTPS/API (serveur JukaAPI)
- Docker (JukaAPI)

__Bientôt disponible:__
- Android
- iOS (iPhone/iPad)
- Application Windows universelle (Windows 10+)
- FreeBSD

__Soutien futur potentiel :__
- AWS (Amazon Web Service)
- S/X série Xbox
- AndroidTV
- Google Cloud


### Téléchargement de Juka
La dernière version de Juka peut être trouvée sur https://github.com/jukaLang/juka/releases

Trouvez la version que vous voulez et téléchargez-la sur votre appareil. Les fichiers doivent être autonomes (vous n'êtes pas tenu de télécharger d'autres fichiers)

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

### Linux/MacOS

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
