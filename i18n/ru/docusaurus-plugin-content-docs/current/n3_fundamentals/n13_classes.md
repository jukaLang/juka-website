---
sidebar_position: 13
slug: /классы
---

# Уроки

## Что такое класс?

Класс - это чертеж для создания объектов. Она определяет свойства и методы, которые будут иметь объекты этого класса.

## Как определить класс

To define a class, use the class keyword. Для определения класса используется следующий синтаксис:

```jsx
class <name> = {
<members>
}
```

Where name is the name of the class, and members are the properties and methods of the class.

## Члены Комитета

Членами класса могут быть свойства или методы. Свойства - это переменные, связанные с объектом. Методы - это функции, связанные с объектом.

## Свойства
Свойства определяются с помощью ключевого слова var. Для определения объекта используется следующий синтаксис:

```jsx
    вар <name>
```

Where name is the name of the property, and type is the type of the property.

## Методы
Methods are defined using the func keyword. Для определения метода используется следующий синтаксис:

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Where name is the name of the method, parameters are the parameters of the method, and statements are the statements in the method body.

## Создание объектов


Чтобы создать объект, используйте новое ключевое слово. Синтаксис для создания объекта является следующим:

```jsx
var <object_name> = new <class_name>();
```
Where object_name`is the name of the object, and class_name is the name of the class.

## Доступ к свойствам и методам

Свойства и методы объекта могут быть доступны с помощью точечной нотации. Например, для доступа к имени свойства объекта myObject, используйте следующий код:

```jsx
myObject.name;
```
To call the method add`of the object myObject, you would use the following code:

```jsx
myObject.add(2, 6);
```

## Пример
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

Этот код будет печатать значение 8.