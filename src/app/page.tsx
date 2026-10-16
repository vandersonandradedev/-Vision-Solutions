"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { HeroWord } from "@/components/motion/HeroWord";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    badge: "ERP",
    color: "blue" as const,
    tagline: "Gestão completa para oficinas e centros automotivos.",
    description:
      "Multi-empresa, com Ordens de Serviço, controle de estoque de peças, financeiro integrado e app desktop Electron para uso sem navegador nos balcões.",
    stack: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Electron"],
    image: undefined as string | undefined,
    metrics: [
      { label: "Módulos", value: "OS & Estoque", delta: "Core" },
      { label: "Aplicação", value: "Web & Desktop", delta: "Electron" },
      { label: "Arquitetura", value: "Multi-empresa", delta: "NestJS" },
    ],
    tableHeaders: ["Módulo", "Operação", "Recurso", "Status", "Tipo"],
    tableRows: [
      { id: "OS-01", col2: "Ordens de Serviço", col3: "Abertura e fluxo de oficina", status: "Em andamento", statusColor: "blue" as const, col5: "Core" },
      { id: "EST-02", col2: "Estoque de Peças", col3: "Alerta de reposição mínima", status: "Integrado", statusColor: "emerald" as const, col5: "Estoque" },
      { id: "FIN-03", col2: "Financeiro", col3: "Recebimentos por OS", status: "Conciliado", statusColor: "emerald" as const, col5: "Fiscal" },
      { id: "DSK-04", col2: "App Balcão", col3: "Operação local contínua", status: "Produção", statusColor: "blue" as const, col5: "Electron" },
    ],
    features: [
      "Ordens de Serviço com status em tempo real",
      "Estoque de peças com alerta de reposição mínima",
      "Financeiro: recebimentos e despesas vinculados à OS",
      "App desktop Electron para operação de balcão",
      "Relatórios operacionais: faturamento, técnicos e tempo de OS",
    ],
  },
  {
    id: "barbercrm",
    name: "BarberCRM",
    category: "CRM para Barbearias",
    badge: "CRM",
    color: "amber" as const,
    tagline: "Agendamento online, fidelidade com pontos e notificações automáticas.",
    description:
      "Solução completa para gestão de barbearias e estética masculina. Inclui agenda pública por profissional, programa de fidelidade VIP, disparo WhatsApp via Evolution API e relatórios financeiros.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Evolution API", "Redis"],
    image: "/images/barbercrm-preview.jpg",
    metrics: [
      { label: "Agendamentos", value: "Online 24/7", delta: "Multi-barbeiro" },
      { label: "Fidelidade", value: "Cashback & Pontos", delta: "VIP" },
      { label: "Notificações", value: "WhatsApp API", delta: "Evolution" },
    ],
    tableHeaders: ["Horário", "Cliente", "Profissional", "Serviço", "Status"],
    tableRows: [
      { id: "14:00", col2: "Rodrigo Silva", col3: "Marcos Lima", status: "Corte & Barba", statusColor: "amber" as const, col5: "Confirmado" },
      { id: "14:45", col2: "Lucas Santos", col3: "Gabriel Dias", status: "Corte Degradê", statusColor: "blue" as const, col5: "Em atendimento" },
      { id: "15:30", col2: "Felipe Andrade", col3: "Marcos Lima", status: "Barboterapia", statusColor: "emerald" as const, col5: "Finalizado" },
      { id: "16:15", col2: "Thiago Rocha", col3: "Gabriel Dias", status: "Plano Mensal", statusColor: "amber" as const, col5: "Confirmado" },
    ],
    features: [
      "Agendamento online por profissional e serviço",
      "Disparo automático de lembretes e confirmações no WhatsApp",
      "Programa de fidelidade e pontos por frequência",
      "Gestão de comissões por barbeiro em tempo real",
      "Controle financeiro de caixa, comandas e faturamento",
    ],
  },
  {
    id: "retail-os",
    name: "Retail-OS",
    category: "ERP para Varejo e Comércio",
    badge: "ERP",
    color: "emerald" as const,
    tagline: "Ponto de Venda ágil, controle de grade e gestão multi-loja.",
    description:
      "Plataforma de gestão comercial desenhada para redes varejistas e lojas com alta rotatividade de inventário. Sincronização centralizada de estoque, emissão fiscal e frente de caixa veloz.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    image: undefined as string | undefined,
    metrics: [
      { label: "Frente de Caixa", value: "PDV Ágil", delta: "Online/Offline" },
      { label: "Inventário", value: "Grade & SKU", delta: "Sincronizado" },
      { label: "Operação", value: "Multi-loja", delta: "Centralizado" },
    ],
    tableHeaders: ["Código", "Item / Produto", "Variação", "Estoque", "Status"],
    tableRows: [
      { id: "SKU-902", col2: "Camiseta Dry Tech", col3: "Tam: G / Preto", status: "142 un", statusColor: "emerald" as const, col5: "Normal" },
      { id: "SKU-903", col2: "Camiseta Dry Tech", col3: "Tam: M / Branco", status: "12 un", statusColor: "amber" as const, col5: "Alerta Mín." },
      { id: "SKU-814", col2: "Bermuda Compression", col3: "Tam: 42 / Grafite", status: "88 un", statusColor: "emerald" as const, col5: "Normal" },
      { id: "SKU-770", col2: "Meia Performance", col3: "Tam: Único / Azul", status: "320 un", statusColor: "blue" as const, col5: "Estoque Alto" },
    ],
    features: [
      "PDV ultrarrápido para operação de balcão e checkout",
      "Controle minucioso de grade (cor, tamanho e lote)",
      "Gestão de estoque central e transferências entre filiais",
      "Emissão fiscal simplificada integrada ao fluxo de vendas",
      "DRE gerencial e métricas de ticket médio em tempo real",
    ],
  },
  {
    id: "mesago",
    name: "MesaGo",
    category: "Gestão para Restaurantes & Gastronomia",
    badge: "FOODTECH",
    color: "emerald" as const,
    tagline: "Reservas de mesas, controle de inventário e gestão de entregas.",
    description:
      "Plataforma operacional para restaurantes, bares e gastronomia. Gestão em tempo real de reservas de mesas com mapa interativo, controle de insumos e estoque crítico, e orquestração de pedidos delivery.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Redis", "BullMQ"],
    image: "/images/mesago-preview.jpg",
    metrics: [
      { label: "Operação", value: "Mesas & Salão", delta: "Interativo" },
      { label: "Inventário", value: "Insumos Críticos", delta: "Tempo Real" },
      { label: "Delivery", value: "Entregas & Rotas", delta: "Rastreio" },
    ],
    tableHeaders: ["Mesa / Item", "Cliente / Insumo", "Horário / Qtd", "Status", "Tipo"],
    tableRows: [
      { id: "Mesa 04", col2: "Reserva VIP (4 pessoas)", col3: "Hoje às 20:30h", status: "Confirmada", statusColor: "emerald" as const, col5: "Salão" },
      { id: "Mesa 02", col2: "Reserva Casal", col3: "Hoje às 21:00h", status: "Em andamento", statusColor: "blue" as const, col5: "Salão" },
      { id: "INS-108", col2: "Carne Moída Prime", col3: "Estoque: 4.2 kg", status: "Alerta Baixo", statusColor: "amber" as const, col5: "Inventário" },
      { id: "DEL-841", col2: "Pedido Delivery Express", col3: "Saída há 8 min", status: "Em rota", statusColor: "emerald" as const, col5: "Entrega" },
    ],
    features: [
      "Mapa interativo de mesas com status de ocupação em tempo real",
      "Controle de insumos e fichas técnicas com alerta de reposição",
      "Central de pedidos e integração direta de delivery",
      "Agendamento e confirmação automática de reservas",
      "Relatórios operacionais de faturamento, giro de mesa e consumo",
    ],
  },
] as const;

type Product = (typeof PRODUCTS)[number];

const STATUS_COLORS: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/15 border-blue-500/30",
  amber: "text-amber-400 bg-amber-500/15 border-amber-500/30",
  emerald: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
  violet: "text-violet-400 bg-violet-500/15 border-violet-500/30",
};

const ECOSYSTEM = [
  {
    id: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    desc: "Multi-empresa com Ordens de Serviço, controle de estoque de peças, financeiro integrado e app desktop Electron para uso sem navegador nos balcões.",
    stack: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Electron"],
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10 border-blue-500/20",
    image: undefined as string | undefined,
  },
  {
    id: "barbercrm",
    name: "BarberCRM",
    category: "CRM para Barbearias",
    desc: "CRM completo com agendamento online 24/7, fidelidade com pontos, notificações automáticas no WhatsApp via Evolution API e gestão financeira.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Evolution API"],
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10 border-amber-500/20",
    image: "/images/barbercrm-preview.jpg",
  },
  {
    id: "retail-os",
    name: "Retail-OS",
    category: "ERP para Varejo e Comércio",
    desc: "Ponto de Venda (PDV) ágil, controle de grade avançado (tamanho/cor/lote), gestão central de estoque multi-loja e faturamento integrado.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "BullMQ"],
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20",
    image: undefined as string | undefined,
  },
  {
    id: "mesago",
    name: "MesaGo",
    category: "Gestão para Restaurantes & Gastronomia",
    desc: "Gestão completa para gastronomia: mapa interativo de reservas de mesa, controle de insumos em tempo real e monitoramento de entregas delivery.",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Redis", "BullMQ"],
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20",
    image: "/images/mesago-preview.jpg",
  },
];

const ARCHITECTURE = [
  { layer: "Frontend", detail: "Next.js 15 · React 19 · TypeScript strict · Tailwind CSS", badge: "Client" },
  { layer: "API Gateway", detail: "Fastify / NestJS · Zod validation · JWT + Refresh HTTPOnly · RBAC", badge: "Server" },
  { layer: "Queue Engine", detail: "BullMQ + Redis · filas concorrentes · retry · DLQ · workers isolados", badge: "Workers" },
  { layer: "Banco de Dados", detail: "PostgreSQL 16 · Prisma ORM · migrations versionadas · seeds", badge: "Data" },
  { layer: "Multi-Tenancy", detail: "Isolamento por tenant (schema / RLS) · sem vazamento de dados", badge: "Security" },
  { layer: "Deploy", detail: "Vercel (frontend) · Render / Railway (API) · Docker Compose (local)", badge: "Infra" },
];

const PRINCIPLES = [
  { label: "Código 100% autoral", desc: "Cada linha tem intenção e propriedade. Sem boilerplates genéricos." },
  { label: "TypeScript estrito end-to-end", desc: "Do schema do banco ao componente React — tipagem em toda a stack." },
  { label: "Multi-tenant com isolamento real", desc: "Cada cliente opera em ambiente com garantias de segurança." },
  { label: "Infraestrutura resiliente", desc: "Arquitetura distribuída com monitoramento, cache Redis e workers assíncronos." },
];

/* ─────────────────────────────────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────────────────────────────────── */

function ProductPanel({ product }: { product: Product }) {
  return (
    <div className="rounded-xl bg-[#161C2B] border border-white/[0.1] overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#1A2234]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] text-white/50 font-mono">{product.name} — Demonstração Ativa</span>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          online
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.08] border-b border-white/[0.08] bg-[#131826]">
        {product.metrics.map((m) => (
          <div key={m.label} className="px-4 py-3">
            <div className="text-[10px] text-white/45 font-mono uppercase tracking-wider">{m.label}</div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-[15px] font-bold text-white font-mono tracking-tight">{m.value}</span>
              <span className="text-[10px] text-emerald-400 font-mono font-medium">{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content: Image or Table */}
      {product.image ? (
        <div className="relative aspect-[16/9] w-full bg-[#0F131E] overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={`${product.name} Preview`}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      ) : (
        /* Table */
        <div className="overflow-x-auto bg-[#161C2B]">
          <table className="w-full text-[11px] font-mono">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#131826]/50">
                {product.tableHeaders.map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-[10px] text-white/40 uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {product.tableRows.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.04] transition-colors duration-200">
                  <td className="px-4 py-2.5 text-white/50">{row.id}</td>
                  <td className="px-4 py-2.5 text-white/90 font-medium">{row.col2}</td>
                  <td className="px-4 py-2.5 text-white/55">{row.col3}</td>
                  <td className="px-4 py-2.5">
                    <span className={`px-2 py-0.5 rounded border text-[10px] ${STATUS_COLORS[row.statusColor] ?? ""}`}>{row.status}</span>
                  </td>
                  <td className="px-4 py-2.5 text-white/70">{row.col5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ProductShowcase({
  product,
  reverse = false,
  accentColor,
  accentInitial,
}: {
  product: Product;
  reverse?: boolean;
  accentColor: string;
  accentInitial: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className={`lg:col-span-5 space-y-5 ${reverse ? "lg:order-2" : ""}`}>
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${accentColor.replace("text-", "bg-").replace("400", "500/15")} border ${accentColor.replace("text-", "border-").replace("400", "500/30")} flex items-center justify-center`}>
              <span className={`${accentColor} font-black font-mono text-xs`}>{accentInitial}</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-white tracking-[-0.02em]">{product.name}</h3>
              <span className={`text-[11px] ${accentColor} font-mono font-medium`}>{product.category}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[14px] text-white/60 leading-relaxed">{product.description}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-1.5">
            {product.stack.map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded text-[10px] font-mono text-white/50 bg-white/[0.05] border border-white/[0.09]">{t}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="pt-2 space-y-2 border-t border-white/[0.08]">
            {product.features.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-[13px] text-white/60">
                <span className={`w-1.5 h-1.5 rounded-full ${accentColor.replace("text-", "bg-").replace("400", "400/80")} shrink-0 mt-1.5`} />
                {f}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`} delay={0.2} direction="up" distance={32}>
        <ProductPanel product={product} />
      </FadeIn>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const currentProduct = PRODUCTS[activeProduct] ?? PRODUCTS[0]!;

  return (
    <div className="min-h-screen bg-[#08090D] text-white selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — Experience
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-20 sm:pt-28 pb-20 px-6">
        {/* Architectural grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Identity gradient — directional light */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[450px] h-[280px] bg-gradient-to-bl from-violet/[0.05] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          {/* Upper Hero Grid: Text Left, Floating Sphere Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-medium">
                  <span className="w-5 h-px bg-primary/60" />
                  Software House &amp; SaaS Studio
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/50">
                  Arquitetura Autoral
                </span>
              </motion.div>

              {/* Headline — word reveal */}
              <div>
                <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                  <HeroWord text="Construímos software para operações" delay={0.2} />
                  <br />
                  <span className="text-white/50">
                    <HeroWord text="que já superaram planilhas." delay={0.5} />
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-[15px] text-white/60 leading-relaxed max-w-2xl"
              >
                Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada — do prontuário odontológico à ordem de serviço automotiva.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <Link
                  href="/produtos"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dim text-white text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-sm"
                >
                  Ver nossos produtos
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="/contato"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.12] text-white/80 text-[13px] font-medium hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                >
                  Construir um sistema
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Seamless Floating Particle Sphere Visualizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative flex items-center justify-center py-4"
            >
              {/* Subtle ambient light glow behind particle sphere */}
              <div className="absolute inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-500/15 to-cyan-400/20 blur-3xl rounded-full pointer-events-none animate-pulse" />

              {/* Floating Particle Sphere Frame */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center bg-transparent">
                <motion.img
                  src="/images/hero-sphere.png"
                  alt="Neural Software Architecture Sphere"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.95,
                    y: [-8, 8, -8],
                    rotate: [0, 360],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.3 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 75, repeat: Infinity, ease: "linear" },
                  }}
                  style={{
                    maskImage: "radial-gradient(circle, black 60%, transparent 95%)",
                    WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 95%)",
                  }}
                  className="w-full h-full object-contain mix-blend-screen pointer-events-none hover:opacity-100 transition-opacity duration-500 bg-transparent"
                />
              </div>
            </motion.div>

          </div>

          {/* Product Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="space-y-4"
          >
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-[#161C2B] rounded-lg p-1 w-fit border border-white/[0.09]">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(i)}
                  className={`relative px-4 py-1.5 rounded-md text-[12px] font-medium transition-all duration-200 ${
                    activeProduct === i
                      ? "text-white font-semibold"
                      : "text-white/45 hover:text-white/75"
                  }`}
                >
                  {activeProduct === i && (
                    <motion.span
                      layoutId="product-tab"
                      className="absolute inset-0 rounded-md bg-white/[0.1]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative">
                    {p.name}
                    <span className={`ml-1.5 text-[10px] font-mono opacity-70 ${
                      p.color === "amber"
                        ? "text-amber-400"
                        : p.color === "emerald"
                        ? "text-emerald-400"
                        : "text-blue-400"
                    }`}>
                      [{p.badge}]
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Active Product Panel — AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ProductPanel product={currentProduct} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. MANIFESTO — Editorial Asymmetric
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-medium">
                  <span className="text-blue-400 font-semibold">01</span> — Nossa abordagem
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                  Software que resolve o problema real —{" "}
                  <span className="text-white/50">não o problema médio.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[14px] text-white/55 leading-relaxed">
                  Softwares genéricos são projetados para o denominador comum. Quando sua operação é complexa, específica e de alta densidade, esse denominador comum falha. Construímos para a exceção, não para a regra.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/sobre"
                  className="group inline-flex items-center gap-1.5 text-[13px] text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  Conhecer a Vision
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </FadeIn>
            </div>

            <StaggerList className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.1}>
              {PRINCIPLES.map((p) => (
                <StaggerItem key={p.label}>
                  <div className="group p-5 rounded-xl bg-[#161C2B]/80 border border-white/[0.08] space-y-2 hover:bg-[#1A2234] hover:border-white/[0.14] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-[13.5px] font-semibold text-white/90 leading-tight">{p.label}</h3>
                        <p className="text-[12px] text-white/50 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. FLAGSHIP PRODUCTS
      ═══════════════════════════════════════════════════════ */}
      <section id="produtos" className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-20">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-medium">
                  <span className="text-blue-400 font-semibold">02</span> — Produtos flagship
                </div>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  SaaS verticais com arquitetura autoral.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/produtos" className="group text-[13px] text-white/50 hover:text-white/90 transition-colors shrink-0 flex items-center gap-1.5 font-medium">
                Todos os produtos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>

          {/* TorqueOS */}
          <ProductShowcase product={PRODUCTS[0]!} accentColor="text-blue-400" accentInitial="TO" />

          <div className="border-t border-white/[0.08]" />

          {/* BarberCRM */}
          <ProductShowcase product={PRODUCTS[1]!} reverse accentColor="text-amber-400" accentInitial="BC" />

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. ECOSYSTEM
      ═══════════════════════════════════════════════════════ */}
      <section id="solucoes" className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-medium">
                  <span className="text-blue-400 font-semibold">03</span> — Ecossistema
                </div>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  Soluções integradas sob medida.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/produtos" className="group text-[13px] text-white/50 hover:text-white/90 transition-colors shrink-0 flex items-center gap-1.5 font-medium">
                Portfólio completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>

          <StaggerList className="grid grid-cols-1 lg:grid-cols-2 gap-6" stagger={0.12}>
            {ECOSYSTEM.map((p) => (
              <StaggerItem key={p.name}>
                <div className="group p-6 sm:p-7 rounded-2xl bg-[#161C2B]/90 border border-white/[0.09] hover:bg-[#1A2235] hover:border-white/[0.16] transition-all duration-500 overflow-hidden shadow-xl grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
                  
                  {/* Left Column: Text & Stack */}
                  <div className="sm:col-span-7 space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[17px] font-bold text-white tracking-[-0.01em]">{p.name}</h3>
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                      </div>
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono border ${p.accent} ${p.accentBg}`}>
                          {p.category}
                        </span>
                      </div>
                      <p className="text-[13px] text-white/60 leading-relaxed pt-1">{p.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.stack.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-white/50 bg-white/[0.05] border border-white/[0.08]">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Floating Preview Image / UI Container */}
                  <div className="sm:col-span-5 relative flex items-center justify-center">
                    <div className="relative w-full aspect-[16/10] rounded-xl bg-[#0F131E] border border-white/[0.12] shadow-2xl transform group-hover:scale-[1.03] group-hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={`${p.name} preview`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        /* Minimalist Software Preview Blueprint Frame */
                        <div className="h-full w-full p-4 flex flex-col justify-between font-mono text-[10px] bg-gradient-to-br from-[#141A29] to-[#0D111A]">
                          {/* Window Bar */}
                          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                              <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                            </div>
                            <span className="text-white/40 text-[9px] uppercase tracking-wider">{p.name}</span>
                          </div>

                          {/* Center UI Preview Blueprint */}
                          <div className="my-auto py-3 px-2 flex flex-col items-center justify-center text-center space-y-2">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:border-white/20 transition-colors">
                              <span className="text-xs font-bold font-mono text-white/80">{p.name.slice(0, 2).toUpperCase()}</span>
                            </div>
                            <div className="text-[12px] font-sans font-medium text-white/90">{p.name}</div>
                            <div className="text-[10px] text-white/40 font-mono">Interface de Operação</div>
                          </div>

                          {/* Footer Bar */}
                          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] text-white/40">
                            <span>{p.category}</span>
                            <span className="text-white/30 font-mono">software.live</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerList>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. ENGINEERING & INTERACTIVE ARCHITECTURE PIPELINE
      ═══════════════════════════════════════════════════════ */}
      <section id="engenharia" className="py-28 px-6 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-medium">
                  <span className="text-blue-400 font-semibold">04</span> — Engenharia & Arquitetura
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                  Arquitetura que sustenta{" "}
                  <span className="text-white/50">operações de missão crítica.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[14px] text-white/55 leading-relaxed">
                  Fluxo de dados previsível, tipagem estrita de ponta a ponta e processamento assíncrono isolado. Do evento no navegador ao registro relacional no PostgreSQL, cada etapa é projetada para resiliência.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/tecnologia"
                  className="group inline-flex items-center gap-1.5 text-[13px] text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  Arquitetura completa
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </FadeIn>
            </div>

            <FadeIn className="lg:col-span-7" delay={0.2} direction="up" distance={28}>
              <div className="rounded-xl bg-[#161C2B] border border-white/[0.1] overflow-hidden p-6 space-y-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-2 text-[11px] text-white/50 font-mono">data-pipeline.topology.ts</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/30 font-medium">
                    Fluxo End-to-End
                  </span>
                </div>

                {/* Interactive Flow Pipeline Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                  {[
                    { step: "01", name: "Frontend", tech: "Next.js 15", tag: "Client" },
                    { step: "02", name: "API Gateway", tech: "Fastify / Nest", tag: "REST/WS" },
                    { step: "03", name: "Queue Engine", tech: "BullMQ / Redis", tag: "Queue" },
                    { step: "04", name: "Async Worker", tech: "Isolated Jobs", tag: "Workers" },
                    { step: "05", name: "Database", tech: "PostgreSQL 16", tag: "Prisma" },
                  ].map((node) => (
                    <div
                      key={node.name}
                      className="group p-3.5 rounded-lg bg-[#111520] border border-white/[0.09] hover:bg-[#1A2234] hover:border-blue-500/40 transition-all duration-300 relative text-left"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono text-white/40">{node.step}</span>
                        <span className="text-[9px] font-mono text-blue-400 font-medium uppercase">{node.tag}</span>
                      </div>
                      <div className="text-[12px] font-semibold text-white/90 group-hover:text-white transition-colors">{node.name}</div>
                      <div className="text-[10px] text-white/50 font-mono mt-0.5">{node.tech}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Stack Layer Breakdown */}
                <StaggerList className="divide-y divide-white/[0.06] pt-2" stagger={0.05}>
                  {ARCHITECTURE.map((a, i) => (
                    <StaggerItem key={a.layer}>
                      <div className="flex items-start gap-4 py-3 hover:bg-white/[0.04] transition-colors duration-200 px-2 rounded">
                        <div className="flex items-center gap-3 shrink-0 w-28">
                          <span className="text-[11px] text-white/35 font-mono w-4 text-right">{String(i + 1).padStart(2, "0")}</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/[0.06] border border-white/[0.1] text-white/50 uppercase tracking-wider font-medium">{a.badge}</span>
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <div className="text-[13px] font-medium text-white/85">{a.layer}</div>
                          <div className="text-[12px] text-white/50 leading-relaxed">{a.detail}</div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerList>

              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative rounded-2xl bg-[#161C2B]/80 border border-white/[0.1] p-10 sm:p-16 overflow-hidden text-center shadow-xl">
              <div className="relative space-y-6 max-w-2xl mx-auto">
                <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] font-medium">
                  <span className="text-blue-400 font-semibold">05</span> — Vamos construir juntos
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  Sua operação merece um sistema{" "}
                  <span className="text-white/50">feito para ela.</span>
                </h2>
                <p className="text-[15px] text-white/55 leading-relaxed">
                  Seja um SaaS vertical ou um sistema sob medida — a Vision Solutions projeta, desenvolve e sustenta a infraestrutura da sua operação.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <Link
                    href="/contato"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-dim text-white text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-sm"
                  >
                    Falar com a Vision
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/produtos"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.06] border border-white/[0.12] text-white/75 text-[14px] font-medium hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                  >
                    Ver nossos produtos
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
