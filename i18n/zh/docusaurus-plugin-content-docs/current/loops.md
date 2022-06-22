---
sidebar_position: 5
---

# 循环

## 当循环

在朱卡，循环的定义与大多数其他编程语言相似。

循环的简单示例：

```jsx
int x = 0;
while(x < 2) {
    x = x+1;
}
```

在此示例 x 被设置为 0。 The **while** statement checks and sees that x must be less than 2 and returns true. The **while** loop runs. x值增加1。 这是一种不断提高价值的朱卡方式。 The **while** loop only runs twice.

## 断开
您可以运行一个无限循环。 然而，你应该有一个休息声明来退出循环

一个简单的断点示例：

```jsx
int x = 0;
while( 1 ){
    x = x + 1;
    if ( x > 2) {
        break;
    }
}
```

虽然不推荐使用 **课间休息** ，但它为 **课间休息提供了方便和简单的方式** a **则为** 循环提供了方便。