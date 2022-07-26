---
sidebar_position: 5
---

# Juka in Jupyter

Si eres un científico de datos o un analítico, probablemente haber oído hablar de Jupyter y usarlo.

Por lo general, Jupyter se usa para ejecutar código Python. Sin embargo, se puede utilizar para muchos otros idiomas.

Hemos creado un Juka_kernel que permite a Juka comunicarse directamente con Jupyter.

Primero necesitas descargar Juka (https://jukalang.com/download) Una vez, descargado, añade Juka a la ruta.

En Windows, se recomienda que siga los pasos, esbozado en https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

En Linux/Unix/MacOS (bash): Suponiendo que almacenamos Juka en /usr/bin/share/Juka, ejecutamos el siguiente comando:
```jsx
$ ruta de exportación = "/usr/bin/share/Juka:$PATH"
```
Esto añadirá Juka a PATH

NOTA: Es posible que tenga que reiniciar la terminal. Se recomienda reiniciar el equipo también.

A continuación, necesitará instalar jupyter. Por favor, siga los pasos descritos en https://jupyter.org/install si no lo ha hecho.

A continuación, puede instalar Juka_kernel desde PyPi, ejecutando
```jsx
pip install juka_kernel
```
o instalarlo directamente desde el código fuente descargando desde: https://github.com/jukaLang/juka_kernel y ejecutando:
```jsx
python -m juka_kernel.install 
```
en la carpeta del núcleo.

## Usando el kernel de Juka

**Cuaderno**: El menú *Nuevo* en el cuaderno debe mostrar una opción para un cuaderno Juka.

**frontends de la consola**: Para usarlo con la interfaz de la consola, agregue `--kernel juka` a sus argumentos de línea de comandos.

### ¿Qué pasa si sale una nueva versión de Juka?
Si sale una nueva versión de Juka no necesita actualizar o actualizar el juka_kernel (a menos que hagamos grandes cambios al núcleo). Todo lo que necesitas hacer es reemplazar los archivos en Juka PATH. ¡Eso es todo! Esto hace que sea fácil actualizar Juka sin tener que desinstalar y reinstalar el núcleo

## Detalles técnicos
Juka Kernel está escrito en Python y sirve como un puente entre Jupyter y Juka. No compila ni ejecuta el código Juka. solo sirve como protocolo de mensajería.

Si desea contribuir al Juka_kernel, por favor vea https://github.com/juka/juka_kernel