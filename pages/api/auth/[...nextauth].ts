import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
  providers: [
    IdentityServer4Provider({
      id: "demo-identity-server",
      name: "Demo IdentityServer4",
      authorization: {
        params: { scope: "openid profile email api offline_access" },
      },
      issuer: "https://demo.identityserver.io/",
      clientId: "interactive.confidential",
      clientSecret: "secret",
    }),
    Auth0Provider({
      id: "Auth0",
      name: "Auth0 Development",
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  debug: true,
  secret: "6a41b0c7-b849-4a87-a6af-81ccbeb939a1",
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log(`REDIRECT CALLBACK - Url: ${url}. Base Url: ${baseUrl}`);
      return baseUrl;
    },
  },
});
