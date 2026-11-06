import { Link } from "@tanstack/react-router";
import { MessageCircle, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BLOGS } from "./data";

const WIDGET = "rounded-2xl bg-[#f6f5f1] p-6";

export function useTranslatedBlog() {
  const { t } = useTranslation();

  const getPostTitle = (hrefOrTitle: string): string => {
    if (hrefOrTitle.includes("rural") || hrefOrTitle.includes("Rural")) {
      return t("blogTitles.0");
    }
    if (hrefOrTitle.includes("partner") || hrefOrTitle.includes("Partner")) {
      return t("blogTitles.1");
    }
    if (hrefOrTitle.includes("fiber") || hrefOrTitle.includes("Fiber")) {
      return t("blogTitles.2");
    }
    if (
      hrefOrTitle.includes("wifi") ||
      hrefOrTitle.includes("setup") ||
      hrefOrTitle.includes("Setup")
    ) {
      return t("blogTitles.4");
    }
    if (hrefOrTitle.includes("digital") || hrefOrTitle.includes("Digital")) {
      return t("blogTitles.5");
    }
    if (hrefOrTitle.includes("reliable") || hrefOrTitle.includes("Reliable")) {
      return t("blogArticles.reliableLife.title");
    }
    return hrefOrTitle;
  };

  const getCategoryTitle = (cat: string): string => {
    switch (cat) {
      case "Benefits of Fiber Internet":
        return t("blogPages.categoryBenefits");
      case "Broadband":
        return t("blogPages.categoryBroadband");
      case "Customer Story":
        return t("blogPages.categoryCustomer");
      case "Network Expansion":
        return t("blogPages.categoryExpansion");
      case "Partner Opportunity":
        return t("blogPages.categoryPartner");
      case "Partner Success Story":
        return t("blogPages.categorySuccess");
      case "Uncategorized":
      default:
        return t("blogPages.categoryUncategorized");
    }
  };

  return { getPostTitle, getCategoryTitle, t };
}

export function BlogSidebar() {
  const { getPostTitle, getCategoryTitle, t } = useTranslatedBlog();

  const recentPosts = [
    { titleKey: "blogTitles.4", href: "/guide-for-wifi-setup" },
    { titleKey: "blogTitles.5", href: "/rise-of-digital-india" },
    { titleKey: "blogTitles.0", href: "/railwire-expands-rural-india" },
    { titleKey: "blogTitles.1", href: "/how-a-local-partner-transformed-connectivity" },
    { titleKey: "blogTitles.2", href: "/why-fiber-broadband-is-the-future" },
  ];

  const recentComments = [
    {
      who: "Ravi",
      on: t("blogTitles.0"),
      href: "/railwire-expands-rural-india",
      hash: "comment-ravi",
    },
    {
      who: "Nisha roy",
      on: t("blogArticles.panicAttack.title"),
      href: "/panic-attack",
      hash: "comment-18",
    },
    {
      who: "Bibin",
      on: t("blogArticles.panicAttack.title"),
      href: "/panic-attack",
      hash: "comment-17",
    },
    {
      who: "Priya",
      on: t("blogArticles.reliableLife.title"),
      href: "/reliable-internet-life",
      hash: "comment-24",
    },
    {
      who: "Adam",
      on: t("blogArticles.reliableLife.title"),
      href: "/reliable-internet-life",
      hash: "comment-23",
    },
  ];

  const categories = [
    "Benefits of Fiber Internet",
    "Broadband",
    "Customer Story",
    "Network Expansion",
    "Partner Opportunity",
    "Partner Success Story",
    "Uncategorized",
  ];

  const thumbPosts = [
    {
      img: BLOGS[4]?.img ?? "",
      title: t("blogTitles.4"),
      href: "/guide-for-wifi-setup",
    },
    {
      img: BLOGS[5]?.img ?? "",
      title: t("blogTitles.5"),
      href: "/rise-of-digital-india",
    },
    {
      img: BLOGS[0]?.img ?? "",
      title: t("blogTitles.0"),
      href: "/railwire-expands-rural-india",
    },
  ];

  return (
    <aside className="space-y-6">
      {/* RECENT POSTS */}
      <div className={WIDGET}>
        <h3 className="mb-4 text-xl font-bold text-slate-900">{t("blogPages.recentPosts")}</h3>
        <ul className="space-y-4 text-sm text-slate-700">
          {recentPosts.map((p) => (
            <li key={p.href} className="leading-snug hover:text-[#0ea5e9]">
              <Link to={p.href}>{t(p.titleKey)}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RECENT COMMENTS */}
      <div className={WIDGET}>
        <h3 className="mb-4 text-xl font-bold text-slate-900">{t("blogPages.recentComments")}</h3>
        <ul className="space-y-4">
          {recentComments.map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-800 text-white">
                <MessageCircle className="h-4 w-4" />
              </span>
              <span>
                <span className="font-semibold">{c.who}</span> {t("blogArticles.on")}{" "}
                <Link to={c.href} hash={c.hash} className="hover:text-[#0ea5e9]">
                  {c.on}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CATEGORIES */}
      <div className={WIDGET}>
        <h3 className="mb-4 text-xl font-bold text-slate-900">{t("blogPages.categories")}</h3>
        <ul className="space-y-3 text-sm text-slate-600">
          {categories.map((c) => (
            <li key={c} className="hover:text-[#0ea5e9]">
              {c === "Benefits of Fiber Internet" ? (
                <Link to="/benefits-of-fiber-internet">{getCategoryTitle(c)}</Link>
              ) : (
                getCategoryTitle(c)
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* THUMBNAIL POSTS */}
      <div className={WIDGET}>
        <h3 className="mb-4 text-xl font-bold text-slate-900">{t("blogPages.recentPosts")}</h3>
        <ul className="space-y-5">
          {thumbPosts.map((b) => (
            <li key={b.href} className="flex gap-3">
              {b.img && (
                <img src={b.img} alt="" className="h-20 w-20 shrink-0 rounded-md object-cover" />
              )}
              <div>
                <p className="flex items-center gap-1 text-xs text-slate-500">
                  <User className="h-3 w-3" /> {t("blogPages.admin")}
                </p>
                <Link
                  to={b.href}
                  className="mt-1 block text-sm font-bold leading-snug text-slate-900 hover:text-[#0ea5e9]"
                >
                  {b.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function BlogCommentForm() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="mt-10 text-3xl font-bold text-slate-900">{t("blogPages.leaveReply")}</h2>
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
    </>
  );
}
