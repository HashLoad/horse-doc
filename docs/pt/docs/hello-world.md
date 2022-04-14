---
title: Olá mundo!
type: iniciante
order: 1
---

# Olá mundo!

Crie um projeto do tipo Console Application com o Delphi ou Lazarus, salve o seu projeto com o nome que você quiser (este exemplo foi salvo com o nome *hashload_horse*). Então instale o Horse e inclua nas dependências do seu projeto, de acordo com o [guia de instalação](../installation).

Após instalar o Horse e criar o seu projeto, inclua o seguinte código:

#Delphi
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
      Writeln(Format('O servidor está rodando em %s:%d', [Horse.Host, Horse.Port]));
    end)
end.
```

#Lazarus
``` delphi
{$MODE DELPHI}{$H+}

uses
  SysUtils,
  Horse;

const
  HORSE_PORT = 9000;

procedure GetHelloWorld(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
begin
  Res.Send('Ola Mundo!');
end;

procedure HorseListenCallback(Horse: THorse);
begin
  Writeln(Format('O servidor esta rodando em %s:%d', [Horse.Host, Horse.Port]));
end;

begin
  THorse.Get('/', GetHelloWorld);
  THorse.Listen(HORSE_PORT, HorseListenCallback);
end.  
```
A aplicação irá iniciar um servidor escutando na porta 9000.

Agora, compile e rode a aplicação. Você verá no console a mensagem **Servidor rodando em 0.0.0.0:9000**

 A Aplicação irá responder com a mensagem "Olá Mundo" na rota **(/)** para o *cliente* que fizer a *requisição*. Para qualquer outra rota, ela irá responder com uma mensagem **Not Found** e *status code* **404** (Não encontrado)

Então abra o browser, digite http://localhost:9000/ para acessar a sua primeira rota.

Agora Você está pronto para desenvolver com o Horse!

Próximo passo:
 * Entendendo [rotas](../basic-routing).