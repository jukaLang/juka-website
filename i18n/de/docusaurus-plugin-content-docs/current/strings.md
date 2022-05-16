---
sidebar_position: 4
---

# Zeichenketten

## Zeichenketten definieren
Es gibt drei Wege, Strings in Juka zu definieren. Du kannst **'**, **"**und **`** verwenden.

## Wann wird **`** verwendet?
Wenn Sie einen rohen String haben, der *'* und *"* enthält und Sie nicht den ganzen Text durchgehen wollen, um ihn zu entschlüsseln.

## Zeichenketten mit anderen Zeichenketten verbinden
Die Zusammenführung der Saiten ist in Juka sehr einfach. Es gibt zwei Möglichkeiten, String zu koppeln. Sie können den traditionellen Weg machen:


```jsx
print("Hallo" + "Welt" + "Wie" + "is" + "it" + "geht?");
```

In Juka gibt es eine andere Möglichkeit, dies zu tun. Aufgrund der Präfix-Natur kannst du dies tun:
```jsx
print(+ "Hallo" "Welt" "Wie" "is" "it" "geht?");
```

Dies ist eine legitime Aussage in Juka.

## Zeichenketten werden mit einer Zahl verbunden

Immer wenn Sie eine Zeichenkette mit einer Zahl verbinden, wird das Endergebnis String sein. Die Zahlen werden implizit in Strings konvertiert. Dann verketten sich Strings regelmäßig, wie im vorherigen Abschnitt erwähnt.
