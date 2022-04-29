---
title: Horse Compression
type: iniciante
order: 1
---

# Horse Compression

O **[Horse Compression](https://github.com/HashLoad/horse-compression)** é um middleware para você **Compactar Conteúdos** em suas APIs.

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install horse-compression
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../horse-compression/src
```

## ✔️ Compatibilidade

| Tipo           | Delphi               |
| -------------- | -------------------- |
| &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;✔️ |

## ☑️ Tipos de Compactação

Atualmente, o middleware está preparado para compactar os dados usando DEFLATE e GZIP.

| Tipo    | Delphi         | Lazarus              |
| ------- | -------------- | -------------------- |
| DEFLATE | &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;✔️ |
| GZIP    | &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;❌ |

## 🤙 Exemplos de Uso

=== "Delphi"

    ```delphi
    uses
      Horse,
      Horse.Jhonson,
      Horse.Compression, // Está unit é necessária
      System.JSON;

    begin
      THorse
        .Use(Compression()) // Tem que ser antes do Jhonson
        .Use(Jhonson);

      // Você pode definir o limite de compactação:
      // THorse.Use(Compression(1024));

      THorse.Get('/ping',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        var
          I: Integer;
          LPong: TJSONArray;
        begin
          LPong := TJSONArray.Create;
          for I := 0 to 1000 do
          LPong.Add(TJSONObject.Create(TJSONPair.Create('ping', 'pong')));
          Res.Send(LPong);
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
      Horse.Jhonson,
      Horse.Compression, // Está unit é necessária
      fpjson,
      SysUtils;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    var
      I: Integer;
      LPong: TJSONArray;
      LJson: TJSONObject;
    begin
      LPong := TJSONArray.Create;
      for I := 0 to 1000 do
      begin
        LJson := TJSONObject.Create;
        LJson.Add('ping', 'pong');
        LPong.Add(LJson);
      end;
      Res.Send<TJSONArray>(LPong);
    end;

    begin
      THorse
        .Use(Compression()) // Tem que ser antes do Jhonson
        .Use(Jhonson);

      // Você pode definir o limite de compactação:
      // THorse.Use(Compression(1024));

      THorse.Get('/ping', GetPing);

      THorse.Listen(9000);
    end.
    ```

## 🚀 Estatísticas

Usando o middleware, a resposta foi aproximadamente 67 vezes menor. Os dados foram coletados por meio do projeto disponível na pasta [samples (delphi)](https://github.com/HashLoad/horse-compression/tree/master/samples/delphi). Por padrão, respostas menores ou iguais a 1024 bytes não serão compactadas.

| Propriedade    | Sem o Middleware | Com o Middleware |
| -------------- | ---------------- | ---------------- |
| Temp(ms)       | 108              | 126              |
| Tamanho(bytes) | 15.770           | 236              |

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/horse-compression](https://github.com/HashLoad/horse-compression).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `Horse Compression` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/horse-compression/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
