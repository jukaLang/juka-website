---
sidebar_position: 3
---

# Funktionen

## Hauptfunktion
Jeder Eintragspunkt Code/Skript muss eine Eintragsfunktion haben. Eine Eintragsfunktion wird mit folgender Option definiert:

```jsx
func main() = { }
```

HINWEIS: Skripte, die keine Hauptfunktion haben, können importiert werden, können aber nicht direkt ausgeführt werden. Die Hauptfunktion wird automatisch beim Eintrag aufgerufen. Wenn Sie es jedoch benötigen, können Sie die Main()-Funktionen explizit aufrufen.

## Funktionen
Alle Funktionen sind mit der Wortfunktion definiert. Funktionen können alphanumerische Werte (einschließlich _) enthalten und Funktionen können nicht mit numerischen Werten beginnen. Funktionen sind einfach definiert:

```jsx
func foo() = {
   printLine("Hallo Freund");
}
```

Beispiel:

```jsx
func main() = {

    int y = 5;

    while ( (y == 3) && (y == 5) || (y > 6) ){
        printLine("loop");
    }

}


func foo() = {
    int x = 3;
    printLine(x);
    fart();
    return x;
}


func rock() = {
    bark();
    bark();
    printLine("rock");
}

func bark()={
    printLine("bark");
}
```