---
sidebar_position: 50
---

# Solución de problemas Macintosh

Debido a que actualmente no firmamos el lenguaje de programación de Juka, puede que obtenga un error cuando ejecute Juka por primera vez en Macintosh.

Cuando ejecutes Juka por primera vez en Macintosh, puedes obtener el siguiente error: ![paso1](/img/macintosh/cannotbeopened.png)


## Workaround

Click on "apple", and go to "security and preferences".

Recibirás un mensaje indicando que Juka es de un desarrollador no identificado.

Haga clic en "Abrir de todos modos"

NOTA: puede que necesites hacer clic en el "bloqueo" para hacer cambios

![paso2](/img/macintosh/openanyway.png)


You should now be able to run Juka and see the following screen:

![paso3](/img/macintosh/final.png)

## Alternative Workaround

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


