---
sidebar_position: 5
---

# Juka im Jupyter

Juka ist eine neue Programmiersprache, die für Data Science und Analytics entwickelt wurde. Es ist ähnlich wie Python, aber es ist mächtiger und effizienter.

Jupyter ist eine beliebte interaktive Umgebung zum Entwickeln und Ausführen von Code. Es kann mit vielen verschiedenen Programmiersprachen verwendet werden, darunter Python, R und Julia.

Das Juka Team hat einen Juka Kernel für Jupyter erstellt. Dieser Kernel erlaubt es Ihnen, Juka Code in Jupyter Notebooks auszuführen.

Um den Juka-Kernel zu verwenden, müssen Sie Juka und Jupyter installieren. Anweisungen zur Installation von Juka finden Sie auf der [Juka Webseite](https://jukalang.com/download). Anweisungen zur Installation von Jupyter finden Sie auf der [Jupyter Website](https://jupyter.org/install).

Einmal heruntergeladen, fügen Sie Juka zum Pfad hinzu.

Unter Windows wird empfohlen, die Schritte zu folgen, unter https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

On Linux/Unix/MacOS (bash): Assuming that we stored Juka in /usr/bin/share/Juka, we run the following command:

```jsx
$ Export Pfad = "/usr/bin/share/Juka:$PATH"
```

Dies wird Juka zu PATH hinzufügen

Sobald Sie Juka und Jupyter installiert haben, müssen Sie Juka Kernel installieren:

### PIP verwenden
```jsx
pip install juka_kernel
```

### Using Github
oder installieren Sie es direkt aus der Quelle, indem Sie es herunterladen: https://github.com/jukaLang/juka_kernel und ausführen:

```jsx
python -m juka_kernel.install
```

im Kernel-Ordner.

## Nächste Schritte

Sie können den Juka-Kernel in Jupyter Notebooks verwenden. Öffnen Sie dazu ein Jupyter Notebook und wählen Sie "Neu" aus dem Menü. Wählen Sie im Dropdown-Menü "Notizbuch" "Juka".

Sie können jetzt mit dem Schreiben von Juka Code in Ihrem Jupyter Notebook beginnen. Um den Code auszuführen, wählen Sie "Ausführen" aus dem Menü.

Der Juka Kernel wird Ihren Code kompilieren und ausführen. Die Ausgabe Ihres Codes wird im Notebook angezeigt.

Der Juka-Kernel ist ein mächtiges Werkzeug, mit dem Sie Juka in Jupyter Notebooks verwenden können. Dies macht es einfach, Juka Code zu entwickeln und zu debuggen.

## Technische Details

Der Juka Kernel ist in Python geschrieben und verwendet das [Jupyter Protokoll](https://jupyter.org/protocol). Der Kernel kompiliert oder führt den Juka-Code nicht aus. Es dient lediglich als Messaging-Protokoll zwischen Jupyter und Juka.

Der Juka Kernel ist Open Source und ist auf [GitHub](https://github.com/juka/juka_kernel) verfügbar.

## Mitwirken

Wenn Sie zum Juka-Kernel beitragen möchten, lesen Sie bitte die [Beitragsleitlinien](https://github.com/juka/juka_kernel/blob/master/CONTRIBUTING.md).