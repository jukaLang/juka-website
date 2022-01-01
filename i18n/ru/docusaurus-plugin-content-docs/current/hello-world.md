---
sidebar_position: 3
---

# Написание вашего первого приложения

## Привет мир
```
function main() = {
   printLine("foo");
}
```

## Если условие
```
function main()={
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
```
function foo() = {
    int x = 3;
    while (x<=4)
    {
        x++;
        print(x);
    }

```