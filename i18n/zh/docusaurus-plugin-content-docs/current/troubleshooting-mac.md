---
sidebar_position: 50
---

# 疑难解答Macintosh

Because we currently do not sign Juka programming language package, you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh, you might get the following error:

![step1](/img/macintosh/cannotbeopened.png)


## 工作

Double click on Juka

If it tries to open the application in the text editor, then open up a terminal in the same folder and run ./Juka

Click on "Apple" icon in the top left corner and go to "security and preferences".

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


