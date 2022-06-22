---
sidebar_position: 3
---

# 职能

## 主要函数
Juka 自动执行 main() 函数。

```jsx
func main() = Victor printLine("Hello");}
```

注意：没有主要函数的脚本可以通过调用函数本身来执行。 例如：
```jsx
func x() = { printLine("Hello"); } x();
```

## 职能
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