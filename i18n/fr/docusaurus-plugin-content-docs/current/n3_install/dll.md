---
sidebar_position: 30
---

# Juka dans un projet C

Juka peut être ajouté à n'importe quel projet C# en tant que .dll. You can download the latest version of .dll at https://jukalang.com/download

Cependant, il est recommandé d'utiliser un package NuGet et de télécharger JukaCompiler en recherchant les paquets NuGet .

Vous pouvez également installer le paquet en exécutant la commande suivante :

```jsx
Install-Pack JukaCompiler
```

Pour plus d'informations, visitez https://www.nuget.org/packages/JukaCompiler

## Utilisation de base

Pour compiler le code en utilisant une chaîne prédéfinie, ajoutez ce qui suit au code C# :

```jsx
new JukaCompiler.Compiler().Go(sourceAsString, false);
```

Si vous avez besoin de compiler le code en utilisant un fichier, vous pouvez passer dans un fichier et exécuter le code suivant :

```jsx
new JukaCompiler.Compiler().Go(sourceAsString, true);
```

La sortie sera retournée sous la forme d'une chaîne de caractères.
