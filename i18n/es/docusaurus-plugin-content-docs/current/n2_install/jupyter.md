---
sidebar_position: 5
---

# Juka en Jupyter

Juka es un nuevo lenguaje de programación diseñado para ser utilizado en ciencias de datos y análisis. Es similar a Python, pero es más potente y eficiente.

Jupyter es un entorno interactivo popular para desarrollar y ejecutar código. Se puede usar con muchos lenguajes de programación diferentes, incluyendo Python, R, y Julia.

El equipo de Juka ha creado un núcleo Juka para Jupyter. Este núcleo le permite ejecutar el código Juka en las notebooks de Jupyter.

Para utilizar el núcleo de Juka, necesitará instalar Juka y Jupyter. Puede encontrar instrucciones para instalar Juka en el [sitio web Juka](https://jukalang.com/download). Puede encontrar instrucciones para instalar Jupyter en el [sitio web de Jupyter](https://jupyter.org/install).

Una vez, descargado añadir Juka a la ruta.

En Windows, se recomienda que siga los pasos, esbozado en https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

En Linux/Unix/MacOS (bash): Suponiendo que almacenamos Juka en /usr/bin/share/Juka, ejecutamos el siguiente comando:

```jsx
$ ruta de exportación = "/usr/bin/share/Juka:$PATH"
```

Esto añadirá Juka a PATH

Una vez que haya instalado Juka y Jupyter, necesita instalar Juka kernel:

### Usando PIP
```jsx
pip install juka_kernel
```

### Using Github
o instalarlo directamente desde el código fuente descargando desde: https://github.com/jukaLang/juka_kernel y ejecutando:

```jsx
python -m juka_kernel.install
```

en la carpeta del núcleo.

## Siguiente paso

Puede comenzar a usar el núcleo Juka en las notebooks de Jupyter. Para ello, abre un cuaderno de Jupyter y selecciona "Nuevo" del menú. En el menú desplegable "Notebook", seleccione "Juka".

Ahora puede comenzar a escribir el código Juka en su portátil Jupyter. Para ejecutar tu código, selecciona "Ejecutar" del menú.

El núcleo de Juka compilará y ejecutará su código. La salida de su código se mostrará en el cuaderno de notas.

El núcleo Juka es una potente herramienta que le permite usar Juka en los portátiles de Jupyter. Esto hace que sea fácil desarrollar y depurar el código Juka.

## Detalles técnicos

El núcleo de Juka está escrito en Python y utiliza el [protocolo de Jupyter](https://jupyter.org/protocol). El núcleo no compila ni ejecuta el código Juka. Sólo sirve como protocolo de mensajería entre Jupyter y Juka.

El núcleo Juka es de código abierto y está disponible en [GitHub](https://github.com/juka/juka_kernel).

## Contribuyendo

Si quieres contribuir al Núcleo de Juka, consulta las [directrices de contribución](https://github.com/juka/juka_kernel/blob/master/CONTRIBUTING.md).