# <img src="https://deno.land/logo.svg" width="50px" /> Deno: Servidor com login

Exemplo de servidor web que implementa o fluxo de login OAuth.

([this document in English](README.md))

## Feito com

- [deno][deno]
- [oauth2_client][oauth2_client]
- [oak][oak]
- [dotenv][dotenv]

Adaptado do
[exemplo de oak do oauth2_client](https://deno.land/x/oauth2_client@v0.2.1/examples/oak.ts) de Jonas Auer

## Uso

1. Crie um arquivo `.env` na pasta `deno` com os valores para `CLIENT_ID` e `CLIENT_SECRET` obtidos
no site [Magalu Developers](http://alpha.dev.magalu.com)
(use [.env.example](../.env.example) como modelo).

2. Inicie o servidor a partir de um terminal com [deno][deno] instalado.

```shell
deno run --allow-read --allow-net server.ts
```

3. Em seu navegador, abra [localhost:8000/login](http://localhost:8000/login)

4. Fuce no código-fonte e dê um 👋 alô no [canal de Slack](https://luizalabs.slack.com/archives/C025378FUJW)

[deno]: https://deno.land/
[oauth2_client]: https://deno.land/x/oauth2_client@v0.2.1
[oak]: https://deno.land/x/oak@v8.0.0
[dotenv]: https://deno.land/x/dotenv@v2.0.0
