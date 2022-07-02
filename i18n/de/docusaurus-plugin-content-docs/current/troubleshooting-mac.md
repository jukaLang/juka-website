---
sidebar_position: 50
---

# Fehlerbehebung Macintosh

Weil wir derzeit Juka Programmiersprache nicht unterschreiben, wirst du möglicherweise einen Fehler bekommen, wenn du Juka auf Macintosh ausführst.

When you first run Juka on Macintosh, you might get the following error: ![Schritt1](/img/macintosh/cannotbeopened.png)

Wir empfehlen, dass du den umrissenen Anweisungen folgst: https://www.youtube.com/watch?v=6lD0wsg55WU

Sie können auch folgende Befehle ausführen:

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

## Alternative Problemumgehung (Nicht empfohlen)

Eine andere Möglichkeit, dies zu umgehen, ist auf "apple" zu klicken und gehen Sie zu "Sicherheit und Einstellungen".

Sie erhalten eine Nachricht, die besagt, dass Juka von einem unbekannten Entwickler stammt.

Klicken Sie auf "Trotzdem öffnen"

HINWEIS: Sie müssen eventuell auf "Sperren" klicken, um Änderungen vorzunehmen

![Schritt2](/img/macintosh/openanyway.png)

Öffne das Fenster und führe Juka weiter aus, bis alle Sicherheitsfehler verschwinden

![stufen3](/img/macintosh/openanywaylibhost.png)

Letztendlich können Sie Juka starten und den folgenden Bildschirm sehen:

![stufen3](/img/macintosh/final.png)


