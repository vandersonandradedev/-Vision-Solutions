import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Network, Zap } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { coreSolutions, processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Software sob medida para o seu processo: ERPs, SaaS multi-tenant, APIs e automação.",
};

const SOLUTION_ICONS = [Layers, Cpu, Network, Zap];

export default function ServicosPage() {
  return (
    <div className="bg-[#08090D] min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <PageHeader
        eyebrow="Soluções Sob Demanda"
        title="Engenharia de software desenhada para a sua operação."
        description="Não vendemos módulos genéricos adaptados. Projetamos, construímos e sustentamos a arquitetura que seu negócio precisa para operar com precisão e escala."
      />

      {/* Core Solutions Bento Grid */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Capacidades Técnicas
            </span>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15]">
              Quatro disciplinas de engenharia aplicada.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {coreSolutions.map((solution, i) => {
              const Icon = SOLUTION_ICONS[i] ?? Layers;

              return (
                <div
                  key={solution.title}
                  className="rounded-2xl bg-[#14171F] border border-white/[0.08] hover:border-white/[0.16] p-6 sm:p-8 space-y-5 sm:space-y-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-primary-soft">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {solution.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
                    {solution.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/75">
                        <CheckCircle2 className="w-4 h-4 text-primary-soft shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28 border-t border-white/[0.07] bg-[#0A0D13]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Metodologia de Entrega
            </span>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15]">
              Da compreensão do processo ao deploy com monitoramento contínuo.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-white/55 leading-relaxed">
              Trabalhamos com ciclos curtos, previsibilidade e validação com os operadores reais do sistema antes de qualquer lançamento em produção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl bg-[#14171F] border border-white/[0.07] p-5 sm:p-6 space-y-3 hover:border-white/[0.14] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-mono font-bold text-primary-soft">
                    {step.number}
                  </span>
                  <span className="text-[11px] text-white/30 font-mono">etapa {step.number}</span>
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] text-white/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 sm:px-6 py-16 sm:py-24 lg:py-32 border-t border-white/[0.07]">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-white tracking-tight leading-[1.15]">
            Pronto para estruturar o software da sua operação?
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-xl mx-auto">
            Agende uma conversa técnica diretamente com nossos arquitetos. Sem apresentações genéricas de vendas.
          </p>
          <div className="pt-2">
            <Link
              href="/contato"
              className="group flex sm:inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-primary hover:bg-primary-dim text-white text-[13.5px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              <span>Solicitar diagnóstico do processo</span>
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
