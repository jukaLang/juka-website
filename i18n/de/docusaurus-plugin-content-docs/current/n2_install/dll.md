---
sidebar_position: 30
---

# Juka in einem C# Projekt


Juka kann zu jedem C# Projekt als NuGet Paket hinzugefügt werden. Um dies zu tun, öffnen Sie die Paket-Manager-Konsole und führen den folgenden Befehl aus:

```jsx
JukaCompiler installieren
```

Sobald das Paket installiert ist, können Sie es verwenden, um Juka Code aus Ihrem C# Projekt zu kompilieren. Fügen Sie dazu folgenden Code zu Ihrem Projekt hinzu:

```jsx
//C# Datei
mit JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCode = "func main() { printLine("Hallo World") }";
        // Kompilieren Sie den Juka-Code.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCode, false);

        // Den kompilierten Code ausführen.
        var result = compiledCode.Execute();

        // Ergebnis ausgeben.
        Console.WriteLine(result);
    }
}
```
Dieser Code kompiliert den Juka-Code und druckt die Nachricht "Hallo Welt" auf die Konsole

## Datei verwenden
Wenn Sie den Code aus einer Datei kompilieren müssen, können Sie dies tun, indem Sie den Pfad zur Datei an die Go-Methode übergeben. Zum Beispiel wird der folgende Code den Juka-Code in der Datei my_code.juka kompilieren:

```jsx
//C# Datei
mit JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCodePath = @"my_code.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCodePath, false);

        // Den kompilierten Code ausführen.
        var result = compiledCode.Execute();

        // Ergebnis ausgeben.
        Console.WriteLine(result);
    }
}
```

## Ausgang
Die Ausgabe der Go-Methode ist ein String. Diese Zeichenkette enthält den kompilierten Juka-Code. Sie können diesen String verwenden, um den kompilierten Code auszuführen oder ihn in einer Datei zu speichern.

Für weitere Informationen besuchen Sie https://www.nuget.org/packages/JukaCompiler
 