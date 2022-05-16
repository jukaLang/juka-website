---
sidebar_position: 3
---

# Functions

## Main Function
Every entry point code/script must have an entry function. An entry function is defined using the following:

```jsx
func main() = { }
```

NOTE: the scripts that do not have main function can be imported, but cannot be executed directly. The main function is automatically called on entry. However, if you need to, you can still call the main() functions explicitly.

## Functions
All functions are defined with the word function. Functions can contain alphanumeric values (including _) and functions cannot start with numeric value. Functions are simply defined:

```jsx
func foo() = {
   printLine("Hello Friend");
}
```

Example:

```jsx
func main() = {

    int y = 5;

    while ( (y == 3) && (y == 5) || (y > 6) ){
        printLine("loop");
    }
    
}


func foo() = {
    int x = 3;
    printLine(x);
    fart();
    return x;
}


func rock() = {
    bark();
    bark();
    printLine("rock");
}

func bark()={
    printLine("bark");
}
```