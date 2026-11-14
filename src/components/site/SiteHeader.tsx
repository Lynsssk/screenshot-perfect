import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getBookingUrl } from "@/lib/booking";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav";
import { InstagramIcon } from "./icons";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={cn("group flex flex-col leading-none", className)}
      aria-label={`${siteConfig.name} — início`}
    >
      <span className="font-display text-2xl italic text-cream transition-colors group-hover:text-blush">
        Marcela
      </span>
      <span className="mt-1 text-[0.58rem] uppercase tracking-[0.42em] text-gold">
        Nail Designer
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux",
          scrolled || open ? "bg-ink/85 backdrop-blur-md border-b border-border" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Logo />

          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative text-[0.72rem] uppercase tracking-[0.24em] text-cream-muted transition-colors hover:text-cream after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="lux" className="hidden h-11 px-6 sm:inline-flex">
              <a href={getBookingUrl()} target="_blank" rel="noopener noreferrer">
                Agendar
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-cream md:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — fora do header, pois o backdrop-blur cria um novo contexto para elementos fixos */}
      <div
        id="menu-mobile"
        className={cn(
          "fixed inset-x-0 top-[4.5rem] bottom-0 z-40 bg-ink bg-gradient-night transition-all duration-500 ease-lux md:hidden",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <nav
          aria-label="Menu mobile"
          className="flex h-full flex-col justify-between px-7 pb-10 pt-12"
        >
          <ul className="space-y-2">
            {navLinks.map((l, i) => (
              <li
                key={l.href}
                className={cn(
                  "transition-all duration-700 ease-lux",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-border py-5 font-display text-4xl text-cream"
                >
                  <span className="font-sans text-xs tracking-widest text-gold">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <Button asChild variant="lux" size="xl" className="w-full">
              <a
                href={getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Quero agendar
              </a>
            </Button>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-cream-muted"
            >
              <InstagramIcon className="size-4" /> {siteConfig.instagramHandle}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
