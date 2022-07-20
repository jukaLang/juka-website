---
sidebar_position: 2
---

# 结构

## 文件夹结构：

### ./examples
- 提供示例让你开始使用 Juka

### ./src/JukaCompiler
- 语言的核心。 代码编译到 .NET 。 所有可以用于任何 C# 项目的库，包括Xamarin/MAUI 建造iOS/ Android 应用程序， 它主要用于构建Mac/OS、Windows 应用程序和Windows 桌面应用程序的跨平台应用。

### ./src/JukaAzureFunction
- Azure 函数运行时代码。 用于在 Microsoft Azure Cloud 服务器上运行 Juka Azure 功能

### ./src/JukaNetwork
- 作为存储和管理软件包的 blockchain 网络。 用作分散的软件包管理器。

### ./src/JukaUnitTest
- 测试JukaCompiler 的单元测试

### ./src/Juka
- 包含 GUI (即将到来)

### Visual Studio/开发要求
##### 请确保您已安装最新的 Visual Studio

运行和开发Juka所需的 Visual Studio 软件包：

- Azure开发
- .NET 桌面开发

### Juka使用以下方案来运行代码：
![布局](/img/Runtime.png)
