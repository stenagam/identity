# <img src="https://deno.land/logo.svg" width="50px" /> Deno: Servidor com login (deno deploy)

Servidor web que implementa o fluxo de login OAuth2.

Este exemplo pode ser testado localmente usando a ferramenta de linha de comando
[deployctl][deployctl], ou publicada online no [Deno Deploy][denodeploy].

Uma versão online do código rodando neste serviço pode ser vista em
[https://stenagam.deno.dev/login][livedemo]

([this document in English](README.md))

## Feito com

- [deno][deno]
- [oauth2_client][oauth2_client]
- [fetch API][fetchapi]
- [deployctl][deployctl]

Baseado nos exemplos da [documentação do Deno Deploy][deploydocs]

## Uso

### Ambiente de desenvolvimento Local

1. Crie um arquivo `.env` com os valores para `CLIENT_ID` e `CLIENT_SECRET` obtidos
no site [Magalu Developers][devportal] na pasta deste exemplo.
(use [.env.example](../../.env.example) como modelo).

```shell
cp ../../.env.example .env # copia exemplo da raíz renomeando
code .env # abre para edição no vscode
```

2. Inicie o servidor a partir de um terminal com [deno][deno] e [deployctl][deployctl] instalados.

```shell
deployctl run --env=.env --addr=:8000 --watch server.ts
```

3. Em seu navegador, abra [localhost:8000/login](http://localhost:8000/login)

### Publicar Online no Deno Deploy

1. Cire um [novo projeto][newproject]
2. Duplique este repositório em sua conta do Github (clique no botão "Fork" no canto superior direito)
3. De volta à página de seu projeto no Deno Deploy, procure a seção "Deploy from GitHub" e clique "Continue"
4. No campo GitHub URL cole o caminho para o arquivo `server.ts` deste exemplo, algo parecido com
`https://github.com/XXXXX/identity/blob/main/deno/deploy/server.ts `
5. Abra a página "Environment Variables" e adicione uam variavel para cada linha do [.env](../../.env.example)

[deno]: https://deno.land/
[denodeploy]: https://deno.com/deploy
[oauth2_client]: https://deno.land/x/oauth2_client@v0.2.1
[devportal]: http://alpha.dev.magalu.com
[fetchapi]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[deployctl]: https://deno.com/deploy/docs/deployctl
[deploydocs]: https://deno.com/deploy/docs
[newproject]: https://dash.deno.com/new
[livedemo]: https://stenagam.deno.dev/login

