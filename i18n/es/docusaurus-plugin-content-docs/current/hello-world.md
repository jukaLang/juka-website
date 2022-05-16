---
sidebar_position: 2
---

# Escribiendo tu primera aplicación

## Hola mundo
```jsx
func main() = {
   printLine("foo");
}
```

## Si condición
```jsx
func main()={
    if ( 2<3 ) 
    {
        printLine("foo");
    }
    else if (true)
    {
        print("c");
    }
}
```

## Mientras bucle
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