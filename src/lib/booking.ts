import { siteConfig } from "@/config/site";

type BookingConfig = {
  whatsappNumber: string;
  whatsappMessage: string;
  instagramUrl: string;
};

/** Link de agendamento: WhatsApp com mensagem pronta quando há número; senão, Instagram. */
export function getBookingUrl(config: BookingConfig = siteConfig, message?: string): string {
  const digits = config.whatsappNumber.replace(/\D/g, "");
  if (!digits) return config.instagramUrl;
  const text = encodeURIComponent(message ?? config.whatsappMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export function hasWhatsapp(config: Pick<BookingConfig, "whatsappNumber"> = siteConfig): boolean {
  return config.whatsappNumber.replace(/\D/g, "").length > 0;
}

/** Mensagem para consultar um serviço específico. */
export function serviceMessage(serviceName: string): string {
  return `Olá, Marcela! Gostaria de consultar os horários disponíveis e o valor de ${serviceName.toLowerCase()}.`;
}
