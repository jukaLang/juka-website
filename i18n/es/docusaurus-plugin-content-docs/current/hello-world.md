---
sidebar_position: 3
---

# Escribiendo tu primera aplicación

## Hola mundo
```
function main() = {
   printLine("foo");
}
```

## Si condición
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

## Mientras bucle
```
function foo() = {
    int x = 3;
    while (x<=4)
    {
        x++;
        print(x);
    }
}
```