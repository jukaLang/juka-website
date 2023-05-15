---
sidebar_position: 10
slug: /conditions
---

# Conditions

## What is a condition?

A condition is a statement that can be evaluated to be true or false. Conditions are used to control the flow of execution of a program.

## Syntax

The syntax for a condition is as follows:

```jsx
if <condition>
{
<statements>
}
else
{
<statements>
}
```

For example, the following code will print "Correct!" if the value of the variable sum is equal to 5, and "Incorrect!" otherwise:


```jsx
func main()={

    var sum = 4+1

    if (sum == 5)
    {
        printLine("Correct! 4+1 = 5")
    }
    else
    {
        printLine("Incorrect!")
    }
}
```

