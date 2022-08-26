---
sidebar_position: 12
---

# Функции

## Выполнение процедур
Every script should have a main function. Scripts can be executed by calling the function within main function

# Usage Examples

```jsx
func x() = { 
    printLine("Hello"); 
}
func main() ={
    x();
}
```

Все функции определяются функцией слова. Функции могут содержать буквенно-цифровые значения (включая _), и функции не могут начинаться с числового значения. Функции просто определены:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

# Usage Example

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

func main() = {
    x();
    y();
    x();
}
```