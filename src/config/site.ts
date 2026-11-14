/**
 * Configuração central do site — edite aqui os dados da profissional.
 * Campos vazios ("") ficam ocultos ou usam um texto de "a confirmar".
 */
export const siteConfig = {
  name: "Marcela Nail Designer",
  shortName: "Marcela",

  /** Número do WhatsApp com DDI + DDD, só dígitos. Ex.: "5581999999999". Vazio = usa o Instagram. */
  whatsappNumber: "",
  whatsappMessage:
    "Olá, Marcela! Gostaria de consultar os horários disponíveis e os valores dos procedimentos.",

  instagramUrl: "https://www.instagram.com/marcelannails_salon/",
  instagramHandle: "@marcelannails_salon",

  /** Preencher após confirmação com a profissional. */
  address: "",
  mapUrl: "",
  openingHours: "",
} as const;

/** Preços dos serviços — deixar "" até a confirmação; o site mostra "Valor sob consulta". */
export const servicePrices: Record<string, string> = {
  "aplicacao-gel": "",
  manutencao: "",
  "banho-gel": "",
  cuticulagem: "",
};
