---
sidebar_position: 6
---

# Unity 3D

Sie können JukaCompiler in Unity ausführen.

Folgen Sie dem Tutorial gefunden am:

https://docs.microsoft.com/de-de/visualstudio/gamedev/unity/unity-scripting-upgrade

Um Juka zu verwenden, erstellen Sie eine mehrzeilige Zeichenkette in der Engine (mit `) und führen Sie dann folgende aus

```jsx
neu JukaCompiler.Compiler().Go(sourceAsString,false);
```

## Beispiel

Ergebnisse werden in der Ausgabe gespeichert:

```jsx
string juka = `
func x() = {
printLine("Hallo World");
}
x();
`
var output new JukaCompiler.Compiler().Go(juka,false);
```

Wenn Sie Fragen haben, senden Sie uns bitte eine Nachricht auf Unstimmigkeit.