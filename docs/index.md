---
title: Bem vindo
type: iniciante
order: 1
---

# Horse

![Horse ](horse.png)

## O que é o Horse?

Horse é um **framework** para aplicações web compatível com Delphi e Lazarus. Fácil de ser adotada e integrada com outras bibliotecas ou projetos.

## Primeiros passos

A melhor maneira de obter o Horse é acessando a nossa [Página de instalação](installation). 

## Noções básicas

O coração do Horse é um sistema que nos permite maper rotas *HTTP*  de forma declarativa, com uma sintaxe muito simples.

``` delphi
uses Horse;

begin
  THorse.Get('/ping',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('pong');
    end);

  THorse.Listen(9000);
end.
```

E nós já criamos nosso primeiro servidor!

## Pronto para mais?

Esta é apenas uma breve introdução do Horse. Continue o guia para se aprofundar em um maior número de detalhes. Então vamos lá!

Veja mais:
 * [Instalando](installation) Horse.
 * Implementando um [Olá mundo!](hello-world).
 * Entendendo [rotas](basic-routing).
