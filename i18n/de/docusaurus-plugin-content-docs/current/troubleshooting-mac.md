---
sidebar_position: 50
---

# Fehlerbehebung Macintosh

Weil wir derzeit Juka Programmiersprache nicht unterschreiben, wirst du möglicherweise einen Fehler bekommen, wenn du Juka auf Macintosh ausführst.

When you first run Juka on Macintosh, you might get the following error: ![Schritt1](/img/macintosh/cannotbeopened.png)


## Workaround

Click on "apple", and go to "security and preferences".

Sie erhalten eine Nachricht, die besagt, dass Juka von einem unbekannten Entwickler stammt.

Klicken Sie auf "Trotzdem öffnen"

HINWEIS: Sie müssen eventuell auf "Sperren" klicken, um Änderungen vorzunehmen

![Schritt2](/img/macintosh/openanyway.png)


You should now be able to run Juka and see the following screen:

![stufen3](/img/macintosh/final.png)

## Alternative Workaround

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


