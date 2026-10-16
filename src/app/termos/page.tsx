import type { Metadata } from "next";
import { Scale, CheckCircle2, FileCode2, Cpu } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições gerais de uso, licenciamento e operação das soluções Vision Solutions.",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-white">
      <PageHeader
        eyebrow="Governança & Licenciamento"
        title="Termos de Uso"
        description="Termos e condições gerais que regem a utilização de produtos SaaS e sistemas desenvolvidos pela Vision Solutions."
      />
      <section className="px-5 sm:px-6 py-10 sm:py-16">
        <div className="mx-auto max-w-editorial space-y-6 sm:space-y-8">
          
          {/* Note Banner */}
          <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-4 sm:p-5 flex items-start gap-3.5">
            <Scale className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-[13px] text-white/70 leading-relaxed">
              <strong className="text-white font-semibold">Contratos Operacionais:</strong> Para clientes corporativos com contratos sob medida, prevalecem as cláusulas de SLA, garantia e propriedade intelectual formalizadas no instrumento particular de prestação de serviços.
            </div>
          </div>

          {/* Main Card */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#14171F] p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 text-[14px] text-white/65 leading-relaxed shadow-xl">
            
            <div className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                1. Objeto e Escopo de Aplicação
              </div>
              <p>
                Os presentes termos aplicam-se a todas as plataformas, demonstrações públicas, painéis operacionais e APIs providas pela Vision Solutions, estabelecendo as responsabilidades mútuas entre a empresa e os usuários ou clientes contratantes.
              </p>
            </div>

            <div className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <FileCode2 className="w-4 h-4 text-primary" />
                2. Autoria e Propriedade Intelectual
              </div>
              <p>
                A metodologia, código-fonte proprietário de bibliotecas internas, marcas registradas e identidade visual dos produtos (incluindo TorqueOS, BarberCRM, Retail-OS e MesaGo) pertencem integralmente à Vision Solutions. O contratante adquire licença de uso exclusiva para a operação pactuada, sem transferência dos direitos autorais subjacentes das plataformas base, salvo acordo expresso de cessão total em software sob encomenda.
              </p>
            </div>

            <div className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <Cpu className="w-4 h-4 text-sky-400" />
                3. Ambientes de Demonstração e Sandboxes
              </div>
              <p>
                Demonstrações públicas interativas disponibilizadas neste portal possuem finalidade exclusiva de avaliação técnica e visual. Não devem ser inseridas informações confidenciais de terceiros nesses ambientes, e a Vision Solutions reserva-se o direito de resetar bancos de demonstração periodicamente.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <Scale className="w-4 h-4 text-emerald-400" />
                4. Níveis de Serviço (SLA) e Disponibilidade
              </div>
              <p>
                A infraestrutura de produção é dimensionada para disponibilidade contínua com redundância em nuvem. As metas de uptime e janelas de manutenção programada são detalhadas em anexo técnico contratual para cada produto em produção.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
