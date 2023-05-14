---
sidebar_position: 30
---

# Juka en un proyecto C


Juka puede ser añadido a cualquier proyecto C# como un paquete NuGet . Para hacer esto, abre la consola del gestor de paquetes y ejecuta el siguiente comando:

```jsx
Instalar paquete JukaCompiler
```

Una vez que el paquete está instalado, puede usarlo para compilar el código Juka desde su proyecto C#. Para hacer esto, añade el siguiente código a tu proyecto:

```jsx
//C# Archivo
usando JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCode = "func main() { printLine("Hola Mundo") }";
        // Compilar el código Juka.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCode, false);

        // Ejecuta el código compilado.
        var result = compiledCode.Execute();

        // Imprimir el resultado.
        Console.WriteLine(resultado);
    }
}
```
Este código compilará el código Juka e imprimirá el mensaje "Hola Mundo" a la consola

## Usando un archivo
Si necesita compilar el código de un archivo, puede hacerlo pasando la ruta al archivo al método Go. Por ejemplo, el siguiente código compilará el código Juka en el archivo my_code.juka:

```jsx
//C# Archivo
usando JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCodePath = @"my_code. uka";
        // Compilar el código Juka.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCodePath, false);

        // Ejecuta el código compilado.
        var result = compiledCode.Execute();

        // Imprimir el resultado.
        Console.WriteLine(resultado);
    }
}
```

## Salida
La salida del método Go es una cadena. Esta cadena contiene el código Juka compilado. Puede utilizar esta cadena para ejecutar el código compilado o para guardarlo en un archivo.

Para más información visite, https://www.nuget.org/packages/JukaCompiler
