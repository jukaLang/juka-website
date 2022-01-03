---
sidebar_position: 4
---

## Chaînes de caractères
Il y a trois façons de définir des chaînes de caractères dans Juka. Vous pouvez utiliser **'**, **"**, et **`**.

## Quand utiliser **`**?
Lorsque vous avez une chaîne de caractères brute qui contient *'* et *"* et que vous ne souhaitez pas passer par le texte entier pour l'échappe.

## Concaténation des chaînes avec d'autres chaînes
La concaténation des cordes est très facile à Juka. Il y a deux façons de concaténer une chaîne. Vous pouvez faire de la manière traditionnelle :


```jsx
print("Bonjour" + "Monde" + "Comment" + "est" + "il" + "en cours?");
```

Il y a une autre façon de le faire à Juka. En raison de sa nature préfixée, vous pouvez faire ceci :
```jsx
print(+ "Bonjour" "Monde" "Comment" "est" "il" "va ?");
```

C'est une déclaration légitime à Juka.

## Concaténation des chaînes avec un nombre

Chaque fois que vous concaténez une chaîne avec un nombre, le résultat final sera une chaîne de caractères. Les nombres sont implicitement convertis en chaînes. Ensuite, les chaînes de caractères se concaténent régulièrement comme mentionné dans la section précédente.
