---
sidebar_position: 11
slug: /loops
---

# Loops

## While Loop

A while loop is a control flow statement that allows code to be executed repeatedly based on a Boolean condition. The syntax of a while loop is as follows:

```jsx
while <condition>
{
<statements>
}
```

For example, the following code will print the numbers from 1 to 5:

```jsx
func foo() = {
    var x = 1

    while(x <= 5){
        printLine(x)
        x = x + 1
    }
}
```

## Break

The break statement can be used to exit a loop. The syntax of the break statement is as follows:

```jsx
break
```

For example, the following code will print the numbers from 1 to 5, but it will exit the loop when the value of x reaches 3:

```jsx
func main() = {
    var x = 0
    while( 1){
    x = x + 1;
        if (x > 2) {
            break
        }
    }
}
```
