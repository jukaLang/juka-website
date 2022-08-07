---
sidebar_position: 5
---

# 职能

## 正在执行函数
Every script should have a main function. Scripts can be executed by calling the function within main function For example:
```jsx
func x() = { 
    printLine("Hello"); 
}
func main() ={
    x();
}
```

所有函数都用词函数定义。 函数可以包含字母数字值(包括_)，函数不能以数字开头。 职能的定义简单：

```jsx
func foo() = {
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

示例：

```jsx
func x() = {
    var = "Hello World";
    printLine(y);
    printLine("It works!");
}
func y() = {
    printLine("==in the middle==");
    print("======");
}

func main() = {
    x();
    y();
    x();
}
```