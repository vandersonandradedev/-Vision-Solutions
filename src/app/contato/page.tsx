import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Vision Solutions sobre o sistema que sua operação precisa.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-white">
      <PageHeader
        eyebrow="Contato Direto"
        title="Construir um sistema para sua operação."
        description="Conte sobre o processo que hoje não cabe em planilhas ou softwares de prateleira. Você fala diretamente com arquitetos de software, sem intermediários comerciais."
      />

      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Channel Cards & Assurances */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Box */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#14171F] p-6 sm:p-7 space-y-5 shadow-lg">
              <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-white/90">
                Canais de Atendimento
              </h3>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0D1017] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-white/40 font-medium">E-mail corporativo</div>
                      <div className="text-[13px] text-white/90 font-medium truncate group-hover:text-white">
                        {contact.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>

                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0D1017] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-white/40 font-medium">WhatsApp comercial</div>
                      <div className="text-[13px] text-white/90 font-medium truncate group-hover:text-emerald-300">
                        Conversar via WhatsApp
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-emerald-300 transition-colors shrink-0 ml-2" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D1017] border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white/50" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/40 font-medium">Sede e Operação</div>
                    <div className="text-[13px] text-white/80">{contact.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response SLA Assurance */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#14171F] p-6 space-y-4 shadow-lg">
              <div className="flex items-center gap-2.5 text-[13px] font-semibold text-white/90">
                <Clock className="w-4 h-4 text-primary" />
                Compromisso de Resposta
              </div>
              <p className="text-[13px] text-white/55 leading-relaxed">
                Analisamos cada solicitação sob a ótica de engenharia. Apresentamos viabilidade técnica, proposta de arquitetura de dados e cronograma estimado.
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-[12px] text-white/40">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Acordo de Confidencialidade (NDA) disponível sob demanda.
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
