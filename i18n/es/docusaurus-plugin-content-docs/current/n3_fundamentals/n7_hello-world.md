---
sidebar_position: 7
slug: /hola-mundo
---

# Escribiendo tu primera aplicación

Empecemos por crear una aplicación "Hola Mundo".

1. Cree un archivo vacío y guárdelo como `HelloWorld.juk`.
2. En ese archivo, copiar y pegar el siguiente código:

```jsx
func main() = {
  printLine("Hola Mundo");
}
```

3. Una vez hecho, guarde el archivo y ejecute el siguiente comando:
```jsx
./juka HelloWorld.juk
```

Esto compilará y ejecutará su aplicación. Si todo salió bien, debería ver la siguiente salida:

```jsx
Hola mundo
```