---
sidebar_position: 8
---

# Функция Azure

### Локально запущено

Juka can run locally without Azure Web server if you prefer to test Juka before uploading to your server. Для этого выполните следующие действия:

- Откройте Juka.sln в Windows Visual Studio 2022
- Нажмите кнопку "Начать AzureJukaFunction", которая запустит локальный эмулятор Azure.
- Используйте Postman для отправки функций на сервер Azure в "body" как необработанный запрос в следующем формате:

### Функция Microsoft Azure

Загрузите пакет на Azure Web Server Использование веб-развёртывания для публикации Juka (Функция Azure) в облаке

## Вызов Azure функции Juka

Juka может запустить код на сервере функции Juka Azure, отправив сообщение с первичным запросом в следующем формате:

```json
{
  "code": "func main() = { printLine(\"Hello World\"} }"
}
```

ПРИМЕЧАНИЕ: вы должны избежать цитат, в противном случае Juka вернет ошибку.
