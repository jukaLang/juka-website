---
sidebar_position: 50
---

# 疑难解答Macintosh

因为我们目前没有签名 Juka 编程语言包， 当您首次在 Macintosh运行Juka 时可能出现错误。

当你第一次在 Macintosh运行Juka 时， 你可能会遇到以下错误：

![步骤1](/img/macintosh/cannotbeopened.png)


## 工作

双击Juka

如果它试图在文本编辑器中打开应用程序， 然后在同一文件夹中打开一个终端并运行 ./Juka

点击左上角的“小程序”图标，转到“安全 和首选项”。

您将收到一条消息，声明Juka来自一个身份不明的开发者。

点击"随时打开"

注意：您可能需要点击“锁定”进行更改

![步骤2](/img/macintosh/openanyway.png)


您现在应该能够运行 Juka 并 看下面的屏幕：

![步骤3](/img/macintosh/final.png)

## 替代工作

假定Juka存储在桌面
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./juka
sudo spctl --master-disable
./juka
```

这将禁用“守门”应用程序允许您运行 Juka ，即使应用程序来自“未识别的”开发者。

使用 Juka 完成后， 运行以下命令：

```jsx
sudo spctl --master-启用
```
这将重新启用“守门员”。


