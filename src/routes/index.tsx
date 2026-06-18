import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
  type Variants,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Globe, Play, ArrowUpRight, Instagram, MessageCircle, Mail, ShieldCheck, Scissors, Mic, Camera } from "lucide-react";

type CardTheme = "site" | "youtube" | "cuts" | "podcast" | "vlog";

const THEMES: Record<
  CardTheme,
  { gradient: string; glow: string; accentRing: string; pattern?: string }
> = {
  site: {
    gradient: "from-sky-500/30 via-indigo-600/20 to-transparent",
    glow: "bg-sky-500/30",
    accentRing: "ring-sky-400/30",
    pattern:
      "[background-image:linear-gradient(rgba(56,189,248,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:22px_22px]",
  },
  youtube: {
    gradient: "from-red-600/40 via-rose-700/25 to-transparent",
    glow: "bg-red-500/40",
    accentRing: "ring-red-400/30",
    pattern:
      "[background:repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_8px)]",
  },
  cuts: {
    gradient: "from-orange-500/35 via-amber-500/20 to-transparent",
    glow: "bg-orange-500/35",
    accentRing: "ring-orange-400/30",
    pattern:
      "[background:repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0_6px,transparent_6px_14px)]",
  },
  podcast: {
    gradient: "from-violet-600/35 via-fuchsia-600/20 to-transparent",
    glow: "bg-violet-500/35",
    accentRing: "ring-violet-400/30",
    pattern:
      "[background:radial-gradient(circle_at_20%_50%,rgba(167,139,250,0.25),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(232,121,249,0.2),transparent_40%)]",
  },
  vlog: {
    gradient: "from-teal-500/35 via-cyan-600/20 to-transparent",
    glow: "bg-cyan-500/35",
    accentRing: "ring-cyan-400/30",
    pattern:
      "[background:radial-gradient(ellipse_at_top,rgba(34,211,238,0.2),transparent_60%)]",
  },
};

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

const EASE = [0.22, 1, 0.36, 1] as const;
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

function Index() {
  // Parallax pointer for the ambient glow
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const glowX = useSpring(px, { stiffness: 50, damping: 20 });
  const glowY = useSpring(py, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      px.set(x);
      py.set(y);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white antialiased">
      {/* Apple-style ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#1c1c1e_0%,#000_60%)]" />
        <motion.div
          aria-hidden
          style={{ x: glowX, y: glowY }}
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[-10%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          aria-hidden
          style={{ x: useTransform(glowX, (v) => v * -0.6), y: useTransform(glowY, (v) => v * -0.6) }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[-10%] h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-3xl"
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
            {/* Pulsing rings */}
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 1.6 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.8 }}
                className="absolute inset-0 rounded-full ring-1 ring-white/30"
              />
            ))}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#3a3a3c,#1c1c1e,#48484a,#1c1c1e,#3a3a3c)]"
            />
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-zinc-800 to-black ring-1 ring-white/10"
            >
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
                M
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={item}
            className="relative mt-5 overflow-hidden bg-gradient-to-r from-white via-white/70 to-white bg-[length:200%_100%] bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
          >
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-white via-white/40 to-white bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Sua Marca
            </motion.span>
          </motion.h1>
          <motion.p variants={item} className="mt-1 text-sm font-medium text-white/50">
            @suamarca
          </motion.p>
          <motion.p variants={item} className="mt-4 text-balance text-base leading-relaxed text-white/70">
            Conteúdos, projetos e soluções reunidos em um só lugar.
          </motion.p>
          <motion.div
            variants={item}
            whileHover={{ scale: 1.04 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-xl"
          >
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            </motion.span>
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
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl"
        >
          <Stat to={100} prefix="+" label="Projetos" />
          <Stat to={1} prefix="+" suffix="M" label="Views" />
          <Stat to={50} prefix="+" label="Clientes" />
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
  // 3D tilt with spring
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 18 });
  // Spotlight follow
  const sx = useMotionValue(50);
  const sy = useMotionValue(50);
  const spotlight = useTransform(
    [sx, sy] as MotionValue<number>[] & MotionValue<number>,
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, rgba(255,255,255,0.14), transparent 65%)`,
  );

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x - 0.5);
    my.set(y - 0.5);
    sx.set(x * 100);
    sy.set(y * 100);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileTap={{ scale: 0.985 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-colors hover:border-white/20 will-change-transform"
    >
      {/* Spotlight */}
      <motion.span
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span
        className={`relative flex items-center gap-4 ${compact ? "p-3.5" : "p-4"}`}
        style={{ transform: "translateZ(30px)" }}
      >
        <motion.span
          whileHover={{ rotate: accent ? -8 : 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
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
        </motion.span>
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
        <motion.span
          className="shrink-0"
          initial={false}
          whileHover={{ x: 3, y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          <ArrowUpRight className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-white" />
        </motion.span>
      </span>
    </motion.a>
  );
}

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);
  const display = to < 10 ? val.toFixed(1).replace(/\.0$/, "") : Math.round(val).toString();
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function Stat({
  to,
  prefix,
  suffix,
  label,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl">
        <Counter to={to} prefix={prefix} suffix={suffix} />
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
  // Magnetic hover
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });
  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.92 }}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {children}
    </motion.a>
  );
}
