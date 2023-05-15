---
sidebar_position: 2
slug: /verschlüsselt
---

# Verschlüsselung
Juka kann Dateien verschlüsseln und entschlüsseln. Es kann auch verschlüsselte Juka-Skriptdateien ausführen.

Um eine Datei "HelloWorld.juk" zu verschlüsseln, führen Sie folgendes in Konsole aus:

```jsx
./juka --encrypt HelloWorld.juk
```

Dies wird zwei Dateien erstellen:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

Sie HelloWorld.juk.encrypt enthält die verschlüsselte Datei. Der HelloWorld.juk.key enthält AES-Schlüssel zur Entschlüsselung der Datei.


Um die Datei zurück zu "HelloWorld.juk" zu entschlüsseln, führen Sie folgenden Befehl aus:

```jsx
./Juka --HelloWorld.juk entschlüsseln
```

Dies wird die Datei "HelloWorld.juk.encrypt" und "HelloWorld.juk.key" entschlüsseln. HINWEIS: Sie können jede Datei (nicht nur Juka-Skripte) verschlüsseln/entschlüsseln

Um die verschlüsselten Dateien ohne entschlüsseln zu müssen, führen Sie Folgendes aus:

```jsx
./juka --verschlüsselte HelloWorld.juk
```

Dies wird folgende Dateien verwenden:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

Entschlüssele sie im Gedächtnis und führe sie in Juka aus.


![verschlüsselt](/img/encrypted.png)

