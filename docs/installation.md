---
title: Instalação
type: iniciante
order: 1
---

Atualmente existem duas formas de instalar o Horse. Você pode fazer a instalação de forma manual, ou pode optar por utilizar o Boss que é um gerenciador de dependências para aplicações desenvolvidas com Delphi e Lazarus. 

Pelo fato do Horse ser um projeto modular, onde vamos trabalhar com vários pacotes ou dependências pequenas que serão acopladas ao nosso projeto (também chamados de middlewares), recomendamos a utilização do Boss para realizar a instalação.
### Boss

Antes de continuar, é necessário que você tenha o Boss instalado em sua máquina. Para isso basta realizar o download da última versão disponível do gerenciador clicando [aqui](https://github.com/hashload/boss/releases/latest)

A instalação é bem simples, e resume-se apenas em "next". Ao final de tudo, você pode conferir se o boss foi instalado executando o comando `boss version` em um terminal, onde o resultado deve ser algo semelhante ao exemplo abaixo:

``` bash
$ boss version
3.0.5
```

O próximo passo é você inicializar o boss na sua aplicação. Esse processo deve ser feito uma única vez por projeto para que seja criado os arquivos `boss.json` e `boss-lock.json`. Para isso, execute o seguinte comando em um terminal: 

``` bash
$ boss init
```

Pronto! Com o boss inicializado na sua aplicação, basta realizar a instalação do Horse com o seguinte comando:

``` bash
$ boss install horse
```

### Instalação manual

Embora esta não seja a opção de instalação recomendada, também é possível instalar o Horse de forma manual. Para isso, basta realizar o download do Horse clicando 
[aqui](https://github.com/HashLoad/boss/releases/latest).

Se você estiver utilizando o Delphi, o próximo passo é adicionar no `Library Path` da sua IDE ou em `Project > Options > Resource Compiler > Directories and Conditionals > Include file search path` do seu projeto, o diretório `horse/src`.

No Lazarus você pode adicionar o diretório `horse/src` em `Project > Project Options > Compiler Options > Path > Other unit files` do seu projeto.

--8<-- "includes/abbreviations.md"