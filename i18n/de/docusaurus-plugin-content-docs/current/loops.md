---
sidebar_position: 5
---

# Schleifen

## Während Schleife

In Juka ist Schleife ähnlich wie die meisten anderen Programmiersprachen definiert.

Ein einfaches Beispiel für die während Schleife:

```jsx
int x = 0;
while(x < 2) {
    x = x+1;
}
```

In diesem Beispiel ist x auf 0 gesetzt. Das **während** Anweisung überprüft und sieht, dass x kleiner als 2 sein muss und wahr ist. Das **während die** Schleife läuft. Der Wert von x wird um 1 erhöht. Dies ist eine Juka-Methode, Werte zu steigern. Die **während** Schleife läuft nur zweimal.

## Pause
Du darfst eine Endlosschleife ausführen. Sie sollten jedoch eine Break-Anweisung haben, um die Schleife zu beenden

Ein einfaches Beispiel für Break:

```jsx
int x = 0;
while( 1 ){
    = x + 1;
    if ( x > 2) {
        break;
    }
}
```

Although using **break** is not recommended, it does provide a convenient and easy way to **break** a **while** loop.