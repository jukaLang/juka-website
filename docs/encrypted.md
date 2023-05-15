---
sidebar_position: 2
slug: /encrypted
---

# Encryption
Juka can encrypt and decrypt files. It can also run encrypted Juka script files.

To encrypt a file "HelloWorld.juk", run the following in Console:

```jsx
./juka --encrypt HelloWorld.juk
```

This will create two files:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

They HelloWorld.juk.encrypt contains the encrypted file. The HelloWorld.juk.key contains AES key for use to decrypt the file.


To decrypt the file back to "HelloWorld.juk" run the following command:

```jsx
./juka --decrypt HelloWorld.juk
```

This will take "HelloWorld.juk.encrypt" and "HelloWorld.juk.key" and decrypt the file.
NOTE: You can encrypt/decrypt any file (not just Juka scripts)

To run the encrypted files without having to decrypt, run the following:

```jsx
./juka --encrypted HelloWorld.juk
```

This will use the following files:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

decrypt them in memory and execute them in Juka.


![encrypted](/img/encrypted.png)

