---
sidebar_position: 6
---

# Unity 3D

You can run JukaCompiler in Unity.

Follow the tutorial found at:

https://docs.microsoft.com/en-us/visualstudio/gamedev/unity/unity-scripting-upgrade

To use Juka, create a multi-line string in the engine (using `) and then run the following

```jsx
new JukaCompiler.Compiler().Go(sourceAsString, false);
```

## Example

Results will be stored in output:

```jsx
string juka = `
func main() = {
printLine("Hello World");
}
`
var output new JukaCompiler.Compiler().Go(juka,false);
```

If you have any questions, please send us a message on discord.
