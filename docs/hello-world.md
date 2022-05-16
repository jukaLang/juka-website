---
sidebar_position: 2
---

# Writing your first application

## Hello World
```jsx
func main() =  {
   printLine("foo");
}
```

## If condition
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

## While Loop
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