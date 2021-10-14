# FileWiki

A small extension inspired by the talk Andy Hunt gave on the Corecursive podcast in [episode #029](https://corecursive.com/029-learn-to-think-andy-hunt/).

> _Disclaimer: this is also my first non-React project in Typescript **and** my first VS Code extensions. Quality may be rather poor._

## Basic principles
1. Set-up a folder with several text files. For example named `one.txt` and `two.txt`, in `/tmp/filewiki`.
2. Configure the extension's only config parameter to point to `/tmp/filewiki`.
3. Use the command provided by the extension (_FileWiki: Prompt command_) to navigate to either file by typing the filename (e.g. `one` to open `one.txt`).
4. Alternatively, highlight a word in the text editor and press `Ctrl + Alt + H` to open the file in the wiki with the same name (e.g. highlight `two` and press `Ctrl + Alt + H` to open `two.txt`).

## Future improvements
* smarter navigation
    * multiple words parsing
    * subdirectories in the file wiki
* case insensitivity
* if the file does not exist, create it