---
sidebar_position: 8
---

# Función Azure

### Ejecutar localmente

Juka can run locally without Azure Web server if you prefer to test Juka before uploading to your server. Para hacer esto, realice los siguientes pasos:

- Abrir Juka.sln en Windows Visual Studio 2022
- Haga clic en el botón "Iniciar AzureJukaFunction" que ejecutará un emulador Azure localmente.
- Usa Postman para enviar funciones al servidor Azure en "cuerpo" como solicitud cruda en el siguiente formato:

### Función Azure de Microsoft

Subir el paquete al servidor web Azure Usar despliegue web para publicar Juka (función Azura) en la nube

## Llamando a Juka Azure Function

Juka puede ejecutar el código en el servidor de Función Juka Azure enviando un mensaje de solicitud en el siguiente formato:

```json
{
  "code": "func main() = { printLine(\"Hola Mundo\"} }"
}
```

NOTA: debes escapar de las cotizaciones, de lo contrario, Juka devolverá un error.
