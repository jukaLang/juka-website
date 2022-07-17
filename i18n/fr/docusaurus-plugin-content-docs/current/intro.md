---
sidebar_position: 1
slug: /
---

# Introduction

L'objectif principal de Juka est d'être un langage de programmation universel qui peut fonctionner sur n'importe quelle plate-forme, y compris sur les appareils mobiles.

La philosophie de Juka est le code une fois, exécuté partout.

![jukaRun](/img/latestjuka.gif)

Join our Discord Community: https://discord.com/invite/MsKWsErzfp

__Current Supported Device:__
- Windows (x86/x64)
- Windows ARM (ARM64)
- Linux (x86/x64) (CentOS, Debian, Fedora, Ubuntu, TinyCore, and almost any other type of Linux)
- Linux ARM (ARM64 and ARM32) (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)
- Unity Game Engine (via NuGet.org)
- [Web Assembly (CDN/Browser/HTML server)](https://github.com/jukaLang/juka-webassembly)
- [Jupyter via juka-kernel](https://github.com/jukaLang/juka_kernel)
- [Virtual Box Image (JukaVM)](https://github.com/jukaLang/jukaVM)

__Coming Soon:__
- Android App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)
- Tizen (Samsung)

__Potential Future Support:__
- AndroidTV App
- Amazon Web Service (Native Support)
- Google Cloud (Native Support)


### Téléchargement de Juka
Juka can be downloaded from https://jukalang.com/download

If you need a "nightly built", then you can download the latest version at https://github.com/jukaLang/juka/releases

Make sure to download an appropriate version to the device. There are typically 2 versions of Juka for each OS: Juka and JukaAPI.
- Juka - Application principale, téléchargez ceci si vous n'êtes pas sûr.
- JukaAPI - serveur pour servir l'API JUKA via REST (ne téléchargez pas ceci si vous n'êtes pas sûr de comment l'utiliser)

The files should be self-contained (you are not required to download any other files or install any other programs)

## Exécution de Juka

### Fenêtres

Run the following command to start the Juka editor:

```jsx
./juka.exe
```

If you want to run Juka code from a file, run the following command (substitute HelloWorld.juk with your filename)

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

### Référence dans le projet C#

You can reference Juka compiler in C#, by downloading C# .dll and referencing it in the project.
