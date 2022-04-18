---
title: Middlewares
type: iniciante
order: 1
---

# Middlewares

O **[Horse](https://github.com/HashLoad/horse)** contem uma alta gama de middlewares para você utilizar.
Existem dois tipos de middlewares, os
oficiais(mantidos pela **HashLoad**) e os de terceiros(mantidos pela **Comunidade**)

## 🧬 Middlewares oficiais

Nesta lista é mostrado cada Middleware mantido pela **HashLoad**, e para melhor organização são separados
em diferentes repositórios:

| Middleware                                                         | Delphi               | Lazarus                    | Descrição                                              |
| ------------------------------------------------------------------ | -------------------- | -------------------------- | ------------------------------------------------------ |
| [horse/json](https://github.com/HashLoad/jhonson)                  | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Adiciona compatibilidade com o **JSON**                |
| [horse/basic-auth](https://github.com/HashLoad/horse-basic-auth)   | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita a forma de autenticação **Basic Auth**        |
| [horse/cors](https://github.com/HashLoad/horse-cors)               | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita o **CORS**                                    |
| [horse/stream](https://github.com/HashLoad/horse-octet-stream)     | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita o **Stream de Arquivos**                      |
| [horse/jwt](https://github.com/HashLoad/horse-jwt)                 | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita a forma de Autenticação via **JWT**           |
| [horse/exception](https://github.com/HashLoad/handle-exception)    | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita o **Tratamento de Exceções**                  |
| [horse/logger](https://github.com/HashLoad/horse-logger)           | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita o **Registro de Logs** via Console ou Arquivo |
| [horse/compression](https://github.com/HashLoad/horse-compression) | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ | Habilita a **Compressão de Conteúdo**                  |

## 🌱 Middlewares de terceiros

Esta é uma lista de middlewares que são criados pela comunidade Horse. Se você criou um middleware também, e deseja que ele apareça na lista abaixo, por favor nos envie um `pull request`!

| Middleware                                                                                              | Delphi               | Lazarus                    |
| ------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------- |
| [bittencourtthulio/etag](https://github.com/bittencourtthulio/Horse-ETag)                               | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ |
| [bittencourtthulio/paginate](https://github.com/bittencourtthulio/Horse-Paginate)                       | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ |
| [bittencourtthulio/cachecontrol](https://github.com/bittencourtthulio/horse-cachecontrol)               | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [gabrielbaltazar/gbswagger](https://github.com/gabrielbaltazar/gbswagger)                               | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [willhubner/socketIO](https://github.com/WillHubner/Horse-SocketIO)                                     | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [dliocode/ratelimit](https://github.com/dliocode/horse-ratelimit)                                       | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [dliocode/slowdown](https://github.com/dliocode/horse-slowdown)                                         | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [giorgiobazzo/upload](https://github.com/giorgiobazzo/horse-upload)                                     | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [dliocode/query](https://github.com/dliocode/horse-query)                                               | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [CarlosHe/healthcheck](https://github.com/CarlosHe/horse-healthcheck)                                   | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [CarlosHe/staticfiles](https://github.com/CarlosHe/horse-staticfiles)                                   | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [CachopaWeb/horse-server-static](https://github.com/CachopaWeb/horse-server-static)                     | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [arvanus/horse-exception-logger](https://github.com/arvanus/horse-exception-logger)                     | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ |
| [claudneysessa/Horse-CSResponsePagination](https://github.com/claudneysessa/Horse-CSResponsePagination) | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [claudneysessa/Horse-XSuperObjects](https://github.com/claudneysessa/Horse-XSuperObjects)               | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |
| [andre-djsystem/horse-bearer-auth](https://github.com/andre-djsystem/horse-bearer-auth)                 | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ |
| [andre-djsystem/horse-manipulate-request](https://github.com/andre-djsystem/horse-manipulate-request)   | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ |
| [andre-djsystem/horse-manipulate-response](https://github.com/andre-djsystem/horse-manipulate-response) | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;✔️ |
| [antoniojmsjr/Horse-IPGeoLocation](https://github.com/antoniojmsjr/Horse-IPGeoLocation)                 | &nbsp;&nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;&nbsp;❌ |

## 🤙 Exemplo de Uso: [horse/json](https://github.com/HashLoad/jhonson)

O Jhonson([horse/json](https://github.com/HashLoad/jhonson)) usado para adicionar a compatibilidade com o JSON, pode ser usado da seguinte forma:

### ⚡️ Uso no Delphi:

```delphi
uses
  Horse,
  Horse.Jhonson, // It's necessary to use the unit
  System.JSON;

begin
  // It's necessary to add the middleware in the Horse:
  THorse.Use(Jhonson());

  // You can specify the charset when adding middleware to the Horse:
  // THorse.Use(Jhonson('UTF-8'));

  THorse.Post('/ping',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    var
      LBody: TJSONObject;
    begin
      // Req.Body gives access to the content of the request in string format.
      // Using jhonson middleware, we can get the content of the request in JSON format.

      LBody := Req.Body<TJSONObject>;
      Res.Send<TJSONObject>(LBody);
    end);

  THorse.Listen(9000);
end;
```

### ⚡️ Uso no Lazarus:

```pascal
{$MODE DELPHI}{$H+}

uses
  {$IFDEF UNIX}{$IFDEF UseCThreads}
  cthreads,
  {$ENDIF}{$ENDIF}
  Horse,
  Horse.Jhonson, // It's necessary to use the unit
  fpjson,
  SysUtils;

procedure PostPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
var
  LBody: TJSONObject;
begin
  // Req.Body gives access to the content of the request in string format.
  // Using jhonson middleware, we can get the content of the request in JSON format.
  LBody := Req.Body<TJSONObject>;
  Res.Send<TJSONObject>(LBody);
end;

begin
  // It's necessary to add the middleware in the Horse:
  THorse.Use(Jhonson);

  // You can specify the charset when adding middleware to the Horse:
  // THorse.Use(Jhonson('UTF-8'));

  THorse.Post('/ping', PostPing);

  THorse.Listen(9000);
end.
```

## ⚠️ Avisos

- A **HashLoad** não dá suporte aos middlewares oferecidos pela comunidade!
- Caso tenha alguma sugestão, envie um **Pull Request**.

--8<-- "includes/abbreviations.md"
