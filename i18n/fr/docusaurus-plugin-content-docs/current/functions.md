---
sidebar_position: 3
---

# Fonctions

## Fonction principale
Chaque code / script de point d'entrée doit avoir une fonction d'entrée. Une fonction d'entrée est définie en utilisant les éléments suivants :

```jsx
func main() = { }
```

REMARQUE : les scripts qui n'ont pas de fonction principale peuvent être importés, mais ne peuvent pas être exécutés directement. La fonction principale est automatiquement appelée à l'entrée. Cependant, si vous en avez besoin, vous pouvez toujours appeler explicitement la fonction main() .

## Fonctions
Toutes les fonctions sont définies avec la fonction mot. Les fonctions peuvent contenir des valeurs alphanumériques (y compris _) et les fonctions ne peuvent pas commencer par des valeurs numériques. Les fonctions sont simplement définies :

```jsx
func foo() = {
   printLine("Hello Friend");
}
```

Exemple:

```jsx
func main() = {

    int y = 5;

    while ( (y == 3) && (y == 5) || (y > 6) ){
        printLine("loop");
    }

    /*
    int x = foo();
    printLine ( x );

    int z = availableMemory();
    print( "memory size = ");
    printLine( z );

    print("x = ");
    printLine( x );

    int y = 4;
    print("y = ");
    printLine ( y );

    x = y;
    print("assign  value of y to x = ");
    printLine( x );
    */
}


func foo() = {
    int x = 3;
    printLine(x);
    fart();
    return x;
}


func rock() = {
    bark();
    bark();
    printLine("rock");
}

func bark()={
    printLine("bark");
}
```