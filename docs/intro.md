---
sidebar_position: 1
slug: /
---

# Introduction

Juka's main goal is to be a universal programming language that can run on any platform including mobile devices.

Juka's philosophy is code once, run everywhere.

![jukaRun](/img/latestjuka.gif)

__Current Supported Device:__
- Windows (x86/x64)
- Windows ARM (ARM64)
- Linux (CentOS, Debian, Fedora, Ubuntu and derivatives)
- Linux ARM (ARM64 and ARM32) (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)
- [Web Assembly (CDN/Browser/HTML server)](https://github.com/jukaLang/juka-webassembly)
- [Jupyter via juka-kernel](https://github.com/jukaLang/juka_kernel)

__Coming Soon:__
- JukaOS
- Android App
- AndroidTV App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)

__Potential Future Support:__
- AWS (Amazon Web Service)
- Google Cloud


### Downloading Juka
Juka can be downloaded from https://jukalang.com/download

If you need a "nightly built", then you can download the latest version at https://github.com/jukaLang/juka/releases

Make sure to download an appropriate version to the device.
There are typically 2 versions of Juka for each OS: Juka and JukaAPI.
- Juka - Main application, download this if you are unsure. 
- JukaAPI - server to serve JUKA API via REST (do not download this if you are unsure how to use it)

The files should be self-contained (you are not required to download any other files or install any other programs)

## Running Juka

### Windows

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
./juka HelloWorld.juk
```


### Microsoft Azure Function

Upload the package to Azure Web Server
Use web deploy to publish Juka (Azure Function) on the cloud

### Reference in C# Project

You can reference Juka compiler in C#, by downloading C# .dll and referencing it in the project.
