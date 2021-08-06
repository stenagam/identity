# identity
Examples of how to add login on an application.

([este documento em Português](LEIAME.md))

## Info needed on all examples:

- Client ID
- Client secret
- Redirect URI
- Authorization endpoint URI
- Token endpoint URI
- User Info endpoint URI

### Get this data by creating an OAuth Application

Log on the [Magalu Developers][devportal], and click on the "Criar" button of the "Aplicações" section.

<img src="https://user-images.githubusercontent.com/77620604/128567095-11c59600-33e8-47c8-862d-f2b0978ce6b6.png" width="400" />

Copy the generated "Client Secret".

<img src="https://user-images.githubusercontent.com/77620604/128568033-79c24207-75e7-4b2d-9714-382cea90f634.png" width="400" />

To know more about OAuth Applications check the [Authentication Guide][auth-guide].

## Examples

- <img src="https://deno.land/logo.svg" width="20px" /> [deno](./deno)
  - [oak](./deno/oak): Deno local server using [oak][oak] and [oauth2_client][oauth2_client]
  - [deno deploy](./deno/deploy): Server code to run on [Deno Deploy][denodeploy], using [oauth2_client][oauth2_client]

[devportal]: http://alpha.dev.magalu.com
[auth-guide]: https://github.com/luizalabs/dev.magalu.com-docs/blob/main/guia-autorizacao-apps.md
[oak]: https://deno.land/x/oak@v8.0.0
[oauth2_client]: https://deno.land/x/oauth2_client@v0.2.1
[denodeploy]: https://deno.com/deploy
