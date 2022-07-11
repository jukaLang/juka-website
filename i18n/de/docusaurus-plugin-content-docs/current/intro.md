---
sidebar_position: 1
slug: /
---

# Einführung

Jukas Hauptziel ist es, eine universelle Programmiersprache zu sein, die auf jeder Plattform einschließlich mobiler Geräte laufen kann.

Jukas Philosophie ist nur einmal Code, überall ausgeführt.

![jukaRun](/img/latestjuka.gif)

__Aktuelles unterstütztes Gerät:__
- Windows (x86/x64)
- Windows ARM (ARM64)
- Linux (CentOS, Debian, Fedora, Ubuntu and derivatives)
- Linux ARM (ARM64 and ARM32) (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)
- [Web Assembly (CDN/Browser/HTML server)](https://github.com/jukaLang/juka-webassembly)
- [Jupyter via juka-kernel](https://github.com/jukaLang/juka_kernel)

__Demnächst:__
- JukaOS
- Android App
- AndroidTV App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)

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
