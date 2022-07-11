---
sidebar_position: 50
---

# Fehlerbehebung Macintosh

Weil wir derzeit Juka Programmiersprache nicht unterschreiben, wirst du möglicherweise einen Fehler bekommen, wenn du Juka auf Macintosh ausführst.

When you first run Juka on Macintosh, you might get the following error: ![Schritt1](/img/macintosh/cannotbeopened.png)


## Workaround

Klicken Sie auf "apple" und gehen Sie zu "security und Einstellungen".

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


