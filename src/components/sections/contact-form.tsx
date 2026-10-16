"use client";

import { useState, type FormEvent } from "react";
import { Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { contact } from "@/data/contact";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Construir um sistema — ${company || name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmpresa: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#14171F] p-6 sm:p-8 shadow-xl">
      <div className="mb-6 pb-6 border-b border-white/[0.06]">
        <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-white">
          Inicie uma conversa técnica
        </h2>
        <p className="mt-1 text-[13px] text-white/50">
          Receba uma análise preliminar de viabilidade e arquitetura em até 24 horas úteis.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-[12px] font-medium text-white/70">
            Seu nome <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            required
            placeholder="Como podemos te chamar?"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/[0.08] bg-[#0D1017] px-4 py-3 text-[16px] sm:text-[14px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus-visible:border-primary/80 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-[12px] font-medium text-white/70">
            Empresa ou operação
          </label>
          <input
            id="company"
            placeholder="Nome da sua empresa ou projeto"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/[0.08] bg-[#0D1017] px-4 py-3 text-[16px] sm:text-[14px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus-visible:border-primary/80 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[12px] font-medium text-white/70">
            Conte sobre o processo que você quer transformar em sistema <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Descreva o fluxo atual, gargalos com planilhas ou softwares genéricos, e o que a operação precisa..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-2 w-full resize-none rounded-lg border border-white/[0.08] bg-[#0D1017] px-4 py-3 text-[16px] sm:text-[14px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus-visible:border-primary/80 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            type="submit"
            className="group flex sm:inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-[13.5px] font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
          >
            <span>Enviar mensagem direta</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5">
              <Send className="h-3 w-3 text-white" />
            </span>
          </button>

          <span className="text-[11px] text-white/40 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Sem intermediários comerciais
          </span>
        </div>
      </form>
    </div>
  );
}
