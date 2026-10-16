"use client";

import { motion } from "framer-motion";

const FRONTS = [
  {
    label: "Produtos Próprios",
    title: "Multi-SaaS ecosystem",
    items: ["TorqueOS", "BarberCRM", "Retail-OS", "MesaGo"],
  },
  {
    label: "Engenharia Sob Demanda",
    title: "Sistemas sob medida",
    items: ["ERPs & Backoffices", "APIs & Integrations", "Queues & Automation"],
  },
];

export function TwoFrontsSection() {
  return (
    <section className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          Duas frentes
        </span>
        <h2 className="mt-3 max-w-lg text-display-2 font-semibold text-ink">
          Duas frentes. Uma única disciplina de engenharia.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FRONTS.map((front, index) => (
            <motion.div
              key={front.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-md border border-line-strong bg-surface p-6"
            >
              <span className="font-technical text-micro uppercase tracking-wide text-primary-soft">
                {front.label}
              </span>
              <p className="mt-2 text-[15px] text-ink-dim">{front.title}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {front.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-ink">
                    <span className="h-1 w-1 rounded-full bg-ink-faint" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
