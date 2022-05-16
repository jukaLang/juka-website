---
sidebar_position: 3
---

# 职能

## 主要函数
每个入口点代码/脚本必须具有条目功能。 输入函数定义如下：

```jsx
func main() = { }
```

注意：没有主要函数的脚本可以导入，但不能直接执行。 主函数在条目上自动调用。 但是，如果你需要的话，你仍然可以明确调用 main() 函数。

## 职能
所有函数都用词函数定义。 函数可以包含字母数字值(包括_)，函数不能以数字开头。 职能的定义简单：

```jsx
func foo() =
   printLine("Hello Friend");

```

示例：

```jsx
func main() = {

    int y = 5;

    while ( (y == 3) && (y == 5) || (y > 6) ){
        printLine("loop");
    }

}


func foo() = {
    int x = 3;
    printLine(x);
    fart();
    return x;
}


func rock() = {
    bark();
    bark();
    printLine("rock");
}

func bark()={
    printLine("bark");
}
```