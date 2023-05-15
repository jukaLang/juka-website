---
sidebar_position: 6
---

# Unidad 3D

Juka puede ser usado en Unity 3D siguiendo estos pasos:

1. Instale el paquete JukaCompiler NuGet .
2. Crea una cadena multi-línea en el motor (usando `) y luego ejecuta lo siguiente:

```jsx
new JukaCompiler. Compiler().Go(sourceAsString, false);
```

## Ejemplo

El siguiente código imprimirá "Hola Mundo" en la consola:

```jsx
string juka = `
func main() = {
printLine("Hola Mundo");
}

var output new JukaCompiler. Compiler().Go(juka,false);
```
