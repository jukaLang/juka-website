---
sidebar_position: 8
---

# 方位函数

### 本地运行

Juka can run locally without Azure Web server if you prefer to test Juka before uploading to your server. 为了做到这一点，执行以下步骤： 为了做到这一点，执行以下步骤：

- 在 Windows Visual Studio 2022 中打开 Juka.sln
- 点击"启动AzureJukaFunction"按钮，在本地运行 Azure 仿真器。
- 使用 Postman 以 "body" 将函数作为原始请求发送到 Azure 服务器，格式如下：

### 微软Azure 函数

将软件包上传到 Azure Web Server 使用 web 部署在云端发布Juka (Azure Function)

## 调用 Juka Azure 功能

Juka 可以在 Juka Azure 函数服务器上通过以下格式发送原始请求信息来运行代码：

```json
{
  "code": "func main() = { printLine(\"Hello World\"} }"
}
```

注意：您必须逃避报价，否则Juka会返回一个错误。
