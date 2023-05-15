---
sidebar_position: 13
slug: /klassen
---

# Klassen

## Was ist eine Klasse?

Eine Klasse ist eine Blaupause zum Erstellen von Objekten. Es definiert die Eigenschaften und Methoden, die Objekte dieser Klasse haben sollen.

## Wie man eine Klasse definiert

Die Syntax für die Definition einer Klasse lautet wie folgt: To define a class, use the class keyword.

```jsx
class <name> = {
<members>
}
```

Where name is the name of the class, and members are the properties and methods of the class.

## Mitglieder

Die Mitglieder einer Klasse können Eigenschaften oder Methoden sein. Eigenschaften sind Variablen, die einem Objekt zugeordnet sind. Methoden sind Funktionen, die mit einem Objekt verknüpft sind.

## Eigenschaften
Eigenschaften werden mit dem var Schlüsselwort definiert. Die Syntax für die Definition einer Eigenschaft lautet wie folgt:

```jsx
    var <name>;
```

Where name is the name of the property, and type is the type of the property.

## Methoden
Die Syntax für die Definition einer Methode lautet wie folgt: Methods are defined using the func keyword.

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Where name is the name of the method, parameters are the parameters of the method, and statements are the statements in the method body.

## Erstelle Objekte


Um ein Objekt zu erstellen, verwenden Sie das neue Schlüsselwort. Die Syntax zum Erstellen eines Objekts lautet wie folgt:

```jsx
var <object_name> = neu <class_name>();
```

Where object_name`is the name of the object, and class_name is the name of the class.

## Zugriff auf Eigenschaften und Methoden

Auf die Eigenschaften und Methoden eines Objekts kann mit Hilfe der Punktnotation zugegriffen werden. Zum Beispiel, um auf den Eigenschaftsnamen des Objekts myObject, würden Sie den folgenden Code verwenden:

```jsx
myObject.name;
```

To call the method add`of the object myObject, you would use the following code:

```jsx
myObject.add(2, 6);
```

## Beispiel
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

Dieser Code gibt den Wert 8 aus.