---
sidebar_position: 5
---

# 朱皮特文

如果您是数据科学家或分析人员，您可能已经听说过 并使用了Jupyter。

通常，Jupyter用于运行 Python 代码。 然而， 可以用于其他许多语言。

我们创建了一个 Juka_kernel ，允许Juka 直接与Jupyter联系 。

首先你需要下载 Juka (https://jukalang.com/download) 只要下载就可以添加Juka 到路径。

关于Windows，建议您遵循 的步骤 https://stackoverflow.com/questions/44272416/how to 附加组件-folder-to-path-environment-variable-in-windows-10-with-screenssho

在 Linux/Unix/MacOS (bash): 假设我们在 /usr/bin/shar/juka, 我们运行以下命令：

```jsx
$ export path = "/usr/bin/share/Juka:$PATH"
```

这将添加 Juka 到 PATH

注意：您可能需要重新启动终端。 还推荐 重启您的计算机。

接下来，你需要安装jupyter。 如果你还没有这样做，请遵循 在 https://jupyter.org/install。

接下来，你可以从 PyPi 安装 Juka_kernel ， 来运行

```jsx
pip install juka_kernel
```

或者直接从源代码安装它，从下载： https://github.com/jukaLang/juka_kernel 并运行：

```jsx
python -m juka_kernel.install
```

在内核文件夹中。

## 使用 Juka 内核

**Notebook**: The _New_ menu in the notebook should show an option for an Juka notebook.

**控制台前端**: 若要使用控制台前端，添加 `--kernel juka` 到 他们的命令行参数。

### 如果有新版本的 Juka 即将出去怎么办？

如果有新版本的 Juka 已经关闭。 您不需要 更新或升级juka_kernel (除非我们对内核作重大更改 )。 您需要做的只是替换 Juka PATH 中的文件。 就是这样！ 这使得升级Juka 很容易，而无需卸载和重新安装内核。

## 技术细节

Juka Kernel 用Python写成，充当 Jupyter和Juka之间的桥梁。 它不编译或运行Juka代码。 它 只是一个消息协议。

如果您想要为 Juka_kernel 作出贡献，请 查看 https://github.com/juka/juka_kernel
