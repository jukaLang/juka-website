---
sidebar_position: 6
---

# 在Unity 3D 中运行Juka

您可以统一运行 JukaCompiler

跟随教程于：

https://docs.microsoft.com/en-us/visualstudio/gamedev/unity/unity-scripting-upgrade

要使用 Juka，在引擎中创建一个多行字符串 (使用 `) 然后运行下面的字符串

```jsx
新 JukaCompiler.Compiler().Go(sourceAsString,false);
```

## 示例

结果将存储在输出中：

```jsx
string juka = `
func x() = own
printLine("Hello World");
}
x();
`
var output new JukaCompiler.Compiler().Go(juka,false);
```

如果您有任何疑问，请给我们发送不一致消息。