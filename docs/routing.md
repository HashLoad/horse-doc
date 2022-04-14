---
title: Roteamento
---

## Roteamento

O Roteamento é o mecanismo pelo qual as requisições são direcionadas para o código que as trata. Para obter uma introdução a roteamento, consulte [Roteamento básico](../basic-routing).

O código a seguir é um exemplo de uma rota muito básica.

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

## Métodos de roteamento

Um método de roteamento é derivado a partir de um dos métodos HTTP, e é anexado a uma procedure que irá tratar esta requisição.

o código a seguir é um exemplo de rotas para a raiz do aplicativo que estão definidas para os métodos GET e POST.

``` delphi
uses Horse;

begin
  THorse.Get('/',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('GET request to the root');
    end);
	
  THorse.Post('/',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('POST request to the root');
    end)	

  THorse.Listen(9000);
end.
```

O Horse suporta os seguintes métodos de roteamento que correspondem aos métodos HTTP: GET, POST, PUT, PATCH, HEAD, DELETE.

Existe um método de roteamento especial,  THorse.All, que não é derivado de nenhum método HTTP. Este método é usado para carregar procedures em um caminho para todos os métodos de solicitação.

No exemplo a seguir, o manipulador irá ser executado para solicitações para “/test” se você estiver usando GET, POST, PUT, DELETE, ou qualquer outro método de solicitação HTTP que é suportado pelo Horse.

``` delphi
  THorse.All('/test',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Test Response');
    end);
```

## Métodos de resposta

Os métodos do objeto de resposta (res) na seguinte tabela podem enviar uma resposta ao cliente, e finalizar o ciclo solicitação-resposta.

Método | Descrição |
|--------|-----------|
Res.Download(AFileName) | Solicita que seja efetuado o download de um arquivo |
Res.RedirectTo(ALocation) | Redireciona uma solicitação |
Res.SendFile(AFileName) | Envia um arquivo |
Res.Send(AContent) | Envia uma string |
Res.Send<T: class> | Envia um objeto |
Res.Status(AStatus) | Configura o código do status de resposta |
Res.ContentType(AContentType) | Configura o ContentType da resposta |