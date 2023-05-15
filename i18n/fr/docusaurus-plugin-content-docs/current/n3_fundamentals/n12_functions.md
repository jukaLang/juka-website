---
sidebar_position: 12
slug: /fonctions
---

# Fonctions

## Qu'est-ce qu'une fonction ?

Une fonction est un bloc de code qui peut être réutilisé plusieurs fois. Les fonctions sont définies en utilisant le mot-clé `func`.

## Syntaxe

La syntaxe pour définir une fonction est la suivante:

```jsx
func <name>(<parameters>) {
<statements>
}
```

Par exemple, le code suivant définit une fonction nommée foo qui ne prend aucun paramètre et ne retourne rien:

```jsx
func foo() = {
    printLine("Bonjour, monde!");
}
}
}
}
```

## Appel d'une fonction

Une fonction peut être appelée en utilisant son nom suivi d'une paire de parenthèses. Par exemple, le code suivant appelle la fonction foo :
```jsx
foo()
```

## Paramètres
Une fonction peut prendre des paramètres, qui sont des variables qui sont passées à la fonction quand elle est appelée. Les paramètres sont déclarés entre parenthèses après le nom de la fonction. Par exemple, le code suivant définit une fonction nommée bar qui prend deux paramètres, x et y:

```jsx
func bar(x, y) = {
    printLine("La somme de x et y est" + x + y);
}
```

Une fonction peut retourner une valeur. La valeur est déclarée après les paramètres entre parenthèses. Par exemple, le code suivant définit une fonction nommée baz qui retourne la somme de deux nombres :

```jsx
func baz(x, y) = {
    return x + y;
}
```

## Fonction principale

Chaque programme Juka doit avoir une fonction principale. La fonction principale est le point d'entrée du programme. La fonction principale est définie comme n'importe quelle autre fonction, mais elle n'a pas de nom. Par exemple, le code suivant définit une fonction principale :

```jsx
func main()={
printLine("Bonjour, monde !");
}
}
}
}
```


