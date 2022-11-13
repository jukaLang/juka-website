---
sidebar_position: 7
slug: /hello-world
---

# 正在写入您的第一个应用程序

## Hello World
让我们首先创建一个 HelloWorld 应用程序。 创建一个空文件并保存为 HelloWorld.juk

在该文件中，复制并粘贴以下代码：

```jsx
func main() =  {
   printLine("Hello World");
}
```

完成后，保存文件并运行一个适当的命令来编译文件


### 窗口
如果您添加了 PATH 变量：

```jsx
juka.exe HelloWorld.juk
```

如果您没有添加 PATH 变量：
```jsx
./juka.exe path/to/HelloWorld.juk
```

### Macintosh/Linux

如果您添加了 PATH 变量：

```jsx
juka HelloWorld.juk
```

如果您没有添加 PATH 变量：
```jsx
./juka 路径/to/HelloWorld.juk
```

### 微软Azure 函数
详情请查看 Azure 函数部分