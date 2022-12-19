---
sidebar_position: 2
---

# Architektur

## Ordnerstruktur:

### ./Beispiele
- Bietet Ihnen Beispiele, um mit der Verwendung von Juka zu beginnen

### ./src/JukaCompiler
- Der Kern der Sprache. Der Code kompiliert sich in .NET . ll Bibliothek, die in jedem C# Projekt verwendet werden kann, einschließlich Xamarin/MAUI zum Erstellen von iOS/Android Apps, Es wird hauptsächlich verwendet, um plattformübergreifende Apps für Mac/OS, Windows-Apps und Windows-Desktop-Anwendungen zu erstellen.

### ./src/JukaAzureFunktion
- Azure Funktion Laufzeitcode. Zum Ausführen der Juka Azure Funktion auf dem Microsoft Azure Cloud Server

### ./src/JukaNetwork
- Implementiert als Blockchain-Netzwerk zum Speichern und Verwalten von Paketen. Wird als dezentralisierter Paketmanager verwendet.

### ./src/JukaUnitTest
- Einheitstests zum Testen von JukaCompiler

### ./src/Juka
- Enthält GUI (Kommt bald)

### Anforderungen an Visual Studio/Entwicklung
##### Stellen Sie sicher, dass Sie die neueste Visual Studio installiert haben

Die folgenden Visual Studio-Pakete, die benötigt werden, um Juka zu starten und zu entwickeln:

- Azure Entwicklung
- .NET Desktop-Entwicklung

### Juka benutzt das folgende Schema, um den Code auszuführen:
![Layout](/img/Runtime.png)
