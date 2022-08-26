---
sidebar_position: 12
---

# Funktionen

## Funktionen ausführen
Every script should have a main function. Scripts can be executed by calling the function within main function

# Usage Examples

```jsx
func x() = { 
    printLine("Hello"); 
}
func main() ={
    x();
}
```

Alle Funktionen sind mit der Wortfunktion definiert. Funktionen können alphanumerische Werte (einschließlich _) enthalten und Funktionen können nicht mit numerischen Werten beginnen. Funktionen sind einfach definiert:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

# Usage Example

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

func main() = {
    x();
    y();
    x();
}
```