import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { saasProducts } from "@/data/saas-products";

export const metadata: Metadata = {
  title: "Produtos",
  description: "SaaS verticais proprietários desenvolvidos e mantidos pela Vision Solutions.",
};

export default function ProdutosPage() {
  return (
    <div className="bg-[#08090D] min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <PageHeader
        eyebrow="Portfólio de Software"
        title="SaaS verticais para operações de alta densidade."
        description="Cada sistema nasce de um processo de negócio real que superou ferramentas genéricas e planilhas. Arquitetura autoral, dados isolados e engenharia pronta para escalar."
      />

      {/* Flagship Gallery */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
          {saasProducts.map((product, index) => {
            const isReverse = index % 2 === 1;

            return (
              <article
                key={product.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center"
              >
                {/* Column: Information & Modules */}
                <div className={`lg:col-span-6 space-y-5 sm:space-y-6 ${isReverse ? "lg:order-2" : ""}`}>
                  
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span className="text-[12px] font-medium text-white/50 tracking-tight">
                      {product.category}
                    </span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {product.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-[-0.03em] text-white leading-[1.12]">
                      {product.name}
                    </h2>
                    <p className="text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-xl">
                      {product.description}
                    </p>
                  </div>

                  {/* Modules Feature Grid */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-medium text-white/40 uppercase tracking-wider">
                      Módulos Operacionais
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.modules.map((module) => (
                        <div
                          key={module}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[13px] text-white/80"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary-soft shrink-0" />
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-medium text-white/40 uppercase tracking-wider">
                      Arquitetura Técnica
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-white/50 bg-white/[0.03] border border-white/[0.07]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2 sm:pt-4">
                    <Link
                      href={`/contato?interesse=${product.slug}`}
                      className="group flex sm:inline-flex items-center justify-between sm:justify-center gap-3 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.2] text-white text-[13px] font-medium transition-all duration-300 w-full sm:w-auto"
                    >
                      <span>Solicitar demonstração</span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Column: Visual Preview */}
                <div className={`lg:col-span-6 ${isReverse ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl bg-white/[0.02] p-1.5 sm:p-2.5 border border-white/[0.08] shadow-2xl">
                    <div className="rounded-xl overflow-hidden bg-[#0B0D13] border border-white/[0.06] relative aspect-[21/10] group">
                      {/* Product Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={`${product.name} interface mockup`}
                        className="w-full h-full object-contain object-center transition-all duration-500"
                        style={{ imageRendering: "-webkit-optimize-contrast" }}
                      />
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Custom System Banner */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-24 lg:pb-32 border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto pt-14 sm:pt-20">
          <div className="rounded-2xl sm:rounded-3xl bg-[#14171F] border border-white/[0.08] p-6 sm:p-10 lg:p-14 text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 shadow-xl">
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Engenharia Sob Medida
            </span>
            <h3 className="text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-white tracking-tight leading-[1.15]">
              Sua operação tem particularidades que nenhum SaaS padrão atende?
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-xl mx-auto">
              Além dos nossos produtos verticais, a Vision Solutions projeta e desenvolve sistemas completos sob encomenda — desde o diagnóstico do processo até o deploy contínuo.
            </p>
            <div className="pt-2">
              <Link
                href="/contato"
                className="group flex sm:inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-primary hover:bg-primary-dim text-white text-[13.5px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-md w-full sm:w-auto"
              >
                <span>Falar com nosso time de engenharia</span>
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
