---
sidebar_position: 2
---

# Escribiendo tu primera aplicación

## Hola mundo
Empecemos por crear una aplicación HelloWorld. Crear un archivo vacío y guardarlo como HelloWorld.juk

En ese archivo, copiar y pegar el siguiente código:

```jsx
func main() = {
   printLine("foo");
}
```

Una vez hecho, guarde el archivo y ejecute un comando apropiado para compilar el archivo


### Ventanas
Si añadiste una variable PATH:

```jsx
HelloWorld.juk juka.exe
```

Si no agregó una variable PATH:
```jsx
./juka.exe ruta/a/HelloWorld.juk
```

### Macintosh

Si añadiste una variable PATH:

```jsx
juka HelloWorld.juk
```

Si no agregó una variable PATH:
```jsx
./juka path/to/HelloWorld.juk
```

### Función Azure de Microsoft
Por favor, consulte la sección de Azure Function para más detalles