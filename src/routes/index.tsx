import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
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
const YOUTUBE_MAIN = "https://youtube.com/@exemplo";
const YOUTUBE_CUTS = "https://youtube.com/@exemplo-cortes";
const YOUTUBE_PODCAST = "https://youtube.com/@exemplo-podcast";
const YOUTUBE_VLOG = "https://youtube.com/@exemplo-vlog";
const INSTAGRAM_URL = "https://instagram.com/exemplo";
const WHATSAPP_URL = "https://wa.me/5500000000000";
const EMAIL_URL = "mailto:contato@exemplo.com";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white antialiased">
      {/* Apple-style ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#1c1c1e_0%,#000_60%)]" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-10 sm:py-14">
        {/* Hero */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item} className="relative">
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#3a3a3c,#1c1c1e,#48484a,#1c1c1e,#3a3a3c)]"
            />
            <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-zinc-800 to-black ring-1 ring-white/10">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
                M
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            Sua Marca
          </motion.h1>
          <motion.p variants={item} className="mt-1 text-sm font-medium text-white/50">
            @suamarca
          </motion.p>
          <motion.p variants={item} className="mt-4 text-balance text-base leading-relaxed text-white/70">
            Conteúdos, projetos e soluções reunidos em um só lugar.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-xl"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            Marca verificada · +5 anos no mercado
          </motion.div>
        </motion.section>

        {/* Primary */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 space-y-3"
        >
          <motion.div variants={item}>
            <LinkCard
              href={SITE_URL}
              icon={<Globe className="h-5 w-5" />}
              title="Acessar site oficial"
              description="Conheça a empresa, soluções, serviços e projetos."
              primary
            />
          </motion.div>
          <motion.div variants={item}>
            <LinkCard
              href={YOUTUBE_MAIN}
              icon={<Play className="h-5 w-5 fill-current" />}
              title="Canal principal no YouTube"
              description="Vídeos completos, conteúdos e novidades."
              accent
            />
          </motion.div>
        </motion.section>

        {/* YouTube channels */}
        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Mais canais
            </h2>
            <span className="text-[10px] text-white/30">YouTube</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-3"
          >
            <motion.div variants={item}>
              <LinkCard
                href={YOUTUBE_CUTS}
                icon={<Play className="h-5 w-5 fill-current" />}
                title="Cortes"
                description="Os melhores momentos em vídeos curtos."
                compact
              />
            </motion.div>
            <motion.div variants={item}>
              <LinkCard
                href={YOUTUBE_PODCAST}
                icon={<Play className="h-5 w-5 fill-current" />}
                title="Podcast"
                description="Episódios completos em áudio e vídeo."
                compact
              />
            </motion.div>
            <motion.div variants={item}>
              <LinkCard
                href={YOUTUBE_VLOG}
                icon={<Play className="h-5 w-5 fill-current" />}
                title="Vlogs & Bastidores"
                description="Rotina, viagens e bastidores da marca."
                compact
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Trust */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl"
        >
          <Stat value="+100" label="Projetos" />
          <Stat value="+1M" label="Views" />
          <Stat value="+50" label="Clientes" />
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/50">Escolha uma opção acima e continue a experiência.</p>
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

        <footer className="mt-auto pt-10 text-center text-xs text-white/30">
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
  primary = false,
  accent = false,
  compact = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  primary?: boolean;
  accent?: boolean;
  compact?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-colors hover:border-white/20"
    >
      {/* Specular highlight on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className={`relative flex items-center gap-4 ${compact ? "p-3.5" : "p-4"}`}>
        <span
          className={`grid shrink-0 place-items-center rounded-xl ring-1 ring-white/10 ${
            compact ? "h-10 w-10" : "h-12 w-12"
          } ${
            accent
              ? "bg-gradient-to-br from-red-500 to-red-700 text-white"
              : primary
                ? "bg-gradient-to-br from-white to-zinc-300 text-black"
                : "bg-gradient-to-br from-zinc-700 to-zinc-900 text-white"
          }`}
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className={`truncate font-semibold tracking-tight text-white ${compact ? "text-sm" : "text-base"}`}>
              {title}
            </span>
            {primary && (
              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80">
                Principal
              </span>
            )}
          </span>
          <span className={`mt-0.5 block text-white/55 line-clamp-1 ${compact ? "text-xs" : "text-sm"}`}>
            {description}
          </span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </span>
    </motion.a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-white/45">{label}</div>
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
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {children}
    </motion.a>
  );
}
