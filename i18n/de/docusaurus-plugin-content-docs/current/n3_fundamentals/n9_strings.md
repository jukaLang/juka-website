---
sidebar_position: 9
slug: /strings
---

# Zeichenketten

## Was ist eine Zeichenkette?

Eine Zeichenkette ist eine Folge von Zeichen. Bei der Programmierung werden Zeichenketten oft verwendet, um Text zu repräsentieren.

## Zeichenketten definieren

Zeichenketten werden mit Anführungszeichen definiert. Zum Beispiel definiert der folgende Code einen String namens `animal` und setzt ihn auf den Wert "cat":

```jsx
var animal = "Katze";
```

## Zeichenketten mit einer Zahl kombinieren

Immer wenn Sie eine Zeichenkette zu einer Zahl (oder umgekehrt) hinzufügen, wird das Endergebnis ein String sein. Die Zahlen werden implizit in Strings konvertiert. Zum Beispiel druckt der folgende Code den String "123abc":

```jsx
print("123" + "abc");
```