---
sidebar_position: 8
---

# Azure Function

## Running Juka Locally

Juka can be run locally without an Azure Web server. This is useful for testing Juka before uploading it to a server.

To run Juka locally, follow these steps:

1. Open the Juka.sln project in Visual Studio 2022.
2. Click the **Start AzureJukaFunction** button. This will start an Azure emulator locally.
3. Use Postman to send functions to the Azure emulator. To do this, create a new request and set the request method to **POST**. In the **Body** tab, select **Raw** and paste the following code:

```json
{
  "code": "func main() { printLine(\"Hello World\") }"
}
```

4. Click **Send**. The Juka emulator will run the function and print the message "Hello World" to the console.

## Running Juka on Azure

To run Juka on Azure, follow these steps:

1. Upload the Juka package to Azure.
2. Use web deploy to publish Juka to Azure.
3. To call Juka from a client, send a raw request message to the Juka endpoint. The request message should have the following format:

```json
{
  "code": "func main() { printLine(\"Hello World\") }"
}
```

**Note:** You must escape quotations, otherwise, Juka will return an error.