---
sidebar_position: 50
---

# Dépannage de Macintosh

Parce que nous ne signons pas actuellement le langage de programmation Juka, vous pourriez avoir une erreur lorsque vous exécutez Juka sur Macintosh.

Lorsque vous exécutez Juka pour la première fois sur Macintosh, vous pourriez avoir l'erreur suivante : ![Etape 1](/img/macintosh/cannotbeopened.png)


## Workaround

Click on "apple", and go to "security and preferences".

Vous recevrez un message indiquant que Juka provient d'un développeur non identifié.

Cliquez sur "Ouvrir"

NOTE : vous pourriez avoir besoin de cliquer sur le "Verrouiller" pour effectuer des modifications

![Etape 2](/img/macintosh/openanyway.png)


You should now be able to run Juka and see the following screen:

![Etape 3](/img/macintosh/final.png)

## Alternative Workaround

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


