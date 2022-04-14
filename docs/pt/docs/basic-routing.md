---
title: Roteamento Básico
type: starter
order: 1
---

Rotas determinam como a aplicação responderá a uma requisição do *cliente* em um caminho específico chamado *endpoint*, que é uma [URI](https://pt.wikipedia.org/wiki/URI) que especifica um método do protocolo HTTP (POST, PUT, GET, DELETE e além).

Cada rota pode ter mais de um tratamento, que responderá de acordo com a requisição correspondente.

Uma rota possui a seguinte estrutura

``` delphi
  THorse.METHOD(PATH, HANDLER);
```

Onde:

* `METHOD` é um método HTTP.
* `PATH` é o caminho no servidor.
* `HANDLER` é um método do delphi (procedure) quando esta rota for acessada.

Os exemplos a seguir ilustram a definição de rotas simples

Reply with "Hello World!" to whoever requested (*client* who made the *request*):

``` pascal
THorse.Get('/ping',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Hello World!');
  end);
```
Respond to POST request on the root route (/):
``` pascal
THorse.Post('/',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Got a POST request');
  end);
```
Respond to a PUT request to the /user route:
``` pascal
THorse.Put('/user',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Got a PUT request at /user');
  end);
```
Respond to a DELETE request to the /user route:
``` pascal
THorse.Delete('/user',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Got a DELETE request at /user');
  end);
```

*NOTA: A versão atual do [Lazarus 3.2.2](https://www.lazarus-ide.org/index.php?page=downloads) não tem suporte a métodos anônimos, veja o exemplo em [Olá Mundo](../hello-world) de como informar o callback no Lazarus*