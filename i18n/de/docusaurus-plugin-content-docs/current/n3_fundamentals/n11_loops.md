---
sidebar_position: 11
slug: /loops
---

# Schleifen

## Während Schleife

Eine while loop ist eine Kontrollfluss-Anweisung, die es erlaubt, Code basierend auf einer boolschen Bedingung wiederholt auszuführen. Die Syntax einer Zeitschleife lautet wie folgt:

```jsx
während <condition>
{
<statements>
}
```

Zum Beispiel druckt der folgende Code die Zahlen von 1 bis 5:

```jsx
func foo() = {
    var x = 1

    while(x <= 5){
        printLine(x)
        x = x + 1
    }
}
```

## Pause

Die break -Anweisung kann zum Beenden einer Schleife verwendet werden. Die Syntax der Break-Anweisung lautet wie folgt:

```jsx
break
```

Zum Beispiel druckt der folgende Code die Zahlen von 1 bis 5 aber es wird die Schleife verlassen, wenn der Wert von x 3 erreicht:

```jsx
func main() = {
    var x = 0
    while( 1){
    x = x + 1;
        if (x > 2) {
            break
        }
    }
}
```
