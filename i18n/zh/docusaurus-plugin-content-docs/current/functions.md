---
sidebar_position: 3
---

# 职能

## 主要函数
Juka automatically executes main() function.

```jsx
func main() = { printLine("Hello");}
```

NOTE: the scripts that do not have main function, can be executed by calling the function itself. For example:
```jsx
func x() = { printLine("Hello"); } x();
```

## 职能
所有函数都用词函数定义。 函数可以包含字母数字值(包括_)，函数不能以数字开头。 职能的定义简单：

```jsx
func foo() = {
   printLine("Hello Friend!");
}
foo();
```

示例：

```jsx
func x() = {
    string y = "Hello World";
    printLine(y);
    printLine("It works!");
}
func y() = {
    printLine("==in the middle==");
    print("======");
}
x();
y();
x();

```