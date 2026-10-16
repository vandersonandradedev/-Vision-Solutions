import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de Privacidade"
        description="Diretrizes gerais de privacidade e proteção de dados."
      />
      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial space-y-8 text-body text-ink-dim">
          <div className="rounded border border-line-strong bg-surface p-4 font-technical text-micro text-ink-faint">
            <span className="font-semibold text-primary-soft">Nota Importante:</span> Este documento é um demonstrativo estrutural da plataforma e necessita de validação jurídica específica antes de ser utilizado oficialmente em produção.
          </div>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-ink">1. Coleta de Informações</h2>
            <p>
              Os sistemas desenvolvidos pela Vision Solutions seguem princípios de minimização de dados, coletando apenas informações estritamente necessárias para a operação dos serviços contratados pelos clientes e usuários.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-ink">2. Tratamento e Isolamento de Dados</h2>
            <p>
              Em arquiteturas SaaS multi-tenant, aplicamos isolamento lógico rigoroso por tenant (via schemas ou Row-Level Security), impedindo o compartilhamento ou acesso não autorizado entre diferentes organizações.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-ink">3. Segurança e Direitos dos Titulares (LGPD)</h2>
            <p>
              Adotamos transporte cifrado (HTTPS com HSTS), criptografia em repouso e políticas de controle de acesso baseado em papéis (RBAC). Os titulares podem solicitar confirmação, correção ou exclusão de dados conforme a legislação aplicável.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
