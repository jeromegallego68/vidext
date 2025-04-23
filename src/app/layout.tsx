import Provider from '@/components/Provider';
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
            </body>
        </html>
    );
}

export default RootLayout;
