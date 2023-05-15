---
sidebar_position: 13
slug: /classes
---

# Classes

## Qu'est-ce qu'une classe?

Une classe est un plan pour créer des objets. Il définit les propriétés et méthodes que les objets de cette classe auront.

## Comment définir une classe

To define a class, use the class keyword. La syntaxe pour définir une classe est la suivante:

```jsx
class <name> = {
<members>
}
```

Where name is the name of the class, and members are the properties and methods of the class.

## Membres

Les membres d'une classe peuvent être des propriétés ou des méthodes. Les propriétés sont des variables qui sont associées à un objet. Les méthodes sont des fonctions qui sont associées à un objet.

## Propriétés
Les propriétés sont définies en utilisant le mot clé var. La syntaxe pour définir une propriété est la suivante:

```jsx
    var <name>;
```

Where name is the name of the property, and type is the type of the property.

## Méthodes
Methods are defined using the func keyword. La syntaxe pour définir une méthode est la suivante:

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Where name is the name of the method, parameters are the parameters of the method, and statements are the statements in the method body.

## Création d'objets


Pour créer un objet, utilisez le nouveau mot clé. La syntaxe pour créer un objet est la suivante:

```jsx
var <object_name> = nouveau <class_name>();
```
Where object_name`is the name of the object, and class_name is the name of the class.

## Accès aux propriétés et aux méthodes

Les propriétés et méthodes d'un objet peuvent être accédées en utilisant la notation par point. Par exemple, pour accéder au nom de la propriété de l'objet myObject, vous utiliseriez le code suivant :

```jsx
myObject.name ;
```
To call the method add`of the object myObject, you would use the following code:

```jsx
myObject.add(2, 6);
```

## Exemple
The following code defines a class named MathClass and creates an object of that class:

```jsx
class MathClass {
    var num1: int
    var num2: int

    func add() = {
        return this.num1 + this.num2
    }
}
var mathClass = new MathClass()
mathClass.num1 = 2
mathClass.num2 = 6
print(mathClass.add())
```

Ce code affichera la valeur 8.