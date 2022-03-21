```
    es Español
    fr Français
    de Deutsche
    it Italiano
    ja Japanese
```

!!! warning

    The current page still doesn't have a translation for those languages.

    But you can help translating it: [Contributing](https://github.com/ricardodarocha/horse-mkdocs){.internal-link target=_blank}.

Recommended Languages Tree

```yml
/mkdocs.yml
theme:
  languages:
  - en: /en/
  # - az: /az/
  # - de: /de/
  # - es: /es/
  # - fa: /fa/
  # - fr: /fr/
  # - id: /id/
  # - it: /it/
  # - ja: /ja/
  # - ko: /ko/
  # - nl: /nl/
  # - pl: /pl/
  - pt: /pt/
  # - ru: /ru/
  # - sq: /sq/
  # - tr: /tr/
  # - uk: /uk/
  # - zh: /zh/
```

Recommended Languages Extra configuration `

```yml
/mkdocs.yml
extra:
  alternate:
  - link: /en/
    name: en - English
  # - link: /az/
  #   name: az
  # - link: /de/
  #   name: de
  # - link: /es/
  #   name: es - español
  # - link: /fa/
  #   name: fa
  # - link: /fr/
  #   name: fr - français
  # - link: /id/
  #   name: id
  # - link: /it/
  #   name: it - italiano
  # - link: /ja/
  #   name: ja - 日本語
  # - link: /ko/
  #   name: ko - 한국어
  # - link: /nl/
  #   name: nl
  # - link: /pl/
  #   name: pl
  - link: /pt/
    name: pt - português
  # - link: /ru/
  #   name: ru - русский язык
  # - link: /sq/
  #   name: sq - shqip
  # - link: /tr/
  #   name: tr - Türkçe
  # - link: /uk/
  #   name: uk - українська мова
  # - link: /zh/
  #   name: zh - 汉语
```