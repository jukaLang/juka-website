---
sidebar_position: 50
---

# Устранение неисправностей Macintosh

Поскольку в настоящее время мы не подписываем язык программирования Juka, вы можете получить ошибку, когда сначала вы запустите Juka на Macintosh.

При первом запуске Juka на Macintosh, вы можете получить следующую ошибку: ![шаг 1](/img/macintosh/cannotbeopened.png)


## Workaround

Click on "apple", and go to "security and preferences".

Вы получите сообщение о том, что Джука от неопознанного разработчика.

Нажмите "Открыть в любом случае"

ПРИМЕЧАНИЕ: Вам может потребоваться нажать на "блокировать", чтобы внести изменения

![Шаг 2](/img/macintosh/openanyway.png)


You should now be able to run Juka and see the following screen:

![Шаг 3](/img/macintosh/final.png)

## Alternative Workaround

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


