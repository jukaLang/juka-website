---
sidebar_position: 50
---

# Dépannage de Macintosh

Because we currently do not sign Juka programming language, you might get an error when you first run Juka on Macintosh.

Lorsque vous exécutez Juka pour la première fois sur Macintosh, vous pourriez avoir l'erreur suivante : ![step1](/img/macintosh/cannotbeopened.png)

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

Cliquez sur "Ouvrir"

NOTE : vous pourriez avoir besoin de cliquer sur le "Verrouiller" pour effectuer des modifications

![Etape 2](/img/macintosh/openanyway.png)

Gardez la fenêtre ouverte et continuez à relancer Juka jusqu'à ce que toutes les erreurs de sécurité disparaissent

![Etape 3](/img/macintosh/openanywaylibhost.png)

Finalement, vous pourrez exécuter Juka et voir l'écran suivant :

![Etape 3](/img/macintosh/final.png)


