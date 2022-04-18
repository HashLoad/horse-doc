# horse-mkdocs

Projeto da documentação do Horse baseada no mkdocs (Python)

Para a criação desta documentação foi utilizada a versão do python 3.6 (ou mais recente)
Você pode configurar o ambiente criando um ambiente virtual (recomendado) ou mesmo sem o ambiente virtual, utilizando o comando `pip install -r requirements.txt`

## Configuração do ambiente

1. Utilizando o ambiente virtual

Para utilizar o ambiente virtual é necessário, antes de mais nada, instalar a lib **virtualenv** pelo comando `pip install virtualenv`
Em seguida utilize o cmd para criar seu ambiente virtual, e instalar os requisitos nele.

```shell
#On Windows
>virtualenv venv
>"venv/Scripts/>activate.bat"

>(venv) pip install -r requirements.txt
>(venv) mkdocs serve -a localhost:8082
```

irá aparecer uma tag **(venv)** no canto do console, o que indica que o ambiente virtual está ativo.
Por último iniciamos o servidor da documentação na porta 8082

2. Sem utilizar o ambiente virtual

Neste caso é recomendável adicionar o python nas suas variáveis de ambiente.
A aplicação irá instalar os pacotes na sua pasta padrão do python

```shell
> py -m pip install -r requirements.txt
>mkdocs serve -a localhost:8082
```

![](Screen.PNG)

## Como contribuir

Antes de contribuir acesse o nosso [Guia de conduta]
Você poderá contribuir em qualquer dos tópicos abaixo
Criando uma tradução
Criando novas páginas com novos assuntos
Incluindo links para tutoriais e artigos (sem fins lucrativos)
Revisando o conteúdo, atualizando com novos recursos
Corrigindo erros e sugerindo alterações

Acompanhe as issues abertas https://github.com/HashLoad/horse-doc/issues
Veja as línguas que carecem de tradução

## Como enriquecer as contribuições

Utilize exemplos claros
Inclua peças de código [link]
Crie imagens PNG ou Gifs [link]
Crie diagramas com https://mermaid-js.github.io/mermaid/ [link]
Utilize os recursos avançados do mk-docs [link]
Saiba mais. [link]

## Colocando a mão na massa

Realize uma cópia do repositório fazendo **fork** https://github.com/HashLoad/horse-doc
Faça suas alterações e realize um Pull Request para `HashLoad/horse-doc`
