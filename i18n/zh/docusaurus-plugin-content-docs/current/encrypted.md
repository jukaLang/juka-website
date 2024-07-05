---
sidebar_position: 2
slug: /加密
---

# 加密
Juka 可以加密和解密文件。 Juka can encrypt and decrypt files. It can also run encrypted Juka script files.

要加密一个文件“HelloWorld.juk”，请在控制台中运行以下内容：

```jsx
./juka --crypt HelloWorld.juk
```

这将创建两个文件：
- HelloWorld.juk.crypt
- HelloWorld.juk.key

HelloWorld.juk.crypt包含加密文件。 They HelloWorld.juk.encrypt contains the encrypted file. The HelloWorld.juk.key contains AES key for use to decrypt the file.


要解密文件回到"HelloWorld.juk"，请运行以下命令：

```jsx
./juka --decrypt HelloWorld.juk
```

This will take "HelloWorld.juk.encrypt" and "HelloWorld.juk.key" and decrypt the file. NOTE: You can encrypt/decrypt any file (not just Juka scripts) 注意：您可以加密/解密任何文件(不仅是 juka 脚本) 注意：您可以加密/解密任何文件(不仅是 juka 脚本) 注意：您可以加密/解密任何文件(不仅是 juka 脚本)

要运行加密文件而无需解密，请运行以下内容：

```jsx
./juka --crypted HelloWorld.juk
```

这将使用以下文件：
- HelloWorld.juk.crypt
- HelloWorld.juk.key

将它们解密为内存并在Juka执行它们。


![已加密](/img/encrypted.png)

