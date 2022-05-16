---
sidebar_position: 10
---

# 运行 C# 代码

您可以使用 "#{ c#_code }" 在 Juka 内运行 C#

示例：
```jsx
func testC_sharp() = Power
    printLine(
        #format@@
        string x = "Asd";
        字符串 y = "fA";
        返回 x+y;
        }
    );
}
```