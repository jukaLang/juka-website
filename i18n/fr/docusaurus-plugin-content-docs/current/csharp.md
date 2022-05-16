---
sidebar_position: 10
---

# Code C# en cours d'exécution

Vous pouvez exécuter C# dans Juka en utilisant la syntaxe "#{ c#_code }"

Exemple:
```jsx
func testC_sharp() = {
    printLine(
        #{
        string x = "Asd";
        string y = "fA";
        return x+y;
        }
    );
}
```