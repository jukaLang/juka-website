---
sidebar_position: 30
---

# Juka in a C# Project

Juka 可以添加到任何 C# 项目为 .dll。 您可以在 https://jukalang.com/download下载最新版本的 .dll

然而，建议您使用 NuGet 包 并通过搜索 NuGet 包下载JukaCompiler

您也可以通过运行以下命令来安装软件包：
```jsx
安装包JukaCompiler
```
欲了解更多信息， https://www.nuget.org/packses/JukaCompiler


## 基本用法

要使用预定义字符串编译代码， 在 C# 代码中添加以下内容：

```jsx
新 JukaCompiler.Compiler().Go(sourceAsString,false);
```

如果您需要使用文件编译代码， 您可以传递文件并运行以下代码：

```jsx
新 JukaCompiler.Compiler().Go(sourceAsString,true);
```

输出将作为字符串返回.