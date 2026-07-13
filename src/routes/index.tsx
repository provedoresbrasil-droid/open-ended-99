import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Instagram, MessageCircle, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg.asset.json";
import bgNight from "@/assets/bg-night.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raul Eleutério | Central Premium" },
      {
        name: "description",
        content: "Soluções, conteúdos e projetos reunidos em um só lugar.",
      },
      { property: "og:title", content: "Raul Eleutério | Central Premium" },
      {
        property: "og:description",
        content: "Soluções, conteúdos e projetos reunidos em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const INSTAGRAM_URL = "https://instagram.com/rauleleutterio";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5585989608620";
const EMAIL_URL = "mailto:rauleleutterio@gmail.com";

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
    <main className="relative min-h-dvh overflow-hidden text-white antialiased">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgNight.url})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Meteoros */}
        <motion.div
          aria-hidden
          initial={{ x: "30vw", y: "0vh" }}
          animate={{ x: "-140vw", y: "15vh" }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 7,
          }}
          className="absolute right-0 top-[2vh] h-[1.5px] w-28 -rotate-[8deg] rounded-full bg-gradient-to-r from-white via-white/70 to-transparent opacity-40 shadow-[0_0_6px_1px_rgba(255,255,255,0.45)]"
        />
        <motion.div
          aria-hidden
          initial={{ x: "30vw", y: "0vh" }}
          animate={{ x: "-140vw", y: "15vh" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 6,
            delay: 3,
          }}
          className="absolute right-0 top-[22vh] h-[1.5px] w-24 -rotate-[10deg] rounded-full bg-gradient-to-r from-white via-white/70 to-transparent opacity-40 shadow-[0_0_6px_1px_rgba(255,255,255,0.45)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-10 sm:py-14">
        {/* Hero */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item} className="relative">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 1.6 }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.8,
                }}
                className="absolute inset-0 rounded-full ring-1 ring-white/30"
              />
            ))}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-zinc-800 to-black ring-1 ring-white/10"
            >
              <img
                src={profilePhoto.url}
                alt="Foto de perfil de Raul Eleutério"
                className="h-full w-full object-cover"
              />
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
              Raul Eleutério
            </motion.span>
          </motion.h1>

          <motion.p variants={item} className="mt-1 text-sm font-medium text-white/50">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Raul Eleutério no Instagram"
              className="transition-colors hover:text-white"
            >
              @rauleleutterio
            </a>
          </motion.p>
        </motion.section>

        {/* Primary action */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 space-y-3"
        >
          <motion.div variants={item}>
            <LinkCard
              href={WHATSAPP_URL}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.41-8.44ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.86 9.86 0 0 1-1.52-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.43 9.92-9.87 9.92Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              }
              title="RECPRO | Audiovisual"
              description="Fale com a gente pelo WhatsApp."
            />
          </motion.div>
        </motion.section>

        <p className="mt-6 text-center text-sm text-white/50">
          Clique no botão acima e continue a experiência.
        </p>

        <footer className="mt-auto flex flex-col items-center gap-5 pt-10">
          <div className="flex items-center justify-center gap-3">
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
          <p className="text-center text-xs text-white/30">
            © {new Date().getFullYear()} Raul Eleutério. Todos os direitos
            reservados.
          </p>
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
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  // 3D tilt with spring
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 18,
  });

  // Spotlight follow
  const sx = useMotionValue(50);
  const sy = useMotionValue(50);
  const spotlight = useTransform(
    [sx, sy] as MotionValue<number>[] & MotionValue<number>,
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, rgba(255,255,255,0.18), transparent 65%)`,
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
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span
        className="relative flex items-center gap-4 p-4"
        style={{ transform: "translateZ(30px)" }}
      >
        <motion.span
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 text-white ring-1 ring-white/10"
        >
          {icon}
        </motion.span>
        <span className="min-w-0 flex-1">
          <span className="truncate text-base font-semibold tracking-tight text-white">
            {title}
          </span>
          <span className="mt-0.5 block whitespace-pre-line text-sm text-white/55">
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
