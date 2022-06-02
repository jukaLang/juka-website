---
sidebar_position: 1
---

# Arquitectura

## Estructura de carpeta:

### ./ejemplos
- Proporciona ejemplos para empezar a usar Juka

### ./src/JukaCompiler
- El núcleo del idioma. El código se compila en .NET . biblioteca completa que puede ser usada en cualquier proyecto C# incluyendo Xamarin/MAUI para construir aplicaciones iOS/Android, Se utiliza principalmente para construir aplicaciones multiplataforma para aplicaciones de escritorio Mac/OS, Windows y Windows.

### ./src/JukaAzureFunction
- Código de tiempo de ejecución de Azure Funtion. Se utiliza para ejecutar la función Juka Azure en el Azure Cloud Server de Microsoft

### ./src/JukaNetwork
- Implementado como una red de blockchain para almacenar y administrar paquetes. Utilizado como gestor de paquetes descentralizado.

### ./src/JukaUnitTest
- Prueba unitarias para probar JukaCompiler

### ./src/Juka
- Contiene GUI (próximamente)

### Requisitos de Estudios Visuales/Desarrollo
##### Asegúrese de que tiene instalada la última versión de Visual Studio

Los siguientes paquetes de Visual Studio necesarios para ejecutar y desarrollar Juka:

- Desarrollo de Azure
- Desarrollo de escritorio .NET

### Juka utiliza el siguiente esquema para ejecutar el código:
![Diseño](/img/Runtime.png)
