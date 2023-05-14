---
sidebar_position: 9
slug: /strings
---

# Cadenas

## ¿Qué es una cadena?

A string is a sequence of characters. In programming, strings are often used to represent text.

## Definir cadenas

Strings are defined using quotation marks. For example, the following code defines a string named `animal` and sets it to the value "cat":

```jsx
var animal = "gato";
```

## Combinar cadenas con un número

Whenever you add a string to a number (or vice versa), the end result will be a string. Los números se convierten implícitamente en cadenas. For example, the following code will print the string "123abc":

```jsx
print("123" + "abc");
```