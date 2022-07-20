---
sidebar_position: 6
---

# Exécuter Juka en 3D

Vous pouvez exécuter JukaCompiler à l'unité.

Suivez le tutoriel trouvé dans:

https://docs.microsoft.com/fr/visualstudio/gamedev/unity/unity-scripting-upgrade

Pour utiliser Juka, créez une chaîne de caractères multi-lignes dans le moteur (à l'aide de `) puis exécutez ce qui suit

```jsx
new JukaCompiler.Compiler().Go(sourceAsString,false);
```

## Exemple

Les résultats seront stockés en sortie :

```jsx
string juka = `
func x() = {
printLine("Hello World");
}
x();
`
var affiche new JukaCompiler.Compiler().Go(juka,false);
```

Si vous avez des questions, veuillez nous envoyer un message sur le discord.