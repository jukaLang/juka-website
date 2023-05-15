---
sidebar_position: 30
---

# Juka in a C# Project


Juka can be added to any C# project as a NuGet package. To do this, open the Package Manager Console and run the following command:

```jsx
Install-Package JukaCompiler
```

Once the package is installed, you can use it to compile Juka code from within your C# project. To do this, add the following code to your project:

```jsx
//C# File
using JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCode = "func main() { printLine("Hello World") }";
        // Compile the Juka code.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCode, false);
    
        // Execute the compiled code.
        var result = compiledCode.Execute();
    
        // Print the result.
        Console.WriteLine(result);
    }
}
```
This code will compile the Juka code and print the message "Hello World" to the console

## Using a file
If you need to compile the code from a file, you can do so by passing the path to the file to the Go method. For example, the following code will compile the Juka code in the file my_code.juka:

```jsx
//C# File
using JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCodePath = @"my_code.juka";
        // Compile the Juka code.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCodePath, false);
    
        // Execute the compiled code.
        var result = compiledCode.Execute();
    
        // Print the result.
        Console.WriteLine(result);
    }
}
```

## Output
The output of the Go method is a string. This string contains the compiled Juka code. You can use this string to execute the compiled code or to save it to a file.

For more information visit,
https://www.nuget.org/packages/JukaCompiler
 