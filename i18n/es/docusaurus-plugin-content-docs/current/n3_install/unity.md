---
sidebar_position: 6
---

# Unidad 3D

Puede ejecutar JukaCompiler en Unity.

Sigue el tutorial encontrado en:

https://docs.microsoft.com/es-es/visualstudio/gamedev/unity/unity-scripting-upgrade

Para usar Juka, crea una cadena de múltiples líneas en el motor (usando `) y luego ejecuta lo siguiente

```jsx
nuevo JukaCompiler. Compiler().Go(sourceAsString,false);
```

## Ejemplo

Los resultados se almacenarán en la salida:

```jsx
string juka = `
func main() = {
printLine("Hola Mundo");
}

var output new JukaCompiler. Compiler().Go(juka,false);
```

Si tiene alguna pregunta, por favor envíenos un mensaje en discord.