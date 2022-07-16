---
sidebar_position: 1
slug: /
---

# Введение

Основная цель Джуки - стать универсальным языком программирования, который может работать на любой платформе, включая мобильные устройства.

Философия Джуки это код один раз, запускается везде.

![jukaRun](/img/latestjuka.gif)

__Поддерживаемое устройство:__
- Windows (x86/x64)
- Windows ARM (ARM64)
- Linux (x86/x64) (CentOS, Debian, Fedora, Ubuntu, TinyCore, and almost any other type of Linux)
- Linux ARM (ARM64 and ARM32) (Linux Distributions that run ARM e.g. Raspberry Pi Model 2+)
- MacOS (macOS 10.12+)
- FreeBSD/UNIX (FreeBSD 11+)
- Azure (Microsoft Azure Function)
- HTTPS/API (JukaAPI server)
- Docker (JukaAPI)
- [Web Assembly (CDN/Browser/HTML server)](https://github.com/jukaLang/juka-webassembly)
- [Jupyter via juka-kernel](https://github.com/jukaLang/juka_kernel)
- [Virtual Box Image (JukaVM)](https://github.com/jukaLang/jukaVM)

__Скоро:__
- Android App
- iOS App (iPhone/iPad)
- MacOS App
- Windows App (Windows 10+)
- Tizen (Samsung)

__Потенциальная дальнейшая поддержка:__
- AndroidTV App
- Amazon Web Service (Native Support)
- Google Cloud (Native Support)


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
