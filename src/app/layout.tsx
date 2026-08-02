import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-diego-vieira.vercel.app"),
  title: {
    default: "Diego Vieira de Souza | Desenvolvedor Java e Back-end",
    template: "%s | Diego Vieira de Souza",
  },
  description:
    "Portfólio de Diego Vieira de Souza, desenvolvedor Java com foco em back-end e full stack, " +
    "formado em Análise e Desenvolvimento de Sistemas, trabalhando com Spring Boot, Node.js e " +
    "PostgreSQL no Rio de Janeiro – RJ, Brasil.",
  authors: [{ name: "Diego Vieira de Souza" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <div className="flex flex-1 flex-col pt-16">
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
