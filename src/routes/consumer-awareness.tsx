import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/consumer-awareness")({
  component: ConsumerAwarenessPage,
});

const DOCS = [
  { t: "PPT on Tariff & Billing in Broadcasting sector", href: "#" },
  { t: "PPT On TCPR", href: "#" },
];

function ConsumerAwarenessPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative mx-3 mt-4 h-[380px] overflow-hidden rounded-[28px] bg-[#2a2c3c] md:mx-6">
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {t("consumerAwarenessPage.title", { defaultValue: "Consumer Awareness Information" })}
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-44 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1000px] px-5 py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          {t("consumerAwarenessPage.heading", {
            defaultValue: "Consumer Awareness Information PPTs 3rd Quarter (October-December 2026)",
          })}
        </h2>
        <a
          href="#"
          className="mt-4 inline-block bg-[#0ea5e9] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0284c7]"
        >
          {t("consumerAwarenessPage.viewPpt", { defaultValue: "View PPT" })}
        </a>

        <h3 className="mt-10 text-2xl font-bold text-slate-900">
          {t("consumerAwarenessPage.presentations", { defaultValue: "Presentations" })}
        </h3>
        <ul className="mt-4 space-y-3">
          {DOCS.map((d) => (
            <li key={d.t}>
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#0ea5e9] hover:underline"
              >
                {d.t}
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-2xl font-bold text-slate-900">
          {t("consumerAwarenessPage.traiYoutube", { defaultValue: "TRAI YouTube Channel" })}
        </h3>
        <a
          href="https://www.youtube.com/c/TelecomRegulatoryAuthorityofIndia"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-[#0ea5e9] hover:underline"
        >
          {t("consumerAwarenessPage.watchYoutube", { defaultValue: "Watch on YouTube" })}
        </a>
      </div>
    </main>
  );
}
