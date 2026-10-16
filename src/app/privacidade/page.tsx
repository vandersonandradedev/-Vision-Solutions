import type { Metadata } from "next";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Diretrizes de proteção de dados, privacidade e isolamento multi-tenant da Vision Solutions.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-white">
      <PageHeader
        eyebrow="Segurança & Compliance"
        title="Política de Privacidade"
        description="Diretrizes gerais de privacidade, governança e proteção de dados para produtos e ecossistemas Vision Solutions."
      />
      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial space-y-8">
          
          {/* Note Banner */}
          <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-5 flex items-start gap-3.5">
            <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-[13px] text-white/70 leading-relaxed">
              <strong className="text-white font-semibold">Isolamento Arquitetural:</strong> Esta política descreve o padrão de isolamento lógico e segurança física aplicado aos nossos SaaS verticais e sistemas sob medida. Cada contrato corporativo possui cláusulas de confidencialidade e SLA de conformidade com a LGPD.
            </div>
          </div>

          {/* Main Card */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#14171F] p-8 sm:p-10 space-y-8 text-[14px] text-white/65 leading-relaxed shadow-xl">
            
            <div className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <FileText className="w-4 h-4 text-primary" />
                1. Coleta e Minimização de Dados
              </div>
              <p>
                Os sistemas desenvolvidos pela Vision Solutions seguem rigorosamente o princípio de minimização de dados da LGPD (Lei nº 13.709/2018). Coletamos exclusivamente informações essenciais para o fluxo transacional de cada operação contratada (como agendamentos, ordens de serviço, emissões fiscais e autenticação de usuários).
              </p>
            </div>

            <div className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <Lock className="w-4 h-4 text-emerald-400" />
                2. Isolamento de Dados em Arquitetura Multi-Tenant
              </div>
              <p>
                Em nossas plataformas SaaS, garantimos isolamento lógico estrito por organização contratante (tenant). Nenhuma requisição ou consulta SQL possui visibilidade sobre bancos ou esquemas de terceiros. Utilizamos chaves de isolamento injetadas na camada de persistência e validações rigorosas de autorização em todas as rotas de API.
              </p>
            </div>

            <div className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <Shield className="w-4 h-4 text-primary" />
                3. Segurança em Trânsito e Repouso
              </div>
              <p>
                Todo o tráfego externo e interno trafega sob HTTPS forçado com TLS 1.3 e cabeçalhos de segurança HSTS. Dados sensíveis, segredos de autenticação e tokens de integração com mensageria (ex.: Evolution WhatsApp API) são armazenados com criptografia em repouso e variáveis de ambiente isoladas.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-[16px]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                4. Direitos dos Titulares e Encarregado de Dados
              </div>
              <p>
                Titulares de dados têm o direito de requisitar confirmação de tratamento, acesso, correção ou eliminação de seus dados pessoais. Solicitações podem ser encaminhadas diretamente ao nosso canal de compliance através do e-mail oficial disponibilizado na página de contato.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
