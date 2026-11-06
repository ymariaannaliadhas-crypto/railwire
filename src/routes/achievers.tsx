import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/achievers")({
  component: AchieversPage,
});

type Achiever = {
  name: string;
  role: string;
  month: string;
  description: string;
  photo?: string;
};

const achievers: Achiever[] = [
  {
    name: "Rajesh Kumar",
    role: "ANP – Mumbai",
    month: "March 2026",
    description: "Connected 150+ new customers and delivered exceptional service this month.",
    photo: img("2026/03/review-3-e1774512974456-150x150.jpg"),
  },
];

function AchieversPage() {
  const { t } = useTranslation();
  const months = ["All", ...Array.from(new Set(achievers.map((a) => a.month)))];
  const [activeMonth, setActiveMonth] = useState("All");

  const visible =
    activeMonth === "All" ? achievers : achievers.filter((a) => a.month === activeMonth);

  return (
    <main className="min-h-screen bg-white text-[#09094d]">
      {/* Hero */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-r from-[#26004e] via-[#31006d] to-[#110044] px-5">
        <div className="relative z-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {t("achieversPage.eyebrow", { defaultValue: "Our Achievers" })}
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t("achieversPage.title", { defaultValue: "Achievers of the Month" })}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            {t("achieversPage.desc", {
              defaultValue:
                "Recognizing outstanding performance across our network. Celebrating partners who go the extra mile to connect communities.",
            })}
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => setActiveMonth(m)}
              className={`px-4 py-2 text-xs font-semibold text-white transition ${
                activeMonth === m ? "bg-[#079fdb]" : "bg-[#09094d] hover:bg-blue-900"
              }`}
            >
              {m === "All" ? t("achieversPage.all", { defaultValue: "All" }) : m}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="py-10 text-center text-sm text-gray-500">
            {t("achieversPage.empty", { defaultValue: "No achievers to show yet." })}
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((a) => (
              <article
                key={a.name + a.month}
                className="overflow-hidden rounded-xl border-4 border-[#079fdb] bg-white pb-8 text-center"
              >
                <h2 className="mr-12 flex items-center gap-3 rounded-br-xl bg-[#079fdb] px-4 py-3 text-lg font-medium text-white">
                  <Trophy className="h-6 w-6 text-yellow-300" />{" "}
                  {t("achieversPage.badge", { defaultValue: "Achiever Of the Month" })}
                </h2>

                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.name}
                    className="mx-auto mt-4 h-36 w-36 border border-[#09094d] object-cover"
                  />
                ) : (
                  <div className="mx-auto mt-4 grid h-36 w-36 place-items-center border border-[#09094d] bg-slate-100 text-4xl font-bold text-[#079fdb]">
                    {a.name.charAt(0)}
                  </div>
                )}

                <h3 className="mt-5 text-2xl font-bold">
                  {t("hero.achiever.name", { defaultValue: a.name })}
                </h3>
                <p className="font-medium">{t("achievers.role", { defaultValue: a.role })}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#079fdb]">
                  {a.month}
                </p>
                <hr className="mx-10 my-3 border-[#09094d]/30" />
                <p className="px-8 text-sm text-gray-600">
                  {t("hero.achiever.text", { defaultValue: a.description })}
                </p>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block rounded-md bg-[#09094d] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            {t("statePage.backHome", { defaultValue: "Back to Home" })}
          </Link>
        </div>
      </section>
    </main>
  );
}
