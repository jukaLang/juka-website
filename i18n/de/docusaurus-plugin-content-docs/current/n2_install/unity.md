---
sidebar_position: 6
---

# Einheit 3D

Juka kann in Unity 3D verwendet werden, indem du folgende Schritte folgst:

1. Installieren Sie das JukaCompiler NuGet Paket.
2. Erstelle eine mehrzeilige Zeichenkette in der Engine (mit `) und führe dann folgendes aus:

```jsx
neuer JukaCompiler.Compiler().Go(sourceAsString, false);
```

## Beispiel

Der folgende Code wird "Hallo World" auf die Konsole drucken:

```jsx
string juka = `
func main() = {
printLine("Hallo World");
}
`
var Ausgabe neuer JukaCompiler.Compiler().Go(juka,false);
```
