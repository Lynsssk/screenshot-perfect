import { siteConfig } from "@/config/site";
import { navLinks } from "./nav";
import { InstagramIcon } from "./icons";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-ink pb-28 pt-16 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-cream-muted">
              Unhas que traduzem seu estilo, com cuidado em cada detalhe.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-muted transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-cream transition-colors hover:text-gold"
          >
            <span className="flex size-11 items-center justify-center rounded-full border border-gold/40">
              <InstagramIcon className="size-4" />
            </span>
            {siteConfig.instagramHandle}
          </a>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-cream-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="transition-colors hover:text-gold">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
