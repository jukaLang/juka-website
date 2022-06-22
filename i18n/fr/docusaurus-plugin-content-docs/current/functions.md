---
sidebar_position: 3
---

# Fonctions

## Fonction principale
Juka exécute automatiquement la fonction main() .

```jsx
func main() = { printLine("Bonjour");}
```

REMARQUE : les scripts qui n'ont pas de fonction principale, peuvent être exécutés en appelant la fonction elle-même. Par exemple :
```jsx
func x() = { printLine("Hello"); } x();
```

## Fonctions
Toutes les fonctions sont définies avec la fonction mot. Les fonctions peuvent contenir des valeurs alphanumériques (y compris _) et les fonctions ne peuvent pas commencer par des valeurs numériques. Les fonctions sont simplement définies :

```jsx
func foo() = {
   printLine("Bonjour ami !");
}
foo();
```

Exemple:

```jsx
func x() = {
    string y = "Bonjour le monde";
    printLine(y);
    printLine("Ça marche ! );
}
func y() = {
    printLine("==in the middle==");
    print("======");
}
x();
y();
x();

```