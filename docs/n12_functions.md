---
sidebar_position: 12
slug: /functions
---

# Functions

## Executing Functions

Every script should have a main function.
Scripts can be executed by calling the function within main function

# Usage Examples

```jsx
func x() = {
    printLine("Hello");
}
func main() ={
    x();
}
```

All functions are defined with the word function. Functions can contain alphanumeric values (including \_) and functions cannot start with numeric value. Functions are simply defined:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

# Usage Example

```jsx
func x() = {
    var = "Hello World";
    printLine(y);
    printLine("It works!");
}
func y() = {
    printLine("==in the middle==");
    print("======");
}

func main() = {
    x();
    y();
    x();
}
```
