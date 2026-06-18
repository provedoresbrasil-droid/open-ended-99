import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Play, ArrowUpRight, Instagram, MessageCircle, Mail, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Link na Bio — Central Premium" },
      { name: "description", content: "Conteúdos, projetos e soluções reunidos em um só lugar." },
      { property: "og:title", content: "Link na Bio — Central Premium" },
      { property: "og:description", content: "Conteúdos, projetos e soluções reunidos em um só lugar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SITE_URL = "https://exemplo.com";
const YOUTUBE_URL = "https://youtube.com/@exemplo";
const INSTAGRAM_URL = "https://instagram.com/exemplo";
const WHATSAPP_URL = "https://wa.me/5500000000000";
const EMAIL_URL = "mailto:contato@exemplo.com";

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#3b1d6e_0%,#0b0820_45%,#050410_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_20%_10%,#6d28d9_0%,transparent_40%),radial-gradient(circle_at_80%_90%,#0ea5e9_0%,transparent_40%)]" />
      <div className="absolute inset-0 -z-10 [background:linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.6))]" />

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-10 sm:py-14">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 blur-md opacity-70" />
            <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/20 backdrop-blur-xl">
              <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                M
              </span>
            </div>
          </div>

          <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Sua Marca</h1>
          <p className="mt-1 text-sm font-medium text-white/70">@suamarca</p>

          <p className="mt-4 text-balance text-base leading-relaxed text-white/80">
            Conteúdos, projetos e soluções reunidos em um só lugar.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
            Marca verificada · +5 anos no mercado
          </div>
        </motion.section>

        {/* Buttons */}
        <section className="mt-10 space-y-4">
          <LinkCard
            href={SITE_URL}
            icon={<Globe className="h-6 w-6" />}
            title="Acessar site oficial"
            description="Conheça a empresa, soluções, serviços e projetos."
            accent="from-fuchsia-500 via-purple-500 to-indigo-500"
            delay={0.15}
            primary
          />
          <LinkCard
            href={YOUTUBE_URL}
            icon={<Play className="h-6 w-6 fill-current" />}
            title="Acessar canal no YouTube"
            description="Assista vídeos, conteúdos, bastidores e novidades."
            accent="from-rose-500 via-red-500 to-orange-400"
            delay={0.25}
          />
        </section>

        {/* Trust */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
        >
          <Stat value="+100" label="Projetos" />
          <Stat value="+1M" label="Visualizações" />
          <Stat value="+50" label="Clientes" />
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/70">
            Escolha uma opção acima e continue a experiência.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <SocialIcon href={INSTAGRAM_URL} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={WHATSAPP_URL} label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={EMAIL_URL} label="E-mail">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </div>
        </motion.section>

        <footer className="mt-auto pt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Sua Marca. Todos os direitos reservados.
        </footer>
      </div>
    </main>
  );
}

function LinkCard({
  href,
  icon,
  title,
  description,
  accent,
  delay = 0,
  primary = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  delay?: number;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block overflow-hidden rounded-2xl p-[1.5px]"
    >
      <span
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${accent} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span className="relative flex items-center gap-4 rounded-[14px] bg-[#0d0a22]/90 p-4 backdrop-blur-xl">
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/30`}
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="truncate text-base font-semibold text-white">{title}</span>
            {primary && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80">
                Principal
              </span>
            )}
          </span>
          <span className="mt-0.5 block text-sm text-white/65 line-clamp-2">{description}</span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </span>
    </motion.a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
        {value}
      </div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-xl transition hover:scale-110 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}
