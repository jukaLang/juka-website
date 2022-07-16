---
sidebar_position: 50
---

# Troubleshooting Macintosh

Because we currently do not sign Juka programming language package,
you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh,
you might get the following error:

![step1](/img/macintosh/cannotbeopened.png)


## Workaround

Double click on Juka

If it tries to open the application in the text editor,
then open up a terminal in the same folder and run ./Juka

Click on "Apple" icon in the top left corner and go to "security
and preferences".

You will get a message stating that Juka is from an unidentified developer.

Click on "Open Anyway"

NOTE: you might need to click the "lock" to make changes

![step2](/img/macintosh/openanyway.png)


You should now be able to run Juka and
see the following screen:

![step3](/img/macintosh/final.png)

## Alternative Workaround

Assuming that Juka is stored on Desktop
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-disable
./Juka
```

This will disable the "gatekeeper" application allowing you to run
Juka even though the application came from "unidentified" developer.

Once you are done using Juka,
run the following command:

```jsx
sudo spctl --master-enable
```
This will re-enable the "gatekeeper".


