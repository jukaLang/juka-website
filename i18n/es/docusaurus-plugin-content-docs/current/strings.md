---
sidebar_position: 4
---

# Strings

## Defining Strings
Hay tres maneras de definir las cadenas en Juka. Puedes usar **'**, **"**y **`**.

## ¿Cuándo usar **`**?
Cuando tienes una cadena cruda que contiene *'* y *"* y no deseas pasar por todo el texto para escaparla.

## Concatenar cadenas con otras cadenas
La concatenación de cadenas es muy fácil en Juka. Hay dos maneras de concatenar la cadena. Puedes hacer lo tradicional:


```jsx
print("Hola" + "Mundo" + "cómo" + "es" + "it" + "va?");
```

Hay otra forma de hacerlo en Juka. Debido a su naturaleza de prefijo, puede hacer esto:
```jsx
print(+ "Hola" "Mundo" "cómo" "es" "it" "go?");
```

Esta es una declaración legítima en Juka.

## Concatenar cadenas con un número

Cada vez que concatena una cadena con un número, el resultado final será una cadena. Los números se convierten implícitamente en cadenas. A continuación, las cadenas se concatenan regularmente como se menciona en la sección anterior.
