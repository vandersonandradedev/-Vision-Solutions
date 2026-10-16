export type ProductStatus = "Em Produção" | "Em Desenvolvimento";

export interface SaasProduct {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  description: string;
  image: string;
  stack: string[];
  /** Módulos reais do sistema */
  modules: string[];
  accentColor: string;
}

export const saasProducts: SaasProduct[] = [
  {
    slug: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    status: "Em Produção",
    description:
      "Sistema de gestão completo para oficinas mecânicas e centros automotivos. Ordens de serviço em tempo real, controle minucioso de estoque de peças e app desktop para operação ininterrupta no balcão.",
    image: "/images/torqueos-preview.jpg",
    stack: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Electron"],
    modules: ["Ordens de Serviço", "Estoque de Peças", "Financeiro & DRE", "App Balcão"],
    accentColor: "text-blue-400",
  },
  {
    slug: "barbercrm",
    name: "BarberCRM",
    category: "CRM para Barbearias",
    status: "Em Produção",
    description:
      "CRM vertical com agendamento online 24/7, programa de fidelidade com pontos e cashback, notificações automáticas no WhatsApp via Evolution API e gestão financeira por profissional.",
    image: "/images/barbercrm-preview.jpg",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Evolution API"],
    modules: ["Agendamento Online", "Fidelidade VIP", "Notificações WhatsApp", "Comissões"],
    accentColor: "text-amber-400",
  },
  {
    slug: "retail-os",
    name: "Retail-OS",
    category: "ERP para Varejo e Comércio",
    status: "Em Produção",
    description:
      "Plataforma de gestão comercial com PDV ultrarrápido (web e app mobile), controle avançado de grade e lotes (FEFO), sincronização de filiais e faturamento fiscal integrado.",
    image: "/images/retailos-preview.jpg",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "BullMQ"],
    modules: ["Ponto de Venda (PDV & Mobile)", "Controle de Grade (FEFO)", "Estoque Central", "Faturamento Fiscal"],
    accentColor: "text-amber-400",
  },
  {
    slug: "mesago",
    name: "MesaGo",
    category: "Gestão para Restaurantes & Gastronomia",
    status: "Em Produção",
    description:
      "Plataforma operacional para restaurantes, bares e dark kitchens. Mapa interativo de reservas de mesa em tempo real, controle de insumos críticos e orquestração de entregas delivery.",
    image: "/images/mesago-preview.jpg",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Redis", "BullMQ"],
    modules: ["Reservas de Mesa", "Inventário em Tempo Real", "Análise de Entregas", "Painel Operacional"],
    accentColor: "text-emerald-400",
  },
];
