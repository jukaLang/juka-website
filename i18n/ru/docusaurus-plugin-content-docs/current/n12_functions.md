---
sidebar_position: 12
slug: /функции
---

# Функции

## Выполнение процедур

Каждый скрипт должен иметь основную функцию. Скрипты могут быть выполнены, вызвав функцию в рамках основной функции

# Примеры использования

```jsx
func x() = {
    printLine("Hello");
}
func main() ={
    x();
}
```

Все функции определяются функцией слова. Functions can contain alphanumeric values (including \_) and functions cannot start with numeric value. Функции просто определены:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

# Пример использования

```jsx
func x() = {
    var = "Hello World";
    printLine(y);
    printLine("Это работает! );
}
func y() = {
    printLine("==in middle==");
    print("======");
}

func main() = {
    x();
    y();
    x();
}
```
