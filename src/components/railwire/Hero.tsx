import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { img } from "./assets";

type Slide = { kind: "speed"; key: "slide1" | "slide3" } | { kind: "achiever" };

const SLIDES: Slide[] = [
  { kind: "speed", key: "slide1" },
  { kind: "achiever" },
  { kind: "speed", key: "slide3" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function SpeedSlide({ s, idx }: { s: Extract<Slide, { kind: "speed" }>; idx: number }) {
  const { t } = useTranslation();
  const p = `hero.${s.key}`;
  const fromLeft = idx === 0;
  const titles = [t(`${p}.title1`), t(`${p}.title2`)];

  return (
    <div className="relative grid h-full items-center gap-8 px-6 py-14 md:px-12 lg:grid-cols-2">
      <img
        src={img("2024/08/slider-1-layer-2.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="mb-6 flex items-center gap-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground md:text-base"
        >
          <span className="inline-block h-3 w-6 rounded-full border-2 border-primary bg-primary/70" />
          {t(`${p}.eyebrow`)}
        </motion.div>
        <h1 className="font-display text-4xl font-bold leading-[1.25] text-primary-foreground md:text-6xl">
          {titles.map((title, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: fromLeft ? 60 : 0, x: fromLeft ? 0 : -60 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.35 + i * 0.15, duration: 0.7, ease }}
            >
              {title}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/90"
        >
          {t(`${p}.text1`)} {t(`${p}.text2`)}
        </motion.p>
      </div>

      <div className="relative z-10 hidden h-[560px] lg:block">
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease }}
          src={img("2026/03/ott.png")}
          alt="OTT apps"
          className="absolute -left-24 top-0 w-[340px] animate-float"
        />
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="absolute -bottom-14 -right-12 h-[560px] w-[520px]"
        >
          <div className="absolute inset-0 rounded-[45%_55%_0_60%] bg-primary" />
          <img
            src={img("2024/08/slider-1-border.png")}
            alt=""
            className="absolute -right-4 -top-4 w-full"
          />
          <img
            src={img("2024/08/slider-1-1-e1782174453648.jpg")}
            alt=""
            className="absolute bottom-0 right-0 h-[85%] w-full rounded-[40%_50%_0_0] object-cover opacity-40 mix-blend-overlay"
          />

          {idx === 0 ? (
            <img
              src={img("bannerimg1.1.png")}
              alt="RailWire customer"
              className="absolute -bottom-12 -right-8 h-[120%] w-auto max-w-none object-contain object-bottom z-20"
            />
          ) : (
            <img
              src={img("2026/03/internet-for-home-1-1-e1774466095242.png")}
              alt="Family enjoying broadband"
              className="absolute -bottom-16 -right-12 h-[115%] w-auto max-w-none object-contain object-bottom z-20"
            />
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute left-0 top-6 grid h-32 w-44 place-items-center rounded-[50%_50%_50%_20%] bg-primary text-center font-display text-primary-foreground shadow-xl"
        >
          <div>
            <div className="text-2xl font-semibold">{t(`${p}.badge1`)}</div>
            <div className="text-sm font-medium">{t(`${p}.badge2`)}</div>
          </div>
        </motion.div>
        {idx === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-6 top-32 flex items-center gap-2"
          >
            <span className="rounded-full border border-primary-foreground/30 bg-ink/40 px-3 py-1 font-display text-sm font-semibold uppercase text-primary-foreground">
              {t("hero.happyUsers")}
            </span>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <img
                  key={n}
                  src={img(`2024/08/user-${n}.png`)}
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-primary"
                />
              ))}
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-primary bg-card font-semibold text-ink">
                +65
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function AchieverSlide() {
  const { t } = useTranslation();

  return (
    <div className="relative grid h-full items-center gap-8 px-6 py-14 md:px-12 lg:grid-cols-2">
      <img
        src={img("2026/06/background3-e1782174394105.png")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
      />

      <div className="relative z-10">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-display text-lg font-semibold tracking-widest text-accent-gold"
        >
          🏆 {t("hero.achiever.label")}
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="font-display text-5xl font-bold text-primary-foreground md:text-7xl"
        >
          {t("hero.achiever.name")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-lg text-lg text-primary-foreground/90"
        >
          {t("hero.achiever.text")}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          href="#achiever"
          className="mt-8 inline-block rounded-md bg-primary px-8 py-3.5 font-display font-semibold text-primary-foreground transition hover:bg-card hover:text-primary"
        >
          {t("hero.achiever.cta")}
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease }}
        className="relative z-10 hidden justify-center lg:flex"
      >
        <div className="relative w-full flex justify-center items-end">
          <div className="absolute left-0 top-0 flex h-32 w-44 items-center justify-center rounded-[50%_50%_50%_20%] bg-primary font-display text-xl font-semibold text-primary-foreground shadow-xl z-20">
            <div className="text-center leading-tight">
              {t("hero.achiever.blobLine1")}
              <br />
              {t("hero.achiever.blobLine2")}
            </div>
          </div>

          <img
            src={img("2026/06/ach-kumar-1-e1782174096422.png")}
            alt="Rajesh Kumar"
            className="relative h-[115%] w-auto max-w-none object-contain object-bottom translate-y-6 translate-x-12 z-10"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const [[i, dir], set] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const touch = useRef<number | null>(null);
  const go = useCallback(
    (d: number) => set(([c]) => [(c + d + SLIDES.length) % SLIDES.length, d]),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), 6500);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  const s = SLIDES[i]!;
  return (
    <section
      className="relative mx-2 overflow-hidden rounded-[40px] bg-hero md:mx-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touch.current = e.touches[0]!.clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0]!.clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      <div className="relative min-h-[640px] lg:h-[720px]">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={i}
            custom={dir}
            className="absolute inset-0"
            initial={{ opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -80 }}
            transition={{ duration: 0.8, ease }}
          >
            {s.kind === "achiever" ? <AchieverSlide /> : <SpeedSlide s={s} idx={i} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition hover:bg-primary"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition hover:bg-primary"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, n) => (
          <button
            key={n}
            aria-label={`Go to slide ${n + 1}`}
            onClick={() => set([n, n > i ? 1 : -1])}
            className={`h-3 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-3 bg-primary-foreground/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
