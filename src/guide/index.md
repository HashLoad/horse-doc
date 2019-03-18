---
title: Introdução
type: guide
order: 2
---

## O que é Horse?

Horse é um **framework** para a construção de aplicações web. Como biblioteca principal, é fácil adotar e integrar com outras bibliotecas ou projetos existentes.

## Primeiros Passos

A forma mais simples de testar Horse é instalando. Sinta-se à vontade para instalá-lo e acompanhar conosco durante alguns exemplos básicos.

No tópico [Instalação](installation.html) você verá como instalar o Horse.

## Noções Básicas

No núcleo do Horse está um sistema que nos permite declarativamente mapear rotas *HTTP* usando uma sintaxe muito simples:

``` delphi
var
  App: THorse;
begin
  App := THorse.Create(9000);

  App.Get('/ping',
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('pong');
    end);
    
  App.Start;
end;
```

Acabamos de criar nosso primeiro servidor Horse!

## Pronto para Mais?

Nós introduzimos brevemente o Horse - o resto deste guia se aprofundará em outros recursos avançados em um nível muito maior de detalhes, portanto leia tudo!