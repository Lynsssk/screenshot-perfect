import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { portfolio } from "./portfolio-data";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);
  const hasIllustrative = portfolio.some((p) => p.illustrative);

  return (
    <section id="portfolio" className="relative bg-wine py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
              Cada mão, <em className="text-gradient-gold">uma obra.</em>
            </h2>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-cream transition-colors hover:text-gold"
          >
            <InstagramIcon className="size-4" /> Ver mais no Instagram
          </a>
        </Reveal>

        <ul className="mt-14 grid grid-flow-dense auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] md:gap-4 lg:auto-rows-[17rem] lg:grid-cols-12">
          {portfolio.map((item, i) => (
            <Reveal
              as="li"
              key={item.src}
              delay={(i % 3) * 90}
              className={cn("group relative overflow-hidden", item.layout)}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block size-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`Ampliar imagem: ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-fade-ink opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-6">
                  <span className="text-left font-display text-lg italic text-cream md:text-2xl">
                    {item.title}
                  </span>
                  <Expand className="size-4 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        {hasIllustrative && (
          <p className="mt-8 text-center text-xs text-cream-muted">
            Imagens ilustrativas para demonstração. Esta galeria receberá as fotografias originais
            dos trabalhos da Marcela.
          </p>
        )}
      </div>

      {active !== null && (
        <Lightbox index={active} onChange={setActive} onClose={() => setActive(null)} />
      )}
    </section>
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const item = portfolio[index] ?? portfolio[0]!;
  const total = portfolio.length;
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem ampliada: ${item.title}`}
      className="fixed inset-0 z-[60] flex animate-in fade-in items-center justify-center bg-ink/95 backdrop-blur-sm duration-300"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold/10 md:right-8 md:top-8"
        aria-label="Fechar"
      >
        <X className="size-5" />
      </button>

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="max-h-[78svh] w-auto animate-in fade-in zoom-in-95 object-contain shadow-soft duration-500"
        />
        <figcaption className="mt-5 flex items-center gap-4 text-cream">
          <span className="font-display text-xl italic">{item.title}</span>
          <span className="text-xs tracking-widest text-gold">
            {index + 1} / {total}
          </span>
        </figcaption>
        {item.illustrative && (
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-cream-muted">
            Imagem ilustrativa
          </p>
        )}
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold/10 md:left-8"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold/10 md:right-8"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
