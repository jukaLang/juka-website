---
sidebar_position: 5
---

# Juka à Jupyter

Juka is a new programming language that is designed to be used for data science and analytics. It is similar to Python, but it is more powerful and efficient.

Jupyter is a popular interactive environment for developing and running code. It can be used with many different programming languages, including Python, R, and Julia.

The Juka team has created a Juka kernel for Jupyter. This kernel allows you to run Juka code in Jupyter notebooks.

To use the Juka kernel, you will need to install Juka and Jupyter. You can find instructions for installing Juka on the [Juka website](https://jukalang.com/download). You can find instructions for installing Jupyter on the [Jupyter website](https://jupyter.org/install).

Once, downloaded add Juka to path.

Sous Windows, il est recommandé de suivre les étapes, décrites à https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

Sous Linux/Unix/MacOS (bash): En supposant que nous avons stocké Juka dans /usr/bin/share/Juka, nous exécutons la commande suivante :

```jsx
$ export path = "/usr/bin/share/Juka:$PATH"
```

Cela va ajouter Juka à PATH

Once you have installed Juka and Jupyter, you need to install Juka kernel:

### Using PIP
```jsx
pip install juka_kernel
```

### Using Github
ou installez-le directement à partir de la source en téléchargeant depuis : https://github.com/jukaLang/juka_kernel et en exécutant :

```jsx
python -m juka_kernel.install
```

dans le dossier du noyau.

## Next Steps

You can start using the Juka kernel in Jupyter notebooks. To do this, open a Jupyter notebook and select "New" from the menu. In the "Notebook" dropdown menu, select "Juka".

You can now start writing Juka code in your Jupyter notebook. To run your code, select "Run" from the menu.

The Juka kernel will compile and run your code. The output of your code will be displayed in the notebook.

The Juka kernel is a powerful tool that allows you to use Juka in Jupyter notebooks. This makes it easy to develop and debug Juka code.

## Détails techniques

The Juka kernel is written in Python and uses the [Jupyter protocol](https://jupyter.org/protocol). The kernel does not compile or run the Juka code. It just serves as a messaging protocol between Jupyter and Juka.

The Juka kernel is open source and is available on [GitHub](https://github.com/juka/juka_kernel).

## Contribuer

If you would like to contribute to the Juka kernel, please see the [contribution guidelines](https://github.com/juka/juka_kernel/blob/master/CONTRIBUTING.md).