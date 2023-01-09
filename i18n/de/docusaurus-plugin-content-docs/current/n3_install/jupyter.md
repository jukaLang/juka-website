---
sidebar_position: 5
---

# Juka im Jupyter

Wenn du ein Datenwissenschaftler oder Analytiker bist, hast du wahrscheinlich von Jupyter gehört und benutzt.

In der Regel wird Jupyter verwendet, um Python-Code auszuführen. kann jedoch für viele andere Sprachen verwendet werden.

Wir haben einen Juka_kernel erstellt, der es Juka erlaubt, direkt mit Jupyter zu kommunizieren.

Zuerst musst du Juka (https://jukalang.com/download) einmal herunterladen, Juka zum Pfad herunterladen.

Unter Windows wird empfohlen, die Schritte zu folgen, unter https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

On Linux/Unix/MacOS (bash): Assuming that we stored Juka in /usr/bin/share/Juka, we run the following command:

```jsx
$ Export Pfad = "/usr/bin/share/Juka:$PATH"
```

Dies wird Juka zu PATH hinzufügen

HINWEIS: Möglicherweise müssen Sie das Terminal neu starten. Es wird empfohlen Ihren Computer ebenfalls neu zu starten.

Als nächstes müssen Sie jupyter installieren. Bitte folge den Schritten auf https://jupyter.org/install wenn du dies nicht getan hast.

Als nächstes können Sie entweder Juka_kernel aus PyPi installieren, indem Sie

```jsx
pip install juka_kernel
```

oder installieren Sie es direkt aus der Quelle, indem Sie es herunterladen: https://github.com/jukaLang/juka_kernel und ausführen:

```jsx
python -m juka_kernel.install
```

im Kernel-Ordner.

## Verwendung des Juka-Kernels

**Notebook**: The _New_ menu in the notebook should show an option for an Juka notebook.

**Konsolenfrontends**: Um es mit den Konsolenfrontends zu verwenden, fügen Sie `--kernel juka` zu ihre Kommandozeilenargumente hinzu.

### Was ist, wenn eine neue Version von Juka herauskommt?

Wenn eine neue Version von Juka herauskommt Sie müssen nicht den juka_kernel aktualisieren oder aktualisieren (es sei denn, wir haben große Änderungen am Kernel vorgenommen). Sie müssen nur die Dateien in Juka PATH ersetzen. Das war's! Dies macht es einfach, Juka zu aktualisieren, ohne den Kernel deinstallieren und neu installieren zu müssen

## Technische Details

Juka Kernel ist in Python geschrieben und dient als Brücke zwischen Jupyter und Juka. Sie kompiliert oder führt den Juka-Code nicht aus. Es dient nur als Messaging-Protokoll.

Wenn Sie zum Juka_kernel beitragen möchten, lesen Sie bitte https://github.com/juka/juka_kernel
