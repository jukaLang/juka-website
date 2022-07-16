---
sidebar_position: 50
---

# Solución de problemas Macintosh

Because we currently do not sign Juka programming language package, you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh, you might get the following error:

![step1](/img/macintosh/cannotbeopened.png)


## Solución

Double click on Juka

If it tries to open the application in the text editor, then open up a terminal in the same folder and run ./Juka

Click on "Apple" icon in the top left corner and go to "security and preferences".

Recibirás un mensaje indicando que Juka es de un desarrollador no identificado.

Haga clic en "Abrir de todos modos"

NOTA: puede que necesites hacer clic en el "bloqueo" para hacer cambios

![paso2](/img/macintosh/openanyway.png)


Ahora deberías poder ejecutar Juka y ver la siguiente pantalla:

![paso3](/img/macintosh/final.png)

## Alteración alternativa

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


