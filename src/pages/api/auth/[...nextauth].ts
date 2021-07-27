import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GIT_HUB_CLIENT_ID,
      clientSecret: process.env.GIT_HUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
    // ...add more providers here
  ],
});
