---
sidebar_position: 5
---

# Функции

## Выполнение процедур

Скрипты могут выполняться, вызвав саму функцию. Например:
```jsx
func x() = { printLine("Hello"); } x();
```

Все функции определяются функцией слова. Функции могут содержать буквенно-цифровые значения (включая _), и функции не могут начинаться с числового значения. Функции просто определены:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
foo();
```

Например:

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
x();
y();
x();

```