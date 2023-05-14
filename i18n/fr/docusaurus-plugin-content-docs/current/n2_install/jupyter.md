---
sidebar_position: 5
---

# Juka à Jupyter

Juka est un nouveau langage de programmation qui est conçu pour être utilisé pour la science et l'analyse des données. Il est similaire à Python, mais il est plus puissant et efficace.

Jupyter est un environnement interactif populaire pour le développement et l'exécution de code. Il peut être utilisé avec de nombreux langages de programmation, y compris Python, R, et Julia.

L'équipe Juka a créé un noyau Juka pour Jupyter. Ce noyau vous permet d'exécuter du code Juka dans les cahiers Jupyter.

Pour utiliser le noyau Juka, vous devez installer Juka et Jupyter. Vous pouvez trouver les instructions d'installation de Juka sur le site [Juka](https://jukalang.com/download). Vous pouvez trouver les instructions d'installation de Jupyter sur le site [Jupyter](https://jupyter.org/install).

Une fois, téléchargez ajouter Juka au chemin.

Sous Windows, il est recommandé de suivre les étapes, décrites à https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

Sous Linux/Unix/MacOS (bash): En supposant que nous avons stocké Juka dans /usr/bin/share/Juka, nous exécutons la commande suivante :

```jsx
$ export path = "/usr/bin/share/Juka:$PATH"
```

Cela va ajouter Juka à PATH

Une fois que vous avez installé Juka et Jupyter, vous devez installer le noyau Juka :

### Utiliser PIP
```jsx
pip install juka_kernel
```

### Using Github
ou installez-le directement à partir de la source en téléchargeant depuis : https://github.com/jukaLang/juka_kernel et en exécutant :

```jsx
python -m juka_kernel.install
```

dans le dossier du noyau.

## Étapes suivantes

Vous pouvez commencer à utiliser le noyau Juka dans les blocs-notes Jupyter. Pour cela, ouvrez un bloc-notes Jupyter et sélectionnez « Nouveau » dans le menu. Dans le menu déroulant "Carnet", sélectionnez "Juka".

Vous pouvez maintenant commencer à écrire du code Juka dans votre bloc-notes Jupyter. Pour exécuter votre code, sélectionnez "Exécuter" dans le menu.

Le noyau Juka compilera et exécutera votre code. La sortie de votre code sera affichée dans le bloc-notes.

Le noyau Juka est un outil puissant qui vous permet d'utiliser Juka dans les blocs-notes Jupyter. Cela facilite le développement et le débogage du code Juka.

## Détails techniques

Le noyau Juka est écrit en Python et utilise le protocole [Jupyter](https://jupyter.org/protocol). Le noyau ne compile pas ou n'exécute pas le code Juka. Il sert simplement de protocole de messagerie entre Jupyter et Juka.

Le noyau Juka est open source et est disponible sur [GitHub](https://github.com/juka/juka_kernel).

## Contribuer

Si vous souhaitez contribuer au noyau Juka, veuillez consulter les [directives de contribution](https://github.com/juka/juka_kernel/blob/master/CONTRIBUTING.md).