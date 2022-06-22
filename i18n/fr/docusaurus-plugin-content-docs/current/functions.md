---
sidebar_position: 3
---

# Fonctions

## Fonction principale
Juka automatically executes main() function.

```jsx
func main() = { printLine("Hello");}
```

NOTE: the scripts that do not have main function, can be executed by calling the function itself. For example:
```jsx
func x() = { printLine("Hello"); } x();
```

## Fonctions
Toutes les fonctions sont définies avec la fonction mot. Les fonctions peuvent contenir des valeurs alphanumériques (y compris _) et les fonctions ne peuvent pas commencer par des valeurs numériques. Les fonctions sont simplement définies :

```jsx
func foo() = {
   printLine("Hello Friend!");
}
foo();
```

Exemple:

```jsx
func x() = {
    string y = "Hello World";
    printLine(y);
    printLine("It works!");
}
func y() = {
    printLine("==in the middle==");
    print("======");
}
x();
y();
x();

```