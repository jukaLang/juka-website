---
sidebar_position: 12
slug: /funktionen
---

# Funktionen

## Was ist eine Funktion?

Eine Funktion ist ein Block von Code, der mehrfach wiederverwendet werden kann. Funktionen werden mit dem `func` Schlüsselwort definiert.

## Syntax

Die Syntax für die Definition einer Funktion lautet wie folgt:

```jsx
func <name>(<parameters>) {
<statements>
}
```

Zum Beispiel definiert der folgende Code eine Funktion namens foo, die keine Parameter annimmt und nichts zurückgibt:

```jsx
func foo() = {
    printLine("Hallo, world!");
}
}
}
```

## Funktion aufrufen

Eine Funktion kann aufgerufen werden, indem der Name von einem Klammerpaar gefolgt wird. Zum Beispiel ruft der folgende Code die foo-Funktion auf:
```jsx
foo()
```

## Parameter
Eine Funktion kann Parameter verwenden, die Variablen sind, die an die Funktion übergeben werden, wenn sie aufgerufen wird. Die Parameter werden in den Klammern nach dem Funktionsnamen deklariert. Zum Beispiel definiert der folgende Code eine Funktion namens Bar, die zwei Parameter, x und

```jsx
func bar(x, y) = {
    printLine("Die Summe von x und y ist" + x + y);
}
```

Eine Funktion kann einen Wert zurückgeben. Der Wert wird nach den Parametern in den Klammern deklariert. Zum Beispiel definiert der folgende Code eine Funktion namens baz, die die Summe von zwei Zahlen zurückgibt:

```jsx
func baz(x, y) = {
    return x + y;
}
```

## Hauptfunktion

Jedes Juka-Programm muss eine Hauptfunktion haben. Die Hauptfunktion ist der Einstiegspunkt für das Programm. Die Hauptfunktion ist wie jede andere Funktion definiert, hat aber keinen Namen. Zum Beispiel definiert der folgende Code eine Hauptfunktion:

```jsx
func main()={
printLine("Hallo, world!");
}
}
}
```


