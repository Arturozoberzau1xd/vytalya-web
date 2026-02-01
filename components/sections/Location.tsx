import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

type LocationProps = {
  whatsappPhone: string; // Ej: 521XXXXXXXXXX

  // Texto
  addressLine: string; // "Calle ___, Col ___, Ciudad ___"
  cityLine?: string; // "Pachuca, Hgo."
  hoursLine: string; // "Luwn–Sáb: 10:00–19:00"

  // Maps
  googleMapsUrl: string; // Link para abrir Google Maps (Cómo llegar)
  googleMapsEmbedUrl: string; // Link embed (iframe)
};

function waLink(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function Location({
  whatsappPhone,
  addressLine,
  cityLine = "",
  hoursLine = "Trabajo bajo cita",
  googleMapsUrl,
  googleMapsEmbedUrl,
}: LocationProps) {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Visítanos"
        title="Ubicación y horarios"
        subtitle="Encuéntranos fácilmente. Si quieres, te compartimos la ubicación exacta por WhatsApp."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Datos / CTA */}
        <GlassCard>
          <div className="space-y-4">
            <div>
              <div className="text-xs font-semibold tracking-wide text-white/70">
                <span className="ml-4">DIRECCIÓN</span>
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/85">
                {addressLine}
                {cityLine ? <span className="text-white/70"> · {cityLine}</span> : null}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs font-semibold tracking-wide text-white/70">
                HORARIOS
              </div>
              <div className="mt-1 text-sm text-white/80">{hoursLine}</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs font-semibold tracking-wide text-white/70">
                CONTACTO
              </div>
              <div className="mt-1 text-sm text-white/80">
                WhatsApp: <span className="text-white/90">{whatsappPhone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3 sm:flex-row">
              {/* Cómo llegar */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button className="w-full">Cómo llegar</Button>
              </a>

              {/* WhatsApp */}
              <a
                href={waLink(
                  whatsappPhone,
                  "Hola, ¿me compartes la ubicación exacta y horarios disponibles? 📍✨"
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Pedir ubicación por WhatsApp
                </Button>
              </a>
            </div>

            {/* Nota pequeña */}
            <p className="text-xs text-white/55">
              *Atención con cita previa. Te recomendamos agendar antes de asistir.
            </p>

            {/* Línea dorada */}
            <div className="pointer-events-none mt-4 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent" />
          </div>
        </GlassCard>

        {/* Mapa */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
          <div className="relative h-[360px] w-full">
            <iframe
              title="Mapa - Ubicación"
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Barra inferior del mapa */}
          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
            <div className="text-sm text-white/75">
              ¿Necesitas ayuda para llegar?
            </div>
            <a
              href={waLink(
                whatsappPhone,
                "Hola, ¿me puedes orientar para llegar? 🙌📍"
              )}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[color:var(--gold)] hover:brightness-110"
            >
              Escríbenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
