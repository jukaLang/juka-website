---
sidebar_position: 30
---

# Джука в проекте C


Джука может быть добавлена в любой проект C# в качестве пакета Nuget. Для этого откройте консоль Менеджера пакетов и выполните следующую команду:

```jsx
Установка пакета JukaCompiler
```

После установки пакета вы можете использовать его для компиляции Juka из проекта C#. Для этого добавьте следующий код в ваш проект:

```jsx
//C# Файл
с использованием JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCode = "func main() { printLine("Hello World") }";
        // Компиляция кода Juka.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCode, false);

        // Выполняем скомпилированный код.
        результат var = compiledCode.Execute();

        // Распечатать результат.
        Console.WriteLine(результат);
    }
}
```
Этот код компилирует код Juka и распечатает сообщение "Hello World" в консоль

## Использование файла
Если вам нужно скомпилировать код из файла, вы можете сделать это, передав путь к файлу методу Go. Например, следующий код компилирует код Juka в файл my_code.juka:

```jsx
//C# Файл
с использованием JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCodePath = @"my_code. uka";
        // Компиляция кода Juka.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCodePath, false);

        // Выполняет скомпилированный код.
        результат var = compiledCode.Execute();

        // Распечатать результат.
        Console.WriteLine(результат);
    }
}
```

## Вывод
Вывод метода Go - строка. Эта строка содержит скомпилированный код Juka. Вы можете использовать эту строку для выполнения скомпилированного кода или для сохранения его в файл.

Для получения дополнительной информации посетите https://www.nuget.org/packages/JukaCompiler
 