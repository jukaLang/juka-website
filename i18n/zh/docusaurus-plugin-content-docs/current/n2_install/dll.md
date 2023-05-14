---
sidebar_position: 30
---

# Juka in a C# 项目


Juka 可以添加到任何 C# 项目作为一个Nuget 包。 要做到这一点，请打开软件包管理器控制台并运行以下命令：

```jsx
安装包JukaCompiler
```

一旦安装了软件包，您可以使用它从您的 C# 项目中编译Juka 代码。 要做到这一点，请在您的项目中添加以下代码：

```jsx
//C# 使用 JukaCompiler 的文件


public class Program v.
    public static invate Main(string[……] args) 让与
        string jukaCode = "func main() 让您了解("Hello World") }";
        // 编译Juka代码。
        var compiledCode = new JukaCompiler.Compiler().go(jukaCode, false);

        // 执行编译的代码。
        var 结果 = compiledCode.Execute();

        // 打印结果。
        Console.WriteLine(结果);
    }
 }
```
此代码将编译Juka代码并将消息“Hello World”打印到控制台

## 使用文件
如果你需要从文件编译代码，你可以通过将路径传递到文件到去方法来做到这一点。 例如，下列代码将在文件my_code.juka中编译Juka代码：

```jsx
//C# 使用 JukaCompiler 的文件


public class Program v.
    public 静态无效Main(string] args) v.
        string jukaCodePath = @"my_code uka";
        // 编译Juka代码。
        var compiledCode = new JukaCompiler.Compiler().go(jukaCodePat, false);

        // 执行编译的代码。
        var 结果 = compiledCode.Execute();

        // 打印结果。
        Console.WriteLine(结果);
    }
 }
```

## 产出
Go 方法的输出是一个字符串。 此字符串包含已编译的 Juka 代码。 您可以使用此字符串来执行编译的代码或将其保存到一个文件。

欲了解更多信息， https://www.nuget.org/packses/JukaCompiler
