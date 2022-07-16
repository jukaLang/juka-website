---
sidebar_position: 1
slug: /
---

# Introducción

El principal objetivo de Juka es ser un lenguaje de programación universal que pueda funcionar en cualquier plataforma incluyendo dispositivos móviles.

La filosofía de Juka es código una vez, corre por todas partes.

![jukaRun](/img/latestjuka.gif)

__Dispositivo soportado:__
- Windows (x86/x64)
- Windows ARM (ARM64)
- Linux (x86/x64) (CentOS, Debian, Fedora, Ubuntu, TinyCore, and almost any other type of Linux)
- Linux ARM (ARM64 and ARM32) (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)
- [Web Assembly (CDN/Browser/HTML server)](https://github.com/jukaLang/juka-webassembly)
- [Jupyter via juka-kernel](https://github.com/jukaLang/juka_kernel)
- [Virtual Box Image (JukaVM)](https://github.com/jukaLang/jukaVM)

__Próximamente:__
- Android App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)
- Tizen (Samsung)

__Soporte futuro potencial:__
- AndroidTV App
- Amazon Web Service (Native Support)
- Google Cloud (Native Support)


### Descargando Juka
Juka se puede descargar desde https://jukalang.com/download

Si necesitas una "compilación nocturna", puedes descargar la última versión en https://github.com/jukaLang/juka/releases

Asegúrese de descargar una versión apropiada al dispositivo. Normalmente hay 2 versiones de Juka para cada OS: Juka y JukaAPI.
- Juka - Aplicación principal, descargue esto si no está seguro.
- JukaAPI - servidor para servir API JUKA vía REST (no descargue esto si no está seguro de cómo usarlo)

Los archivos deben estar separados (no es necesario descargar ningún otro archivo o instalar ningún otro programa)

## Juka en ejecución

### Ventanas

Ejecuta el siguiente comando para iniciar el editor de Juka:

```jsx
./juka.exe
```

Si quieres ejecutar el código Juka desde un archivo, ejecuta el siguiente comando (sustituye HelloWorld.juk con tu nombre de archivo)

```jsx
./juka.exe HelloWorld.juk
```

### Linux/MacOS/FreeBSD/UNIX/Raspberry PI

Ejecuta el siguiente comando para iniciar el editor de Juka:
```jsx
./juka
```

Si quieres ejecutar el código Juka desde un archivo, ejecuta el siguiente comando (sustituye HelloWorld.juk con tu nombre de archivo)

```jsx
./juka HelloWorld.juk
```


### Función Azure de Microsoft

Subir el paquete al servidor web Azure Usar despliegue web para publicar Juka (función Azura) en la nube

### Referencia en el proyecto C#

Puedes hacer referencia al compilador Juka en C#, descargando C# .dll y referenciándolo en el proyecto.
