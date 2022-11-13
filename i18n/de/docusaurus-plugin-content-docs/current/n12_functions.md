---
sidebar_position: 12
slug: /funktionen
---

# Funktionen

## Funktionen ausführen
Jedes Skript sollte eine Hauptfunktion haben. Skripte können durch Aufruf der Funktion innerhalb der Hauptfunktion ausgeführt werden

# Nutzungsbeispiele

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
   printLine("Hallo Freund!");
}
func main() = {
    foo();
}
```

# Verwendungsbeispiel

```jsx
func x() = {
    var = "Hallo Welt";
    printLine(y);
    printLine("Es funktioniert! );
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