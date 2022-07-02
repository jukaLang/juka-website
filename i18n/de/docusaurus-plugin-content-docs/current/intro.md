---
sidebar_position: 1
slug: /
---

# Einführung

Jukas Hauptziel ist es, eine universelle Programmiersprache zu sein, die auf jeder Plattform einschließlich mobiler Geräte laufen kann.

Jukas Philosophie ist nur einmal Code, überall ausgeführt.

![jukaRun](https://user-images.githubusercontent.com/11934545/176820860-9ff1eff4-cbde-4e90-a56f-b0826f4760a5.gif)

__Aktuelles unterstütztes Gerät:__
- Fenster (x64)
- Windows (x86 32-Bit)
- Windows ARM (Arm x64)
- Linux (CentOS, Debian, Fedora, Ubuntu und Derivate)
- Linux ARM (Linux-Distributionen mit ARM z.B. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI Server)
- Docker (JukaAPI)
- Web Assembly (CDN/Browser/HTML-Server)

__Demnächst:__
- Android App
- AndroidTV App
- iOS App (iPhone/iPad)
- MacOS-App
- Windows-App (Windows 10+)

__Mögliche zukünftige Unterstützung:__
- AWS (Amazon Web Service)
- Google Cloud


### Juka herunterladen
Juka kann unter https://jukalang.com/download heruntergeladen werden

Wenn du ein "Nacht-Built" benötigst, kannst du die neueste Version unter https://github.com/jukaLang/juka/releases herunterladen

Achten Sie darauf, eine passende Version auf das Gerät herunterzuladen. Es gibt in der Regel 2 Versionen von Juka für jede OS: Juka und JukaAPI.
- Juka - Hauptanwendung, laden Sie diese herunter, wenn Sie unsicher sind.
- JukaAPI - Server für JUKA API via REST (laden Sie dies nicht herunter, wenn Sie sich nicht sicher sind, wie Sie es verwenden)

Die Dateien sollten eigenständig sein (Sie müssen keine anderen Dateien herunterladen oder andere Programme installieren)

## Joka läuft

### Fenster

Führen Sie den folgenden Befehl aus, um den Juka-Editor zu starten:

```jsx
./juka.exe
```

Wenn du Juka Code aus einer Datei ausführen möchtest, führe folgenden Befehl aus (ersetze HelloWorld.juk mit deinem Dateinamen)

```jsx
./juka.exe HelloWorld.juk
```

### Linux/MacOS/FreeBSD/UNIX/Raspberry PI

Führen Sie den folgenden Befehl aus, um den Juka-Editor zu starten:
```jsx
./juka
```

Wenn du Juka Code aus einer Datei ausführen möchtest, führe folgenden Befehl aus (ersetze HelloWorld.juk mit deinem Dateinamen)

```jsx
./Juka HelloWorld.juk
```


### Microsoft Azure Funktion

Laden Sie das Paket auf Azure Web Server hoch Benutzen Sie das Web Deploy, um Juka (Azure Funktionation) in der Cloud zu veröffentlichen

### Referenz im C# Projekt

Sie können Juka Compiler in C# referenzieren, indem Sie C# .dll herunterladen und im Projekt referenzieren.
