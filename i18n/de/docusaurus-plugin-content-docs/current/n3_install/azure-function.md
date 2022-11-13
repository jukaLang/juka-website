---
sidebar_position: 8
---

# Azure Funktion

### Lokal laufen
Juka can run locally without Azure Web server if you prefer to test Juka before uploading to your server. Führen Sie dazu folgende Schritte durch:
- Juka.sln in Windows Visual Studio 2022 öffnen
- Klicken Sie auf "Start AzureJukaFunction", um einen Azure Emulator lokal auszuführen.
- Verwenden Sie Postman, um Funktionen in "body" als Rohabfrage im folgenden Format an den Azure Server zu senden:


### Microsoft Azure Funktion
Laden Sie das Paket auf Azure Web Server hoch Benutzen Sie das Web Deploy, um Juka (Azure Funktionation) in der Cloud zu veröffentlichen

## Juka Azure Funktion

Juka kann den Code auf Juka Azure Function Server ausführen, indem er eine Rohanfrage-Nachricht im folgenden Format sendet:

```json
{
    "code": "func main() = { printLine(\"Hallo World\"} }"
}
```

HINWEIS: Sie müssen Zitate entgehen, sonst wird Juka einen Fehler zurückgeben.