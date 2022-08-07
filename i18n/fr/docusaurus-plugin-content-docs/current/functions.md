---
sidebar_position: 5
---

# Fonctions

## Exécution des fonctions
Every script should have a main function. Scripts can be executed by calling the function within main function

# Usage Examples

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
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

# Usage Example

```jsx
func x() = {
    var = "Hello World";
    printLine(y);
    printLine("It works!");
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