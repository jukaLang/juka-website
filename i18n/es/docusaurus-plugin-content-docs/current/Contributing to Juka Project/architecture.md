---
sidebar_position: 2
---

# Arquitectura

## Estructura de carpeta

El código base de Juka está organizado en las siguientes carpetas:

* **./examples** - Esta carpeta contiene ejemplos de código Juka.
* **./src/JukaCompiler** - Esta carpeta contiene el núcleo del compilador de Juka.
* **./src/JukaAzureFunction** - Esta carpeta contiene el código para ejecutar funciones Juka Azure en Azure Cloud Server.
* **./src/JukaNetwork** - Esta carpeta contiene el código para la red Juka, que es una red blockchain para almacenar y administrar paquetes.
* **./src/JukaUnitTest** - Esta carpeta contiene pruebas unitarias para el compilador de Juka.
* **./src/Juka** - Esta carpeta contiene el código para el Juka GUI (próximamente).

## Requisitos de Estudios Visuales/Desarrollo

Para desarrollar y ejecutar Juka, necesitarás lo siguiente:

* La última versión de Visual Studio.
* Los siguientes paquetes de Visual Studio:
  * Desarrollo de Azure
  * Desarrollo de escritorio .NET

## Tiempo de ejecución

Juka utiliza el siguiente esquema para ejecutar el código:

![Diseño](/img/Runtime.png)

El compilador Juka compila el código Juka en una biblioteca .NET .dll. Esta biblioteca puede ser usada en cualquier proyecto C#, incluyendo Xamarin/MAUI para construir aplicaciones iOS/Android, y se utiliza principalmente para construir aplicaciones multiplataforma para aplicaciones de escritorio Mac/OS, Windows y Windows.

El código de tiempo de ejecución de Juka Azure Function se utiliza para ejecutar las funciones Juka Azure en el servidor Azure Cloud de Microsoft.

La red Juka es una red blockchain para almacenar y administrar paquetes. Se usa como gestor de paquetes descentralizado.

Las pruebas de las unidades de Juka se utilizan para probar el compilador de Juka.

El Juka GUI es una interfaz gráfica de usuario para Juka que está actualmente en desarrollo.

## Notas

* El proyecto Juka todavía está en desarrollo, por lo que algunas características pueden no estar disponibles todavía.
* Si tiene alguna pregunta o comentario, no dude en ponerse en contacto con nosotros.