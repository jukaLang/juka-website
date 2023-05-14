---
sidebar_position: 7
slug: /hello-world
---

# 正在写入您的第一个应用程序

让我们首先创建一个“你好世界”应用程序。

1. 创建一个空文件并将其保存为 `HelloWorld.juk`。
2. 在该文件中，复制并粘贴以下代码：

```jsx
func main() =
  printLine("Hello World");

```

3. 完成后，保存文件并运行以下命令：
```jsx
./juka HelloWorld.juk
```

这将编译和运行您的应用程序。 如果一切顺利，你应该看到以下输出：

```jsx
Hello World
```