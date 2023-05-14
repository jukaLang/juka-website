---
sidebar_position: 2
---

# Architecture

## Folder Structure

The Juka codebase is organized into the following folders:

* **./examples** - This folder contains examples of Juka code.
* **./src/JukaCompiler** - This folder contains the core of the Juka compiler.
* **./src/JukaAzureFunction** - This folder contains the code for running Juka Azure functions on Microsoft's Azure Cloud Server.
* **./src/JukaNetwork** - This folder contains the code for the Juka network, which is a blockchain network for storing and managing packages.
* **./src/JukaUnitTest** - This folder contains unit tests for the Juka compiler.
* **./src/Juka** - This folder contains the code for the Juka GUI (coming soon).

## Visual Studio/Development Requirements

To develop and run Juka, you will need the following:

* The latest version of Visual Studio.
* The following Visual Studio packages:
  * Azure development
  * .NET desktop development

## Runtime

Juka uses the following scheme to run the code:

![Layout](/img/Runtime.png)

The Juka compiler compiles Juka code into a .NET .dll library. This library can then be used in any C# project, including Xamarin/MAUI for building iOS/Android Apps, and it is mainly used to build cross-platform apps for Mac/OS, Windows Apps, and Windows desktop applications.

The Juka Azure Function runtime code is used to run Juka Azure functions on Microsoft's Azure Cloud Server.

The Juka network is a blockchain network for storing and managing packages. It is used as a decentralized package manager.

The Juka unit tests are used to test the Juka compiler.

The Juka GUI is a graphical user interface for Juka that is currently under development.

## Notes

* The Juka project is still under development, so some features may not be available yet.
* If you have any questions or feedback, please feel free to contact us.