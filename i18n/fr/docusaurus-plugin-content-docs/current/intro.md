---
sidebar_position: 1
slug: /
---

# Introduction

L'objectif principal de Juka est d'être un langage de programmation universel qui peut fonctionner sur n'importe quelle plate-forme, y compris sur les appareils mobiles.

La philosophie de Juka est le code une fois, exécuté partout.

![jukaRun](https://user-images.githubusercontent.com/11934545/171545920-02493491-fa44-40d6-9a5b-46b2f90f8301.gif)

__Périphérique actuel pris en charge :__
- Windows (x64)
- Windows ARM (arm x64)
- Linux (CentOS, Debian, Fedora, Ubuntu and derivatives)
- Linux ARM (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)

__Bientôt disponible:__
- Android App
- AndroidTV App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)

__Soutien futur potentiel :__
- AWS (Amazon Web Service)
- Google Cloud


### Téléchargement de Juka
Juka can be downloaded from https://jukalang.com/download

If you need a "nightly built", then you can download the latest version at https://github.com/jukaLang/juka/releases

Make sure to download an appropriate version to the device. There are typically 2 versions of Juka for each OS: Juka and JukaAPI.
- Juka - Main application, download this if you are unsure.
- JukaAPI - server to serve JUKA API via REST (do not download this if you are unsure how to use it)

The files should be self-contained (you are not required to download any other files or install any other programs)

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

Run the following command to start the Juka editor:
```jsx
./juka
```

If you want to run Juka code from a file, run the following command (substitute HelloWorld.juk with your filename)

```jsx
HelloWorld.juk
```


### Fonction Microsoft Azure

Upload the package to Azure Web Server Use web deploy to publish Juka (Azure Function) on the cloud

### Reference in C# Project

You can reference Juka compiler in C#, by downloading C# .dll and referencing it in the project.
