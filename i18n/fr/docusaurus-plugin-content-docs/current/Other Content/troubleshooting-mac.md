---
sidebar_position: 50
---

# Dépannage de Macintosh

## Message d'erreur

Lorsque vous exécutez Juka pour la première fois sur Macintosh, vous pouvez obtenir le message d'erreur suivant :


![Etape 1](/img/macintosh/cannotbeopened.png)

Ne peut pas être ouvert car il provient d'un développeur non identifié.

## Solution

Pour résoudre ce problème, suivez ces étapes :

Double-cliquez sur l'application Juka.
1. Si elle tente d'ouvrir l'application dans l'éditeur de texte, ouvrez un terminal dans le même dossier et exécutez ./Juka.
2. Cliquez sur l'icône Apple dans le coin supérieur gauche de votre écran et allez dans Préférences Système.
3. Cliquez sur Sécurité & Confidentialité.
4. Cliquez sur l'onglet Général.
5. Cliquez sur le bouton Ouvrir quand même à côté de l'application Juka. ![Etape 2](/img/macintosh/openanyway.png)

6. Vous devriez maintenant pouvoir exécuter Juka.

![Etape 3](/img/macintosh/final.png)


## Solution alternative

Vous pouvez utiliser les solutions suivantes :

En supposant que Juka soit stocké sur votre bureau, ouvrez une fenêtre Terminal et accédez au répertoire Juka. Exécutez les commandes suivantes :

```jsx
chmod +x ./Juka
sudo spctl --master-disable ./Juka
```

3. Cela désactivera Gatekeeper pour la session en cours, vous permettant d'exécuter Juka.
4. Une fois que vous avez terminé d'utiliser Juka, exécutez la commande suivante pour réactiver le Gatekeeper :

```jsx
sudo spctl --master-enable
```

Cela réactivera le "gardien".

**Notes**
- Juka n'est actuellement pas signé par Apple, donc vous pouvez rencontrer ce message d'erreur lorsque vous le lancez pour la première fois.
- Nous travaillons à faire signer Juka par Apple, donc ce message d'erreur ne devrait pas être un problème à l'avenir.
- Si vous avez d'autres questions, n'hésitez pas à nous contacter.