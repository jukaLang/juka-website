---
sidebar_position: 99
---

# Azure Function

### Running Locally
Juka can run locally without Azure Web server if you prefer to 
test Juka before uploading to your server.
In order to do this, perform the following steps:
- Open up Juka.sln in Windows Visual Studio 2022
- Click "Start AzureJukaFunction" button which will run an Azure emulator locally.
- Use Postman to send functions to the Azure server in "body" as raw request in the following format:


### Microsoft Azure Function
Upload the package to Azure Web Server
Use web deploy to publish Juka (Azure Function) on the cloud

## Calling Juka Azure Function

Juka can run the code on Juka Azure Function server by sending a raw request message in the following format:

```json
{
    "code": "func x() = { printLine(\"Hello World\"} } x();"
}
```

NOTE: you must escape quotations, otherwise, Juka will return an error.