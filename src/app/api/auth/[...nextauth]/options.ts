import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    placeholder: 'your-awesome-username',
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: 'your-awesome-password',
                },
            },
            async authorize(credentials) {
                // This is where you would retreive user data
                // to verify credientials. (Ex: MongoDB User Table)
                const user = {
                    id: '42',
                    name: 'Ikenna',
                    password: 'password123',
                };

                if (
                    credentials?.username === user.name &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
};
