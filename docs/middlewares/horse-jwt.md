---
title: Horse JWT
type: iniciante
order: 1
---

# Horse JWT

O **[Horse JWT](https://github.com/HashLoad/horse-jwt)** é um middleware para você trabalhar com **[JWT](https://jwt.io/)** em suas APIs.

## ⭕ Pré-requisitos

=== "Delphi"

    - [**delphi-jose-jwt**](https://github.com/paolo-rossi/delphi-jose-jwt) - JOSE é um padrão que fornece uma abordagem geral para a assinatura e criptografia de qualquer conteúdo.

=== "Lazarus"

    - [**hashlib4pascal**](https://github.com/andre-djsystem/hashlib4pascal) - é uma biblioteca de hashing Object Pascal lançada sob a licença MIT permissiva que fornece uma interface fácil de usar para computar hashes e somas de verificação de dados. Ele também suporta hash baseado em estado (incremental).

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install horse-jwt
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

=== "Delphi"

    ```
    ../horse-jwt/src
    ../delphi-jose-jwt/Source/Common
    ../delphi-jose-jwt/Source/JOSE
    ```

=== "Lazarus"

    ```
    ../horse-jwt/src
    ../HashLib/src/Base
    ../HashLib/src/Checksum
    ../HashLib/src/Crypto
    ../HashLib/src/Hash128
    ../HashLib/src/Hash32
    ../HashLib/src/Hash64
    ../HashLib/src/Include
    ../HashLib/src/Interfaces
    ../HashLib/src/KDF
    ../HashLib/src/NullDigest
    ../HashLib/src/Nullable
    ../HashLib/src/Packages
    ../HashLib/src/Utils
    ```

## ✔️ Compatibilidade

| Delphi         | Lazarus              |
| -------------- | -------------------- |
| &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;✔️ |

## ⚡️ Início Rápido

- Todas as solicitações precisam de autorização de token:

=== "Delphi"

    ```delphi
    uses Horse, Horse.JWT;

    begin
      THorse.Use(HorseJWT('MY-PASSWORD'));

      THorse.Post('ping',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        begin
          Res.Send('pong');
        end);

      THorse.Listen(9000);
    end.
    ```

=== "Lazarus"

    ```pascal
    {$MODE DELPHI}{$H+}

    uses
      {$IFDEF UNIX}{$IFDEF UseCThreads}
      cthreads,
      {$ENDIF}{$ENDIF}
      Horse, Horse.JWT, SysUtils;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Pong');
    end;

    begin
      THorse.Use(HorseJWT('my-private-key'));

      THorse.Get('/ping', GetPing);

      THorse.Listen(9000);
    end.
    ```

- Algumas rotas requerem autenticação:

=== "Delphi"

    ```delphi
    uses Horse, Horse.JWT;

    begin
      THorse.Get('ping',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        begin
          Res.Send('pong');
        end);

      THorse
        .AddCallback(HorseJWT('MY-PASSWORD'))
        .Get('private',
          procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
          begin
            Res.Send('route private');
          end);

      THorse.Listen(9000);
    end.
    ```

=== "Lazarus"

    ```pascal
    {$MODE DELPHI}{$H+}

    uses
      {$IFDEF UNIX}{$IFDEF UseCThreads}
      cthreads,
      {$ENDIF}{$ENDIF}
      Horse, Horse.JWT, SysUtils;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Pong');
    end;

    procedure GetPrivate(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('route private');
    end;

    begin
      THorse.Get('/ping', GetPing);

      THorse
        .AddCallback(HorseJWT('my-private-key'))
        .Get('private', GetPrivate);

      THorse.Listen(9000);
    end.
    ```

## 🤙 Exemplos de Uso

#### Como criar um token?

```pascal
uses
  Horse, Horse.JWT,
  JOSE.Core.JWT, JOSE.Core.Builder,
  System.DateUtils, System.SysUtils;

begin
  THorse.Post('create-token',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    var
      LJWT: TJWT;
      LToken: String;
    begin
      LJWT := TJWT.Create();
      try
        // Entre com os dados do Payload
        LJWT.Claims.Expiration := IncHour(Now, 1);

        // Gerando do Token
        LToken := TJOSE.SHA256CompactToken('MY-PASSWORD', LJWT);
      finally
        FreeAndNil(LJWT);
      end;

      // Enviando o Token
      Res.Send(LToken);
    end);

  THorse.Listen(9000);
end.
```

#### Como criar um Payload personalizado?

- Aqui está um exemplo de uma classe de Payload personalizada.
- Para os exemplos a seguir, é necessário usar esta classe.

```pascal
unit MyClaims;

interface

uses
  JOSE.Core.JWT, JOSE.Types.JSON;

type
  TMyClaims = class(TJWTClaims)
  strict private
    function GetId: string;
    procedure SetId(const Value: string);
    function GetName: string;
    procedure SetName(const Value: string);
    function GetEmail: string;
    procedure SetEmail(const Value: string);
  public
    property Id: string read GetId write SetId;
    property name: string read GetName write SetName;
    property Email: string read GetEmail write SetEmail;
  end;

implementation

{ TMyClaims }

function TMyClaims.GetId: string;
begin
  Result := TJSONUtils.GetJSONValue('id', FJSON).AsString;
end;

procedure TMyClaims.SetId(const Value: string);
begin
  TJSONUtils.SetJSONValueFrom<string>('id', Value, FJSON);
end;

function TMyClaims.GetName: string;
begin
  Result := TJSONUtils.GetJSONValue('name', FJSON).AsString;
end;

procedure TMyClaims.SetName(const Value: string);
begin
  TJSONUtils.SetJSONValueFrom<string>('name', Value, FJSON);
end;

function TMyClaims.GetEmail: string;
begin
  Result := TJSONUtils.GetJSONValue('email', FJSON).AsString;
end;

procedure TMyClaims.SetEmail(const Value: string);
begin
  TJSONUtils.SetJSONValueFrom<string>('email', Value, FJSON);
end;

end.
```

#### Como criar um token com o Payload personalizado?

```pascal
uses
  Horse, Horse.JWT,

  MyClaims in 'MyClaims.pas',

  JOSE.Core.JWT, JOSE.Core.Builder,
  System.DateUtils, System.SysUtils;

begin
  THorse.Post('create-token',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  var
    LJWT: TJWT;
    LClaims: TMyClaims;
    LToken: String;
  begin
    // Adicionar a Classe
    LJWT := TJWT.Create(TMyClaims);
    try
      // Casting usando a classe
      LClaims := TMyClaims(LJWT.Claims);

      // Entre com os dados do Payload
      LClaims.Expiration := IncHour(Now, 1);
      LClaims.Id := '1';
      LClaims.Name := 'Horse';
      LClaims.Email := 'horse@jwt.com';

      // Gerando o token
      LToken := TJOSE.SHA256CompactToken('MY-PASSWORD', LJWT);
    finally
      FreeAndNil(LJWT);
    end;

    // Enviando o token
    Res.Send(LToken);
  end);

  THorse.Listen(9000);
end.
```

#### Como ler um Payload personalizado

```pascal
uses
  Horse, Horse.JWT,
  MyClaims in 'MyClaims.pas',
  System.SysUtils;

begin
  THorse
    .AddCallback(HorseJWT('MY-PASSWORD', TMyClaims)) // Adicionar a classe do Payload customizado
    .Get('ping',
      procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
      var
        LClaims: TMyClaims;
        LId, LName, LEmail: string;
      begin
        // Pegando as informações do Payload pela sessão
        LClaims := Req.Session<TMyClaims>;

        LId := LClaims.Id;
        LName := LClaims.Name;
        LEmail := LClaims.Email;

        Res.Send(Format('Eu sou %s e este é meu email %s',[LName, LEmail]));
      end);

  THorse.Listen(9000);
end.
```

#### Como criar rotas públicas e privadas?

```pascal
uses
  Horse, Horse.JWT,

  MyClaims in 'MyClaims.pas',

  JOSE.Core.JWT, JOSE.Core.Builder,
  System.DateUtils, System.SysUtils;

begin
  // Criar token
  THorse.Post('create-token',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    var
      LJWT: TJWT;
      LClaims: TMyClaims;
      LToken: String;
    begin
      // Adicionar a classe
      LJWT := TJWT.Create(TMyClaims);
      try
        // Casting usando a classe
        LClaims := TMyClaims(LJWT.Claims);

        // Entrar com os dados do Payload
        LClaims.Expiration := IncHour(Now, 1);
        LClaims.Id := '1';
        LClaims.Name := 'Horse';
        LClaims.Email := 'horse@jwt.com';

        // Gerar o token
        LToken := TJOSE.SHA256CompactToken('MY-PASSWORD', LJWT);
      finally
        FreeAndNil(LJWT);
      end;

      // Enviar o token
      Res.Send(LToken);
    end);

  // Rota publica
  THorse.Get('public',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Route public');
    end);

  // Rota privada
  THorse
    .AddCallback(HorseJWT('MY-PASSWORD', TMyClaims)) // Adicionar a classe do Payload customizado
    .Get('private',
      procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
      var
        LClaims: TMyClaims;
        LId, LName, LEmail: string;
      begin
        // Pegando as informações do Payload pela sessão
        LClaims := Req.Session<TMyClaims>;

        LId := LClaims.Id;
        LName := LClaims.Name;
        LEmail := LClaims.Email;

        Res.Send(Format('Eu sou %s e este é meu email %s', [LName, LEmail]));
      end);

  THorse.Listen(9000);
end.
```

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/horse-jwt](https://github.com/HashLoad/horse-jwt).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `horse-jwt` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/horse-jwt/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
