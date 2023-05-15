---
sidebar_position: 50
---

# 疑难解答Macintosh

## 错误消息

当你首次在 Macintosh上运行Juka 时，你可能会收到以下错误信息：


![步骤1](/img/macintosh/cannotbeopened.png)

无法打开，因为它来自一个身份不明的开发者。

## Workaround

为了解决这个问题，遵循以下步骤：

双击Juka应用程序。
1. 如果它试图在文本编辑器中打开应用程序，在同一文件夹中打开终端并运行 ./Juka。
2. 点击屏幕左上角的苹果图标并转到系统首选项。
3. 单击安全 & 隐私。
4. 点击普通选项卡。
5. 点击Juka应用旁边的打开按钮。 ![步骤2](/img/macintosh/openanyway.png)

6. 您现在应该能够运行Juka。

![步骤3](/img/macintosh/final.png)


## Alternative Workaround

您可以使用以下工作区：

假设Juka存储在您的桌面上，打开终端窗口并导航到Juka目录。 运行以下命令：

```jsx
chmod +x ./juka
sudo spctl --master-disable ./juka
```

3. 这将禁用当前会话的 Gatekeeper，允许您运行 Juka。
4. 使用Juka完成后，运行下面的命令来重新启用守门员：

```jsx
sudo spctl --master-启用
```

这将重新启用“守门员”。

**注**
- Juka目前没有被苹果签名，所以您可能会在首次运行时遇到此错误消息。
- 我们正在设法通过 Apple 登录 Juka ，所以这个错误信息不应成为将来的问题。
- 如果您有任何进一步的问题，请随时与我们联系。