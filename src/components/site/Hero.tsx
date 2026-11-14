import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBookingUrl } from "@/lib/booking";
import heroImg from "@/assets/hero-nails.jpg";

export function Hero() {
  return (
    <section id="inicio" className="grain relative overflow-hidden bg-gradient-night">
      {/* linhas decorativas */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute right-[38%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent lg:block" />
        <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-rose/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-5 pb-16 pt-32 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow animate-rise">Nail Designer · Atendimento exclusivo</p>
          <h1 className="mt-6 text-[3.4rem] leading-[0.95] text-cream sm:text-7xl lg:text-[5.6rem]">
            <span className="block animate-rise [animation-delay:120ms]">Suas mãos.</span>
            <span className="block animate-rise italic text-gradient-rose [animation-delay:260ms]">
              Sua assinatura.
            </span>
          </h1>
          <p className="mt-8 max-w-md animate-rise text-base leading-relaxed text-cream-muted [animation-delay:420ms] md:text-lg">
            Unhas que traduzem seu estilo. Acabamento impecável, cuidado em cada etapa e beleza que
            chama atenção pelos detalhes.
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-4 [animation-delay:560ms] sm:flex-row sm:items-center sm:gap-8">
            <Button asChild variant="lux" size="xl">
              <a href={getBookingUrl()} target="_blank" rel="noopener noreferrer">
                Quero agendar
              </a>
            </Button>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-cream transition-colors hover:text-gold"
            >
              Explorar portfólio
              <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        {/* composição de imagem */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-6 lg:col-start-8 lg:max-w-none xl:col-span-5 xl:col-start-8">
          <div
            aria-hidden
            className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-full border border-gold/40"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full shadow-soft">
            <img
              src={heroImg}
              alt="Mão com unhas amendoadas em gel nude com detalhes em linha dourada"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="size-full animate-slow-zoom object-cover"
            />
            <div className="absolute inset-0 bg-fade-ink opacity-40" />
          </div>

          {/* selo giratório */}
          <div className="absolute -left-4 bottom-10 size-28 rounded-full bg-ink/90 p-1 backdrop-blur sm:-left-10 sm:size-32">
            <svg
              viewBox="0 0 100 100"
              className="size-full animate-spin-slow text-gold"
              aria-hidden
            >
              <defs>
                <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-current text-[9.5px] uppercase tracking-[0.3em]">
                <textPath href="#circle">Marcela · Nail Designer · Exclusiva ·</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-3xl italic text-blush">
              M
            </span>
          </div>

          <p className="absolute -bottom-8 right-0 text-[0.6rem] uppercase tracking-[0.3em] text-cream-muted">
            Imagem ilustrativa
          </p>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Aplicação em gel",
    "Manutenção",
    "Banho em gel",
    "Cuticulagem",
    "Acabamento impecável",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-wine py-5" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center font-display text-2xl italic text-blush/80 md:text-3xl"
              >
                <span className="px-8">{t}</span>
                <span className="text-sm not-italic text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
