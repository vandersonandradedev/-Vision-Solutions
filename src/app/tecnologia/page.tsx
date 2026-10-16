import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Database, Layers, Server, Activity, Terminal } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { techLayers } from "@/data/tech-stack";

export const metadata: Metadata = {
  title: "Engenharia",
  description: "A arquitetura técnica em camadas e a stack de engenharia da Vision Solutions.",
};

const LAYER_DETAILS = [
  {
    icon: Layers,
    role: "Camada de Apresentação",
    desc: "Aplicações SSR com React 19 e Next.js 15. Renderização otimizada, estados globais previsíveis e clientes desktop via Electron para operações locais.",
  },
  {
    icon: Server,
    role: "Gateway & Regras de Negócio",
    desc: "APIs modulares em NestJS e Fastify. Validação estrita de contratos com Zod, autenticação JWT HTTPOnly e controle de permissões por perfil (RBAC).",
  },
  {
    icon: Database,
    role: "Persistência Relacional",
    desc: "PostgreSQL 16 com Prisma ORM. Schemas fortemente tipados, migrações versionadas e estratégias de isolamento por tenant para segurança máxima.",
  },
  {
    icon: Activity,
    role: "Orquestração Assíncrona",
    desc: "Filas distribuídas com BullMQ sobre Redis. Execução paralela de jobs pesados, retries automáticos com backoff exponencial e Dead Letter Queues.",
  },
  {
    icon: Terminal,
    role: "Infraestrutura & Entrega",
    desc: "Contêineres Docker, esteiras de CI/CD automatizadas e monitoramento contínuo de métricas, erros e tempos de resposta.",
  },
];

const ARCHITECTURAL_PRINCIPLES = [
  {
    title: "TypeScript Estrito End-to-End",
    desc: "Do schema do PostgreSQL até a interface do usuário, nenhum dado circula sem tipagem estrita validada em tempo de compilação.",
  },
  {
    title: "Isolamento Real de Multi-Tenancy",
    desc: "Garantia de que os dados de um cliente nunca vazem para outro através de separação por schema ou Row-Level Security (RLS).",
  },
  {
    title: "Resiliência contra Falhas",
    desc: "Sistemas desenhados para falhas parciais. Se um worker assíncrono falhar, o job é reprocessado sem degradar a experiência do usuário.",
  },
  {
    title: "Código 100% Autoral",
    desc: "Não utilizamos templates pré-fabricados ou no-code. Cada microsserviço e componente é escrito com intencionalidade técnica.",
  },
];

export default function TecnologiaPage() {
  return (
    <div className="bg-[#08090D] min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <PageHeader
        eyebrow="Engenharia & Arquitetura"
        title="Arquitetura em camadas. Tipagem estrita de ponta a ponta."
        description="Cada sistema é construído sobre a mesma base técnica sólida — do evento no navegador ao registro relacional imutável no banco de dados."
      />

      {/* Layer Architecture Pipeline */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Topologia do Sistema
            </span>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15]">
              Cinco camadas de isolamento e responsabilidade única.
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {techLayers.map((layer, i) => {
              const detail = LAYER_DETAILS[i];
              const Icon = detail?.icon ?? Layers;

              return (
                <div
                  key={layer.label}
                  className="rounded-2xl bg-[#14171F] border border-white/[0.08] hover:border-white/[0.16] p-5 sm:p-7 lg:p-9 transition-all duration-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center"
                >
                  <div className="lg:col-span-4 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-xs font-mono font-bold text-primary-soft">
                        {layer.label}
                      </span>
                      <span className="text-[11px] text-white/45 uppercase tracking-wider font-medium">
                        {detail?.role}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {layer.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-[13.5px] sm:text-[14px] text-white/60 leading-relaxed">
                      {detail?.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex flex-wrap gap-1.5 sm:gap-2 lg:justify-end">
                    {layer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10.5px] sm:text-[11px] font-mono font-medium text-white/75 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architectural Guarantees Grid */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28 border-t border-white/[0.07] bg-[#0A0D13]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Garantias Técnicas
            </span>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15]">
              Padrões inegociáveis de qualidade de software.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {ARCHITECTURAL_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl bg-[#14171F] border border-white/[0.07] p-5 sm:p-7 space-y-2.5 sm:space-y-3 hover:border-white/[0.14] transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-primary-soft">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-[13.5px] sm:text-[14px] text-white/55 leading-relaxed">
                  {principle.desc}
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
            Quer discutir a arquitetura da sua operação?
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-xl mx-auto">
            Nossos engenheiros podem avaliar seu fluxo atual de dados e desenhar um plano de engenharia sob medida.
          </p>
          <div className="pt-2">
            <Link
              href="/contato"
              className="group flex sm:inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-primary hover:bg-primary-dim text-white text-[13.5px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              <span>Conversar sobre engenharia</span>
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
