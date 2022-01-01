---
sidebar_position: 3
---

# Schreibe deine erste Anwendung

## Hallo Welt
```
function main() = {
   printLine("foo");
}
```

## Wenn Bedingung
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

## Während Schleife
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