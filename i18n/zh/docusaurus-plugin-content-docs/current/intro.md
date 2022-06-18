---
sidebar_position: 1
---

# 一. 导言

Juka的主要目标是成为一种通用的编程语言，可以在任何平台上运行，包括移动设备。

Juka的哲学是一次代码，遍布任何地方。

![jukaRun](https://user-images.githubusercontent.com/11934545/171545920-02493491-fa44-40d6-9a5b-46b2f90f8301.gif)

__当前支持的设备：__
- 窗口
- Linux (Debian and Redhat)
- MacOS (M1 and Intel Chipset)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)

__即将到来：__
- Android
- iOS (iPhone/iPad)
- 通用Windows App (Windows 10+)
- FreeBSD

__潜在的未来支持：__
- AWS (Amazon Web Service)
- Xbox 系列 S/X
- AndroidTV
- 谷歌云


### 正在下载 Juka
最新的 Juka 版本可在 https://github.com/jukaLang/juka/releases

查找您想要的版本，并将其下载到您的设备。 文件应该是自足的 (您无需下载任何其他文件)

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

### Linux/MacOS

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
