---
sidebar_position: 11
slug: /boucles
---

# Boucles

## Boucle Tant que

Une boucle while est une commande de flux qui permet l'exécution répétée du code sur la base d'une condition booléenne. La syntaxe d'une boucle while est la suivante:

```jsx
tandis que <condition>
{
<statements>
}
```

Par exemple, le code suivant imprimera les nombres de 1 à 5 :

```jsx
func foo() = {
    var x = 1;

    while(x <= 5){
    printLine(x);
    x = x + 1;
}
}
```

## Pause

L'instruction break peut être utilisée pour quitter une boucle. La syntaxe de la commande break est la suivante:

```jsx
casse ;
```

Par exemple, le code suivant imprimera les nombres de 1 à 5, mais il quittera la boucle lorsque la valeur de x atteint 3 :

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
