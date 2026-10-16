# Vision Solutions

Scaffold Next.js 15 + React 19 + TypeScript strict + Tailwind 3.4 + Three.js puro
+ Framer Motion, implementando a primeira fase do briefing: design system,
layout raiz, o **Vision System** 3D e o Hero completo.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Rode `npm run build` e `npm run typecheck` antes
de subir para produção — isso não foi validado neste ambiente por falta de
acesso à internet para instalar dependências.

## O que está implementado

- **Design system** (`tailwind.config.ts`, `globals.css`): paleta, tipografia,
  radius e grid exatamente como especificado no briefing (base #0B0E14,
  surface #111622, elevated #161D2B, azul #2563EB como identidade, cyan/
  emerald/purple usados com moderação).
- **Vision System 3D** (`src/components/3d/`): universo modular único —
  `SystemModule` (cada camada: Frontend, API, Business Rules, Database,
  Queues, Infrastructure), `ConnectionLine` (comunicação entre módulos, com
  packet de dados animado), `VisionSystem` (orquestra a narrativa de
  formação: fragmentado → conectando → estruturado → estável) e
  `GlobalScene` (host React SSR-safe do canvas, com resize, DPR limitado,
  parallax de mouse suavizado e dispose completo de geometries/materials/
  textures).
- **Hero** (`hero-section.tsx`): duas colunas — conteúdo à esquerda, Vision
  System à direita — com uma única sequência de entrada orquestrada via
  Framer Motion (não fade-and-slide por elemento solto).
- **Navbar/Footer**: navbar minimalista que comprime discretamente no scroll;
  footer lendo de `src/data/contact.ts`.
- **SEO base**: metadata, Open Graph, Twitter card, JSON-LD de Organization,
  `robots.ts` e `sitemap.ts`.
- **Acessibilidade/performance**: `prefers-reduced-motion` respeitado (a
  animação de formação pula direto para o estado estável), `aria-label`
  descritivo no canvas, `<noscript>` com o conteúdo essencial, foco visível
  global, sem uso de state React por frame (tudo via refs + rAF).

## Páginas internas (fase 2 — conteúdo editorial, sem 3D ainda)

- `/produtos` — lista editorial dos produtos reais (`data/saas-products.ts`).
- `/servicos` (Soluções) — ERPs/Multi-tenant/APIs/Queues + metodologia em 6 etapas.
- `/tecnologia` (Engenharia) — arquitetura em camadas com a stack técnica real.
- `/sobre` (Empresa) — posicionamento + princípios.
- `/contato` — formulário (via `mailto:`, sem backend ainda) + dados de contato.
- `/privacidade`, `/termos` — placeholders, precisam de revisão jurídica.

Todas usam o mesmo design system e tipografia do Hero. Nenhuma ainda usa o
Vision System 3D — isso é a próxima fase (showcase de produtos reorganizando
os módulos, arquitetura 3D em `/tecnologia`, scroll storytelling na home).

## Fase 3 — redesign "Dark SaaS Premium" (sem imagem de referência anexada)

A reformulação pedida citava uma imagem de referência que não chegou a ser
anexada neste ambiente. Implementei com base na descrição textual, que era
bastante específica (cores, conteúdo do painel TorqueOS, estrutura seção a
seção). Se a imagem existir, revise principalmente proporções e densidade
dos cards contra ela — isso não dá pra validar só por texto.

O que mudou:

- **Design tokens**: paleta mais escura (`#08090D`/`#111622`/`#151923`),
  roxo (`#7C3AED`/`#8B5CF6`) como acento principal em vez do azul, container
  compacto (`max-w-editorial` = 1200px em vez de 1440px).
- **Navbar**: mais baixa (h-14), links centralizados, hambúrguer mobile
  elegante com scroll-lock.
- **Footer**: colunas compactas (Produtos/Soluções/Empresa/Tecnologia/
  Contato) + WhatsApp/Instagram/Email/São Luís–MA.
- **Hero**: painel de produto real do TorqueOS
  (`components/sections/torqueos-panel.tsx` + `data/torqueos-demo.ts`) como
  visual principal à direita, com o Vision System 3D como camada de fundo
  discreta (opacity baixa, mask radial) em vez de protagonista — conforme a
  hierarquia pedida (design > conteúdo > produto > interação > 3D).
- **Novas seções na home**: Soluções (cards compactos dos produtos reais),
  Engenharia (grid de features), Complexidade → Software (3 estágios com
  visual abstrato próprio por estágio), Duas Frentes, Metodologia compacta,
  Stack técnica em formato "spec sheet", Filosofia (princípios), CTA final.
- **Páginas internas**: paddings/containers atualizados para o mesmo
  sistema compacto; ainda sem os cards/densidade específicos da referência
  visual (ver ressalva acima).

## O que falta (próximas fases, mesma profundidade)

Validar contra a imagem de referência quando ela for anexada. Reorganizar o
`VisionSystem` 3D quando um produto é selecionado no showcase. Câmera
atravessando as camadas em `/tecnologia`. Formulário de contato ligado a um
endpoint real. Nenhuma nova seção 3D deve instanciar uma cena isolada —
todas devem re-direcionar a mesma instância do `VisionSystem`.

## Dados de placeholder

`src/data/contact.ts` contém valores de exemplo claramente marcados —
substitua por email/telefone/redes reais antes de publicar. Os produtos em
`src/data/saas-products.ts` (TorqueOS, BarberCRM, Retail-OS, MesoGo) são os reais informados no briefing, sem métricas inventadas.
