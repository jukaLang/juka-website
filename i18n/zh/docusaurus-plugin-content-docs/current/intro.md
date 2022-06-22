---
sidebar_position: 1
slug: /
---

# 一. 导言

Juka的主要目标是成为一种通用的编程语言，可以在任何平台上运行，包括移动设备。

Juka的哲学是一次代码，遍布任何地方。

![jukaRun](https://user-images.githubusercontent.com/11934545/171545920-02493491-fa44-40d6-9a5b-46b2f90f8301.gif)

__当前支持的设备：__
- Windows (x64)
- Windows (x86 32-bit)
- Windows ARM (arm x64)
- Linux (CentOS, Debian, Fedora, Ubuntu and derivatives)
- Linux ARM (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)

__即将到来：__
- Android App
- AndroidTV App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)

__潜在的未来支持：__
- AWS (Amazon Web Service)
- Google Cloud


### 正在下载 Juka
Juka can be downloaded from https://jukalang.com/download

If you need a "nightly built", then you can download the latest version at https://github.com/jukaLang/juka/releases

Make sure to download an appropriate version to the device. There are typically 2 versions of Juka for each OS: Juka and JukaAPI.
- Juka - Main application, download this if you are unsure.
- JukaAPI - server to serve JUKA API via REST (do not download this if you are unsure how to use it)

The files should be self-contained (you are not required to download any other files or install any other programs)

## 正在运行Juka

### 窗口

运行以下命令启动Juka编辑器：

```jsx
./juka.exe
```

如果您想从一个文件运行Juka代码，运行以下命令(用您的文件名替换HelloWorld.juk)

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


### 微软Azure 函数

Upload the package to Azure Web Server Use web deploy to publish Juka (Azure Function) on the cloud

### Reference in C# Project

You can reference Juka compiler in C#, by downloading C# .dll and referencing it in the project.
