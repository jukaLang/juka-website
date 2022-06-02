---
sidebar_position: 2
---

# Écriture de votre première application

## Bonjour le monde
Commençons par créer une application HelloWorld. Créez un fichier vide et enregistrez-le en tant que HelloWorld.juk

Dans ce fichier, copiez et collez le code suivant :

```jsx
func main() = {
   printLine("foo");
}
```

Une fois terminé, enregistrez le fichier et exécutez une commande appropriée pour compiler le fichier


### Fenêtres
Si vous avez ajouté une variable PATH :

```jsx
juka.exe HelloWorld.juk
```

Si vous n'avez pas ajouté de variable PATH :
```jsx
./juka.exe path/to/HelloWorld.juk
```

### Macintosh/Linux

Si vous avez ajouté une variable PATH :

```jsx
Juka HelloWorld.juk
```

Si vous n'avez pas ajouté de variable PATH :
```jsx
Chemin du juka/vers/HelloWorld.juk
```

### Fonction Microsoft Azure
Veuillez consulter la section de la fonction Azure pour plus de détails