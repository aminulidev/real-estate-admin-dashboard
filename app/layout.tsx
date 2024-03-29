import type {Metadata} from "next";
import {Manrope} from "next/font/google"
import "./globals.css";
import {Toaster} from "sonner";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        template: '%s | Yariga',
        default: 'Yariga'
    },
}

export default async function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <html lang="en" suppressHydrationWarning>
                <body className={manrope.className}>
                    {children}
                    <Toaster/>
                </body>
            </html>
        </SessionProvider>
    );
}
