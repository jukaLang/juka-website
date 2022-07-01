---
sidebar_position: 50
---

# 疑难解答Macintosh

Because we currently do not sign Juka programming language, you might get an error when you first run Juka on Macintosh.

当你首次在 Macintosh上运行Juka 时， 你可能会遇到以下错误： ![step1](/img/macintosh/cannotbeopened.png)

We recommend that you follow instructions outlined: https://www.youtube.com/watch?v=6lD0wsg55WU

You can also run the following commands:

Assuming that Juka is stored on Desktop
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-disable
./Juka
```

This will disable the "gatekeeper" application allowing you to run Juka even though the application came from "unidentified" developer.

Once you are done using Juka, run the following command:

```jsx
sudo spctl --master-enable
```
This will re-enable the "gatekeeper".

## Alternative Workaround (Not recommended)

Another way to work around this is click on "apple", and go to "security and preferences".

You will get a message stating that Juka is from an unidentified developer.

点击"随时打开"

注意：您可能需要点击“锁定”进行更改

![步骤2](/img/macintosh/openanyway.png)

保持窗口打开并继续运行 Juka 直到所有安全错误消失。

![步骤3](/img/macintosh/openanywaylibhost.png)

最终，您将能运行Juka， 看下面的屏幕：

![步骤3](/img/macintosh/final.png)


