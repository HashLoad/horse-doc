---
title: Horse CORS
type: iniciante
order: 1
---

# Horse CORS

O **[Horse CORS](https://github.com/HashLoad/horse-cors)** é um middleware para você trabalhar com **CORS** em suas APIs.

## ❓ O que é CORS?

Cross-Origin Resource Sharing (CORS) é um mecanismo baseado em cabeçalho HTTP que permite que um servidor indique quaisquer origens (domínio, esquema ou porta) diferentes da sua, a partir da qual um navegador deve permitir o carregamento de recursos. O CORS também conta com um mecanismo pelo qual os navegadores fazem uma solicitação de "comprovação" ao servidor que hospeda o recurso de origem cruzada, a fim de verificar se o servidor permitirá a solicitação real. Nesse preflight, o navegador envia cabeçalhos que indicam o método HTTP e cabeçalhos que serão usados ​​na solicitação real.

Um exemplo de solicitação de cross-origin request: o código JavaScript de front-end servido de `https://domain-a.com` usa XMLHttpRequest para fazer uma solicitação para `https://domain-b.com/data.json`.

Por motivos de segurança, os navegadores restringem solicitações HTTP de origem cruzada iniciadas a partir de scripts. Por exemplo, XMLHttpRequest e a API Fetch seguem a política de mesma origem. Isso significa que um aplicativo da Web que usa essas APIs só pode solicitar recursos da mesma origem da qual o aplicativo foi carregado, a menos que a resposta de outras origens inclua os cabeçalhos CORS corretos.

O mecanismo CORS suporta solicitações seguras de origem cruzada e transferências de dados entre navegadores e servidores. Os navegadores modernos usam CORS em APIs como XMLHttpRequest ou Fetch para mitigar os riscos de solicitações HTTP de origem cruzada.

Saiba mais sobre o CORS em: [https://developer.mozilla.org](https://developer.mozilla.org).

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install horse-cors
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options > Resource Compiler > Directories and Conditionals > Include file search path_:

```
../horse-cors/src
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
      Horse.CORS, // Esta unit é necessária
      System.SysUtils;

    begin
      // Você pode configurar o CORS como no exemplo abaixo:

      // HorseCORS
      //   .AllowedOrigin('*')
      //   .AllowedCredentials('true')
      //   .AllowedHeaders('*')
      //   .AllowedMethods('*')
      //   .ExposedHeaders('*');

      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(CORS);

      THorse.Get('/ping',
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
      Horse,
      Horse.CORS, // Esta unit é necessária
      SysUtils;

    procedure GetPing(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Pong');
    end;

    begin
      // Você pode configurar o CORS como no exemplo abaixo:

      // HorseCORS
      //   .AllowedOrigin('*')
      //   .AllowedCredentials('true')
      //   .AllowedHeaders('*')
      //   .AllowedMethods('*')
      //   .ExposedHeaders('*');

      // Necessário para adicionar o Middleware no Horse:
      THorse.Use(CORS);

      THorse.Get('/ping', GetPing);

      THorse.Listen(9000);
    end.
    ```

## ⚠️ Avisos

- Link para o repositório: [https://github.com/HashLoad/horse-cors](https://github.com/HashLoad/horse-cors).
- Caso tenha alguma sugestão, envie um **Pull Request**.
- O `Horse CORS` é gratuito e Open Source, está licenciado pela [MIT License](https://github.com/HashLoad/horse-cors/blob/master/LICENSE).

--8<-- "includes/abbreviations.md"
