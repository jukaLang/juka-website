---
sidebar_position: 2
---

# Schreibe deine erste Anwendung

## Hallo Welt
```jsx
func main() = {
   printLine("foo");
}
```

## Wenn Bedingung
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

## Während Schleife
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