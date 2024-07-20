import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import { Provider } from "@/provider";
import styles from "./globals.module.css";
const inter = ABeeZee({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.main}`}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&display=swap" rel="stylesheet" />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
