---
sidebar_position: 50
---

# Solución de problemas Macintosh

## Mensaje de error

Cuando ejecute Juka por primera vez en Macintosh, puede recibir el siguiente mensaje de error:


![paso1](/img/macintosh/cannotbeopened.png)

No se puede abrir porque es de un desarrollador no identificado.

## Solución

Para resolver este problema, siga estos pasos:

Haga doble clic en la aplicación Juka.
1. Si intenta abrir la aplicación en el editor de texto, abra un terminal en la misma carpeta y ejecute ./Juka.
2. Haga clic en el icono de Apple en la esquina superior izquierda de su pantalla y vaya a Preferencias del sistema.
3. Haga clic en Seguridad & Privacidad.
4. Haga clic en la pestaña General.
5. Haga clic en el botón Abrir de todos modos junto a la aplicación Juka. ![paso2](/img/macintosh/openanyway.png)

6. Ahora deberías poder ejecutar Juka.

![paso3](/img/macintosh/final.png)


## Alteración alternativa

Puede utilizar la siguiente área de trabajo:

Asumiendo que Juka está almacenado en su escritorio, abra una ventana de terminal y vaya al directorio Juka. Ejecutar los siguientes comandos:

```jsx
chmod +x ./Juka
sudo spctl --master-disable ./Juka
```

3. Esto desactivará Gatekeeper para la sesión actual, permitiéndole ejecutar Juka.
4. Una vez que hayas terminado de usar Juka, ejecuta el siguiente comando para rehabilitar Gatekeeper:

```jsx
sudo spctl --master-enable
```

Esto volverá a habilitar el "gatekeeper".

**Notas**
- Juka no está firmado por Apple, así que puede encontrar este mensaje de error cuando lo ejecute por primera vez.
- Estamos trabajando para conseguir que Juka firme Apple, por lo que este mensaje de error no debería ser un problema en el futuro.
- Si tiene más preguntas, no dude en ponerse en contacto con nosotros.