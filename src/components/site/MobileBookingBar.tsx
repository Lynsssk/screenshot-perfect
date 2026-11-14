import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getBookingUrl } from "@/lib/booking";
import { cn } from "@/lib/utils";

/** Botão fixo de agendamento no celular, aparece após a primeira dobra. */
export function MobileBookingBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-500 ease-lux md:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <Button asChild variant="lux" size="xl" className="w-full">
        <a href={getBookingUrl()} target="_blank" rel="noopener noreferrer">
          Quero agendar
        </a>
      </Button>
    </div>
  );
}
