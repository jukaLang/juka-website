---
sidebar_position: 2
---

# Architecture

## Folder Structure:

### ./examples
- Provides you examples to get you started on using Juka

### ./src/JukaCompiler
- The core of the language. The code compiles into .NET .dll library that can be used in any C# projects including Xamarin/MAUI for building iOS/Android Apps,
  It is mainly used to build cross-platform apps for Mac/OS, Windows Apps, and Windows desktop applications.

### ./src/JukaAzureFunction
- Azure Function runtime code. Used to run Juka Azure function on Microsoft's Azure Cloud Server

### ./src/JukaNetwork
- Implemented as a blockchain network for storing and managing packages. Used as a decentralized package manager.

### ./src/JukaUnitTest
- Unit tests to test JukaCompiler

### ./src/Juka
- Contains GUI (coming soon)

### Visual Studio/Development Requirements
##### Make sure you have the latest Visual Studio installed

The following Visual Studio packages required to run and develop Juka:

- Azure development
- .NET desktop development

### Juka uses the following scheme to run the code:
![Layout](/img/Runtime.png)
