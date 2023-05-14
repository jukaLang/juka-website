---
sidebar_position: 6
slug: /packagemanager
---

# Administrador de Paquetes (DEPRECADO en FAVOR DE DEFAULT)

<h1>📖 Tabla de contenidos</h1>

- [**¿Qué es JLDN?**](#about)
- - [**¿Cuál es el propósito?**](#used-for)
- - [**¿Cómo funciona nuestra red descentralizada?**](#how-our-decentralized-network-works)
- [**¿Qué es un archivo `manifest.yaml`?**](#manifest-file)
- - [**Formato de archivo manifiesto**](#manifest-format)
- [**¿Por qué se cifran las librerías instaladas?**](#encryption)
- [**¿Cuáles son los comandos?**](#usage)
- - [**Instalar Paquete**](#install-usage)
- - [**Versión de volcado**](#bump-usage)

# Acerca de

## Usado para

**JLDN** es un gestor de paquetes creado y mantenido por la organización Juka Language . Permite a los usuarios crear, publicar y usar bibliotecas. _Por ejemplo_ si estabas creando un servidor web, en lugar de recrear todo el prototipo de https se puede instalar una librería de juka que le da un marco sólido.

## Cómo funciona nuestra red descentralizada

Nuestra red descentralizada es la manera en que JLDN es capaz de recibir los datos del paquete. Esto incluye el contenido de las bibliotecas. Realizamos extracción de datos directamente desde github haciendo que sea más fácil y rápido recibir paquetes.

# Archivo de manifiesto

El archivo `manifest.yaml` se utiliza para dar especificaciones sobre un paquete. Esto incluye la versión actual, descripción y contenido.

## Formato de manifiesto

El manifiesto está formateado como sigue:

```yaml
version: 0.0.1
package_name: name
package_description: descr
library_directory: lib
main_repo_branch: main
repo_name: JLDN
repo_author_name: jukaLang
```

# Encriptación

Utilizamos una solución cifrada cuando instala paquetes de **JLDN**. Dado que el objetivo principal de Juka es el cifrado de velocidad de ejecución es la forma más rápida de ejecutar el Juka.

# Uso

## Instalar Uso

_Instala un paquete usando la red descentralizada_

```bash
jldn instalar {git_repo_author} {git_repo} {branch} { FLAGS }
```

Banderas:

'-nm' - Especifica que el repositorio no contiene un archivo manifest y que desea instalar de todos modos

'--force' - Fuerza a sobrescribir si el nombre del paquete ya existe

## Uso de volcado

_Revertir a ir a la versión **JLDN** especificada_

```bash
bump de jldn {service} {version}
```

Servicios:

**JLDN**

**Juka**

Banderas:

**SIN FLAGES FUNCIONADAS PARA ESTE COMAND**

# Cómo instalar

## Ventanas

Para instalar en Windows, todo lo que tienes que hacer es instalar el 'win_installer.exe' y ejecutarlo y todo lo demás será automatizado! Puede encontrar ese archivo en los proyectos de lanzamiento.

## Linux

_Próximamente_
