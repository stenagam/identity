# identity
Examples of how to add login on an application.

([este documento em Português](LEIAME.md))

## info needed on all examples:

- Client ID
- Client secret
- Authorization endpoint URI
- Token endpoint URI
- Redirect URI
- Scope

The samples expect a `.env` file containing this data. You can copy the `.env.example` file from the
root folder to the desired sample folder, renaming it to `.env`,  and fill in the blanks.

```shell
cp .env-example deno/.env # copy sample file renaming it
code deno/.env # open the file for editing it on vscode
```
