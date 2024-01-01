import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb"


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
    // debug:process.env.NODE_ENV === "development"
}