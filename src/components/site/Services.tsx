import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { servicePrices } from "@/config/site";
import { getBookingUrl, serviceMessage } from "@/lib/booking";
import { CuticleIcon, GelBathIcon, GelIcon, MaintenanceIcon } from "./icons";
import { Reveal } from "./Reveal";

type Service = {
  id: keyof typeof servicePrices;
  name: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    id: "aplicacao-gel",
    name: "Aplicação de unha em gel",
    description:
      "Alongamento em gel com formato desenhado para as suas mãos, leveza e brilho duradouro.",
    Icon: GelIcon,
  },
  {
    id: "manutencao",
    name: "Manutenção",
    description:
      "Reequilíbrio da estrutura e renovação do acabamento para manter as unhas sempre impecáveis.",
    Icon: MaintenanceIcon,
  },
  {
    id: "banho-gel",
    name: "Banho em gel",
    description:
      "Camada de gel sobre a unha natural, que fortalece e deixa um acabamento uniforme e elegante.",
    Icon: GelBathIcon,
  },
  {
    id: "cuticulagem",
    name: "Cuticulagem",
    description:
      "Remoção cuidadosa das cutículas para uma base limpa, delicada e com aspecto bem cuidado.",
    Icon: CuticleIcon,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
              Beleza feita <em className="text-gradient-rose">sob medida.</em>
            </h2>
          </div>
          <p className="max-w-sm text-cream-muted">
            Escolha o procedimento e consulte horários e valores diretamente com a Marcela.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, name, description, Icon }, i) => {
            const price = servicePrices[id];
            return (
              <Reveal
                as="li"
                key={id}
                delay={i * 90}
                className="group relative flex flex-col bg-ink p-8 transition-colors duration-700 ease-lux hover:bg-wine md:p-10"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-14 text-blush transition-all duration-700 ease-lux group-hover:-translate-y-1 group-hover:text-gold" />
                  <span className="font-display text-sm italic text-gold">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl leading-tight text-cream">{name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-muted">
                  {description}
                </p>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cream-muted">
                    Valor
                  </p>
                  <p className="mt-1 font-display text-lg text-cream">{price || "Sob consulta"}</p>
                </div>
                <a
                  href={getBookingUrl(undefined, serviceMessage(name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-gold transition-colors hover:text-blush"
                  aria-label={`Consultar ou agendar ${name}`}
                >
                  Consultar e agendar
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-gold transition-transform duration-700 ease-lux group-hover:scale-x-100"
                />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
