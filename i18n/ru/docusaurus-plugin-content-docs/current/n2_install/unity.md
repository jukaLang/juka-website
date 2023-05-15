---
sidebar_position: 6
---

# Unity 3D

Джука может быть использована в Unity 3D, следуя следующим шагам:

1. Установите пакет JukaCompiler Nuget.
2. Создайте многострочную строку в движке (с помощью `) и запустите следующее:

```jsx
new JukaCompiler.Compiler().Go(sourceAsString, false);
```

## Пример

Следующий код будет напечатать "Hello World" в консоль:

```jsx
string juka = `
func main() = {
printLine("Hello World")
}
`
var output new JukaCompiler.Compiler().Go(juka,false);
```
