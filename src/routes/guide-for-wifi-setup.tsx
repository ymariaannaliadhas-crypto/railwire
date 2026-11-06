import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";
import { useEffect } from "react";
import { BlogSidebar, BlogCommentForm } from "../components/railwire/BlogSidebar";

export const Route = createFileRoute("/guide-for-wifi-setup")({
  component: WifiSetupGuidePage,
});

const FEATURED_IMG = img("hispeed.jpg");

function WifiSetupGuidePage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = t("blogArticles.wifiSetup.title");

  return (
    <main className="bg-white">
      <section className="relative mx-3 mt-4 overflow-hidden rounded-[28px] bg-[#2a2c3c] md:mx-6">
        <img
          src={FEATURED_IMG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative flex h-[380px] items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-44 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </section>

      <div className="mx-auto mt-14 grid max-w-[1000px] gap-10 px-5 pb-16 lg:grid-cols-[1fr_290px]">
        <article>
          <div className="relative overflow-hidden rounded-2xl">
            <img src={FEATURED_IMG} alt={title} className="w-full object-cover" />
            <span className="absolute left-4 top-4 bg-[#0ea5e9] px-3 py-1 text-xs font-bold text-white">
              MAY, 13
            </span>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-slate-600">
            <User className="h-3 w-3" /> {t("blogPages.admin")}
          </p>

          <p className="mt-4 leading-7 text-slate-600">{t("blogArticles.wifiSetup.body")}</p>

          <div className="mt-8 flex items-center gap-4 border-y border-slate-200 py-4">
            <span className="text-sm font-bold text-slate-800">
              {t("blogArticles.categoriesLabel")}
            </span>
            <span className="bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {t("blogPages.categoryUncategorized")}
            </span>
          </div>

          <BlogCommentForm />
        </article>

        <BlogSidebar />
      </div>
    </main>
  );
}
