---
sidebar_position: 2
---

# Architektur

## Ordnerstruktur

Die Juka-Codebase ist in den folgenden Ordnern organisiert:

* **./examples** - Dieser Ordner enthält Beispiele für Juka-Code.
* **./src/JukaCompiler** - Dieser Ordner enthält den Kern des Juka Compilers.
* **./src/JukaAzureFunction** - Dieser Ordner enthält den Code zum Ausführen von Juka Azure Funktionen auf dem Microsoft Azure Cloud Server.
* **./src/JukaNetwork** - Dieser Ordner enthält den Code für das Juka-Netzwerk, ein Blockchain-Netzwerk zum Speichern und Verwalten von Paketen.
* **./src/JukaUnitTest** - Dieser Ordner enthält Einheitstests für den Juka-Compiler.
* **./src/Juka** - Dieser Ordner enthält den Code für die Juka GUI (demnächst erhältlich).

## Anforderungen an Visual Studio/Entwicklung

Um Juka zu entwickeln und zu betreiben, benötigst du Folgendes:

* Die neueste Version von Visual Studio.
* Die folgenden Visual Studio Pakete:
  * Azure Entwicklung
  * .NET Desktop-Entwicklung

## Laufzeit

Juka benutzt das folgende Schema, um den Code auszuführen:

![Layout](/img/Runtime.png)

Der Juka Compiler kompiliert Juka Code in eine .NET .dll Bibliothek. Diese Bibliothek kann dann in jedem C# Projekt verwendet werden, einschließlich Xamarin/MAUI zum Erstellen von iOS/Android Apps, und wird hauptsächlich dazu verwendet, plattformübergreifende Apps für Mac/OS, Windows-Apps und Windows-Desktop-Anwendungen zu erstellen.

Der Juka Azure Function Runtime Code wird verwendet, um Juka Azure Funktionen auf dem Azure Cloud Server von Microsoft auszuführen.

Das Juka-Netzwerk ist ein Blockchain-Netzwerk zum Speichern und Verwalten von Paketen. Es wird als dezentraler Paketmanager verwendet.

Die Juka Unit-Tests werden verwendet, um den Juka Compiler zu testen.

Die Juka GUI ist eine grafische Benutzeroberfläche für Juka, die derzeit entwickelt wird.

## Notizen

* Das Juka-Projekt befindet sich noch in der Entwicklung, so dass einige Funktionen möglicherweise noch nicht verfügbar sind.
* Wenn Sie Fragen oder Feedback haben, zögern Sie nicht uns zu kontaktieren.