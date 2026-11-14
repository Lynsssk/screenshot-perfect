import aboutImg from "@/assets/about-studio.jpg";
import { Reveal } from "./Reveal";
import { Ornament } from "./icons";

const pillars = [
  {
    title: "Cuidado",
    text: "Cada etapa é feita com calma e atenção, para que você se sinta acolhida do começo ao fim.",
  },
  {
    title: "Precisão",
    text: "Formato, espessura e acabamento pensados nos mínimos detalhes, para unhas bonitas de perto.",
  },
  {
    title: "Personalidade",
    text: "O resultado conversa com o seu estilo — do nude delicado ao design que chama atenção.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-24 text-ink md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-full w-full border border-rose/60"
          />
          <img
            src={aboutImg}
            alt="Instrumentos de manicure dourados e esmaltes nude sobre mármore"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover shadow-soft"
          />
          <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-ink/50">
            Imagem ilustrativa
          </p>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow">Sobre a profissional</p>
            <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Detalhes que elevam sua <em className="text-rose">autoestima.</em>
            </h2>
            <Ornament className="mt-8 w-28 text-gold" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-ink/75">
              Para a Marcela, uma unha bem feita vai além da estética: é um momento de cuidado com
              você. Cada atendimento é pensado para valorizar suas mãos com delicadeza, técnica e um
              acabamento que se percebe nos detalhes.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Do primeiro contato ao resultado final, a proposta é simples — você sai mais
              confiante, com unhas que combinam com quem você é.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3 sm:gap-6">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={180 + i * 100}>
                <span className="font-sans text-xs tracking-widest text-gold">0{i + 1}</span>
                <h3 className="mt-2 text-2xl italic">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
