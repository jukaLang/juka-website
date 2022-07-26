---
sidebar_position: 6
---

# Unity 3D

Вы можете запустить JukaCompiler в Unity.

Следуйте учебнику по адресу:

https://docs.microsoft.com/ru/visualstudio/gamedev/unity/unity-scripting-upgrade

Чтобы использовать Juka, создайте многострочную строку в движке (с помощью `) и затем запустите следующее

```jsx
новый JukaCompiler.Compiler().Go(sourceAsString,false);
```

## Пример

Результаты будут сохранены в результате:

```jsx
string juka = `
func x() = {
printLine("Hello World");
}
x();
`
var output new JukaCompiler.Compiler().Go(juka,false);
```

Если у вас есть какие-либо вопросы, пожалуйста, отправьте нам сообщение на дискорд.