# Welcome to python

This tutorial is just if you don't have python installed

Este tutorial é apenas para quem não tem o python instalado

## Install python on Windows

Get last python version at https://www.python.org/downloads/
After download it do the installation into a known directory
For example I've installed at 

D:\python310

Then Add the directory D:\python310\ into **Windows Environment Variables**
Sometimes is import to restart the pc after change variables

If you don't want to change Variables, just pass the full filename where python.exe is installed.

---
Now it is very import to take the pip file. Pip is like npm package manager.
Download the raw file https://bootstrap.pypa.io/get-pip.py and paste the same directory you installed python
write the following example into terminal. If you have changed Environment Variables use script 1, else use script 2

script 1 - With python added to environment variables
```bash
>python.exe get-pip.py 
>>Successfully installed pip-22.0.4 setuptools-60.10.0 wheel-0.37.1
```
script 2 - Without changing windows variables

```bash
>cd d:\python310\ 
>python.exe get-pip.py 
>>Successfully installed pip-22.0.4 setuptools-60.10.0 wheel-0.37.1
```

 You're ready to get horse-docs [README.MD](README.MD)
 
 ## Instalando o Python no Windows

Pegue a última versão do python https://www.python.org/downloads/
Depois de baixar instale num diretório conhecido
Por exemplo eu instalei no

D:\python310

Depois adiciona o caminho D:\python310\ nas **Variáveis de Ambiente do Windows**
Algumas vezes é necessário reiniciar a máquina para aplicar as alterações

Se você não deseja alterar as variáveis de ambiente, então será necessário passar o caminho completo do aplicativo python.exe

---
Agora é essencial que você obtenha o pip. Pip é como o gerenciador de pacotes npm.
Pegue o arquivo bruto em file https://bootstrap.pypa.io/get-pip.py and e cole no mesmo diretório que você instalou o python.
Digite o exemplo abaixo no terminal. Se você configurou as variáveis de ambiente, use o script 1, do contrário use o script 2.

script 1 - Com o python adicionado nas variáveis de ambiente
```bash
>python.exe get-pip.py 
>>Successfully installed pip-22.0.4 setuptools-60.10.0 wheel-0.37.1
```
script 2 - Sem alterar as variáveis de ambiente

```bash
>cd d:\python310\ 
>python.exe get-pip.py 
>>Successfully installed pip-22.0.4 setuptools-60.10.0 wheel-0.37.1
```

Você está pronto para instalar o HorseDocs [README.MD](README.MD)
