---
sidebar_position: 11
slug: /loops
---

# Loops

## While Loop

In Juka, while loop is defined similarly to most of the other programming languages.

A simple example of while loop:

```jsx
func main() = {
    var x = 0;
    while(x < 2) {
        x = x + 1;
    }
}
```

In this example x is set to 0. The **while** statement checks and sees that x must be less than 2 and returns true. The **while** loop runs. The value of x is increase by 1. This is a Juka way of increasing values. The **while** loop only runs twice.

## Break

You are allowed to run an infinite loop. However, you should have a break statement to exit the loop

A simple example of break:

```jsx
func main() = {
    var x = 0;
    while( 1){
    x = x + 1;
        if (x > 2) {
            break;
        }
    }
}
```

Although using **break** is not recommended, it does provide a convenient and easy way to **break** a **while** loop.
