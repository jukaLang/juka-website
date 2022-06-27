---
sidebar_position: 10
---

# Running C# Code in Juka

You can run C# inside Juka using "#{ c#_code }" syntax

Example:
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