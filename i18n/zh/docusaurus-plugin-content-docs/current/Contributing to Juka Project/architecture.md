---
sidebar_position: 2
---

# 结构

## 文件夹结构

Juka代码库分成以下文件夹：

* **./examples** - 此文件夹包含Juka 代码示例。
* **./src/JukaCompiler** - 此文件夹包含Juka 编译器的核心。
* **./src/JukaAzureFunction** - 此文件夹包含在Microsoft的 Azure 云端运行Juka Azure 函数的代码。
* **./src/JukaNetwork** - 此文件夹包含了Juka网络的代码，这是一个用于存储和管理软件包的区块链网络。
* **./src/JukaUnitTest** - 此文件夹包含Juka 编译器的单元测试。
* **./src/Juka** - 此文件夹包含了Juka GUI 的代码(即将到来)。

## Visual Studio/开发要求

若要开发和运行 Juka，您将需要：

* 最新版本的 Visual Studio
* Visual Studio 软件包：
  * Azure开发
  * .NET 桌面开发

## 运行时间

Juka使用以下方案来运行代码：

![布局](/img/Runtime.png)

Juka编译器将Juka代码编入.NET .dll图书馆。 这个库然后可以用于任何C# 项目，包括Xamarin/MAUI建造iOS/ Android 应用程序， 并且它主要用于构建Mac/OS、Windows 应用程序和Windows 桌面应用程序的跨平台应用。

Juka Azure Function 运行时代码用于在 Microsoft Azure Cloud Server 上运行Juka Azure功能。

Juka网络是一个用于储存和管理软件包的区块链网络。 它被用作分散的包管理器。

Juka单元测试用于测试Juka编译器。

Juka GUI是目前正在开发的Juka图形用户界面。

## 注

* Juka项目仍在开发之中，所以某些功能可能尚未启用。
* 如果您有任何问题或反馈，请随时联系我们。