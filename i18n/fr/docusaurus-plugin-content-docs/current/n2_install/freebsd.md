---
sidebar_position: 4
---

# FreeBSD

Pour installer Juka sur FreeBSD, exécutez la commande suivante :

```jsx
pkg install juka
```

ou téléchargez-le directement sur https://jukalang.com/download

Une fois que Juka est installé, vous pouvez démarrer l'éditeur en exécutant la commande suivante :

```jsx
./juka
```
![freebsd](/img/freebsd.png)

Pour exécuter le code Juka depuis un fichier, exécutez la commande suivante, en remplaçant le nom de votre fichier par `my_file.juk`:

```jsx
./juka mon_fichier.juk
```

Par exemple, pour exécuter le code dans le fichier `hello_world.juk`, vous exécuteriez la commande suivante :

```jsx
format@@0 ./juka hello_world.juk
```

Cela compilera et exécutera le code Juka dans le fichier, et affichera la sortie sur la console.