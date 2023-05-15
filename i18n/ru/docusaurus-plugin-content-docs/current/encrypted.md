---
sidebar_position: 2
slug: /зашифровано
---

# Шифрование
Juka может шифровать и расшифровать файлы. Он также может запускать зашифрованные файлы скриптов Juka.

Чтобы зашифровать файл "HelloWorld.juk", выполните в консоли следующие действия:

```jsx
./juka --encrypt HelloWorld.juk
```

Это создаст два файла:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

Они HelloWorld.juk.encrypt содержат зашифрованный файл. Ключ HelloWorld.juk.key содержит AES для дешифрования файла.


Чтобы расшифровать файл обратно в "HelloWorld.juk" выполните следующую команду:

```jsx
./juka --decrypt HelloWorld.juk
```

Это займет "HelloWorld.juk.encrypt" и "HelloWorld.juk.key" и расшифрует файл. ПРИМЕЧАНИЕ: Вы можете зашифровать/расшифровать любой файл (не только сценарии Juka)

Чтобы запускать зашифрованные файлы без необходимости расшифровки, запустите следующее:

```jsx
./juka --encrypted HelloWorld.juk
```

Это будет использовать следующие файлы:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

расшифровать их в память и выполнить их в Juka.


![зашифровано](/img/encrypted.png)

