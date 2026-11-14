import { describe, expect, it } from "vitest";
import { getBookingUrl } from "@/lib/booking";

const base = {
  whatsappMessage:
    "Olá, Marcela! Gostaria de consultar os horários disponíveis e os valores dos procedimentos.",
  instagramUrl: "https://www.instagram.com/marcelannails_salon/",
};

describe("booking link", () => {
  it("sends to the Instagram profile while no WhatsApp number is set", () => {
    expect(getBookingUrl({ ...base, whatsappNumber: "" })).toBe(
      "https://www.instagram.com/marcelannails_salon/",
    );
  });

  it("opens WhatsApp with the default greeting once a number is set", () => {
    const url = getBookingUrl({ ...base, whatsappNumber: "+55 (81) 99999-0000" });
    expect(url.startsWith("https://wa.me/5581999990000?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toBe(base.whatsappMessage);
  });
});
