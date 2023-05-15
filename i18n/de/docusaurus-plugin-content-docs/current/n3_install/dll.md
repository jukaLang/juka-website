---
sidebar_position: 30
---

# Juka in einem C# Projekt

Juka kann als .dll zu jedem C# Projekt hinzugefügt werden. You can download the latest version of .dll at https://jukalang.com/download

Es wird jedoch empfohlen, dass Sie ein NuGet Paket verwenden und JukaCompiler herunterladen, indem Sie NuGet Pakete durchsuchen.

Sie können das Paket auch über folgenden Befehl installieren:

```jsx
JukaCompiler installieren
```

Für weitere Informationen besuchen Sie https://www.nuget.org/packages/JukaCompiler

## Grundverwendung

Um den Code mit einem vordefinierten String zu kompilieren, fügen Sie folgendes zum C# Code hinzu:

```jsx
neuer JukaCompiler.Compiler().Go(sourceAsString, false);
```

Wenn Sie den Code mit einer Datei kompilieren müssen, können Sie eine Datei übergeben und folgenden Code ausführen:

```jsx
neu JukaCompiler.Compiler().Go(sourceAsString, true);
```

Die Ausgabe wird als String zurückgegeben.
