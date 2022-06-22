---
sidebar_position: 3
---

# Функции

## Основная функция
Juka automatically executes main() function.

```jsx
func main() = { printLine("Hello");}
```

NOTE: the scripts that do not have main function, can be executed by calling the function itself. For example:
```jsx
func x() = { printLine("Hello"); } x();
```

## Функции
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