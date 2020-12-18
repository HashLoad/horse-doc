---
title: Roteamento Básico
type: starter
order: 1
---

O roteamento determina como o aplicativo responderá a uma solicitação de um *client* em um *endpoint*, que seria o URI e um método específico do protocolo HTTP (POST, PUT, GET, DELETE e assim por diante).

Na rota, é possível haver mais de um tratamento, que será executado quando a rota solicitada for a correspondente.

A rota possui a seguinte estrutura:

``` delphi
  THorse.METHOD(PATH, HANDLER);
```

Where:

* `METHOD` é um método de solicitação HTTP.
* `PATH` é um caminho no servidor.
* `HANDLER` é o método (procedimento) que será executado quando a rota for correspondida.

Os seguintes exemplos ilustram a definição de rotas simples.

Responder com "Olá, mundo!" para quem solicitou (*client* que realizou a *request*):

``` pascal
THorse.Get('/',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Olá, mundo!');
  end);
```
Responder a uma solicitação POST na rota raiz (/):
``` pascal
THorse.Post('/',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Recebi uma solicitação POST');
  end);
```
Responder a uma solicitação PUT para a rota /usuario:
``` pascal
THorse.Put('/usuario',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Recebi uma solicitação PUT em /usuario');
  end);
```
Responder a uma solicitação DELETE para a rota /usuario:
``` pascal
THorse.Delete('/usuario',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Recebi uma solicitação DELETE em /usuario');
  end);
```