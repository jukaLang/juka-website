---
sidebar_position: 8
---

# Azure Function

### Ejecutar localmente
Juka puede ejecutarse localmente sin el servidor web Azure si prefiere probar Juka antes de subirlo a su servidor. Para hacer esto, realice los siguientes pasos:
- Abrir Juka.sln en Windows Visual Studio 2022
- Haga clic en el botón "Iniciar AzureJukaFunction" que ejecutará un emulador Azure localmente.
- Usa Postman para enviar funciones al servidor Azure en "cuerpo" como solicitud cruda en el siguiente formato:


### Función Azure de Microsoft
Subir el paquete al servidor web Azure Usar despliegue web para publicar Juka (función Azura) en la nube

## Llamando a Juka Azure Function

Juka puede ejecutar el código en el servidor de Función Juka Azure enviando un mensaje de solicitud en el siguiente formato:

```json
{
    "code": "func main() = { printLine(\"Hello World\"} }"
}
```

NOTA: debes escapar de las cotizaciones, de lo contrario, Juka devolverá un error.