---
sidebar_position: 50
---

# Solución de problemas Macintosh

Debido a que actualmente no firmamos el lenguaje de programación de Juka, puede que obtenga un error cuando ejecute Juka por primera vez en Macintosh.

Cuando ejecutes Juka por primera vez en Macintosh, puedes obtener el siguiente error: ![paso1](/img/macintosh/cannotbeopened.png)

Le recomendamos que siga las instrucciones descritas: https://www.youtube.com/watch?v=6lD0wsg55WU

También puedes ejecutar los siguientes comandos:

Suponiendo que Juka está almacenado en el escritorio
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-disable
./Juka
```

Esto deshabilitará la aplicación "gatekeeper" que le permitirá ejecutar Juka a pesar de que la aplicación vino del desarrollador "sin identificación".

Una vez que hayas terminado de usar Juka, ejecuta el siguiente comando:

```jsx
sudo spctl --master-enable
```
Esto volverá a habilitar el "gatekeeper".

## Alternative Workaround (No recomendado)

Otra forma de solucionar esto es hacer clic en "manzana", y ir a "seguridad y preferencias".

Recibirás un mensaje indicando que Juka es de un desarrollador no identificado.

Haga clic en "Abrir de todos modos"

NOTA: puede que necesites hacer clic en el "bloqueo" para hacer cambios

![paso2](/img/macintosh/openanyway.png)

Mantén la ventana abierta y mantén la re-ejecución de Juka hasta que todos los errores de seguridad desaparezcan

![paso3](/img/macintosh/openanywaylibhost.png)

Al final, podrás ejecutar Juka y ver la siguiente pantalla:

![paso3](/img/macintosh/final.png)


