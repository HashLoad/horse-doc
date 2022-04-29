---
title: Handle Exception
type: iniciante
order: 1
---

# Handle Exception

O **[Handle Exception](https://github.com/HashLoad/handle-exception)** é um middleware para você trabalhar com **Exceções** em suas APIs.

## ⭕ Pré-requisitos

[Jhonson](https://github.com/HashLoad/jhonson) - Jhonson é um middleware para você trabalhar com **JSON** em suas APIs.

_Obs: Se você usa Boss (gerenciador de dependências para Delphi), o Jhonson será instalado automaticamente ao instalar o handle-exception._

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install handle-exception
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../handle-exception/src
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
      Horse.HandleException, // Está unit é necessária
      System.JSON;

    begin
      // Necessário para adicionar os Middlewares no Horse:
      THorse
        .Use(Jhonson) // Tem que ser antes do Handle Exception
        .Use(HandleException);

      THorse.Post('/ping',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        begin
          // Gerencie suas Exceções:
          raise EHorseException.New.Error('My Error!');
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
      Horse.Jhonson, // Está unit é necessária
      Horse.HandleException, // Está unit é necessária
      SysUtils;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      // Gerencie suas Exceções:
      raise EHorseException.New.Error('My Error!');
    end;

    begin
      // Necessário para adicionar os Middlewares no Horse:
      THorse
        .Use(Jhonson) // Tem que ser antes do Handle Exception
        .Use(HandleException);

      THorse.Get('/ping', GetPing);

      THorse.Listen(9000);
    end.
    ```

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/handle-exception](https://github.com/HashLoad/handle-exception).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `Handle Exception` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/handle-exception/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
