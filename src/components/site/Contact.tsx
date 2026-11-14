import { ArrowUpRight, CalendarHeart, Clock, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

function ContactCard({
  icon,
  label,
  value,
  href,
  pending,
  delay,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string | undefined;
  pending?: boolean | undefined;
  delay: number;
}) {
  const content = (
    <>
      <div className="flex items-center justify-between text-gold">
        {icon}
        {href && (
          <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </div>
      <p className="mt-10 text-[0.65rem] uppercase tracking-[0.28em] text-cream-muted">{label}</p>
      <p
        className={
          pending
            ? "mt-2 font-display text-xl italic text-cream-muted"
            : "mt-2 font-display text-xl text-cream"
        }
      >
        {value}
      </p>
    </>
  );
  return (
    <Reveal as="li" delay={delay} className="h-full">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full border border-border p-7 transition-colors duration-500 hover:border-gold/60 hover:bg-wine"
        >
          {content}
        </a>
      ) : (
        <div className="h-full border border-dashed border-border p-7">{content}</div>
      )}
    </Reveal>
  );
}

export function Contact() {
  return (
    <section id="contato" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-5 max-w-xl text-4xl leading-[1.05] text-cream sm:text-5xl">
            Vamos conversar <em className="text-blush">sobre suas unhas?</em>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            delay={0}
            icon={<InstagramIcon className="size-6" />}
            label="Instagram"
            value={siteConfig.instagramHandle}
            href={siteConfig.instagramUrl}
          />
          <ContactCard
            delay={90}
            icon={<CalendarHeart className="size-6" strokeWidth={1.3} />}
            label="Agendamento"
            value="Agendar horário"
            href={getBookingUrl()}
          />
          <ContactCard
            delay={180}
            icon={<MapPin className="size-6" strokeWidth={1.3} />}
            label="Endereço"
            value={siteConfig.address || "Em breve"}
            href={siteConfig.mapUrl || undefined}
            pending={!siteConfig.address}
          />
          <ContactCard
            delay={270}
            icon={<Clock className="size-6" strokeWidth={1.3} />}
            label="Atendimento"
            value={siteConfig.openingHours || "Horários a confirmar"}
            pending={!siteConfig.openingHours}
          />
        </ul>
      </div>
    </section>
  );
}
