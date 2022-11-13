---
sidebar_position: 12
slug: /fonctions
---

# Fonctions

## Exécution des fonctions
Chaque script doit avoir une fonction principale. Les scripts peuvent être exécutés en appelant la fonction au sein de la fonction principale

# Exemples d'utilisation

```jsx
func x() = { 
    printLine("Hello"); 
}
func main() ={
    x();
}
```

Toutes les fonctions sont définies avec la fonction mot. Les fonctions peuvent contenir des valeurs alphanumériques (y compris _) et les fonctions ne peuvent pas commencer par des valeurs numériques. Les fonctions sont simplement définies :

```jsx
func foo() = {
   printLine("Bonjour ami !");
}
func main() = {
    foo();
}
```

# Exemple d'utilisation

```jsx
func x() = {
    var = "Bonjour le monde";
    printLine(y);
    printLine("Ça marche ! );
}
func y() = {
    printLine("==in the middle==");
    print("======");
}

func main() = {
    x();
    y();
    x();
}
```