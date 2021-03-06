---
sidebar_position: 50
---

# Устранение неисправностей Macintosh

Because we currently do not sign Juka programming language package, you might get an error when you first run Juka on Macintosh.

When you first run Juka on Macintosh, you might get the following error:

![step1](/img/macintosh/cannotbeopened.png)


## Обработка

Double click on Juka

If it tries to open the application in the text editor, then open up a terminal in the same folder and run ./Juka

Click on "Apple" icon in the top left corner and go to "security and preferences".

Вы получите сообщение о том, что Джука от неопознанного разработчика.

Нажмите "Открыть в любом случае"

ПРИМЕЧАНИЕ: Вам может потребоваться нажать на "блокировать", чтобы внести изменения

![Шаг 2](/img/macintosh/openanyway.png)


Теперь вы можете запускать Juka и увидеть следующий экран:

![Шаг 3](/img/macintosh/final.png)

## Альтернативный обход

Предположим, что Juka хранится на рабочем столе
```jsx
cd ~/Desktop
cd Juka_MacOS
chmod +x ./Juka
sudo spctl --master-отключить
./Juka
```

Это отключит приложение "gatekeeper", позволяющее запускать Juka даже несмотря на то, что приложение от разработчика "не определено".

Как только вы закончите с помощью Juka, выполните следующую команду:

```jsx
sudo spctl --master-включить
```
Это позволит повторно включить "шлюз".


