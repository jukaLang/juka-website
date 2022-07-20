---
sidebar_position: 5
---

# 职能

## 正在执行函数

可以通过调用函数本身来执行脚本。 例如：
```jsx
func x() = { printLine("Hello"); } x();
```

所有函数都用词函数定义。 函数可以包含字母数字值(包括_)，函数不能以数字开头。 职能的定义简单：

```jsx
func foo() =
   printLine("Hello Friend!");
}
foo();
```

示例：

```jsx
func x() =
    string y = "Hello World";
    printLine(y)；
    printLine("它工作了！ );
}
func y() = 欧共体
    printLine("==in midle==";
    打印("======");
}
x();
y();
x();

```