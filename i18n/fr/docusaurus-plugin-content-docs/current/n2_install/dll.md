---
sidebar_position: 30
---

# Juka dans un projet C


Juka peut être ajouté à n'importe quel projet C# en tant que paquet Nuget. Pour cela, ouvrez la console du gestionnaire de paquets et exécutez la commande suivante :

```jsx
Install-Pack JukaCompiler
```

Une fois le paquet installé, vous pouvez l'utiliser pour compiler du code Juka depuis votre projet C#. Pour cela, ajoutez le code suivant à votre projet :

```jsx
//C# Fichier
à l'aide de JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCode = "func main() { printLine("Hello World") }";
        // Compiler le code Juka.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCode, false);

        // Exécute le code compilé.
        var result = compiledCode.Execute();

        // Affiche le résultat.
        Console.WriteLine(résultat);
    }
}
```
Ce code compilera le code Juka et affichera le message "Hello World" dans la console

## Utiliser un fichier
Si vous avez besoin de compiler le code à partir d'un fichier, vous pouvez le faire en passant le chemin vers le fichier à la méthode Go. Par exemple, le code suivant compilera le code Juka dans le fichier my_code.juka:

```jsx
//C# Fichier
à l'aide de JukaCompiler;

public class Program {
    public static void Main(string[] args) {
        string jukaCodePath = @"my_code. uka";
        // Compiler le code Juka.
        var compiledCode = new JukaCompiler.Compiler().Go(jukaCodePath, false);

        // Exécute le code compilé.
        var result = compiledCode.Execute();

        // Affiche le résultat.
        Console.WriteLine(résultat);
    }
}
```

## Output
La sortie de la méthode Go est une chaîne de caractères. Cette chaîne contient le code Juka compilé. Vous pouvez utiliser cette chaîne pour exécuter le code compilé ou l'enregistrer dans un fichier.

Pour plus d'informations, visitez https://www.nuget.org/packages/JukaCompiler
 