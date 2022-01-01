---
sidebar_position: 3
---

# Écriture de votre première application

## Bonjour le monde
```
function main() = {
   printLine("foo");
}
```

## Si condition
```
function main()={
    if ( 2<3 ) 
    {
        printLine("foo");
    }
    sinon si (vrai)
    {
        print('c');
    }
}
```

## Boucle Tant que
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