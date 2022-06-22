---
sidebar_position: 3
---

# Funktionen

## Hauptfunktion
Juka automatically executes main() function.

```jsx
func main() = { printLine("Hello");}
```

NOTE: the scripts that do not have main function, can be executed by calling the function itself. For example:
```jsx
func x() = { printLine("Hello"); } x();
```

## Funktionen
Alle Funktionen sind mit der Wortfunktion definiert. Funktionen können alphanumerische Werte (einschließlich _) enthalten und Funktionen können nicht mit numerischen Werten beginnen. Funktionen sind einfach definiert:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
foo();
```

Beispiel:

```jsx
func x() = {
    string y = "Hello World";
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