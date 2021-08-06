# identidade
Exemplos de como adicionar login numa aplicação.

([this document in English](README.md))

## Dados necessários em todos os exemplos:

- Client ID
- Client secret
- Redirect URI
- Authorization endpoint URI
- Token endpoint URI
- User Info endpoint URI

### Obtenha estes dados criando uma Aplicação OAuth

Faça login no site [Magalu Developers][devportal], e clique no botão "Criar" da seção "Aplicações".

<img src="https://user-images.githubusercontent.com/77620604/128567095-11c59600-33e8-47c8-862d-f2b0978ce6b6.png" width="400" />

Copie o valor "Client Secret" exibido na tela.

<img src="https://user-images.githubusercontent.com/77620604/128568033-79c24207-75e7-4b2d-9714-382cea90f634.png" width="400" />

Para saber mais sobre Aplicações OAuth confira o [Guia de Autenticação][auth-guide].

## Exemplos

- <img src="https://deno.land/logo.svg" width="20px" /> [deno](./deno)
  - [oak](./deno/oak): Servidor local usando [oak][oak] e [oauth2_client][oauth2_client]
  - [deno deploy](./deno/deploy): Código de servidor para rodar no [Deno Deploy][denodeploy], usando [oauth2_client][oauth2_client]

[devportal]: http://alpha.dev.magalu.com
[auth-guide]: https://github.com/luizalabs/dev.magalu.com-docs/blob/main/guia-autorizacao-apps.md
[oak]: https://deno.land/x/oak@v8.0.0
[oauth2_client]: https://deno.land/x/oauth2_client@v0.2.1
[denodeploy]: https://deno.com/deploy
