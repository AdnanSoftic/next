import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";

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
  ],
  debug: true,
  secret: "6a41b0c7-b849-4a87-a6af-81ccbeb939a1",
});
