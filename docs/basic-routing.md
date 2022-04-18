---
title: Roteamento Básico
type: starter
order: 1
---

Rotas determinam como a aplicação responderá a uma requisição do *cliente* em um caminho específico chamado *endpoint*, que é uma [URI](https://pt.wikipedia.org/wiki/URI) que especifica um método do protocolo HTTP (POST, PUT, GET, DELETE e além).

Cada rota pode ter mais de um tratamento, que responderá de acordo com a requisição correspondente.

## Estrutura

Uma rota possui a seguinte estrutura:

``` delphi
  THorse.METHOD(PATH, HANDLER);
```

Onde:

* `THorse` é a instancia atual do Horse;
* `METHOD` é um método do protocolo HTTP;
* `PATH` é um caminho no servidor;
* `HANDLER` é a função que será executada quando a rota for acessada;

## Exemplos

Os exemplos a seguir ilustram a definição de rotas simples:

Responder a uma requisição GET para a rota `/users`:

===  "Delphi"

    ``` delphi
    THorse.Get('/users',
      procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
      begin
        Res.Send('GET Users');
      end);
    ```

===  "Lazarus"

    ``` delphi
    procedure DoGetUsers(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('GET Users');
    end;

    begin
      THorse.Get('/users', DoGetUsers);
    end. 
    ```

Responder a uma requisição POST para a rota `/users`:

===  "Delphi"

    ``` delphi
    THorse.Post('/users',
      procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
      begin
        Res.Send('POST Users');
      end);
    ```

===  "Lazarus"

    ``` delphi
    procedure DoPostUsers(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('POST Users');
    end;

    begin
      THorse.Post('/users', DoPostUsers);
    end. 
    ```
    
Responder a uma requisição PUT para a rota `/users/:id`:

===  "Delphi"

    ``` delphi
    THorse.Put('/users/:id',
      procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
      begin
        Res.Send('PUT Users');
      end);
    ```

===  "Lazarus"

    ``` delphi
    procedure DoPutUser(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('PUT Users');
    end;

    begin
      THorse.Put('/users/:id', DoPutUser);
    end. 
    ```

Responder a uma requisição DELETE para a rota `/users/:id`:

===  "Delphi"

    ``` delphi
    THorse.Delete('/users/:id',
      procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
      begin
        Res.Send('DELETE Users');
      end);
    ```

===  "Lazarus"

    ``` delphi
    procedure DoDeleteUser(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('DELETE Users');
    end;

    begin
      THorse.Delete('/users/:id', DoDeleteUser);
    end. 
    ```

--8<-- "includes/abbreviations.md"