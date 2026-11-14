import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero, Marquee } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileBookingBar } from "@/components/site/MobileBookingBar";

const title = "Marcela Nail Designer — Unhas em gel, manutenção e cuticulagem";
const description =
  "Suas mãos. Sua assinatura. Aplicação de unha em gel, manutenção, banho em gel e cuticulagem com acabamento impecável. Agende seu horário.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Booking />
        <Contact />
      </main>
      <SiteFooter />
      <MobileBookingBar />
    </>
  );
}
