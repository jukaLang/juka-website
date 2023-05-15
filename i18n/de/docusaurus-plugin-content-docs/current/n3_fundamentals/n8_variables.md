---
sidebar_position: 8
slug: /variablen
---

# Variablen


## Was ist eine Variable?

Eine Variable ist ein benannter Speicherort im Speicher, der verwendet werden kann, um einen Wert zu speichern. Variablen können verwendet werden, um beliebige Datentypen wie Zahlen, Zeichenketten, Objekte und Arrays zu speichern.

## Variablen definieren

Variablen werden mit dem `var` Schlüsselwort definiert. Die Syntax für die Definition einer Variable lautet wie folgt:

```jsx
var <name> = <value>
```

Zum Beispiel definiert der folgende Code eine Variable namens `x` und setzt sie auf den Wert 3:
```jsx
var x = 3
```

## Verarbeite Variablen
Der Wert einer Variable kann durch eine Zuordnung geändert werden. Um eine Variable neu zuzuweisen, verwenden Sie einfach das Schlüsselwort var erneut, gefolgt von dem neuen Wert. Zum Beispiel weist der folgende Code den Wert der Variable x auf 4 um:
```jsx
var x = 3
x = 4
```

## Lösche Variablen
Variablen können mit dem Löschen des Schlüsselwortes gelöscht werden. Die Syntax zum Löschen einer Variable lautet wie folgt:
```jsx
delete <name>
```

Zum Beispiel löscht der folgende Code die Variable `x`:

```jsx
delete x
```

## Häufige Fehler

Es gibt einige häufige Fehler, die bei der Arbeit mit Variablen gemacht werden können. Ein häufiger Fehler ist das Vergessen eine Variable zu deklarieren. Wird eine Variable nicht deklariert, ist sie im Programm nicht verfügbar. Ein weiterer häufiger Fehler ist die Zuweisung eines Wertes an eine Variable, die nicht der richtige Typ ist. Zum Beispiel wird der folgende Code einen Fehler erzeugen, da der Wert "3" ein String ist, aber die Variable x ist eine Ganzzahl:

```jsx
var x = "3"
```

Schließlich ist es wichtig zu bedenken, dass Variablen umgangen werden. Dies bedeutet, dass auf eine Variable nur dann zugegriffen werden kann, wenn sie deklariert wird. Wenn Sie versuchen, auf eine Variable außerhalb ihres Anwendungsbereichs zuzugreifen, erhalten Sie einen Fehler.