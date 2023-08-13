import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sample SaaS App",
  description: "A simple SasS layout built with Next JS and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Logomark.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
