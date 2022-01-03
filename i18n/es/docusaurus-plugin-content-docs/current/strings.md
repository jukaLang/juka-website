---
sidebar_position: 4
---

## Strings
There are three ways to define strings in Juka. You can use **'**, **"**, and **`**.

## When to use **`** ?
When you have raw string that contains *'* and *"* and you do not wish to go through the whole text to escape it.

## Concatenating Strings with other strings
Concatenating strings is very easy in Juka. There are two ways to concatenate string. You can do the traditional way:


```jsx
print("Hello" + "World" + "How" + "is" + "it" + "going?");
```

There is another way to do this in Juka. Due to its prefix nature, You can do this:
```jsx
print(+ "Hello" "World" "How" "is" "it" "going?");
```

This is a legitimate statement in Juka.

## Concatenating Strings with a number

Whenever you concatenate string with a number, the end result will be string. The numbers are implicitly converted into strings. Then strings concatenate regularly as mentioned in previous section.
