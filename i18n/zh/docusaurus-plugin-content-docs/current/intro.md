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
- Windows (x86 32位)
- Windows ARM (arm x64)
- Linux (CentOS, Debian, Fedora, Ubuntu and derivatives)
- Linux ARM (Linux Distributions which 运行 ARM ，例如 Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI 服务器)
- Docker (JukaAPI)

__即将到来：__
- Android App
- AndroidTV App
- iOS 应用程序 (iPhone/iPad)
- MacOS 应用程序
- Windows App (Windows 10+)

__潜在的未来支持：__
- AWS (Amazon Web Service)
- 谷歌云


### 正在下载 Juka
Juka 可以从 https://jukalang.com/download下载

如果你需要一个“夜间构建”，那么你可以在 https://github.com/jukaLang/juka/releases 下载最新版本

请确保下载适当的版本到设备。 每个开放源码软件通常有两个版本：Juka和JukaAPI。
- Juka - 主要应用程序，如果您不确定，请下载。
- JukaAPI - 通过 REST 为JUKA API 服务的服务器 (如果您不确定如何使用它，请不要下载)

文件应该是自足的 (您无需下载任何其他文件或安装任何其他程序)

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

运行以下命令启动Juka编辑器：
```jsx
./juka
```

如果您想从一个文件运行Juka代码，运行以下命令(用您的文件名替换HelloWorld.juk)

```jsx
./juka HelloWorld.juk
```


### 微软Azure 函数

将软件包上传到 Azure Web Server 使用 web 部署在云端发布Juka (Azure Function)

### C# 项目中的引用

您可以通过下载 C# .dll并在项目中引用Juka 编译器。
