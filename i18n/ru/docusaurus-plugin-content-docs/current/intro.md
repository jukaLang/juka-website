---
sidebar_position: 1
slug: /
---

# Введение

Основная цель Джуки - стать универсальным языком программирования, который может работать на любой платформе, включая мобильные устройства.

Философия Джуки это код один раз, запускается везде.

![jukaRun](https://user-images.githubusercontent.com/11934545/176820860-9ff1eff4-cbde-4e90-a56f-b0826f4760a5.gif)

__Поддерживаемое устройство:__
- Windows (x64)
- Windows (x86 32-бит)
- Windows ARM (рука x64)
- Linux (CentOS, Debian, Fedora, Ubuntu и derivatives)
- Linux ARM (Linux Distributions под управлением ARM, например Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI сервер)
- Докер (JukaAPI)
- Web Assembly (CDN/Browser/HTML server)

__Скоро:__
- Android App
- AndroidTV App
- iOS приложение (iPhone/iPad)
- Приложение MacOS
- Приложение Windows (Windows 10+)

__Потенциальная дальнейшая поддержка:__
- AWS (Amazon Web Service)
- Облако Google


### Загрузка Juka
Juka может быть загружена с https://jukalang.com/download

Если вам нужна "ночная сборка", вы можете скачать последнюю версию на https://github.com/jukaLang/juka/releases

Убедитесь, что загрузите на устройство соответствующую версию. Обычно для каждой ОС существует 2 версии: Juka и JukaAPI.
- Juka - Главное приложение, скачать это если вы не уверены.
- JukaAPI - сервер для обслуживания JUKA API через REST (не скачайте это, если не знаете, как его использовать)

Файлы должны быть автономными (вы не должны загружать другие файлы или устанавливать другие программы)

## Запущенные джуки

### Окна

Выполните следующую команду, чтобы запустить редактор Juka:

```jsx
./juka.exe
```

Если вы хотите запустить Juka код из файла, запустите следующую команду (подставьте HelloWorld.juk именем файла)

```jsx
./juka.exe HelloWorld.juk
```

### Linux/MacOS/FreeBSD/UNIX/Raspberry PI

Выполните следующую команду, чтобы запустить редактор Juka:
```jsx
./juka
```

Если вы хотите запустить Juka код из файла, запустите следующую команду (подставьте HelloWorld.juk именем файла)

```jsx
./juka HelloWorld.juk
```


### Функция Microsoft Azure

Загрузите пакет на Azure Web Server Использование веб-развёртывания для публикации Juka (Функция Azure) в облаке

### Ссылка в проекте C#

Вы можете обратиться к компилятору Джуки в C#, загрузив C# .dll и ссылаясь на него в проекте.
