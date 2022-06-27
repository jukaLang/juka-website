---
sidebar_position: 30
---

# Add Juka to C# Project

Juka can be added to any C# project as a .dll.
You can download the latest version of .dll  at
https://jukalang.com/download

However, it is recommended that you use a NuGet package
and download JukaCompiler by searching NuGet packages.

You can also install the package by running the following command:
```jsx
Install-Package JukaCompiler
```
For more information visit,
https://www.nuget.org/packages/JukaCompiler


## Basic Usage

To compile the code using a pre-defined string,
add the following to the C# code:

```jsx
new JukaCompiler.Compiler().Go(sourceAsString,false);
```

If you need to compile the code using a file,
you can pass in a file and run the following code:

```jsx
new JukaCompiler.Compiler().Go(sourceAsString,true);
```

The output will be returned as a string.