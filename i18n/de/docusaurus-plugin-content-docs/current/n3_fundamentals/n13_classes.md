---
sidebar_position: 13
slug: /klassen
---

# Klassen

## Was ist eine Klasse?

Eine Klasse ist eine Blaupause zum Erstellen von Objekten. Es definiert die Eigenschaften und Methoden, die Objekte dieser Klasse haben sollen.

## Wie man eine Klasse definiert

Um eine Klasse zu definieren, verwenden Sie das `Klasse` Schlüsselwort. Die Syntax für die Definition einer Klasse lautet wie folgt:

```jsx
class <name> = {
    <members>
}
```

Wo `Name` der Name der Klasse ist, und `Mitglieder` sind die Eigenschaften und Methoden der Klasse.

## Mitglieder

Die Mitglieder einer Klasse können Eigenschaften oder Methoden sein. Eigenschaften sind Variablen, die einem Objekt zugeordnet sind. Methoden sind Funktionen, die mit einem Objekt verknüpft sind.

## Eigenschaften
Eigenschaften werden mit dem var Schlüsselwort definiert. Die Syntax für die Definition einer Eigenschaft lautet wie folgt:

```jsx
    var <name>
```

Wo `Name` der Name der Eigenschaft ist und `Typ` der Typ der Eigenschaft.

## Methoden
Methoden werden mit dem `func` Schlüsselwort definiert. Die Syntax für die Definition einer Methode lautet wie folgt:

```jsx
func <name>(<parameters>) = {
    <statements>
}
```
Wo `Name` der Name der Methode ist, `Parameter` sind die Parameter der Methode, und `Anweisungen` sind die Anweisungen im Methodenkörper.

## Erstelle Objekte


Um ein Objekt zu erstellen, verwenden Sie das neue Schlüsselwort. Die Syntax zum Erstellen eines Objekts lautet wie folgt:

```jsx
var <object_name> = neu <class_name>();
```

Wo `object_name` der Name des Objekts ist und `class_name` der Name der Klasse.

## Zugriff auf Eigenschaften und Methoden

Auf die Eigenschaften und Methoden eines Objekts kann mit Hilfe der Punktnotation zugegriffen werden. Zum Beispiel, um auf den Eigenschaftsnamen des Objekts myObject, würden Sie den folgenden Code verwenden:

```jsx
myObject.name
```

Um die Methode `aufzurufen, fügen Sie` des Objekts `myObject`hinzu, verwenden Sie den folgenden Code:

```jsx
myObject.add(2, 6)
```

## Beispiel
Der folgende Code definiert eine Klasse namens `MathClass` und erstellt ein Objekt dieser Klasse:

```jsx
class MathClass {
    var num1: int
    var num2: int

    func add() {
        return this.num1 + this.num2
    }
}

var mathClass = new MathClass()
mathClass.num1 = 2
mathClass.num2 = 6
print(mathClass.add())
```

Dieser Code gibt den Wert 8 aus.