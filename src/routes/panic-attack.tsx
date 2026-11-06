import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/panic-attack")({
  component: PanicAttackPage,
});

const DETAILS = [
  { label: "Year", value: "2024" },
  { label: "Duration", value: "1hr : 30mins" },
  { label: "Rating", value: "TV-MA" },
  { label: "Genres", value: "Romance, Comedy" },
  { label: "Crew", value: "Maddhuri alia, ricky aleman" },
];

const PARAGRAPHS = [
  "Aliquam posuere vitae enim vitae pulvinar. Pellentesque sit amet luctus ante, ut elementum nisl. Ut at ornare dui.",
  "Onsectetur dui vitae convallis. Aliquam posuere vitae enim vitae pulvinar. Pellentesque sit amet luctus ante, ut elementum nisl. Ut at ornare dui. In cursus hendrerit pulvinar. Sed consectetur elit leo. Curabitur pellentesque ultrices odio eu pellentesque. Phasellus eget ligula leo. Donec ex eros, tristique ac sollicitudin",
];

const CAST = [
  { name: "Millie Brown", role: "as Eleven", img: img("cast-1.jpg") },
  { name: "Finn Wolfhard", role: "as Mike Pomp", img: img("cast-2.jpg") },
  { name: "Winona Ryder", role: "as Bycers", img: img("cast-3.jpg") },
  { name: "David Harbour", role: "as Jim", img: img("cast-4.jpg") },
  { name: "Gaten Matarazo", role: "as Matarazo", img: img("cast-5.jpg") },
];

const COMMENTS = [
  {
    id: "comment-17",
    who: "Bibin",
    stars: 5,
    date: "August 15, 2024 at 4:23 am",
    text: "Very inspiring! Shows what dedication and good service can achieve.",
  },
  {
    id: "comment-18",
    who: "Nisha Roy",
    date: "August 15, 2024 at 4:23 am",
    text: "Internet access in villages will make a huge difference for students and businesses.",
  },
];

function PanicAttackPage() {
  const { t } = useTranslation();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const timer = setTimeout(() => {
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const title = t("blogArticles.panicAttack.title");

  return (
    <main className="bg-white">
      <section className="relative mx-3 mt-4 overflow-hidden rounded-[28px] bg-[#2a2c3c] md:mx-6">
        <div className="relative flex h-[380px] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">{title}</h1>
        </div>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-44 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </section>

      <div className="mx-auto mt-14 max-w-[1000px] px-5 pb-16">
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="min-h-[260px]" />

          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                <div className="mt-2 text-lg text-[#0ea5e9]">★★★★★</div>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full border border-slate-300 px-4 py-1 text-sm text-slate-600">
                  {t("blogArticles.share")}
                </span>
                <span className="rounded-full border border-slate-300 px-4 py-1 text-sm text-slate-600">
                  {t("blogArticles.views", { count: 54 })}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-4 text-slate-700">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0ea5e9]" /> {DETAILS[0].value}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#0ea5e9]" /> {DETAILS[1].value}
              </span>
              <span className="rounded-full bg-slate-900 px-4 py-1 text-sm font-bold text-white">
                {DETAILS[2].value}
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-600">{PARAGRAPHS[0]}</p>

            <div className="mt-4 space-y-1 text-slate-700">
              <p>
                <span className="font-bold text-[#0ea5e9]">Genres:</span> {DETAILS[3].value}
              </p>
              <p>
                <span className="font-bold text-[#0ea5e9]">Crew:</span> {DETAILS[4].value}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 leading-7 text-slate-600">{PARAGRAPHS[1]}</p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">{t("blogArticles.topCast")}</h2>
        <div className="mt-6 flex flex-wrap gap-6">
          {CAST.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <img src={c.img} alt={c.name} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-[#0ea5e9]">{c.name}</p>
                <p className="text-sm text-slate-600">{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            {t("blogArticles.thoughtsOn", { count: COMMENTS.length, title })}
          </h2>
          <ul className="mt-6 space-y-6">
            {COMMENTS.map((c) => (
              <li key={c.id} id={c.id} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-slate-800 text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-700">
                    {c.stars ? t("blogArticles.reviewedBy") : ""}
                    <span className="font-bold text-slate-900">{c.who}</span>
                    {c.stars ? (
                      <span className="font-bold text-[#0ea5e9]"> ★ {c.stars}</span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#0ea5e9]">{c.date}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-10 text-3xl font-bold text-slate-900">{t("blogPages.leaveReply")}</h2>
        <div className="mt-4 flex items-center gap-3 text-sm font-bold text-slate-900">
          {t("blogArticles.rateMovie")} <span className="text-slate-300">★★★★★</span>
        </div>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder={t("blogPages.namePlaceholder")}
              className="rounded-md bg-[#f6f5f1] px-4 py-3 outline-none"
            />
            <input
              required
              type="email"
              placeholder={t("blogPages.emailPlaceholder")}
              className="rounded-md bg-[#f6f5f1] px-4 py-3 outline-none"
            />
          </div>
          <textarea
            placeholder={t("blogPages.commentPlaceholder")}
            rows={5}
            className="w-full rounded-md bg-[#f6f5f1] px-4 py-3 outline-none"
          />
          <button
            type="submit"
            className="bg-[#0ea5e9] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0284c7]"
          >
            {t("blogPages.postComment")}
          </button>
        </form>
      </div>
    </main>
  );
}
