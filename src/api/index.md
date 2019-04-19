---
title: API
type: api
---

## Classe Global

### THorse.Create(APort)

- **Parâmetros:**
  - `{Integer} APort`

- **Uso:**

  Cria uma instância do Horse configurado para iniciar um servidor http na porta definida.
  Se não for informado o parâmetro, a porta padrão é `9000`.

  ``` delphi
  var
    App, App2: THorse;
  begin
    App := THorse.Create(4000);
    App2 := THorse.Create; // Servidor será iniciado na porta 9000
  end;
  ```

- **Veja mais em:** [Instância Horse](../guide/instance.html);