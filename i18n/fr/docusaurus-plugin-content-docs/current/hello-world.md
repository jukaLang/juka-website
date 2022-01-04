---
sidebar_position: 2
---

# Écriture de votre première application

## Bonjour le monde
```jsx
func main() =  {
   printLine("foo");
}
```

## Si condition
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

## Boucle Tant que
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