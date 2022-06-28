---
sidebar_position: 10
---

# C# Code in Juka ausführen

Du kannst C# in Juka mit "#{ c#_code }" Syntax ausführen

Beispiel:
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