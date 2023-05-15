---
sidebar_position: 13
slug: /class类
---

# 班级

## 什么是类？

类是创建对象的蓝图。 它定义了该类对象的属性和方法。

## 如何定义类

To define a class, use the class keyword. 定义类的语法如下：

```jsx
class <name> = {
<members>
}
```

Where name is the name of the class, and members are the properties and methods of the class.

## 成员

一个类的成员可以是属性或方法。 属性是与对象相关联的变量。 方法是与对象相关联的函数。

## 属性
属性使用var关键字来定义。 定义属性的语法如下：

```jsx
    var <name>;
```

Where name is the name of the property, and type is the type of the property.

## 方法
Methods are defined using the func keyword. 方法使用 `真空` 关键字来定义. 定义方法的语法如下： 定义方法的语法如下： 定义方法的语法如下：

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Where name is the name of the method, parameters are the parameters of the method, and statements are the statements in the method body.

## 创建对象


要创建对象，请使用新的关键字。 创建对象的语法如下：

```jsx
var <object_name> = 新的 <class_name>();
```
Where object_name`is the name of the object, and class_name is the name of the class.

## 访问属性和方法

一个对象的属性和方法可以使用点符号访问。 例如，要访问对象myObject的属性名称，您将使用以下代码：

```jsx
myObject.name;
```
To call the method add`of the object myObject, you would use the following code:

```jsx
myObject.add(2, 6)；
```

## 示例
The following code defines a class named MathClass and creates an object of that class:

```jsx
class MathClass {
    var num1: int
    var num2: int

    func add() = {
        return this.num1 + this.num2
    }
}
var mathClass = new MathClass()
mathClass.num1 = 2
mathClass.num2 = 6
print(mathClass.add())
```

此代码将打印值8。