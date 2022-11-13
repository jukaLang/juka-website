---
sidebar_position: 11
slug: /boucles
---

# Boucles

## Boucle Tant que

Dans Juka, alors que la boucle est définie de la même manière que la plupart des autres langages de programmation.

Un exemple simple de la boucle «Tant »:

```jsx
func main() = {
    var x = 0;
    while(x < 2) {
        x = x + 1;
    }
}
```

Dans cet exemple, x est défini à 0. L'instruction **tandis que** vérifie et voit que x doit être inférieur à 2 et retourne true. La boucle **tant que** s'exécute. La valeur de x est augmentée de 1. C'est un moyen de Juka d'augmenter les valeurs. La boucle **tandis que** ne s'exécute que deux fois.

## Pause
Vous êtes autorisé à exécuter une boucle infinie. Cependant, vous devriez avoir une instruction break pour quitter la boucle

Un exemple simple de pause :

```jsx
func main() = {
    var x = 0;
    tant que( 1){
    x = x + 1;
        si (x > 2) {
            casse ;
        }
    }
}
```

Bien que l'utilisation de **break** n'est pas recommandée, elle fournit un moyen pratique et facile de **casser** une boucle **while**.