---
sidebar_position: 2
---

# Azure Funktion

- Juka.sln öffnen
- Führen Sie DreamUnitTests mit Test->Run->Alle Tests aus, um sicherzustellen, dass alle Tests bestanden.
- Klicken Sie auf "Start AzureJukaFunction", um einen Azure Emulator lokal auszuführen.
- Verwenden Sie Postman, um Funktionen in "body" als Rohabfrage im folgenden Format an den Azure Server zu senden:
```json
{
    "code": "function main() = {}"
}
```
