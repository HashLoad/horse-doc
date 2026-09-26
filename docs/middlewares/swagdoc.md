---
title: SwagDoc
type: iniciante
order: 1
---

# SwagDoc

O **[SwagDoc](https://github.com/marcelojaloto/SwagDoc)** é uma biblioteca que escreve o documento
**[OpenAPI 3](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.2.1.md)** ou
**[Swagger 2.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md)** da sua API. O
repositório traz um middleware que publica esse documento e a página que o apresenta, com o
**[Swagger UI](https://github.com/swagger-api/swagger-ui)** ou o **[Scalar](https://github.com/scalar/scalar)**.

## ⭕ Pré-requisitos

- Nenhum além do Horse. O SwagDoc utiliza apenas a RTL do Delphi.

## ⚙️ Instalação

Você pode instalar facilmente utilizando o comando [`boss install`](https://github.com/HashLoad/boss):

```sh
boss install github.com/marcelojaloto/SwagDoc
```

Ou, se você preferir instalar manualmente, basta adicionar as pastas em seu projeto, em _Project > Options >
Resource Compiler > Directories and Conditionals > Include file search path_:

```
../SwagDoc/Source
../SwagDoc/Integrations/Horse/Source
```

## ✔️ Compatibilidade

| Delphi         | Lazarus              |
| -------------- | -------------------- |
| &nbsp;&nbsp;✔️ | &nbsp;&nbsp;&nbsp;❌ |

## ⚡️ Início Rápido

O middleware publica a página em `/docs` e o documento em `/docs/openapi.json`. O `SwagDocApi` é o documento da
aplicação:

```delphi
uses Horse, Horse.SwagDoc;

begin
  THorse.Use(HorseSwagDoc);

  SwagDocApi.Info.Title := 'Pet Store';
  SwagDocApi.Info.Version := '1.0.0';

  THorse.Get('/pets/:id',
    procedure(Req: THorseRequest; Res: THorseResponse)
    begin
      Res.Send('{}');
    end);

  THorse.Listen(9000);
end.
```

As rotas registradas no Horse que ainda não foram documentadas são escritas no documento com uma resposta, o
que mostra o que falta documentar.

## 📝 Documentando as rotas

O método `Route` recebe a rota com a sintaxe do Horse, traduz `/pets/:id` para `/pets/{id}` e escreve o
parâmetro do caminho:

```delphi
uses Swag.Common.Types, Swag.Doc.Path.Operation, Swag.Doc.Path.Operation.Response;

var
  vOperation: TSwagPathOperation;
  vResponse: TSwagResponse;
begin
  vOperation := SwagDocApi.Route('/pets/:id').AddOperation(ohvGet);
  vOperation.OperationId := 'getPet';
  vOperation.Summary := 'Retorna um pet';
  vOperation.Tags.Add('Pets');

  vResponse := TSwagResponse.Create;
  vResponse.StatusCode := '200';
  vResponse.Description := 'Pet encontrado';
  vResponse.AddMediaType('application/json').Schema.Name := 'pet';
  vOperation.Responses.Add(vResponse.StatusCode, vResponse);
end;
```

Todo o modelo da especificação está disponível: request bodies com vários media types, exemplos, links,
callbacks, webhooks, security schemes e os objetos reutilizáveis dos components.

## 🎨 Interface

A interface é escolhida em tempo de execução:

```delphi
SwagDocConfig.UserInterface := uiScalar; // ou uiSwaggerUi, que é o padrão
```

Por padrão os arquivos da interface são carregados de um CDN. Declarando uma diretiva de compilação em
_Project > Options > Building > Delphi Compiler > Conditional defines_, eles passam a ser publicados pelo
próprio executável:

| Diretiva                            | Interface  | Tamanho acrescentado |
| ----------------------------------- | ---------- | -------------------- |
| `HORSE_SWAGDOC_EMBEDDED_SWAGGER_UI` | Swagger UI | cerca de 510 KB      |
| `HORSE_SWAGDOC_EMBEDDED_SCALAR`     | Scalar     | cerca de 1 MB        |

## ⚙️ Configurações

```delphi
SwagDocConfig.UserInterfaceRoute := '/api/help';
SwagDocConfig.DocumentRoute := '/api/help/openapi.json';
SwagDocConfig.UserInterfaceTitle := 'Pet Store';
SwagDocConfig.DiscoverRoutes := False;

THorse.Use(HorseSwagDoc);
```

As configurações são definidas antes do middleware ser acrescentado à aplicação, porque é nesse momento que as
rotas do documento e da página são registradas.

## 📄 Versão da especificação

O documento é escrito como OpenAPI 3. Uma API que publica o documento Swagger 2.0 muda uma propriedade:

```delphi
SwagDocConfig.DocumentRoute := '/docs/swagger.json';
THorse.Use(HorseSwagDoc);

SwagDocApi.SpecVersion := svSwagger2;
```

Os mesmos objetos produzem as duas versões, então elas podem ser comparadas antes de a antiga ser abandonada.

## 📚 Saiba mais

- [Documentação do middleware](https://github.com/marcelojaloto/SwagDoc/blob/master/Integrations/Horse/README.md)
- [Guia de migração do GBSwagger](https://github.com/marcelojaloto/SwagDoc/blob/master/Integrations/Horse/Migration-gbswagger-to-SwagDoc.pt-BR.md)
- [Exemplo completo: tasks-manager-horse](https://github.com/marcelojaloto/Delphi/tree/master/samples/tasks-manager-horse)
