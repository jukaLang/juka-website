---
sidebar_position: 50
---

# Dépannage de Macintosh

Parce que nous ne signons pas actuellement le paquet de langage de programmation Juka, vous pourriez avoir une erreur lorsque vous exécutez Juka pour la première fois sur Macintosh.

Lorsque vous exécutez Juka pour la première fois sur Macintosh, vous pourriez avoir l'erreur suivante:

![Etape 1](/img/macintosh/cannotbeopened.png)


## Solution

Double-cliquez sur Juka

Si elle tente d'ouvrir l'application dans l'éditeur de texte, ouvrez alors un terminal dans le même dossier et exécutez ./Juka

Cliquez sur l'icône "Apple" dans le coin supérieur gauche et allez à "Sécurité et préférences".

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


