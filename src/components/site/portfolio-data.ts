/**
 * Galeria do portfólio.
 * IMPORTANTE: as imagens atuais são ILUSTRATIVAS (demonstração).
 * Para usar fotos reais e autorizadas da Marcela, substitua `src` pela nova foto
 * e ajuste `alt`, `width` e `height`. O campo `illustrative` controla o aviso na galeria.
 */
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  /** Classes do grid para o layout assimétrico */
  layout: string;
  illustrative: boolean;
};

export const portfolio: PortfolioItem[] = [
  { src: p1, alt: "Unhas curtas quadradas em vinho com brilho intenso", title: "Vinho clássico", width: 896, height: 1152, layout: "col-span-1 row-span-2 lg:col-span-4 lg:row-span-2", illustrative: true },
  { src: p2, alt: "Unhas amendoadas rosa leitoso com francesinha dourada", title: "Francesinha dourada", width: 1152, height: 896, layout: "col-span-1 row-span-1 lg:col-span-5 lg:row-span-1", illustrative: true },
  { src: p4, alt: "Unhas pretas foscas com linhas finas douradas", title: "Noir & ouro", width: 896, height: 896, layout: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-1", illustrative: true },
  { src: p3, alt: "Unhas bailarina com efeito cromado perolado", title: "Pérola cromada", width: 896, height: 1152, layout: "col-span-1 row-span-2 lg:col-span-3 lg:row-span-2", illustrative: true },
  { src: p6, alt: "Unhas stiletto rosé com aplicação de flor dourada", title: "Rosé com joia", width: 896, height: 1152, layout: "col-span-1 row-span-2 lg:col-span-5 lg:row-span-2", illustrative: true },
  { src: p5, alt: "Unhas naturais curtas com cutícula impecável e brilho", title: "Natural impecável", width: 1152, height: 896, layout: "col-span-2 row-span-1 lg:col-span-4 lg:row-span-1", illustrative: true },
];
