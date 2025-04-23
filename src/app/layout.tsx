import Provider from '@/components/Provider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from "next";
import { ReactNode } from 'react';
import "./globals.css";

export const metadata: Metadata = {
    title: "Todo list application",
    description: "A simple todo list",
};

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({
    children,
}: Readonly<RootLayoutProps>) => {
    return (
        <html lang="en">
            <body
                className={`antialiased min-h-screen flex items-center justify-center bg-gray-50`}
            >
                <Provider>
                    {children}
                </Provider>
                <Toaster />
            </body>
        </html>
    );
}

export default RootLayout;
