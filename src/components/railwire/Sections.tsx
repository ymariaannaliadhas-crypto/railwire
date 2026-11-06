import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import {
  Award,
  Bell,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Gamepad2,
  Globe,
  GraduationCap,
  Hexagon,
  MessageCircle,
  Minus,
  Newspaper,
  PhoneCall,
  Play,
  Plus,
  Puzzle,
  Quote,
  Router,
  ShoppingCart,
  Signal,
  Store,
  Train,
  Trophy,
  User,
  Users,
  Wifi,
  Star,
  X,
} from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toSlug } from "./stateData";
import { BLOGS, FAQS, LINKS, PLAN_TABS, STATES, TESTIMONIALS } from "./data";
import { img } from "./assets";
import { BtnLink, Eyebrow, Heading, Reveal } from "./ui";

type Tr = TFunction;

function translateFeature(f: string, t: Tr) {
  const u = (k: string, d: string) => t(`units.${k}`, { defaultValue: d });
  return f
    .replace("Paid TV Channels", u("paidTvChannels", "Paid TV Channels"))
    .replace("Paid Channels", u("paidChannels", "Paid Channels"))
    .replace("Channels", u("channels", "Channels"))
    .replace("OTTs", u("otts", "OTTs"));
}

function translateComment(c: string, t: Tr) {
  const u = (k: string, d: string) => t(`units.${k}`, { defaultValue: d });
  return c
    .replace("Comments", u("comments", "Comments"))
    .replace("Comment", u("comment", "Comment"));
}

export function PortalCards() {
  const { t } = useTranslation();
  const [showSubscriber, setShowSubscriber] = useState(false);
  const [subscriberState, setSubscriberState] = useState("");

  const items = [
    { t: "ANPs", img: img("2026/03/anp.jpg"), h: "/anps" },
    { t: "AGNPs", img: img("2026/03/agnp-e1774474470606.jpg"), h: "/agnps" },
    { t: "MSPs", img: img("2026/03/msp-e1774474512109.jpg"), h: "/msp" },
    { t: "Subscribers", img: img("2026/03/26888-e1774474584622.jpg"), h: "#" },
  ];

  const subscriberStateLinks: Record<string, string> = {
    "Andhra Pradesh": "https://ap.railwire.co.in/",
    Assam: "https://as.railwire.co.in/",
    Bihar: "https://bh.railwire.co.in/",
    Chhattisgarh: "https://ch.railwire.co.in/",
    Delhi: "https://dl.railwire.co.in/",
    Gujarat: "https://gj.railwire.co.in/",
    Haryana: "https://hr.railwire.co.in/",
    "Himachal Pradesh": "https://hp.railwire.co.in/",
    "Jammu & Kashmir": "https://jk.railwire.co.in/",
    Jharkhand: "https://jh.railwire.co.in/",
    Karnataka: "https://ka.railwire.co.in/",
    Kerala: "https://kl.railwire.co.in/",
    "Madhya Pradesh": "https://mp.railwire.co.in/",
    "Maharashtra & Goa": "https://mh.railwire.co.in/",
    "Mizoram, Meghalaya & Tripura": "https://ne1.railwire.co.in/",
    "Manipur, Nagaland & Arunachal Pradesh": "https://ne2.railwire.co.in/",
    Odisha: "https://od.railwire.co.in/",
    Punjab: "https://pb.railwire.co.in/",
    Rajasthan: "https://rj.railwire.co.in/",
    "Tamil Nadu": "https://tn.railwire.co.in/",
    Telangana: "https://ts.railwire.co.in/",
    "UP East": "https://upeast.railwire.co.in/",
    "UP West": "https://up.railwire.co.in/",
    "West Bengal": "https://wb.railwire.co.in/",
  };

  return (
    <>
      <section className="mx-auto max-w-[1300px] px-4 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((it, n) => (
            <Reveal key={it.t} delay={n * 0.1}>
              {it.t === "Subscribers" ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowSubscriber(true);
                    setSubscriberState("");
                  }}
                  className="group block w-full overflow-hidden rounded-2xl bg-card text-center shadow-soft"
                >
                  <div className="overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.t}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="py-4 font-display text-xl font-semibold text-ink group-hover:text-primary">
                    {t("subscriber")}
                  </h3>
                </button>
              ) : (
                <a
                  href={it.h}
                  className="group block overflow-hidden rounded-2xl bg-card text-center shadow-soft"
                >
                  <div className="overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.t}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="py-4 font-display text-xl font-semibold text-ink group-hover:text-primary">
                    {it.t}
                  </h3>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {showSubscriber && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-lg bg-white px-8 py-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setShowSubscriber(false);
                setSubscriberState("");
              }}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-black"
              aria-label="Close subscriber modal"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="mb-4 text-lg font-medium text-gray-800">{t("selectState")}</h3>

            <select
              value={subscriberState}
              onChange={(e) => setSubscriberState(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none focus:border-[#1db8fa] focus:ring-1 focus:ring-[#1db8fa]"
            >
              <option value="">{t("chooseState")}</option>
              {STATES.filter((state) => state !== "Lakshadweep").map((state) => (
                <option key={state} value={state}>
                  {t(`states.${state}`, { defaultValue: state })}
                </option>
              ))}
            </select>

            <button
              type="button"
              disabled={!subscriberState}
              onClick={() => {
                const redirectUrl = subscriberStateLinks[subscriberState];

                if (redirectUrl) {
                  window.location.href = redirectUrl;
                } else {
                  alert(t("subscriberAlert", { state: subscriberState }));
                }
              }}
              className="mt-4 w-full rounded-md bg-[#1db8fa] py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("continue")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function About() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-network py-20">
      <img
        src={img("2024/08/about-1-bg.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-14 px-4 lg:grid-cols-2">
        <Reveal x={-60} y={0} className="relative">
          <div className="overflow-hidden rounded-[60%_40%_50%_50%] border-8 border-card shadow-soft">
            <img
              src={img("2026/03/watch-movie.jpg")}
              alt={t("about.watchAlt")}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-4 w-48 overflow-hidden rounded-[50%_50%_50%_10%] border-8 border-card shadow-soft">
            <img
              src={img("2026/03/26860.jpg")}
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute left-4 top-6 rounded-xl bg-primary px-5 py-3 font-display text-primary-foreground shadow-lg animate-float">
            <div className="text-sm">{t("about.fiber1")}</div>
            <div className="text-xl font-bold">{t("about.fiber2")}</div>
          </div>
        </Reveal>
        <Reveal x={60} y={0}>
          <Eyebrow>{t("about.label")}</Eyebrow>
          <Heading pre={t("about.title1")} hl={t("about.title2")} className="mt-4" />
          <p className="mt-6 leading-relaxed text-muted-foreground">{t("about.p1")}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("about.p2")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-border pb-8">
            <ul className="space-y-3 border-r-4 border-primary pr-6">
              {[t("about.point1"), t("about.point2"), t("about.point3")].map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-2 font-display text-lg font-medium text-ink"
                >
                  <Check className="h-5 w-5 text-primary" />
                  {x}
                </li>
              ))}
            </ul>
            <a
              href="https://www.youtube.com/@railwire"
              className="relative block w-64 overflow-hidden rounded-xl"
            >
              <img
                src={img("2026/03/youtube-railwire-e1774411150618.png")}
                alt={t("about.youtubeAlt")}
                className="w-full"
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-card text-ink">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </span>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Link
              to="/about"
              className="inline-flex h-16 items-center justify-center gap-5 rounded-lg bg-[#079fdf] px-9 text-lg font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#078bc4] hover:shadow-lg"
            >
              {t("about.moreAbout")}
              <ChevronRight className="h-7 w-7 stroke-[3px]" />
            </Link>
            <a href="tel:18001039139" className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-secondary bg-primary text-primary-foreground">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-primary">{t("about.callUs")}</span>
                <span className="font-display text-lg font-semibold text-ink">1800 1039 139</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Features() {
  const { t } = useTranslation();
  const left = [
    { i: Award, k: "navratna" },
    { i: Train, k: "ministry" },
    { i: Users, k: "millions" },
  ];
  const right = [
    { i: Globe, k: "pan" },
    { i: Router, k: "reliable" },
    { i: Wifi, k: "rural" },
  ];
  const Item = ({ f, r }: { f: (typeof left)[0]; r?: boolean }) => (
    <div
      className={`group flex gap-6 border-b border-border py-8 ${r ? "flex-row-reverse text-right" : ""}`}
    >
      <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <f.i className="h-8 w-8" />
      </span>
      <div>
        <h4 className="font-display text-xl font-semibold text-ink">
          {t(`features.${f.k}.title`)}
        </h4>
        <p className="mt-2 leading-7 text-muted-foreground">{t(`features.${f.k}.desc`)}</p>
      </div>
    </div>
  );
  return (
    <section className="relative overflow-hidden py-20">
      <img
        src={img("2025/04/feature-bg.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="relative mx-auto max-w-[1200px] px-4">
        <Reveal className="text-center">
          <Eyebrow center both>
            {t("features.label")}
          </Eyebrow>
          <Heading pre={t("features.title1")} hl={t("features.title2")} className="mt-4" />
        </Reveal>
        <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1fr_360px_1fr]">
          <div>
            {left.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.12} x={-40} y={0}>
                <Item f={f} />
              </Reveal>
            ))}
          </div>
          <Reveal className="relative mx-auto">
            <img
              src={img("2025/04/feature-1-shape-1.png")}
              alt=""
              className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
            />
            <img
              src={img("2026/03/social-image.png")}
              alt={t("features.happyAlt")}
              className="relative w-[360px]"
            />
          </Reveal>
          <div>
            {right.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.12} x={40} y={0}>
                <Item f={f} r />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Entertainment() {
  const { t } = useTranslation();
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal x={-50} y={0}>
          <h3 className="font-display text-4xl font-bold text-ink md:text-5xl">
            {t("entertainment.title1")} <span className="text-primary">RailWire</span>
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("entertainment.text")}
          </p>
          <div className="mt-8">
            <BtnLink href={LINKS.newConnection}>{t("entertainment.cta")}</BtnLink>
          </div>
        </Reveal>
        <Reveal x={50} y={0}>
          <img
            src={img(
              "2026/05/Unlimited-Entertainment-with-RailWire-scaled-e1778729477680-1024x604.jpg",
            )}
            alt={t("entertainment.alt")}
            className="w-full rounded-3xl shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function PartnerAndPlans() {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);
  return (
    <section className="relative pt-16">
      <div className="absolute inset-x-2 bottom-0 top-[230px] rounded-[40px] bg-hero md:inset-x-5" />
      <div className="relative mx-auto max-w-[1170px] px-4">
        <Reveal>
          <div className="grid gap-10 rounded-t-3xl bg-secondary px-8 pb-10 pt-0 md:grid-cols-2 md:px-14">
            {[
              {
                i: Signal,
                title: t("partner.card1Title"),
                l: [t("partner.card1Point1"), t("partner.card1Point2")],
              },
              {
                i: Hexagon,
                title: t("partner.card2Title"),
                l: [t("partner.card2Point1"), t("partner.card2Point2")],
              },
            ].map((c) => (
              <div key={c.title}>
                <span className="-mt-8 mb-6 grid h-24 w-24 place-items-center rounded-full bg-card text-primary shadow-soft">
                  <c.i className="h-10 w-10" />
                </span>
                <h4 className="font-display text-2xl font-semibold text-ink">{c.title}</h4>
                <ul className="mt-4 space-y-3">
                  {c.l.map((x) => (
                    <li key={x} className="flex gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-b-3xl bg-primary px-8 py-14 md:px-14">
            <div className="absolute -left-10 top-0 h-full w-64 -skew-x-[25deg] bg-primary-foreground/10" />
            <h3 className="relative font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              {t("partner.growTitle")}
            </h3>
            <div className="relative">
              <BtnLink href="/agnps" variant="white">
                {t("partner.become")}
              </BtnLink>
            </div>
          </div>
        </Reveal>

        <div id="plans" className="pb-24 pt-16">
          <Reveal className="text-center">
            <Eyebrow center both>
              {t("plansSection.eyebrow")}
            </Eyebrow>
            <Heading
              pre={t("plansSection.title1")}
              hl={t("plansSection.title2")}
              className="mt-4"
              light
            />
          </Reveal>
          <div className="mt-10 flex gap-8 overflow-x-auto border-y border-primary-foreground/15 py-5 md:justify-between">
            {PLAN_TABS.map((tb, n) => (
              <button
                key={tb.label}
                onClick={() => setTab(n)}
                className={`relative shrink-0 whitespace-nowrap font-display text-xl font-bold uppercase transition md:text-2xl ${n === tab ? "text-primary-foreground" : "text-primary-foreground/40 hover:text-primary-foreground/70"}`}
              >
                {tb.label}
                {n === tab && (
                  <motion.span
                    layoutId="tabline"
                    className="absolute -bottom-5 left-0 h-0.5 w-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {PLAN_TABS[tab]!.plans.map((p, n) => (
                <motion.div
                  key={p.name + n}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: n * 0.08 }}
                  className="group relative flex h-[520px] flex-col overflow-hidden rounded-[32px] border-[3px] border-[#1db8fa] bg-[#222533] shadow-xl transition hover:-translate-y-2"
                >
                  <div className="relative z-20 p-8 pb-10">
                    <div className="mb-6 inline-block rounded-full border border-[#1db8fa]/30 bg-[#181b26] px-6 py-2">
                      <span className="font-display text-2xl font-bold text-[#1db8fa]">
                        {p.price}
                      </span>
                      <span className="text-sm font-medium text-gray-400">
                        {" "}
                        {t("plansSection.perMonth")}
                      </span>
                    </div>

                    <h3 className="font-display text-[24px] font-bold leading-tight text-white">
                      {p.name}
                    </h3>

                    <ul className="mt-5 grid grid-cols-2 gap-x-2 gap-y-3">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-[15px] font-medium text-white"
                        >
                          <Check className="mt-[2px] h-[18px] w-[18px] shrink-0 text-white stroke-[3px]" />
                          <span className="leading-tight">{translateFeature(f, t)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute bottom-0 right-0 h-[240px] w-[85%] rounded-tl-[200px] border-l-[3px] border-t-[3px] border-[#1db8fa] bg-white">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom p-6 mix-blend-multiply"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("search-railwire-plans")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="absolute bottom-8 left-8 z-20 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white text-[#1db8fa] shadow-lg transition hover:scale-110"
                  >
                    <ChevronRight className="h-7 w-7 stroke-[3px]" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function SearchPlans() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [state, setState] = useState("");
  return (
    <section id="search-railwire-plans" className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid max-w-[1300px] items-center gap-8 px-4 lg:grid-cols-2">
        <Reveal className="py-16">
          <div className="rounded-3xl bg-card p-10 text-center shadow-soft">
            <p className="font-display font-semibold text-primary">{t("searchPlans.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink-blue">
              {t("searchPlans.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t("searchPlans.text")}</p>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mx-auto mt-8 block w-full max-w-md rounded-xl border-2 border-border bg-card px-5 py-4 text-ink"
            >
              <option value="">{t("chooseState")}</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {t(`states.${s}`, { defaultValue: s })}
                </option>
              ))}
            </select>
            <button
              type="button"
              disabled={!state}
              onClick={() => navigate({ to: "/state/$slug", params: { slug: toSlug(state) } })}
              className="mt-4 rounded-lg bg-gradient-to-r from-primary to-ink-blue px-9 py-4 font-display font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("searchPlans.search")}
            </button>
          </div>
        </Reveal>
        <Reveal x={60} y={0} className="hidden self-end lg:block">
          <img
            src={img("2026/05/2019-Picsart-BackgroundRemover-e1778829369912.png")}
            alt="RailWire OTT apps"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Achievers() {
  const { t } = useTranslation();
  return (
    <section id="achiever" className="relative overflow-hidden bg-cosmic py-24">
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-full text-primary/40"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 14 }).map((_, n) => (
          <path
            key={n}
            d={`M0 ${120 + n * 4} C 360 ${20 + n * 8}, 1080 ${200 - n * 6}, 1440 ${60 + n * 6}`}
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
        ))}
      </svg>
      <div className="relative mx-auto grid max-w-[1150px] items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>{t("achievers.eyebrow")}</Eyebrow>
          <h3 className="mt-4 font-display text-5xl font-bold leading-tight text-primary-foreground/80">
            {t("achievers.title")}
          </h3>
          <p className="mt-6 max-w-md leading-7 text-primary-foreground/90">
            {t("achievers.text")}
          </p>
          <div className="mt-8">
            <BtnLink href="/achievers">{t("achievers.viewAll")}</BtnLink>
          </div>
        </Reveal>
        <Reveal x={60} y={0} className="lg:justify-self-end">
          <div className="w-[370px] max-w-full rounded-xl border-4 border-primary bg-card pb-10 text-center">
            <h4 className="flex items-center gap-3 rounded-br-xl bg-primary px-4 py-3 text-2xl font-medium text-primary-foreground md:mr-12">
              <Trophy className="h-7 w-7 text-accent-gold" /> {t("achievers.badge")}
            </h4>
            <img
              src={img("2026/03/review-3-e1774512974456-150x150.jpg")}
              alt={t("hero.achiever.name")}
              className="mx-auto mt-3 h-36 w-36 border border-ink object-cover"
            />
            <h3 className="mt-5 text-3xl font-bold text-ink-blue">{t("hero.achiever.name")}</h3>
            <p className="font-medium text-ink">{t("achievers.role")}</p>
            <hr className="mx-10 my-3 border-ink/50" />
            <p className="px-8 text-muted-foreground">{t("achievers.text2")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useTranslation();
  const [i, setI] = useState(0);

  const nextReview = () => {
    setI((current) => (current + 1) % TESTIMONIALS.length);
  };

  const previousReview = () => {
    setI((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return;

    const timer = setInterval(() => {
      setI((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (TESTIMONIALS.length === 0) return null;

  const review = TESTIMONIALS[i]!;

  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] py-8 md:py-10">
      <img
        src={img("Smiling Man with Laptop and Thumbs-Up.png")}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[220px] object-contain md:w-[350px]"
      />

      <img
        src={img("Minimal Tech.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal x={-40} y={0}>
          <div className="flex items-center gap-3">
            <span className="h-3 w-8 rounded-full bg-primary" />
            <span className="font-display text-sm font-bold uppercase tracking-wide text-primary">
              {t("testimonials.eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            {t("testimonials.title1")}{" "}
            <span className="relative inline-block text-primary">
              {t("testimonials.title2")}
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary -rotate-2" />
            </span>
            <br />
            {t("testimonials.title3")}
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
            {t("testimonials.text")}
          </p>

          <div className="mt-9 flex gap-4">
            <button
              type="button"
              onClick={previousReview}
              aria-label={t("testimonials.prevAria")}
              className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-primary shadow-sm transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={nextReview}
              aria-label={t("testimonials.nextAria")}
              className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-primary shadow-sm transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            {t("testimonials.counter", { current: i + 1, total: TESTIMONIALS.length })}
          </p>
        </Reveal>

        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-[30px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -70 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative min-h-[280px] overflow-hidden rounded-[30px] [clip-path:polygon(0_0,100%_0,100%_88%,92%_100%,0_100%)] border border-[#E7E3DA] bg-white shadow-sm md:min-h-[320px]"
              >
                <div className="p-6 pb-5 md:p-8 md:pb-5">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-[#0ea5e9] text-[#0ea5e9]" />
                    ))}
                  </div>

                  <div className="mt-5 min-h-[90px]">
                    <p className="max-h-[110px] overflow-y-auto whitespace-pre-wrap break-words pr-3 text-base leading-7 text-[#172B4D] [scrollbar-width:thin] md:text-lg">
                      “{t(`testimonialItems.${i}.q`, { defaultValue: review.q })}”
                    </p>
                  </div>
                </div>

                <div
                  className="relative mt-0 flex min-h-[120px] w-[88%] items-center gap-4 bg-[#E7E3DA] px-5 py-4 md:min-h-[130px] md:w-[75%] md:gap-5 md:px-8"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
                  }}
                >
                  <img
                    src={review.img}
                    alt={review.n}
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-white object-cover md:h-20 md:w-20"
                  />

                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold uppercase text-[#172B4D] md:text-xl">
                      {review.n}
                    </h3>

                    <p className="mt-2 text-sm uppercase text-[#64748B] md:text-base">
                      {t(`testimonialItems.${i}.r`, { defaultValue: review.r })}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.n + index}
                type="button"
                onClick={() => setI(index)}
                aria-label={t("blogs.pageAria", { n: index + 1 })}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DigitalPlatform() {
  const { t } = useTranslation();
  const cards = [
    {
      c: "tone-sky",
      i: GraduationCap,
      k: "student",
      href: "/student-corner",
      l: [Newspaper, Bell, BookOpen],
    },
    {
      c: "tone-orange",
      i: Newspaper,
      k: "news",
      href: "/news-updates",
      l: [Newspaper, Train, Bell],
    },
    {
      c: "tone-violet",
      i: Gamepad2,
      k: "zone",
      href: "/entertainment-zone",
      l: [Puzzle, MessageCircle, Puzzle],
    },
    { c: "tone-green", i: Store, k: "business", href: "#", l: [Store, Users, ShoppingCart] },
  ] as const;
  return (
    <section className="relative overflow-hidden py-20">
      <img
        src={img("Abstract Blue Wave Technology Background.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative mx-auto max-w-[1340px] px-4">
        <Reveal className="mb-12 text-center">
          <Eyebrow center both>
            {t("digital.eyebrow")}
          </Eyebrow>
          <Heading pre={t("digital.title1")} hl={t("digital.title2")} className="mt-4" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, n) => (
            <Reveal key={c.k} delay={n * 0.1}>
              <div
                className={`${c.c} flex h-full flex-col rounded-2xl border border-card bg-card/80 p-4 shadow-soft backdrop-blur transition hover:-translate-y-2`}
              >
                <div className="flex items-center gap-5 border-b-2 border-[var(--tone)] pb-3">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded bg-[var(--tone)] text-[#0ea5e9]-foreground">
                    <c.i className="h-8 w-8" />
                  </span>
                  <h4 className="text-2xl font-medium leading-tight text-ink">
                    {t(`digital.${c.k}.title`)}
                  </h4>
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">{t(`digital.${c.k}.desc`)}</p>
                <ul className="mt-6 space-y-2 text-muted-foreground">
                  {c.l.map((I, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <I className="h-4 w-4 text-[var(--tone)]" />
                      {t(`digital.${c.k}.l${idx + 1}`)}
                    </li>
                  ))}
                </ul>
                {c.href.startsWith("/") ? (
                  <Link
                    to={c.href as "/student-corner" | "/news-updates" | "/entertainment-zone"}
                    className="mx-auto mt-auto inline-block bg-[var(--tone-soft)] px-6 py-2.5 pt-2.5 text-[var(--tone)] transition hover:bg-[var(--tone)] hover:text-primary-foreground"
                    style={{ marginTop: 28 }}
                  >
                    {t(`digital.${c.k}.btn`)}
                  </Link>
                ) : (
                  <a
                    href={c.href}
                    className="mx-auto mt-auto inline-block bg-[var(--tone-soft)] px-6 py-2.5 pt-2.5 text-[var(--tone)] transition hover:bg-[var(--tone)] hover:text-primary-foreground"
                    style={{ marginTop: 28 }}
                  >
                    {t(`digital.${c.k}.btn`)}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1150px] gap-12 px-4 lg:grid-cols-2">
        <div className="space-y-5">
          {FAQS.map((f, n) => (
            <Reveal key={f.q} delay={n * 0.08}>
              <div className="rounded-[40px] bg-secondary p-3">
                <button
                  onClick={() => setOpen(open === n ? null : n)}
                  className="flex w-full items-center gap-5 text-left"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-primary-foreground">
                    {open === n ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                  <span className="font-display font-semibold capitalize text-ink">
                    {t(`faqs.${n}.q`, { defaultValue: f.q })}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === n && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-6 text-muted-foreground"
                    >
                      <span className="block py-4">{t(`faqs.${n}.a`, { defaultValue: f.a })}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal x={50} y={0}>
          <Eyebrow>{t("faq.eyebrow")}</Eyebrow>
          <h3 className="mt-4 font-display text-6xl font-bold text-ink">{t("faq.title")}</h3>
          <div className="mt-10 flex gap-6">
            <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Router className="h-8 w-8" />
            </span>
            <div>
              <h5 className="font-display text-xl font-semibold text-ink">{t("faq.ottTitle")}</h5>
              <p className="mt-2 text-muted-foreground">{t("faq.ottText")}</p>
            </div>
          </div>
          <div className="mt-10">
            <BtnLink href="/faq" variant="primary">
              {t("faq.viewAll")}
            </BtnLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ShareKnowledge() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-5">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] bg-hero px-6 py-20 text-center">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/20" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[40px] border-primary/20" />
          <h2 className="relative font-display text-4xl font-bold text-primary-foreground md:text-6xl">
            {t("share.title1")} <span className="text-primary">{t("share.title2")}</span>
          </h2>
          <h5 className="relative mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            {t("share.text")}
          </h5>
          <div className="relative mt-10">
            <BtnLink href="#">{t("share.cta")}</BtnLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Blogs() {
  const { t } = useTranslation();
  const [i, setI] = useState(0);
  const pages = Math.ceil(BLOGS.length / 3);
  return (
    <section className="bg-sky-wave py-20">
      <div className="mx-auto max-w-[1340px] px-4">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{t("blogs.eyebrow")}</Eyebrow>
            <Heading pre={t("blogs.title1")} hl={t("blogs.title2")} className="mt-4" />
          </div>
          <BtnLink href="#">{t("blogs.viewAll")}</BtnLink>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-7 md:grid-cols-3"
          >
            {BLOGS.slice(i * 3, i * 3 + 3).map((b, idx) => {
              const title = t(`blogTitles.${i * 3 + idx}`, { defaultValue: b.t });
              return (
                <article key={b.t} className="group bg-card/90 p-5 shadow-soft">
                  <div className="relative overflow-hidden">
                    <img
                      src={b.img}
                      alt={title}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-5 top-0 bg-primary px-3 py-1 font-display font-semibold text-primary-foreground">
                      {b.d}
                    </span>
                    <div className="absolute bottom-0 left-0 flex gap-6 bg-primary px-5 py-2.5 text-sm text-primary-foreground">
                      <span className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5" />
                        {t("blogs.admin")}
                      </span>
                      {b.c && (
                        <span className="flex items-center gap-2">
                          <MessageCircle className="h-3.5 w-3.5" />
                          {translateComment(b.c, t)}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium leading-8 text-ink">
                    {b.href.startsWith("/") ? (
                      <Link to={b.href} className="hover:text-primary">
                        {title}
                      </Link>
                    ) : (
                      <a href={b.href} className="hover:text-primary">
                        {title}
                      </a>
                    )}
                  </h3>
                  {b.href.startsWith("/") ? (
                    <Link
                      to={b.href}
                      aria-label={t("blogs.readMore")}
                      className="mt-6 grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronsRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <a
                      href={b.href}
                      aria-label={t("blogs.readMore")}
                      className="mt-6 grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronsRight className="h-4 w-4" />
                    </a>
                  )}
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex justify-center gap-4">
          <button
            aria-label={t("blogs.previousAria")}
            onClick={() => setI((x) => (x - 1 + pages) % pages)}
            className="grid h-14 w-14 place-items-center rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label={t("blogs.nextAria")}
            onClick={() => setI((x) => (x + 1) % pages)}
            className="grid h-14 w-14 place-items-center rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: pages }).map((_, n) => (
            <button
              key={n}
              aria-label={t("blogs.pageAria", { n: n + 1 })}
              onClick={() => setI(n)}
              className={`h-2.5 w-2.5 rounded-full ${n === i ? "bg-primary ring-4 ring-primary/20" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useTranslation();

  const q1 = [
    { k: "footer.home", href: "/", isExternal: false },
    { k: "footer.business", href: "/business", isExternal: false },
    { k: "footer.joinPartner", href: LINKS.partner, isExternal: true },
  ];

  const q2 = [
    { k: "footer.customerCare", href: "/customer-care", isExternal: false },
    { k: "footer.faq", href: "/faq", isExternal: false },
    { k: "footer.newsBlog", href: "/news-updates", isExternal: false },
    {
      k: "footer.trackGrievance",
      href: "https://crm.railwire.co.in/Portalcntl/rlwr_track_requets",
      isExternal: true,
    },
    { k: "footer.installationCharges", href: "/installation-charges", isExternal: false },
    { k: "footer.pmWani", href: "/pm-wani-plans", isExternal: false },
    {
      k: "footer.subscriberPortal",
      href: "https://crm.railwire.co.in/subrcntl",
      isExternal: true,
    },
    {
      k: "footer.wifiStations",
      href: "https://railwire.co.in/wifi-sation-list.pdf",
      isExternal: true,
    },
    { k: "footer.serviceQuality", href: "/service-quality", isExternal: false },
    { k: "footer.consumerAwareness", href: "/consumer-awareness", isExternal: false },
  ];

  const T = ({ children }: { children: string }) => (
    <h2 className="mb-6 inline-block border-b-2 border-destructive pb-2 font-display text-xl font-semibold text-primary-foreground">
      {children}
    </h2>
  );

  return (
    <footer className="bg-hero text-primary-foreground/85">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.4fr]">
        <div>
          <T>{t("footer.aboutTitle")}</T>
          <p className="leading-7">{t("footer.aboutText")}</p>
          <p className="mt-4">
            {t("footer.appellateMail")}{" "}
            <a href="mailto:appellate@railtelindia.com" className="text-primary">
              appellate@railtelindia.com
            </a>
          </p>
          <p className="mt-2">
            {t("footer.contactNo")}{" "}
            <a href="tel:01244236085" className="text-primary">
              0124-4236085
            </a>
          </p>
        </div>

        {/* Quick Links 1 */}
        <div>
          <T>{t("footer.quickLink")}</T>
          <ul className="space-y-3">
            {q1.map((link) => (
              <li key={link.k}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(link.k)}
                  </a>
                ) : (
                  <Link to={link.href} className="hover:text-primary">
                    {t(link.k)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <T>{t("footer.quickLink")}</T>
          <ul className="space-y-2 text-sm">
            {q2.map((link) => (
              <li key={link.k}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(link.k)}
                  </a>
                ) : (
                  <Link to={link.href} className="hover:text-primary">
                    {t(link.k)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <img
            src={img("2024/08/logo-railwire.png")}
            alt={t("footer.railtelAlt")}
            className="mx-auto h-28 bg-card p-1"
          />
          <h2 className="mt-6 font-display text-xl font-semibold text-primary-foreground">
            {t("footer.downloadApp")}
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {/* Google Play */}
            <div className="flex flex-col items-center">
              <img
                src={img("2024/08/playstore_img.png")}
                alt={t("footer.googlePlayAlt")}
                className="h-12"
              />

              <img
                src={img("playstore.png")}
                alt={t("footer.googleQrAlt")}
                className="mt-3 h-28 w-28 rounded-lg bg-white p-2 object-contain"
              />
            </div>

            {/* Apple App Store */}
            <div className="flex flex-col items-center">
              <img
                src={img("2024/08/applestore_img-e1792569113219.png")}
                alt={t("footer.appStoreAlt")}
                className="h-12"
              />

              <img
                src={img("apple.png")}
                alt={t("footer.appleQrAlt")}
                className="mt-3 h-28 w-28 rounded-lg bg-white p-2 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-sm">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}

export function BackToTop() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("footer.backToTop")}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <ChevronRight className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
