---
sidebar_position: 30
---

# Juka en un proyecto C#

Juka puede ser añadido a cualquier proyecto C# como un .dll. Puedes descargar la última versión de .dll en https://jukalang.com/download

Sin embargo, se recomienda que utilice un paquete NuGet y descargue JukaCompiler buscando paquetes de NuGet .

También puede instalar el paquete ejecutando el siguiente comando:
```jsx
Instalar paquete JukaCompiler
```
Para más información visite, https://www.nuget.org/packages/JukaCompiler


## Uso Básico

Para compilar el código usando una cadena predefinida, agregue lo siguiente al código C#:

```jsx
nuevo JukaCompiler.Compiler().Go(sourceAsString,false);
```

Si necesita compilar el código usando un archivo, puede pasar un archivo y ejecutar el siguiente código:

```jsx
nuevo JukaCompiler.Compiler().Go(sourceAsString,true);
```

La salida se devolverá como una cadena.