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

Os exemplos assumem que um arquivo `.env` contendo estes dados exista. Você deve copiar o arquivo
`.env.example` da raíz do projeto para a pasta do exemplo que for usar, renomeando-o para `.env`,
e preencher as lacunas.

```shell
cp .env-example deno/.env # copia renomeando
code deno/.env # abre para edição no vscode
```

## Exemplos

- [deno](./deno/LEIAME.md)
