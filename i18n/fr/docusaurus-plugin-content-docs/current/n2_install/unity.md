---
sidebar_position: 6
---

# Unité 3D

Juka peut être utilisé dans Unity 3D en suivant ces étapes:

1. Installez le package JukaCompiler NuGet .
2. Créez une chaîne de caractères multi-lignes dans le moteur (en utilisant `) puis exécutez ce qui suit :

```jsx
new JukaCompiler.Compiler().Go(sourceAsString, false);
```

## Exemple

Le code suivant affichera "Hello World" sur la console :

```jsx
string juka = `
func main() = {
printLine("Hello World")
}
`
var output new JukaCompiler.Compiler().Go(juka,false);
```
