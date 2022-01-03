---
sidebar_position: 997
---

# Azure Function

- Open up Juka.sln
- Run DreamUnitTests using Test->Run->All Tests to make sure all tests are passed.
- Click "Start AzureJukaFunction" button which will run an Azure emulator locally.
- Use Postman to send functions to the Azure server in "body" as raw request in the following format:
```json
{
    "code": "function main() = {}"
}
```
