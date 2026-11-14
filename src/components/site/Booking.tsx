import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getBookingUrl, hasWhatsapp } from "@/lib/booking";
import { InstagramIcon, Ornament, WhatsappIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Booking() {
  const whatsapp = hasWhatsapp();
  return (
    <section
      id="agendamento"
      className="grain relative overflow-hidden bg-gradient-night py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/15"
      />

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow">Agendamento</p>
        <h2 className="mt-6 text-5xl leading-[1] text-cream sm:text-6xl lg:text-7xl">
          Pronta para deixar <em className="text-gradient-rose">sua marca?</em>
        </h2>
        <Ornament className="mx-auto mt-8 w-28 text-gold" />
        <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-cream-muted">
          Envie uma mensagem para a Marcela e descubra os horários disponíveis. Será um prazer
          cuidar de você.
        </p>
        <div className="mt-12 flex flex-col items-center gap-5">
          <Button asChild variant="lux" size="xl" className="h-16 px-12">
            <a href={getBookingUrl()} target="_blank" rel="noopener noreferrer">
              {whatsapp ? (
                <WhatsappIcon className="size-5" />
              ) : (
                <InstagramIcon className="size-5" />
              )}
              {whatsapp ? "Agendar pelo WhatsApp" : "Agendar pelo Instagram"}
            </a>
          </Button>
          <p className="text-xs text-cream-muted">
            {whatsapp
              ? "A conversa abre com uma mensagem pronta."
              : `Fale direto pelo direct: ${siteConfig.instagramHandle}`}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
