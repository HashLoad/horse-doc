---
title: Console
type: iniciante
order: 1
---

# Horse Logger: Provider Console

O **[Horse Logger: Provider Console](https://github.com/HashLoad/horse-logger-provider-console)** é um **provedor oficial** para o middleware [horse-logger](https://github.com/HashLoad/horse-logger) para **imprimir os logs** em suas APIs, no console.

## ⭕ Pré-requisitos

[horse-logger](https://github.com/HashLoad/horse-logger) - Horse Logger é um middleware para você **registrar logs** em suas APIs.

[horse-utils-clientip](https://github.com/dliocode/horse-utils-clientip) - Horse Utils Client IP é um middleware para você **capturar o IP dos Clientes** em suas APIs.

_Obs: Se você usa Boss (gerenciador de dependências para Delphi), o Horse Logger e o horse-utils-clientip serão instalados automaticamente ao instalar o horse-logger-provider-console._

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install horse-logger-provider-console
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../horse-logger-provider-console/src
```

## ✔️ Compatibilidade

| Delphi         | Lazarus              |
| -------------- | -------------------- |
| &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;✔️ |

## 🔠 Formatação

Você pode formatar a saída do log:

Padrão: `${request_clientip} [${time}] ${request_user_agent} "${request_method} ${request_path_info} ${request_version}" ${response_status} ${response_content_length}`

Valores possíveis: `time`,`time_short`,`execution_time`,`request_clientip`,`request_method`,`request_version`,`request_url`,`request_query`,`request_path_info`,`request_path_translated`,`request_cookie`,`request_accept`,`request_from`,`request_host`,`request_referer`,`request_user_agent`,`request_connection`,`request_derived_from`,`request_remote_addr`,`request_remote_host`,`request_script_name`,`request_server_port`,`request_remote_ip`,`request_internal_path_info`,`request_raw_path_info`,`request_cache_control`,`request_script_name`,`request_authorization`,`request_content_encoding`,`request_content_type`,`request_content_length`,`request_content_version`,`request_content`,`response_version`,`response_reason`,`response_server`,`response_realm`,`response_allow`,`response_location`,`response_log_message`,`response_title`,`response_content_encoding`,`response_content_type`,`response_content_length`,`response_content_version`,`response_content`,`response_status`

## 🤙 Exemplos de Uso

=== "Delphi"

    ```delphi
    uses
      Horse,
      Horse.Logger, // Esta unit é necessária
      Horse.Logger.Provider.Console, // Esta unit é necessária
      System.SysUtils;

    var
      LLogFileConfig: THorseLoggerConsoleConfig;

    begin
      LLogFileConfig := THorseLoggerConsoleConfig.New
        .SetLogFormat('${request_clientip} [${time}] ${response_status}');

      // Você também pode especificar o formato do log:
      // THorseLoggerManager.RegisterProvider(THorseLoggerProviderConsole.New(LLogFileConfig));

      // Aqui você definirá o provedor que será usado.
      THorseLoggerManager.RegisterProvider(THorseLoggerProviderConsole.New());

      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(THorseLoggerManager.HorseCallback);

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
      Horse.Logger, // Esta unit é necessária
      Horse.Logger.Provider.Console, // Esta unit é necessária
      SysUtils;

    var
      LLogFileConfig: THorseLoggerConsoleConfig;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Pong');
    end;

    begin
      LLogFileConfig := THorseLoggerConsoleConfig.New
        .SetLogFormat('${request_clientip} [${time}] ${response_status}');

      // Você também pode especificar o formato do log:
      // THorseLoggerManager.RegisterProvider(THorseLoggerProviderConsole.New(LLogFileConfig));

      // Aqui você definirá o provedor que será usado.
      THorseLoggerManager.RegisterProvider(THorseLoggerProviderConsole.New());

      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(THorseLoggerManager.HorseCallback);

      THorse.Get('/ping', GetPing);

      THorse.Listen(9000);
    end.
    ```

## 📝 Exemplos de Saída

Usando a opção de formatação padrão de log, a saída será algo assim:
![image](https://user-images.githubusercontent.com/16382981/136378628-30c7fa6f-7d27-4faa-a8f9-7356b547099a.png)

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/horse-logger-provider-console](https://github.com/HashLoad/horse-logger-provider-console).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `horse-logger-provider-console` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/horse-logger-provider-console/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
