import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termos de Uso"
        description="Termos e condições gerais de uso e navegação."
      />
      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial space-y-8 text-body text-ink-dim">
          <div className="rounded border border-line-strong bg-surface p-4 font-technical text-micro text-ink-faint">
            <span className="font-semibold text-primary-soft">Nota Importante:</span> Este texto constitui um modelo de referência institucional e deve ser submetido à revisão jurídica antes de sua vigência comercial formal.
          </div>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-ink">1. Aceite e Escopo</h2>
            <p>
              Ao utilizar os sites e demonstrações de produtos operados pela Vision Solutions, o usuário concorda com os termos aqui dispostos, que regulam o acesso e a utilização dos serviços e recursos apresentados.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-ink">2. Propriedade Intelectual e Autoria</h2>
            <p>
              Todo o código-fonte, arquitetura, design visual, marcas e conteúdos publicados pertencem com exclusividade à Vision Solutions ou aos seus respectivos licenciantes, sendo vedada a reprodução ou engenharia reversa sem autorização expressa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-ink">3. Níveis de Serviço e Demonstrações</h2>
            <p>
              Os ambientes de demonstração disponíveis no site são destinados exclusivamente para avaliação de interface e capacidade técnica, sem garantias de persistência de dados em contas de teste.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
