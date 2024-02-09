import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { getCategoryArticleCounts } from "@/libs/microcms";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "nao tech blog",
  description: "技術に関連する情報発信",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategoryArticleCounts();

  return (
    <html lang="ja">
      <head></head>
      <body>
        <Providers>
          <Header categories={categories} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
