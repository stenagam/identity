import { OAuth2Client } from "https://deno.land/x/oauth2_client/mod.ts";

const {
  CLIENT_ID,
  CLIENT_SECRET,
  AUTH_URI,
  TOKEN_URI,
  REDIRECT_URI,
  USERINFO_URI,
} = Deno.env.toObject();

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

type requestType = InstanceType<typeof Request>;
type responseType = InstanceType<typeof Response>;
const handleRequest = async (request: requestType): Promise<responseType> => {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/login")) {
    const authUri = oauth2Client.code.getAuthorizationUri();

    return Response.redirect(authUri.toString(), 302);
  }

  if (pathname.startsWith("/oauth2/callback")) {
    // Exchange the authorization code for an access token
    const tokens = await oauth2Client.code.getToken(request.url);

    // Use the access token to make an authenticated API request
    const userResponse = await fetch(USERINFO_URI, {
      method: "GET",
      headers: { "authorization": `Bearer ${tokens.accessToken}` },
    });
    const { name } = await userResponse.json();

    return new Response(`Hello ${name}!`, {
      headers: { "content-type": "text/plain" },
      status: 200,
    });
  }

  return new Response("not found", { status: 404 });
};

addEventListener("fetch", async (event) => {
  const response = await handleRequest(event.request);
  return event.respondWith(response);
});
