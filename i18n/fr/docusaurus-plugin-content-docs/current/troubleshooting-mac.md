---
sidebar_position: 50
---

# Dépannage de Macintosh

Parce que nous ne signons pas actuellement le langage de programmation Juka, vous pourriez avoir une erreur lorsque vous exécutez Juka sur Macintosh.

Lorsque vous exécutez Juka pour la première fois sur Macintosh, vous pourriez avoir l'erreur suivante : ![Etape 1](/img/macintosh/cannotbeopened.png)

Nous vous recommandons de suivre les instructions suivantes : https://www.youtube.com/watch?v=6lD0wsg55WU

Vous pouvez également exécuter les commandes suivantes :

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

## Solution de contournement alternative (non recommandée)

Une autre façon de contourner cela est de cliquer sur "pomme", et aller à "sécurité et préférences".

Vous recevrez un message indiquant que Juka provient d'un développeur non identifié.

Cliquez sur "Ouvrir"

NOTE : vous pourriez avoir besoin de cliquer sur le "Verrouiller" pour effectuer des modifications

![Etape 2](/img/macintosh/openanyway.png)

Gardez la fenêtre ouverte et continuez à relancer Juka jusqu'à ce que toutes les erreurs de sécurité disparaissent

![Etape 3](/img/macintosh/openanywaylibhost.png)

Finalement, vous pourrez exécuter Juka et voir l'écran suivant :

![Etape 3](/img/macintosh/final.png)


