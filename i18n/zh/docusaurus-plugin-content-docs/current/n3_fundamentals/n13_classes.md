---
sidebar_position: 13
slug: /class类
---

# 班级

## 什么是类？

类是创建对象的蓝图。 它定义了该类对象的属性和方法。

## 如何定义类

要定义一个类，请使用 `类` 关键字。 定义类的语法如下：

```jsx
class <name> = {
<members>
}
```

`name` 是类名称， `成员` 是类的属性和方法。

## 成员

一个类的成员可以是属性或方法。 属性是与对象相关联的变量。 方法是与对象相关联的函数。

## 属性
属性使用var关键字来定义。 定义属性的语法如下：

```jsx
var <name>;
```

`name` 是属性的名称， `输入` 是属性的类型。

## 方法
方法使用 `真空` 关键字来定义. 定义方法的语法如下： 定义方法的语法如下：

```jsx
func <name>(<parameters>) = {
<statements>
}
```
`name` 是方法的名称。 `参数` 是方法的参数， 和 `语句` 是方法正文中的语句。

## 创建对象


要创建对象，请使用新的关键字。 创建对象的语法如下：

```jsx
var <object_name> = 新的 <class_name>();
```

`object_name` 是对象的名称, `class_name` 是类的名称。

## 访问属性和方法

一个对象的属性和方法可以使用点符号访问。 例如，要访问对象myObject的属性名称，您将使用以下代码：

```jsx
myObject.name;
```

要调用方法 `添加对象 <code>myObject`的</code> ，您将使用以下代码：

```jsx
myObject.add(2, 6)；
```

## 示例
下面的代码定义了一个名为 `MathClass` 的类并创建了该类的对象：

```jsx
第 MathClass 类。 var num1：int；
var num2：int；

func add() 请返回
返回 this.num1 + um2;
}
}

var mathClass = new MathClass();
mathClass.num1 = 2;
mathClass.num2 = 6;
print(mathClass.add();
```

此代码将打印值8。