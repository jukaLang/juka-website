---
sidebar_position: 13
slug: /classes
---

# Classes

## Qu'est-ce qu'une classe?

Une classe est un plan pour créer des objets. Il définit les propriétés et méthodes que les objets de cette classe auront.

## Comment définir une classe

Pour définir une classe, utilisez le mot-clé `classe`. La syntaxe pour définir une classe est la suivante:

```jsx
class <name> = {
<members>
}
```

Là où `nom` est le nom de la classe, et `membres` sont les propriétés et méthodes de la classe.

## Membres

Les membres d'une classe peuvent être des propriétés ou des méthodes. Les propriétés sont des variables qui sont associées à un objet. Les méthodes sont des fonctions qui sont associées à un objet.

## Propriétés
Les propriétés sont définies en utilisant le mot clé var. La syntaxe pour définir une propriété est la suivante:

```jsx
    var <name>;
```

Là où `name` est le nom de la propriété, et `type` est le type de la propriété.

## Méthodes
Les méthodes sont définies en utilisant le mot-clé `func`. La syntaxe pour définir une méthode est la suivante:

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Où `nom` est le nom de la méthode, `paramètres` sont les paramètres de la méthode, et les instructions `` sont les instructions dans le corps de la méthode.

## Création d'objets


Pour créer un objet, utilisez le nouveau mot clé. La syntaxe pour créer un objet est la suivante:

```jsx
var <object_name> = nouveau <class_name>();
```

Où `object_name` est le nom de l'objet, et `class_name` est le nom de la classe.

## Accès aux propriétés et aux méthodes

Les propriétés et méthodes d'un objet peuvent être accédées en utilisant la notation par point. Par exemple, pour accéder au nom de la propriété de l'objet myObject, vous utiliseriez le code suivant :

```jsx
myObject.name ;
```

Pour appeler la méthode `ajouter` de l'objet `myObject`, vous utiliseriez le code suivant :

```jsx
myObject.add(2, 6);
```

## Exemple
Le code suivant définit une classe nommée `MathClass` et crée un objet de cette classe :

```jsx
class MathClass {
var num1: int;
var num2: int;

func add() {
return this.num1 + ceci. um2;
}
}

var mathClass = new MathClass();
mathClass.num1 = 2;
mathClass.num2 = 6;
print(mathClass.add());
```

Ce code affichera la valeur 8.