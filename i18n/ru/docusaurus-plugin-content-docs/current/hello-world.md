---
sidebar_position: 2
---

# Написание вашего первого приложения

## Привет мир
```jsx
func main() = {
   printLine("foo");
}
```

## Если условие
```jsx
func main()={
    if ( 2<3 ) 
    {
        printLine("foo");
    }
    else if (true)
    {
        print('c');
    }
}
```

## Цикл прокрутки
```jsx
func foo() = {
    int x = 3;
    while (x<=4)
    {
        x++;
        print(x);
    }
}
```