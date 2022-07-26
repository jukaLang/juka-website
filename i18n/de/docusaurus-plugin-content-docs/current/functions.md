---
sidebar_position: 5
---

# Funktionen

## Funktionen ausführen

Skripte können durch Aufruf der Funktion selbst ausgeführt werden. Zum Beispiel:
```jsx
func x() = { printLine("Hello"); } x();
```

Alle Funktionen sind mit der Wortfunktion definiert. Funktionen können alphanumerische Werte (einschließlich _) enthalten und Funktionen können nicht mit numerischen Werten beginnen. Funktionen sind einfach definiert:

```jsx
func foo() = {
   printLine("Hallo Freund!");
}
foo();
```

Beispiel:

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
x();
y();
x();

```