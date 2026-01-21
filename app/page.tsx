import Link from "next/link";

export default function Home() {
  return (
    <div className="glass-card p-10">
      <h1 className="text-3xl font-semibold text-gold">
        Check-in das Virtudes — O Caminho do Sábio
      </h1>
      <p className="mt-4 text-lg text-white/80">
        Bem-vindo ao caminho. Comece pelo Painel do Sábio ou faça seu primeiro
        check-in.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link className="button-gold" href="/painel">
          Ir para o Painel
        </Link>
        <Link className="button-gold" href="/check-in">
          Fazer Check-in
        </Link>
      </div>
    </div>
  );
}
