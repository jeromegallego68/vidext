import Provider from '@/components/Provider';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo list app",
  description: "A simple todo list",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
