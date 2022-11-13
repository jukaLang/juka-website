---
sidebar_position: 7
slug: /hello-world
---

# Writing your first application

## Hello World
Let's start by creating a HelloWorld application.
Create an empty file and save it as HelloWorld.juk

In that file, copy and paste the following code:

```jsx
func main() =  {
   printLine("Hello World");
}
```

Once done, save the file and run an appropriate command to compile the file


### Windows
If you added PATH variable:

```jsx
juka.exe HelloWorld.juk
```

If you didn't add a PATH variable:
```jsx
./juka.exe path/to/HelloWorld.juk
```

### Macintosh/Linux

If you added PATH variable:

```jsx
juka HelloWorld.juk
```

If you didn't add a PATH variable:
```jsx
./juka path/to/HelloWorld.juk
```

### Microsoft Azure Function
Please see Azure Function section for details