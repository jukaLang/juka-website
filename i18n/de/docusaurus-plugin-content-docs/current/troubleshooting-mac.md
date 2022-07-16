---
sidebar_position: 50
---

# Fehlerbehebung Macintosh

Because we currently do not sign Juka programming language package, you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh, you might get the following error:

![step1](/img/macintosh/cannotbeopened.png)


## Workaround

Double click on Juka

If it tries to open the application in the text editor, then open up a terminal in the same folder and run ./Juka

Click on "Apple" icon in the top left corner and go to "security and preferences".

Sie erhalten eine Nachricht, die besagt, dass Juka von einem unbekannten Entwickler stammt.

Klicken Sie auf "Trotzdem öffnen"

HINWEIS: Sie müssen eventuell auf "Sperren" klicken, um Änderungen vorzunehmen

![Schritt2](/img/macintosh/openanyway.png)


Du solltest jetzt in der Lage sein, Juka und den folgenden Bildschirm zu sehen:

![stufen3](/img/macintosh/final.png)

## Alternativer Workaround

Angenommen, Juka ist auf dem Desktop gespeichert
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-deaktivieren
./Juka
```

Dadurch wird die "Gatekeeper"-Anwendung deaktiviert, die es Ihnen erlaubt, Juka zu starten, obwohl die Anwendung von "nicht identifizierten" Entwicklern stammt.

Wenn du Juka benutzt hast, führe folgenden Befehl aus:

```jsx
sudo spctl --master-enable
```
Dadurch wird der "Gatekeeper" wieder aktiviert.


