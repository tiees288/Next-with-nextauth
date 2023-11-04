import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  providers: [
    // ...add providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
     //    const res = await fetch("/your/endpoint", {
     //      method: "POST",
     //      body: JSON.stringify(credentials),
     //      headers: { "Content-Type": "application/json" },
     //    });
        // const user = await res.json()
        const user = {
          id: 1,
          name: "John Smith",
          email: "john@gmail.com",
        };
        // If no error and we have user data, return it
     //    if (res.ok && user) {
          return user as any;
     //    }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {},
  callbacks: {},
});

export { handler as GET, handler as POST };
