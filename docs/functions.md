---
sidebar_position: 3
---

# Functions

## Main Function
Juka automatically executes main() function.

```jsx
func main() = { printLine("Hello");}
```

NOTE: the scripts that do not have main function, can be executed by calling the function itself.
For example:
```jsx
func x() = { printLine("Hello"); } x();
```

## Functions
All functions are defined with the word function. Functions can contain alphanumeric values (including _) and functions cannot start with numeric value. Functions are simply defined:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
foo();
```

Example:

```jsx
func x() = {
    string y = "Hello World";
    printLine(y);
    printLine("It works!");
}
func y() = {
    printLine("==in the middle==");
    print("======");
}
x();
y();
x();

```