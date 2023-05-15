---
sidebar_position: 8
---

# Azure Function

## 本地运行 Juka

Juka 可以在没有Azure Web 服务器的情况下在本地运行。 在上传到服务器之前测试Juka是有用的。

若要在本地运行Juka，请遵循以下步骤：

1. 在 Visual Studio 2022 中打开Juka.sln 项目。
2. 点击 **启动 AzureJukaFunction** 按钮。 这将在本地启动 Azure 仿真器。
3. 使用 Postman 将函数发送至 Azure 仿真器。 要做到这一点，请创建一个新的请求并将请求方法设置为 **POST**。 在 **正文** 标签中，选择 **原始** 并粘贴以下代码：

```json
{
  "code": "func main() { printLine(\"Hello World\") }"
}
```

4. 点击 **发送**。 Juka 仿真器将运行函数并将消息“Hello World”打印到控制台。

## 在 Azure 上运行Juka

若要在 Azure 上运行Juka，请遵循以下步骤：

1. 将Juka包上传到 Azure。
2. 使用 web 部署发布Juka 到 Azure。
3. 若要从客户端呼叫Juka，请向Juka端发送原始请求信息。 请求信息应具有以下格式：

```json
{
  "code": "func main() { printLine(\"Hello World\") }"
}
```

**注意：** 您必须逃避引文，否则Juka 将返回一个错误。