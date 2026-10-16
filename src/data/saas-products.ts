export type ProductStatus = "Em Produção" | "Em Desenvolvimento";

export interface SaasProduct {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  /** Módulos reais do sistema */
  modules: string[];
}

export const saasProducts: SaasProduct[] = [
  {
    slug: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    status: "Em Produção",
    modules: ["Ordens de Serviço", "Estoque de Peças", "Financeiro", "App Balcão"],
  },
  {
    slug: "barbercrm",
    name: "BarberCRM",
    category: "CRM para Barbearias",
    status: "Em Produção",
    modules: ["Clientes", "Agendamento Online", "Fidelidade VIP", "Notificações WhatsApp"],
  },
  {
    slug: "retail-os",
    name: "Retail-OS",
    category: "ERP para Varejo e Comércio",
    status: "Em Desenvolvimento",
    modules: ["Ponto de Venda (PDV)", "Controle de Grade", "Estoque Central", "Faturamento"],
  },
  {
    slug: "mesago",
    name: "MesaGo",
    category: "Gestão para Restaurantes & Gastronomia",
    status: "Em Produção",
    modules: ["Reservas de Mesa", "Inventário em Tempo Real", "Análise de Entregas", "Painel Operacional"],
  },
];
