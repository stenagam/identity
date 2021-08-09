# <img src="https://deno.land/logo.svg" width="50px" /> Deno: Server with login (deno deploy)

Sample web server implementing the OAuth login flow.

This example can be tested locally using the [deployctl][deployctl] command line tool, or published
online on [Deno Deploy][denodeploy].

A live version of this code deployed can be visited on [https://stenagam.deno.dev/login][livedemo]

([este documento em Portugês](LEIAME.md))

## Made with

- [deno][deno]
- [oauth2_client][oauth2_client]
- [fetch API][fetchapi]
- [deployctl][deployctl]

Based on the examples from [Deploy Docs][deploydocs]

## Usage

### Local dev environment

1. Create a `.env` file containing a `CLIENT_ID` and `CLIENT_SECRET` obtained
on the [Magalu Developers][devportal] website, on the folder of this example.
(use [.env.example](../../.env.example) as an example).

```shell
cp ../../.env.example .env # copy example file from root dir
code .env # open for editing on vscode
```

2. Start the server from a terminal with [deno][deno] and [deployctl][deployctl] installed.

```shell
deployctl run --env=.env --addr=:8000 --watch server.ts
```

3. On your browser, navigate to [localhost:8000/login](http://localhost:8000/login)

### Online at Deno Deploy

1. Create a [new project][newproject]
2. Fork this repo on your Github account (click the "Fork" button on the upper right corner)
3. Back on yours Deno Deploy project page, look for a "Deploy from GitHub" section and click "Continue"
4. On the GitHub URL field paste the path to the server.ts file of this example, something like
`https://github.com/XXXXX/identity/blob/main/deno/deploy/server.ts `
5. Open the "Environment Variables" page and add one variable for each line of the [.env](../../.env.example)
file

[deno]: https://deno.land/
[denodeploy]: https://deno.com/deploy
[oauth2_client]: https://deno.land/x/oauth2_client@v0.2.1
[devportal]: http://alpha.dev.magalu.com
[fetchapi]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[deployctl]: https://deno.com/deploy/docs/deployctl
[deploydocs]: https://deno.com/deploy/docs
[newproject]: https://dash.deno.com/new
[livedemo]: https://stenagam.deno.dev/login
