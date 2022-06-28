---
sidebar_position: 10
---

# Running C# Code in Juka

Puedes ejecutar C# dentro de Juka usando la sintaxis "#{ c#_code }"

Ejemplo:
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