---
title: Jhonson
type: iniciante
order: 1
---

# Jhonson

O **[Jhonson](https://github.com/HashLoad/jhonson)** é um middleware para você trabalhar com **JSON** em suas APIs.

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install jhonson
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../jhonson/src
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
      Horse.Jhonson, // Está unit é necessária
      System.JSON;

    begin
      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(Jhonson());

      // Especificar o charset na hora de adicionar o middleware no Horse:
      // THorse.Use(Jhonson('UTF-8'));

      THorse.Post('/ping',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        var
          LBody: TJSONObject;
        begin
          // Req.Body da acesso ao conteúdo da requisição em formato de string.
          // Usando o middleware jhonson, podemos obter o conteúdo da requisição no formato JSON

          LBody := Req.Body<TJSONObject>;
          Res.Send<TJSONObject>(LBody);
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
      Horse.Jhonson, // It's necessary to use the unit
      fpjson,
      SysUtils;

    procedure PostPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    var
      LBody: TJSONObject;
    begin
      // Req.Body da acesso ao conteúdo da requisição em formato de string.
      // Usando o middleware jhonson, podemos obter o conteúdo da requisição no formato JSON
      LBody := Req.Body<TJSONObject>;
      Res.Send<TJSONObject>(LBody);
    end;

    begin
      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(Jhonson);

      // Especificar o charset na hora de adicionar o middleware no Horse:
      // THorse.Use(Jhonson('UTF-8'));

      THorse.Post('/ping', PostPing);

      THorse.Listen(9000);
    end.
    ```

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/jhonson](https://github.com/HashLoad/jhonson).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `Jhonson` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/jhonson/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
