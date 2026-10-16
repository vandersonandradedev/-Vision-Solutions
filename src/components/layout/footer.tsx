import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const PRODUCTS = [
  { label: "TorqueOS", sub: "ERP Automotivo", href: "/produtos" },
  { label: "BarberCRM", sub: "Gestão para Barbearias", href: "/produtos" },
  { label: "Retail-OS", sub: "ERP Varejo & Comércio", href: "/produtos" },
  { label: "MesaGo", sub: "Restaurantes & Gastronomia", href: "/produtos" },
];

const COMPANY = [
  { label: "Soluções", href: "/servicos" },
  { label: "Engenharia", href: "/tecnologia" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const LEGAL = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#08090D]">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                <span className="text-[#08090D] font-black text-xs tracking-tight font-mono">VS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] font-bold tracking-[0.15em] text-white uppercase">Vision</span>
                <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase font-medium">Solutions</span>
              </div>
            </Link>

            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs">
              Construímos SaaS verticais e sistemas sob medida para operações que software genérico não atende.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] text-white/50 font-mono">Todos os sistemas operacionais</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/VandinDev221"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contato@visionsolutions.com.br"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.15em]">Produtos</p>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors shrink-0 mt-1.5" />
                    <div>
                      <span className="text-[13px] text-white/60 group-hover:text-white/90 transition-colors font-medium leading-none">
                        {p.label}
                      </span>
                      <span className="block text-[11px] text-white/25 mt-0.5">{p.sub}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.15em]">Empresa</p>
            <ul className="space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.15em]">Iniciar projeto</p>
            <div className="space-y-3">
              <p className="text-[12px] text-white/40 leading-relaxed">
                Tem uma ideia ou processo que precisa de software?
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-1.5 text-[12px] text-white font-medium hover:text-white/80 transition-colors group"
              >
                Falar com a Vision
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-white/25 font-mono">
            © {year} Vision Solutions — Software House & SaaS Studio
          </span>
          <div className="flex items-center gap-5">
            {LEGAL.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] text-white/25 hover:text-white/50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
