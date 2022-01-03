---
sidebar_position: 3
---

# Funktionen

## Hauptfunktion
Jeder Eintragspunkt Code/Skript muss eine Eintragsfunktion haben. Eine Eintragsfunktion wird mit folgender Option definiert:

```jsx
Funktion main() = { }
```

HINWEIS: Skripte, die keine Hauptfunktion haben, können importiert werden, können aber nicht direkt ausgeführt werden. Die Hauptfunktion wird automatisch beim Eintrag aufgerufen. Wenn Sie es jedoch benötigen, können Sie die Main()-Funktionen explizit aufrufen.

## Funktionen
Alle Funktionen sind mit der Wortfunktion definiert. Funktionen können alphanumerische Werte (einschließlich _) enthalten und Funktionen können nicht mit numerischen Werten beginnen. Funktionen sind einfach definiert:

```jsx
function foo() = {
   printLine("Hallo Freund");
}
```

Beispiel:

```jsx
function main() = {

    int y = 5;

    while ( (y == 3) && (y == 5) || (y > 6) ){
        printLine("loop");
    }

    /*
    int x = foo();
    printLine (x);

    int z = verfügbarer Speicher();
    print( "memory size = ");
    printLine( z );

    print("x = ");
    printLine( x );

    int y = 4;
    print("y = ");
    printLine (y );

    x = y;
    Drucken ("weisen Sie Wert von y zu x = ");
    printLine( x );
    */
}


function foo() = {
    int x = 3;
    printLine(x);
    fart();
    return x;
}


function rock() = {
    bark();
    bark();
    printLine("rock");
}

function bark()={
    printLine("bark");
}
```