---
sidebar_position: 5
---

# Juka à Jupyter

Si vous êtes un data scientist ou un analytique, vous avez probablement entendu parler et utilisé Jupyter.

Généralement, Jupyter est utilisé pour exécuter du code Python. Cependant, il peut être utilisé dans de nombreuses autres langues.

Nous avons créé un noyau Juka_kernel qui permet à Juka de communiquer directement avec Jupyter.

Tout d'abord, vous devez télécharger Juka (https://jukalang.com/download) Une fois, téléchargé ajouter Juka au chemin.

Sous Windows, il est recommandé de suivre les étapes, décrites à https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

Sous Linux/Unix/MacOS (bash): En supposant que nous avons stocké Juka dans /usr/bin/share/Juka, nous exécutons la commande suivante :

```jsx
$ export path = "/usr/bin/share/Juka:$PATH"
```

Cela va ajouter Juka à PATH

REMARQUE : Il se peut que vous deviez redémarrer le terminal. Il est recommandé de redémarrer votre ordinateur également.

Ensuite, vous devrez installer jupyter. Veuillez suivre les étapes décrites sur https://jupyter.org/install si vous ne l'avez pas fait.

Ensuite, vous pouvez soit installer Juka_kernel à partir de PyPi, en exécutant

```jsx
pip install juka_kernel
```

ou installez-le directement à partir de la source en téléchargeant depuis : https://github.com/jukaLang/juka_kernel et en exécutant :

```jsx
python -m juka_kernel.install
```

dans le dossier du noyau.

## Utiliser le noyau Juka

**Notebook**: The _New_ menu in the notebook should show an option for an Juka notebook.

**Console frontends**: Pour l'utiliser avec les interfaces console, ajoutez `--kernel juka` à leurs arguments de ligne de commande.

### Que se passe-t-il si une nouvelle version de Juka vient ?

Si une nouvelle version de Juka est sortie, vous n'avez pas besoin de mettre à jour ou mettre à jour le noyau juka_kernel (à moins que nous ne fassions de gros changements au noyau). Tout ce que vous avez à faire est de remplacer les fichiers dans PATH Juka. Voilà! Cela facilite la mise à jour de Juka sans avoir à désinstaller et réinstaller le noyau

## Détails techniques

Le noyau Juka est écrit en Python et sert de pont entre Jupyter et Juka. Il ne compile ni n'exécute le code Juka. Cela sert simplement de protocole de messagerie.

Si vous souhaitez contribuer au noyau Juka_kernel, veuillez voir https://github.com/juka/juka_kernel
