---
title: Roteamento
type: guide
order: 3
---

**Roteamento** é como uma aplicação responderá uma requisição em um *endpoint*, que por sua vez é composto de um caminho e um método.

``` delphi
  App.Metodo('endereco', Funcao);
```

### Métodos
Os métodos são derivados dos [métodos HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods), dos quais nós podemos usar os seguintes:

``` delphi
  // Método GET
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Requisição GET');
    end);
  );

  // Método POST
  App.Post('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Requisição POST');
    end);
  );

  // Método PUT
  App.Put('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Requisição PUT');
    end);
  );

  // Método DELETE
  App.Delete('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Requisição DELETE');
    end);
  );
```

Nesse exemplo definimos todos os métodos possíveis na raiz da aplicação que é representada por `/`.

### Rotas
Nós já definimos os métodos que podemos usar, mas em combinação temos que definir também onde esse método será chamado, qual a rota dessa requisição.

Alguns exemplos:
``` delphi
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Raíz da Aplicação');
    end);
  );

  App.Get('/contato', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Requsição na rota /contato');
    end);
  );

  App.Get('/foo.bar', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Requsição na rota /foo.bar');
    end);
  );
```

Também podemos ter parâmetros nas rotas:

``` delphi
  App.Get('/usuarios/:id', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Req.Params.id; // Obtem o valor informado no parâmetro
    end);
  );

  App.Get('/blog/:autor/:data/:post', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Req.Params.autor;
      Req.Params.data;
      Req.Params.post;
    end);
  );
```

### Processamento de rota
Ao definir uma rota, nós fornecemos um *procedimento* que ficará responsável pelo processamento da requisição. Nele, nós temos acesso a três parâmetros: `Req`, `Res` e `Next`.

``` delphi
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Raíz da Aplicação');
    end);
  );
```

O `Req` provê todas as informações da requisição que chegou na rota, como por exemplo os cabeçalhos da requisição, os dados, parâmetros, e assim por diante.

``` delphi
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Req.Headers; // Cabeçalho da requisição
      Req.Body;    // Dados enviados na requisição
      Req.Params;  // Parâmetros da requisição
    end);
  );
```

O `Res` representa a resposta que nós iremos enviar para a requisição, então podemos definir os dados, e também o [Código de Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) da resposta.

``` delphi
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('resposta'); // Dados da resposta
      Res.Status(200);      // Status de OK
    end);
  );
```

O `Next` te possiilita chamar o próximo procedimento na sequência de processamento da rota.
