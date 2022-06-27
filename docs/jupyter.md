---
sidebar_position: 29
---

# Run Juka in Jupyter

If you are a data scientist or an analytic, you've probably
heard of and used Jupyter.

Typically, Jupyter is used to run Python code. However,
it can be used for many other languages.

We have created a Juka_kernel which allows Juka to communicate
directly with Jupyter.

First you need to download Juka (https://jukalang.com/download)
Once, downloaded add Juka to path.

On Windows, it is recommended that you follow the steps, outlined
at https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho

On Linux/Unix/MacOS (bash):
Assuming that we stored Juka in /usr/bin/share/Juka,
we run the following command:
```jsx
$ export path = "/usr/bin/share/Juka:$PATH"
```
This will add Juka to PATH

NOTE: You might need to restart the terminal. It's recommended
to restart your computer as well.

Next, you will need to install jupyter. Please follow the steps
outlined at https://jupyter.org/install if you haven't done so.

Next, you can either install Juka_kernel from PyPi,
by running 
```jsx
pip install juka_kernel
```
or install it directly from the source by downloading from:
https://github.com/jukaLang/juka_kernel
and running:
```jsx
python -m juka_kernel.install 
```
in the kernel folder.

## Using the Juka kernel

**Notebook**: The *New* menu in the notebook should show an option for an Juka notebook.

**Console frontends**: To use it with the console frontends, add ``--kernel juka`` to
their command line arguments.

### What if a new version of Juka Comes out?
If a new version of Juka comes out, you do not need to
update or upgrade the juka_kernel (unless we make big changes
to the kernel). All you need to do is replace the files in
Juka PATH. That's it! This makes it easy to upgrade Juka
without having to uninstall and re-install kernel

## Technical Details
Juka Kernel is written in Python and serves as a bridge between
Jupyter and Juka. It does not compile or run the Juka code. It
just serves as a messaging protocol.

If you would like to contribute to the Juka_kernel, please
see https://github.com/juka/juka_kernel