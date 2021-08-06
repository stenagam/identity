import { config } from "https://deno.land/x/dotenv/mod.ts";
import { OAuth2Client } from "https://deno.land/x/oauth2_client/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v6.3.0/mod.ts";

const {
  CLIENT_ID,
  CLIENT_SECRET,
  AUTH_URI,
  TOKEN_URI,
  REDIRECT_URI,
  USERINFO_URI,
} = config();

const oauth2Client = new OAuth2Client({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  authorizationEndpointUri: AUTH_URI,
  tokenUri: TOKEN_URI,
  redirectUri: REDIRECT_URI,
  defaults: {
    scope: "openid profile",
  },
});

const router = new Router();
router.get("/login", (ctx) => {
  ctx.response.redirect(
    oauth2Client.code.getAuthorizationUri(),
  );
});
router.get("/oauth2/callback", async (ctx) => {
  // Exchange the authorization code for an access token
  const tokens = await oauth2Client.code.getToken(ctx.request.url);

  // Use the access token to make an authenticated API request
  const userResponse = await fetch(USERINFO_URI, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });
  const { name } = await userResponse.json();

  ctx.response.body = `Hello, ${name}!`;
});

const app = new Application();
app.use(router.allowedMethods(), router.routes());

await app.listen({ port: 8000 });
