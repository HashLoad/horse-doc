---
title: Octet Stream
type: iniciante
order: 1
---

# Octet Stream

O **[Octet Stream](https://github.com/HashLoad/horse-octet-stream)** é um middleware para você trabalhar com **Stream** em suas APIs.

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install horse-octet-stream
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../horse-octet-stream/src
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
      Horse.OctetStream, //Esta unit é necessária
      System.Classes,
      System.SysUtils;

    begin
      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(OctetStream);

      THorse.Get('/stream',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        var
          LStream: TFileStream;
        begin
          // Agora você pode enviar seu stream:
          LStream := TFileStream.Create(ExtractFilePath(ParamStr(0)) + 'horse.pdf', fmOpenRead);
          Res.Send<TStream>(LStream);
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
      Horse.OctetStream, //Esta unit é necessária
      SysUtils,
      Classes;

    procedure GetStream(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    var
      LStream: TFileStream;
    begin
      // Agora você pode enviar seu stream:
      LStream := TFileStream.Create(ExtractFilePath(ParamStr(0)) + 'horse.pdf', fmOpenRead);
      Res.Send<TStream>(LStream);
    end;

    begin
      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(OctetStream);

      THorse.Get('/stream', GetStream);

      THorse.Listen(9000);

    end.
    ```

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/horse-octet-stream](https://github.com/HashLoad/horse-octet-stream).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `horse-octet-stream` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/horse-octet-stream/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
