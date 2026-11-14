import type { SVGProps } from "react";

/** Ícones de traço fino, desenhados para a identidade da marca. */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth={1.5} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth={1.5} {...props}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1-2z" />
    </svg>
  );
}

/** Aplicação em gel — unha alongada com brilho */
export function GelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M17 42V20c0-8 3-14 7-14s7 6 7 14v22" />
      <path d="M17 30h14" />
      <path d="M22 13c.6-2 1.4-3 2-3" />
      <path d="M37 9l1 2.2 2.2 1-2.2 1L37 15.4l-1-2.2-2.2-1 2.2-1z" />
    </svg>
  );
}

/** Manutenção — lixa e ciclo */
export function MaintenanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <rect x="20" y="6" width="8" height="36" rx="4" transform="rotate(35 24 24)" />
      <path d="M9 30a15 15 0 0 0 9 9" />
      <path d="M39 18a15 15 0 0 0-9-9" />
      <path d="M30 6.5L30 9.2 27.3 9.4" />
      <path d="M18 41.5L18 38.8 20.7 38.6" />
    </svg>
  );
}

/** Banho em gel — gota sobre unha */
export function GelBathIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M16 42V26c0-6 3.5-10 8-10s8 4 8 10v16" />
      <path d="M24 4c2.8 3.6 4.2 6.2 4.2 8a4.2 4.2 0 0 1-8.4 0c0-1.8 1.4-4.4 4.2-8z" />
      <path d="M19 32c3 1.4 7 1.4 10 0" />
    </svg>
  );
}

/** Cuticulagem — alicate delicado */
export function CuticleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M20 6l4 14 4-14" />
      <circle cx="24" cy="22" r="1.6" />
      <path d="M22.5 23.5C16 28 12 34 12 40" />
      <path d="M25.5 23.5C32 28 36 34 36 40" />
      <path d="M12 40c0 1.6 1.4 2 2.4 1" />
      <path d="M36 40c0 1.6-1.4 2-2.4 1" />
    </svg>
  );
}

/** Ornamento — losango com linhas */
export function Ornament(props: IconProps) {
  return (
    <svg viewBox="0 0 120 12" aria-hidden="true" {...base} {...props}>
      <path d="M0 6h50" />
      <path d="M70 6h50" />
      <path d="M60 1l5 5-5 5-5-5z" />
    </svg>
  );
}
