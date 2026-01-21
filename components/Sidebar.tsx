import Link from "next/link";

const links = [
  { href: "/painel", label: "Painel" },
  { href: "/check-in", label: "Check-in" },
  { href: "/evolucao", label: "Evolução" },
  { href: "/diario", label: "Diário" },
  { href: "/sonhos", label: "Sonhos" },
  { href: "/tesouros", label: "Tesouros" },
  { href: "/grimorio", label: "Grimório" },
  { href: "/conquistas", label: "Conquistas" },
  { href: "/configuracoes", label: "Configurações" },
  { href: "/onboarding", label: "Onboarding" }
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-moss/40 px-6 py-10">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-gold/80">Check-in</p>
        <h1 className="text-xl font-semibold text-white">O Caminho do Sábio</h1>
      </div>
      <nav className="mt-10 space-y-3 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-full border border-transparent px-3 py-2 text-white/70 transition hover:border-gold/40 hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
