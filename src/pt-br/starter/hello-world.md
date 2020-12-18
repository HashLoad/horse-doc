---
title: Olá, mundo!
type: starter
order: 1
---

Primeiro crie um projeto console no Delphi ou no Lazarus, salve o projeto com o nome que desejar (nesse exemplo, será salvo como *hashload_horse*). Em seguida, instale o Horse como uma dependência do seu projeto, de acordo com o [guia de instalação](installation.html).

Depois de criado e instalado o Horse no seu projeto, inclua o seguinte código:

``` delphi
uses
  System.SysUtils,
  Horse;

const
    HORSE_PORT = 9000;

begin
  THorse.Get('/',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Olá, mundo!');
    end);

  THorse.Listen(HORSE_PORT,
    procedure(Horse: THorse)
    begin
      Writeln(Format('Servidor rodando em %s:%d', [Horse.Host, Horse.Port]));
    end)
end.
```
ou
``` delphi
uses
  System.SysUtils,
  Horse;

const
  HORSE_PORT = 9000;

procedure GetHelloWorld(Req: THorseRequest; Res: THorseResponse; Next: TProc);
begin
  Res.Send('Olá, mundo!');
end;

procedure HorseListenCallback(Horse: THorse);
begin
  Writeln(Format('Servidor rodando em %s:%d', [Horse.Host, Horse.Port]));
end;

begin
  THorse.Get('/', GetHelloWorld);
  THorse.Listen(HORSE_PORT, HorseListenCallback);
end.
```
O aplicativo inicia um servidor e escuta por conexões na porta 9000. O aplicativo responde com um **Olá, mundo!** na rota **(/)** para o *client* que realizou a *request*. Para todos os outros caminhos, ele irá responder com uma mensagem de **Not Found** e com o *status code* **404**

Agora, faça a compilação e a execução do aplicativo. Você terá como resultado no console algo como **Servidor rodando em 0.0.0.0:9000**

Em seguida, abra um navegador, digite http://localhost:9000/ na barra de endereço e navegue para visualizar a saída.

Se você conseguiu visualizar o resultado no seu navegador, isso é ótimo, seu servidor funcionou corretamente. Agora você está pronto para evoluir no Horse!

Veja mais em:
 * Noções básicas de [roteamento](basic-routing.html).