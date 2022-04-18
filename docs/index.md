---
title: Bem vindo
type: iniciante
order: 1
---

# Horse

![Horse ](horse.png){: style="display:block;margin-left:auto;margin-right:auto;width:30%;"}

## O que é o Horse?

Horse é um **framework** para aplicações web compatível com Delphi e Lazarus. Fácil de ser adotada e integrada com outras bibliotecas ou projetos.

## Primeiros passos

A melhor maneira de obter o Horse é acessando a nossa [Página de instalação](installation). 

## Noções básicas

O coração do Horse é um sistema que nos permite maper rotas *HTTP*  de forma declarativa, com uma sintaxe muito simples.

=== "Delphi"
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
=== "Lazarus"
    ``` delphi
    {$MODE DELPHI}{$H+}
    
    uses Horse;
    
    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Pong');
    end;
    
    begin
      THorse.Get('/ping', GetPing);
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


--8<-- "includes/abbreviations.md"