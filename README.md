# horse-mkdocs
This is a how-to document Horse based on mkdocs (Python)

Check out the **pt-br** readme version on [leiame.md](LEIAME.md)

To generate this documentation Python 3.6 (ou newer) is needed

If you does not have Python installed check it out on [Python Installation Tutorial] (Python.md)

Create an virtual environment (recommended) or just type `pip install -r requirements.txt`

## Setup

1. Using virtual environment

To use a virtual **env**, first of all, install **virtualenv** lib by cmd `pip install virtualenv`
Then generate the virtual **env** with following script.

```shell
#On Windows
>virtualenv venv
>"venv/Scripts/>activate.bat" 

>(venv) pip install -r requirements.txt
>(venv) cd docs/pt/ #Choose the translation you want working on
>(venv) mkdocs serve -a localhost:8082
```

!!! This setup just allows you to work with one translation per time
I did not solve thid translation feature at all, feel free to share if you have any suggestion. 

It will show a tag **(venv)** on left side of the console, indicating that the virtual **env** is activated.
At this point, the documentation server should be running on port 8082.

2. Without using virtual **env**

In this case, that's recommended to add the python into environmental variables
The application will install all python packages into the same default folder that's python installed on

```shell
> py -m pip install -r requirements.txt
>mkdocs serve -a localhost:8082
```

![](Screen.PNG)

## How to build

Before you contribute acess owr [Conduct Guide] 
Any help is welcome:
    Creating a translation
    Solving issues
    Creating new pages with new topics
    Includding links and references to tutoriais and articles (no comercial content allowed)
    Reviewing the pages
    Repairing bugs or suggesting new approachs
    etc..

Take a look at oppened issues https://github.com/HashLoad/horse-doc/issues
Check out the languages that was not translated yet

## Improving contributions

Create clear examples  
Format code as code [link]  
Generate images PNG or Gifs [link]  
Create diagrams with https://mermaid-js.github.io/mermaid/ [link]  
Use advanced features of mk-docs [link]  
See more. [link]  

## Let starting

Fork this project on https://github.com/HashLoad/horse-doc
Give your contrubution and create a Pull Request for `HashLoad/horse-doc`

## Todo list

[ ] Write the [Conduct Guide]   
[ ] Write tutorials how to create documentation  
[ ] a) Create diagrams with https://mermaid-js.github.io/mermaid/ [link]   
[ ] b) Use advanced features of mk-docs [link]    
[ ] c) Working with openned issues [link]    
