---
sidebar_position: 5
---

# Juka in Jupyter

胡卡语是一种新的编程语言，用于数据科学和分析。 它类似于Python，但它更强大和更有效。

Jupyter 是开发和运行代码的受欢迎的交互环境。 它可以使用许多不同的编程语言，包括Python、R和Julia。

朱卡小组为朱皮特尔创建了一个朱卡内线。 此内核允许您在 Jupyter 笔记本中运行 Juka 代码。

要使用 Juka 内核，您需要安装 Juka 和 Jupyter。 您可以在 [Juka网站](https://jukalang.com/download) 上找到安装 Juka的指示。 您可以在 [Jupyter网站](https://jupyter.org/install) 上找到安装Jupyter的说明。

一次下载，将Juka添加到路径。

关于Windows，建议您遵循 的步骤 https://stackoverflow.com/questions/44272416/how to 附加组件-folder-to-path-environment-variable-in-windows-10-with-screenssho

在 Linux/Unix/MacOS (bash): 假设我们在 /usr/bin/shar/juka, 我们运行以下命令：

```jsx
$ export path = "/usr/bin/share/Juka:$PATH"
```

这将添加 Juka 到 PATH

安装Juka 和 Jupyter后，您需要安装Juka kernel：

### 使用 PIP
```jsx
pip install juka_kernel
```

### Using Github
或者直接从源代码安装它，从下载： https://github.com/jukaLang/juka_kernel 并运行：

```jsx
python -m juka_kernel.install
```

在内核文件夹中。

## 以后的步骤

您可以开始使用朱皮特笔记本的 Juka 内核。 要做到这一点，请打开一个Jupyter 笔记本并从菜单中选择"新"。 在“笔记”下拉菜单中，选择 "Juka"。

你现在可以开始在你的Jupyter 笔记本中写入 Juka 代码。 要运行您的代码，请从菜单中选择“运行”。

Juka 内核将编译和运行您的代码。 您的代码的输出将显示在笔记本中。

Juka内核是一个强大的工具，可以让您在Jupyter笔记本中使用Juka。 这使得开发和调试 Juka 代码变得容易。

## 技术细节

Juka 内核是用Python写的，使用 [Jupyter 协议](https://jupyter.org/protocol)。 内核不编译或运行 Juka 代码。 它只是Jupyter和Juka之间的信息传递协议。

Juka 内核是开源的，可在 [GitHub](https://github.com/juka/juka_kernel) 上访问。

## 贡献中

如果您想要为 Juka 内核作出贡献，请参阅 [贡献指南](https://github.com/juka/juka_kernel/blob/master/CONTRIBUTING.md)。