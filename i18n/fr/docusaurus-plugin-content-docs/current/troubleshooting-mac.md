---
sidebar_position: 50
---

# Dépannage de Macintosh

Because we currently do not sign Juka programming language package, you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh, you might get the following error:

![step1](/img/macintosh/cannotbeopened.png)


## Solution

Double click on Juka

If it tries to open the application in the text editor, then open up a terminal in the same folder and run ./Juka

Click on "Apple" icon in the top left corner and go to "security and preferences".

Vous recevrez un message indiquant que Juka provient d'un développeur non identifié.

Cliquez sur "Ouvrir"

NOTE : vous pourriez avoir besoin de cliquer sur le "Verrouiller" pour effectuer des modifications

![Etape 2](/img/macintosh/openanyway.png)


Vous devriez maintenant pouvoir exécuter Juka et voir l'écran suivant :

![Etape 3](/img/macintosh/final.png)

## Solution alternative

En supposant que Juka soit stocké sur le bureau
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-disable
./Juka
```

Cela désactivera l'application "gatekeeper" qui vous permettra d'exécuter Juka même si l'application venait du développeur "non identifié".

Une fois que vous avez fini d'utiliser Juka, exécutez la commande suivante :

```jsx
sudo spctl --master-enable
```
Cela réactivera le "gardien".


