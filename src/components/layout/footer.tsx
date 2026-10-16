import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const PRODUCTS = [
  { label: "TorqueOS", sub: "ERP Automotivo", href: "/produtos" },
  { label: "BarberCRM", sub: "Gestão Barbearias", href: "/produtos" },
  { label: "Retail-OS", sub: "Varejo & Comércio", href: "/produtos" },
  { label: "MesaGo", sub: "Restaurantes", href: "/produtos" },
];

const COMPANY = [
  { label: "Soluções", href: "/servicos" },
  { label: "Engenharia", href: "/tecnologia" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Falar com a Vision", href: "/contato" },
];

const LEGAL = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#08090D] text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Vision Solutions Home">
                <Image
                  src="/icon-192.png"
                  alt="Vision Solutions Logo"
                  width={30}
                  height={30}
                  className="w-7 h-7 sm:w-[30px] sm:h-[30px] rounded-lg shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300 shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[12px] font-bold tracking-[0.14em] text-white uppercase">Vision</span>
                  <span className="text-[8.5px] font-semibold tracking-[0.24em] text-sky-400 uppercase mt-0.5">Solutions</span>
                </div>
              </Link>

              {/* Status Indicator (visible on mobile in top header) */}
              <div className="inline-flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-white/60">Sistemas em Operação</span>
              </div>
            </div>

            <p className="text-[13px] text-white/50 leading-relaxed max-w-sm">
              SaaS verticais e engenharia de software sob medida para empresas que já superaram sistemas genéricos.
            </p>

            {/* Desktop Status Indicator */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-white/60">Operação e clusters em produção</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/VandinDev221"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contato@visionsolutions.com.br"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links Section: 2 Columns on Mobile, spans 8 cols on desktop */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
            
            {/* Products Column */}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.15em]">
                Produtos SaaS
              </p>
              <ul className="space-y-2">
                {PRODUCTS.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="group block text-[13px] text-white/70 hover:text-white transition-colors"
                    >
                      <span className="font-medium group-hover:text-white">{p.label}</span>
                      <span className="block text-[11px] text-white/40 leading-none mt-0.5">{p.sub}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.15em]">
                Navegação
              </p>
              <ul className="space-y-2.5">
                {COMPANY.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="block text-[13px] text-white/70 hover:text-white transition-colors font-medium"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Column */}
            <div className="col-span-2 sm:col-span-1 space-y-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
              <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.15em]">
                Contato
              </p>
              <div className="space-y-2 text-[12px] text-white/55 leading-relaxed">
                <p>Precisa de um sistema sob medida?</p>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-primary-soft hover:text-white transition-colors group"
                >
                  <span>Iniciar conversa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] bg-black/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-[11px] text-white/40">
            © {year} Vision Solutions. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            {LEGAL.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] text-white/40 hover:text-white/75 transition-colors"
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
