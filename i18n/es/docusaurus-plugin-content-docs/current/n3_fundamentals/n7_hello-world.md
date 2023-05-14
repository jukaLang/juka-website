---
sidebar_position: 7
slug: /hola-mundo
---

# Escribiendo tu primera aplicación

Let's start by creating a "Hello World" application.

1. Create an empty file and save it as `HelloWorld.juk`.
2. En ese archivo, copiar y pegar el siguiente código:

```jsx
func main() =  {
  printLine("Hello World");
}
```

3. Once done, save the file and run the following command:
```jsx
./juka HelloWorld.juk
```

This will compile and run your application. If everything went well, you should see the following output:

```jsx
Hola mundo
```