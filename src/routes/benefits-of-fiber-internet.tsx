import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { User } from "lucide-react";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/benefits-of-fiber-internet")({
  component: CategoryPage,
});

function CategoryPage() {
  const { t } = useTranslation();

  const posts = [
    {
      date: "MAR, 26",
      title: t("The Rise of Digital India and the Need for Better Connectivity"),
      excerpt: t(
        "India’s rapid digital growth has increased the demand for fast and reliable internet. With more services moving online, connectivity has become a necessity rather than a luxury. RailWire is",
      ),
      img: img("rise.jpg"),
      href: "/rise-of-digital-india",
      comments: 0,
    },
    {
      date: "AUG, 11",
      title: t("Why Fiber Broadband is the Future of Internet Connectivity"),
      excerpt: t(
        "Fiber broadband offers unmatched speed, reliability, and performance compared to traditional connections. Whether it's streaming, gaming, or running a business, fiber ensures a smooth and uninterrupted experience. RailWire’s fiber",
      ),
      img: img("fiber-internet.jpg"),
      href: "/why-fiber-broadband-is-the-future",
      comments: 2,
    },
    {
      date: "AUG, 11",
      title: t("Reliable Internet Changing Everyday Life-Makes Life Better"),
      excerpt: t(
        "For many families, a stable internet connection is essential for education, work, and entertainment. RailWire has been a game-changer for customers who previously struggled with slow and unreliable connections.",
      ),
      img: img("relaiable.jpg"),
      href: "/reliable-internet-life",
      comments: 2,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <section className="relative mx-3 mt-4 overflow-hidden rounded-[28px] bg-[#2a2c3c] md:mx-6">
        <div className="relative flex h-[280px] items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            {t("blogPages.categoryBenefits")}
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-44 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </section>

      <div className="mx-auto mt-14 max-w-[1000px] space-y-12 px-5 pb-16">
        {posts.map((p) => (
          <article key={p.href} className="grid gap-6 md:grid-cols-[320px_1fr]">
            <Link to={p.href} className="block overflow-hidden rounded-2xl">
              <img src={p.img} alt={p.title} className="w-full object-cover" />
            </Link>
            <div>
              <span className="inline-block bg-[#0ea5e9] px-3 py-1 text-xs font-bold text-white">
                {p.date}
              </span>
              <p className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <User className="h-3 w-3" /> {t("blogPages.admin")}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                <Link to={p.href} className="hover:text-[#0ea5e9]">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{p.excerpt}</p>
              {p.comments > 0 && (
                <p className="mt-3 text-sm text-slate-500">
                  {p.comments} {p.comments > 1 ? t("blogPages.comments") : t("blogPages.comment")}
                </p>
              )}
              <Link
                to={p.href}
                className="mt-4 inline-block bg-[#0ea5e9] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0284c7]"
              >
                {t("blogPages.readMore")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
