---
sidebar_position: 10
---

# Running C# Code in Juka

Вы можете запустить C# внутри Juka с помощью синтаксиса "#{ c#_code }"

Например:
```jsx
func testC_sharp() = {
    printLine(
        #{
        string x = "Asd";
        строка y = "fA";
        return x+y;
        }
    );
}
```