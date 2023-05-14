---
sidebar_position: 8
---

# Azure Funktion

## Juka lokal laufen

Juka kann lokal ohne Azure Web-Server ausgeführt werden. Dies ist nützlich, um Juka vor dem Hochladen auf einen Server zu testen.

Um Juka lokal zu betreiben, folgen Sie diesen Schritten:

1. Öffnen Sie das Juka.sln Projekt in Visual Studio 2022.
2. Klicke auf den **Start AzureJukaFunction** Button. Dies wird einen Azure-Emulator lokal starten.
3. Verwenden Sie Postman, um Funktionen an den Azure Emulator zu senden. Erstellen Sie dazu eine neue Anfrage und setzen Sie die Anfragemethode auf **POST**. Im Tab **Body** wählen Sie **Roh** und fügen den folgenden Code ein:

```json
{
  "code": "func main() { printLine(\"Hallo World\") }"
}
```

4. Klicken Sie auf **Senden**. Der Juka Emulator führt die Funktion aus und druckt die Nachricht "Hallo Welt" auf die Konsole.

## Läuft Juka auf Asche

Um Juka auf Azure zu betreiben, folgen Sie diesen Schritten:

1. Laden Sie das Juka-Paket nach Azure hoch.
2. Verwenden Sie Web-Deploy, um Juka auf Azure zu veröffentlichen.
3. Um Juka von einem Kunden anzurufen, senden Sie eine Rohanfrage-Nachricht an den Juka-Endpunkt. Die Anfragenachricht sollte das folgende Format haben:

```json
{
  "code": "func main() { printLine(\"Hallo World\") }"
}
```

**Hinweis:** Sie müssen Zitate entgehen, sonst wird Juka einen Fehler zurückgeben.