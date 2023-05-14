---
sidebar_position: 7
slug: /hello-world
---

# Writing your first application

Let's start by creating a "Hello World" application.

1. Create an empty file and save it as `HelloWorld.juk`.
2. In that file, copy and paste the following code:

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
Hello World
```