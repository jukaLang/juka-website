---
sidebar_position: 2
slug: /encriptado
---

# Encriptación
Juka puede cifrar y descifrar archivos. También puede ejecutar archivos de scripts Juka cifrados.

Para cifrar un archivo "HelloWorld.juk", ejecute lo siguiente en Console:

```jsx
./juka --encrypt HelloWorld.juk
```

Esto creará dos archivos:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

Ellos HelloWorld.juk.encrypt contiene el archivo cifrado. HelloWorld.juk.key contiene la clave AES para descifrar el archivo.


Para descifrar el archivo de vuelta a "HelloWorld.juk" ejecuta el siguiente comando:

```jsx
./juka --descifrar HelloWorld.juk
```

Esto tomará "HelloWorld.juk.encrypt" y "HelloWorld.juk.key" y descifrará el archivo. NOTA: Puede cifrar/descifrar cualquier archivo (no sólo scripts de Juka)

Para ejecutar los archivos cifrados sin tener que descifrar, ejecuta lo siguiente:

```jsx
./juka --encrypted HelloWorld.juk
```

Esto usará los siguientes archivos:
- HelloWorld.juk.encrypt
- HelloWorld.juk.key

descifrarlos en memoria y ejecutarlos en Juka.


![cifrado](/img/encrypted.png)

