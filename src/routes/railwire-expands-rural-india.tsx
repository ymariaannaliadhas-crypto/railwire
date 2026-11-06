import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";
import { BlogSidebar, BlogCommentForm } from "../components/railwire/BlogSidebar";

export const Route = createFileRoute("/railwire-expands-rural-india")({
  component: RailWireExpandsPage,
});

const FEATURED_IMG = img("fast-internet.jpg");

const COMMENTS = [
  { who: "Ravi", text: "Great to see RailWire reaching rural areas. This is really needed" },
];

function RailWireExpandsPage() {
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

  const title = t("blogArticles.ruralIndia.title");

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
              MAR, 19
            </span>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-slate-600">
            <User className="h-3 w-3" /> {t("blogPages.admin")}
          </p>

          <div className="mt-4 space-y-5 leading-7 text-slate-600">
            <p>{t("blogArticles.ruralIndia.p1")}</p>
            <p>{t("blogArticles.ruralIndia.p2")}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-slate-200 py-4">
            <span className="text-sm font-bold text-slate-800">
              {t("blogArticles.categoriesLabel")}
            </span>
            <span className="bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {t("blogPages.categoryExpansion")}
            </span>
            <span className="bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {t("blogPages.categoryUncategorized")}
            </span>
          </div>

          {COMMENTS.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900">
                {COMMENTS.length}{" "}
                {COMMENTS.length > 1 ? t("blogPages.comments") : t("blogPages.comment")}
              </h2>
              <ul className="mt-6 space-y-6">
                {COMMENTS.map((c, i) => (
                  <li
                    key={i}
                    id={"comment-" + c.who.toLowerCase()}
                    className="flex items-start gap-4"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-slate-800 text-white">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{c.who}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{c.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <BlogCommentForm />
        </article>

        <BlogSidebar />
      </div>
    </main>
  );
}
