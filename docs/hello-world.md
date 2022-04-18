---
title: Olá mundo!
type: iniciante
order: 1
---

# Olá mundo!

Independente da IDE que estiver utilizando, crie um projeto do tipo `Console Application` e salve o projeto com o nome que você quiser. Após salvar o projeto, siga o 
[guia de instalação](../installation) para instalar o Horse na sua aplicação. Após criar o seu projeto e instalar o Horse, inclua o seguinte código em sua aplicação:

===  "Delphi"

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
        end);
    end.
    ```

===  "Lazarus"

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

Agora, compile e rode a aplicação. Você verá no console a seguinte mensagem: **Servidor rodando em 0.0.0.0:9000**

A Aplicação irá responder com a mensagem "Olá Mundo" na rota **(/)** para o *cliente* que fizer a *requisição*. Para qualquer outra rota, ela irá responder com uma mensagem "Not Found" e *status code* 404 (Não encontrado)

Então abra o browser, digite http://localhost:9000/ para acessar a sua primeira rota.

## Simplificando

Caso não tenha necessidade de printar alguma mensagem no console, ou então não quer alterar a porta padrão utilizada pelo Horse, pode simplificar ainda mais o código, deixando da seguinte forma:

===  "Delphi"

    ``` delphi
    uses Horse;

    begin
      THorse.Get('/',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        begin
          Res.Send('Olá, mundo!');
        end);

      THorse.Listen;
    end.
    ```

===  "Lazarus"

    ``` delphi
    {$MODE DELPHI}{$H+}

    uses Horse;

    procedure GetHelloWorld(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Ola Mundo!');
    end;

    begin
      THorse.Get('/', GetHelloWorld);
      THorse.Listen;
    end. 
    ```

Pronto! Agora você está hápto para trabalhar com o Horse...

--8<-- "includes/abbreviations.md"