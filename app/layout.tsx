import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Check-in das Virtudes — O Caminho do Sábio",
  description: "SaaS premium de hábitos, reflexão e evolução pessoal."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 px-8 py-10">
            <div className="mx-auto max-w-6xl space-y-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
