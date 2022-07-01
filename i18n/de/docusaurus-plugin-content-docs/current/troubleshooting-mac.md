---
sidebar_position: 50
---

# Fehlerbehebung Macintosh

Because we currently do not sign Juka programming language, you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh, you might get the following error: ![step1](/img/macintosh/cannotbeopened.png)

We recommend that you follow instructions outlined: https://www.youtube.com/watch?v=6lD0wsg55WU

You can also run the following commands:

Assuming that Juka is stored on Desktop
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-disable
./Juka
```

This will disable the "gatekeeper" application allowing you to run Juka even though the application came from "unidentified" developer.

Once you are done using Juka, run the following command:

```jsx
sudo spctl --master-enable
```
This will re-enable the "gatekeeper".

## Alternative Workaround (Not recommended)

Another way to work around this is click on "apple", and go to "security and preferences".

You will get a message stating that Juka is from an unidentified developer.

Klicken Sie auf "Trotzdem öffnen"

HINWEIS: Sie müssen eventuell auf "Sperren" klicken, um Änderungen vorzunehmen

![Schritt2](/img/macintosh/openanyway.png)

Öffne das Fenster und führe Juka weiter aus, bis alle Sicherheitsfehler verschwinden

![stufen3](/img/macintosh/openanywaylibhost.png)

Letztendlich können Sie Juka starten und den folgenden Bildschirm sehen:

![stufen3](/img/macintosh/final.png)


