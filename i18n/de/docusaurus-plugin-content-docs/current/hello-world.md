---
sidebar_position: 2
---

# Schreibe deine erste Anwendung

## Hallo Welt
Beginnen wir mit der Erstellung einer HelloWorld-Anwendung. Leere Datei erstellen und als HelloWorld.juk speichern

Kopiere und füge folgenden Code in diese Datei ein:

```jsx
func main() = {
   printLine("foo");
}
```

Sobald die Datei fertig ist, speichern Sie die Datei und führen Sie einen entsprechenden Befehl aus, um die Datei zu kompilieren


### Fenster
Wenn Sie PATH-Variable hinzugefügt haben:

```jsx
juka.exe HelloWorld.juk
```

Wenn Sie keine PATH-Variable hinzugefügt haben:
```jsx
./juka.exe Pfad/zu/HelloWorld.juk
```

### Macintosh/Linux

Wenn Sie PATH-Variable hinzugefügt haben:

```jsx
juka HelloWorld.juk
```

Wenn Sie keine PATH-Variable hinzugefügt haben:
```jsx
./Juka Pfad/zu/HelloWorld.juk
```

### Microsoft Azure Funktion
Weitere Informationen hierzu finden Sie im Abschnitt „Azure Funktion“