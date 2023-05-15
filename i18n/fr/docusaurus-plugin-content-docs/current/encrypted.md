---
sidebar_position: 2
slug: /chiffré
---

# Chiffrement
Juka peut chiffrer et déchiffrer des fichiers. Il peut également exécuter des fichiers de scripts Juka chiffrés.

Pour chiffrer un fichier "HelloWorld.juk", exécutez ce qui suit dans la console :

```jsx
./juka --encrypt HelloWorld.juk
```

Cela va créer deux fichiers :
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

Ils HelloWorld.juk.encrypt contient le fichier chiffré. La clé HelloWorld.juk.key contient la clé AES à utiliser pour déchiffrer le fichier.


Pour déchiffrer le fichier à nouveau à "HelloWorld.juk", exécutez la commande suivante :

```jsx
./juka --decrypt HelloWorld.juk
```

Cela prendra "HelloWorld.juk.encrypt" et "HelloWorld.juk.key" et déchiffrera le fichier. REMARQUE : Vous pouvez chiffrer/déchiffrer n'importe quel fichier (pas seulement les scripts Juka)

Pour exécuter les fichiers chiffrés sans avoir à déchiffrer, exécutez ce qui suit :

```jsx
./juka --crypté HelloWorld.juk
```

Cela utilisera les fichiers suivants :
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

les déchiffrer en mémoire et les exécuter à Juka.


![crypté](/img/encrypted.png)

