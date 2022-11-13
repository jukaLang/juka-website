---
sidebar_position: 30
---

# Juka in a C# Project

Джука может быть добавлена в любой C# проект как .dll. Вы можете скачать последнюю версию .dll на https://jukalang.com/download

Тем не менее, вам рекомендуется использовать пакет NuGet и загрузить JukaCompiler с помощью поиска пакетов NuGet .

Вы также можете установить пакет, выполнив следующую команду:
```jsx
Установка пакета JukaCompiler
```
Для получения дополнительной информации посетите https://www.nuget.org/packages/JukaCompiler


## Базовое использование

Чтобы скомпилировать код с помощью предопределенной строки, добавьте следующий код:

```jsx
новый JukaCompiler.Compiler().Go(sourceAsString,false);
```

Если вам нужно скомпилировать код с помощью файла, вы можете передать в файл и запустить следующий код:

```jsx
новый JukaCompiler.Compiler().Go(sourceAsString,true);
```

Вывод будет возвращен в виде строки.