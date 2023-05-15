---
sidebar_position: 6
---

# Unity 3D

Juka can be used in Unity 3D by following these steps:

1. Install the JukaCompiler NuGet package.
2. Create a multi-line string in the engine (using `) and then run the following:

```jsx
new JukaCompiler.Compiler().Go(sourceAsString, false);
```

## Example

The following code will print "Hello World" to the console:

```jsx
string juka = `
"Hello World"
`
var output new JukaCompiler.Compiler().Go(juka,false);
```
