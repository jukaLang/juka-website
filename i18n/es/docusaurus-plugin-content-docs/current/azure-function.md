---
sidebar_position: 997
---

# Función Azure

- Abrir Juka.sln
- Ejecutar DreamUnitTests usando Test->Ejecutar->Todas las pruebas para asegurarse de que todas las pruebas son pasadas.
- Haga clic en el botón "Iniciar AzureJukaFunction" que ejecutará un emulador Azure localmente.
- Usa Postman para enviar funciones al servidor Azure en "cuerpo" como solicitud cruda en el siguiente formato:
```json
{
    "code": "func main() = {}"
}
```
