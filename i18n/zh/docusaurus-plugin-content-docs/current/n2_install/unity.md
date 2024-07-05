---
sidebar_position: 6
---

# Unity 3D

在Unity 3D中，可以通过下列步骤使用Juka：

1. 安装 JukaCompiler Nuget 包。
2. 在引擎中创建一个多行字符串(使用 `) 然后运行以下内容：

```jsx
new JukaCompiler.Compiler().go(sourceAsString, false)；
```

## 示例

以下代码将打印“Hello World”到控制台：

```jsx
string juka = `
func main() = own
printLine("Hello World");
}

var output new JukaCompiler.Compiler().Go(juka,false);
```
