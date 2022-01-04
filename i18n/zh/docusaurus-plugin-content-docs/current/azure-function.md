---
sidebar_position: 997
---

# 方位函数

- 打开Juka.sln
- 使用 Test->Run->运行Tests 运行DreamUnitTests 以确保所有测试都已通过。
- 点击"启动AzureJukaFunction"按钮，在本地运行 Azure 仿真器。
- 使用 Postman 以 "body" 将函数作为原始请求发送到 Azure 服务器，格式如下：
```json
{
    "code": "func main() = {}"
}
```
