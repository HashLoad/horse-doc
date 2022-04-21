---
title: Basic Auth
type: iniciante
order: 1
---

# Horse Basic Auth

O **[Horse Basic Auth](https://github.com/HashLoad/horse-basic-auth)** é um middleware para você trabalhar com **Basic Authentication** em suas APIs.

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install horse-basic-auth
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../horse-basic-auth/src
```

## ✔️ Compatibilidade

| Delphi         | Lazarus              |
| -------------- | -------------------- |
| &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;✔️ |

## 🤙 Exemplos de Uso

=== "Delphi"

    ```delphi
    uses
      Horse,
      Horse.BasicAuthentication, // Está unit é necessária
      System.SysUtils;

    begin
      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(HorseBasicAuthentication(
        function(const AUsername, APassword: string): Boolean
          begin
            // Aqui dentro você pode acessar seu banco de dados e validar se usuário e senha são válidos
            Result := AUsername.Equals('user') and APassword.Equals('password');
          end));

      // O cabeçalho padrão para receber credenciais é "Authorization".
      // Você pode alterar, se necessário:
      // THorse.Use(HorseBasicAuthentication(MyCallbackValidation, THorseBasicAuthenticationConfig.New.Header('X-My-Header-Authorization')));

      // Você também pode ignorar rotas:
      // THorse.Use(HorseBasicAuthentication(MyCallbackValidation, THorseBasicAuthenticationConfig.New.SkipRoutes(['/ping'])));

      THorse.Get('/ping',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        begin
          Res.Send('pong');
        end);

      THorse.Listen(9000);
    end;
    ```

=== "Lazarus"

    ```pascal
    {$MODE DELPHI}{$H+}

    uses
      {$IFDEF UNIX}{$IFDEF UseCThreads}
        cthreads,
      {$ENDIF}{$ENDIF}
      Horse,
      Horse.BasicAuthentication, // Está unit é necessária
      SysUtils;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Pong');
    end;

    function DoLogin(const AUsername, APassword: string): Boolean;
    begin
      // Aqui dentro você pode acessar seu banco de dados e validar se usuário e senha são válidos
      Result := AUsername.Equals('user') and APassword.Equals('password');
    end;

    begin
      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(HorseBasicAuthentication(DoLogin));

      // O cabeçalho padrão para receber credenciais é "Authorization".
      // Você pode alterar, se necessário:
      // THorse.Use(HorseBasicAuthentication(MyCallbackValidation, THorseBasicAuthenticationConfig.New.Header('X-My-Header-Authorization')));

      // Você também pode ignorar rotas:
      // THorse.Use(HorseBasicAuthentication(MyCallbackValidation, THorseBasicAuthenticationConfig.New.SkipRoutes(['/ping'])));

      THorse.Get('/ping', GetPing);
      THorse.Listen(9000);
    end.
    ```

## 📌 Status Code

Este middleware pode retornar os seguintes Status Code:

- [401](https://httpstatuses.com/401) - Não Autorizado(Unauthorized);
- [500](https://httpstatuses.com/500) - Erro Interno no Servidor(InternalServerError).

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/horse-basic-auth](https://github.com/HashLoad/horse-basic-auth).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `Horse Basic Auth` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/horse-basic-auth/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
