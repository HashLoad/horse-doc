---
title: Instalação
type: iniciante
order: 1
---

### Boss

A maneira mais fácil de instalar o Horse é utilizando o [Boss](https://github.com/HashLoad/boss) (Recomendado)
Esta ferramenta poderá auxiliar a gerenciar pacotes de dependências e versões utilizadas na sua api.
Ela também irá configurar seu projeto automaticamente na * Library Path *.

Para realizar a instalação, simplesmente abra o terminal de sua escolha e digite o seguinte comando:

``` bash
$ boss init
$ boss install horse
```

*NOTE: it is worth mentioning that the command `boss init` is to initialize the dependency manager and must be executed only once. If you have already done so, there is no need to do it again.*

### Manual

[Baixe](https://github.com/HashLoad/boss/releases/latest) a versão mais nova do Horse e inclua o diretório __src/__ na sua *Library Path*.

Veja mais em:
  * Implementando um [Olá Mundo!](hello-world).