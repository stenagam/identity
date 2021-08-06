# <img src="https://deno.land/logo.svg" width="50px" /> Deno: Server with login

Sample web server implementing the OAuth login flow.

([este documento em Português](LEIAME.md))

## Made with

- [deno][deno]
- [oauth2_client][oauth2_client]
- [oak][oak]
- [dotenv][dotenv]

Adapted from the
[oauth2_client oak example](https://deno.land/x/oauth2_client@v0.2.1/examples/oak.ts) by Jonas Auer

## Usage

1. Create a `.env` file on the `deno` folder containing a `CLIENT_ID` and `CLIENT_SECRET` obtained
on the [Magalu Developers][devportal] website
(use [.env.example](../../.env.example) as an example).

```shell
cp ../../.env.example .env # copy example file from root dir
code .env # open for editing on vscode
```

2. Start the server from a terminal with [deno](https://deno.land/) installed.

```shell
deno run --allow-read --allow-net server.ts
```

3. On your browser, navigate to [localhost:8000/login](http://localhost:8000/login)

4. Hack the source code and say 👋 hello on the [Slack channel](https://luizalabs.slack.com/archives/C025378FUJW)

[deno]: https://deno.land/
[oauth2_client]: https://deno.land/x/oauth2_client@v0.2.1
[oak]: https://deno.land/x/oak@v8.0.0
[dotenv]: https://deno.land/x/dotenv@v2.0.0
[devportal]: http://alpha.dev.magalu.com
