import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Quem é a Vision Solutions e como a empresa pensa engenharia de software.",
};

export default function SobrePage() {
  return (
    <div className="bg-[#08090D] min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <PageHeader
        eyebrow="Sobre a Vision"
        title="Uma software house que constrói sua própria engenharia."
        description="Desenvolvemos SaaS verticais e sistemas sob medida para operações que já superaram planilhas e não cabem em softwares genéricos de mercado."
      />

      {/* Editorial Manifesto Block */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
                Nossa Filosofia
              </span>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15]">
                O gargalo raramente é a equipe. É o sistema.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-[14px] sm:text-[16px] text-white/65 leading-relaxed">
              <p>
                A maioria das empresas não sofre por falta de dedicação operacional, mas pela ausência de um sistema que reflita as regras reais do seu negócio. Ferramentas genéricas forçam a empresa a se adaptar a elas — criando processos paralelos no WhatsApp, anotações em papel e planilhas de contingência.
              </p>
              <p>
                É exatamente esse problema que eliminamos. Não vendemos pacotes prontos configurados para parecer sob medida: estudamos a operação real no detalhe e construímos o sistema em volta dela, garantindo fluidez, rastreabilidade e integridade de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Bento Grid */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Valores Inegociáveis
            </span>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15]">
              Cinco princípios que guiam cada linha de código.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="rounded-2xl bg-[#14171F] border border-white/[0.08] hover:border-white/[0.16] p-5 sm:p-7 lg:p-8 space-y-3 sm:space-y-4 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-mono font-bold text-primary-soft">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white/55 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 sm:px-6 py-16 sm:py-24 lg:py-32 border-t border-white/[0.07] bg-[#0A0D13]">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-white tracking-tight leading-[1.15]">
            Quer entender como podemos ajudar sua empresa?
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-xl mx-auto">
            Fale diretamente com os fundadores e arquitetos da Vision Solutions.
          </p>
          <div className="pt-2">
            <Link
              href="/contato"
              className="group flex sm:inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-primary hover:bg-primary-dim text-white text-[13.5px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              <span>Entrar em contato</span>
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
