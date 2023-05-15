---
sidebar_position: 8
---

# Función Azure

## Ejecutando Juka Localmente

Juka se puede ejecutar localmente sin un servidor Web Azure. Esto es útil para probar Juka antes de subirlo a un servidor.

Para ejecutar Juka localmente, siga estos pasos:

1. Abra el proyecto Juka.sln en Visual Studio 2022.
2. Haga clic en el botón **Iniciar AzureJukaFunction**. Esto iniciará un emulador Azure localmente.
3. Usa Postman para enviar funciones al emulador Azure. Para hacer esto, crea una nueva solicitud y establece el método de solicitud a **POST**. En la pestaña **Cuerpo** , seleccione **Raw** y pegue el siguiente código:

```json
{
  "code": "func main() { printLine(\"Hola Mundo\") }"
}
```

4. Haz clic en **Enviar**. El emulador de Juka ejecutará la función e imprimirá el mensaje "Hola Mundo" a la consola.

## Ejecutando Juka en Azure

Para ejecutar Juka en Azure, sigue estos pasos:

1. Sube el paquete Juka a Azure.
2. Utilice el despliegue web para publicar Juka a Azure.
3. Para llamar a Juka desde un cliente, envíe un mensaje de solicitud al final de Juka. El mensaje de solicitud debe tener el siguiente formato:

```json
{
  "code": "func main() { printLine(\"Hola Mundo\") }"
}
```

**Nota:** Debes escapar las comillas, de lo contrario, Juka devolverá un error.