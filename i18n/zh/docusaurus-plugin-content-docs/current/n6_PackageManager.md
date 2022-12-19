---
sidebar_position: 6
slug: /软件包管理器
---

# 软件包管理器

<h1>📖 表格内容</h1>

- [**什么是JLDN？**](#about)
- - [**目的是什么？**](#used-for)
- - [**我们分散的网络如何工作？**](#how-our-decentralized-network-works)
- [**什么是 `manifest.yaml` 文件？**](#manifest-file)
- - [**清单文件格式**](#manifest-format)
- [**为什么安装了库加密？**](#encryption)
- [**什么是命令？**](#usage)
- - [**安装软件包**](#install-usage)
- - [**弹出版本**](#bump-usage)
# 关于

## 已使用
**JLDN** 是由 Juka 语言组织创建和维护的包管理器。 它允许用户创建、发布和使用库。 *例如，* 如果您正在创建一个 web 服务器， 您可以安装一个juka库，为您提供一个固有的框架，而不是重新创建整个https 的同级单体。

## 我们分散的网络如何工作
我们分散的网络是JLDN 如何能够接收软件包数据。 这包括图书馆内容。 我们从 github 直接拉取数据，使它更容易，更快地接收包。

# 清单文件
`manifest.yaml` 文件用于给出有关包的规格。 这包括当前版本、描述和内容。

## 清单格式
表中的表述如下：
```yaml
版本︰ 0.0.1
软件包名称：
package_description: descr
library_directory: lib
main_repo_branch: main
repo_name: JLDN
repo_author_name: jukaLang
```

# 加密
当您从 **JLDN** 安装软件包时，我们使用加密的解决方案。 因为Juka的主要目标是运行速度加密是执行Juka运行时间最快的方式。

# 用法
## 安装使用
*使用分散的网络安装软件包*
```bash
jldn 安装 {git_repo_author} {git_repo} {branch} { FLAGS }
```

标记：

'-nm' - 指定repo 不包含清单文件，您想要安装任何方式

'--force ' - 如果包名已经存在则要覆盖的部队

## 抽取使用量
*恢复到指定的 **JLDN** 版本*
```bash
jldn bump {service} {version}
```

服务：

**JLDN**

**Juka**

标记：

**没有找到这个商品的 FLAGS WERE**

# 如何安装
## 窗口
要在窗口上安装，您需要做的只是安装 'win_installer.exe' 然后运行它，其他一切将被自动化！ 您可以在发布评估中找到该文件。

## Linux
*即将到来的*
