import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/prismadb"


export const options:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    pages:{
        signIn: '/signin'
    },
    
    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    debug:process.env.NODE_ENV === "development"
}