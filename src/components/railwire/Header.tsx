import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Facebook, Instagram, ChevronDown, Youtube, X } from "lucide-react";
import { STATES } from "./data";
import { img } from "./assets";
import { Link, useLocation } from "@tanstack/react-router";

const LOGO = img("2024/08/logo-railwire-1.png");

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const isBusiness = location?.pathname?.includes("/business");
  const [showRecharge, setShowRecharge] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const [showSubscriber, setShowSubscriber] = useState(false);
  const [subscriberState, setSubscriberState] = useState("");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("railwire-language", lang);
    }
  };

  return (
    <header className="relative z-50 w-full bg-white font-sans shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="hidden bg-[#0f172a] px-6 py-2 text-white/80 md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <p className="font-display text-[11px] font-medium tracking-wide">{t("topBar")}</p>
          <div className="flex items-center gap-5">
            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/RailWireOfficial",
                  label: "Facebook",
                },
                { Icon: X, href: "https://x.com/railwireindia", label: "X" },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/RailWireOfficial/",
                  label: "Instagram",
                },
                {
                  Icon: Youtube,
                  href: "https://www.youtube.com/channel/UCWmV8i6HLoRTm_TU1Q-8u_g",
                  label: "YouTube",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/60 transition hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <div className="h-3 w-[1px] bg-white/20" />
            <select
              value={i18n.language.startsWith("hi") ? "hi" : "en"}
              onChange={(e) => handleLanguageChange(e.target.value)}
              aria-label="Select language"
              className="cursor-pointer bg-transparent text-xs font-medium text-white outline-none transition hover:text-white"
            >
              <option value="en" className="bg-[#0f172a] text-white">
                English
              </option>
              <option value="hi" className="bg-[#0f172a] text-white">
                हिन्दी
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= ROW 1: PRIMARY HEADER ================= */}
      <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between gap-6 px-6 lg:justify-start lg:gap-12 lg:px-12">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={LOGO} alt="Railwire" className="h-12 w-auto md:h-14" />
        </Link>

        {/* Mobile language switch */}
        <div className="flex items-center gap-2 md:hidden">
          <select
            value={i18n.language.startsWith("hi") ? "hi" : "en"}
            onChange={(e) => handleLanguageChange(e.target.value)}
            aria-label="Select language"
            className="rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-800 outline-none"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>

        <nav className="hidden items-center gap-10 text-[15px] font-medium text-gray-600 lg:flex ml-auto">
          <div
            className={`relative flex h-[80px] items-center ${isBusiness ? "text-[#0b1c4d]" : ""}`}
          >
            <Link
              to="/business"
              className={`transition hover:text-black ${isBusiness ? "font-semibold" : ""}`}
            >
              {t("business")}
            </Link>
            {isBusiness && <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#1db8fa]" />}
          </div>

          <div
            className={`relative flex h-[80px] items-center ${!isBusiness ? "text-[#0b1c4d]" : ""}`}
          >
            <Link
              to="/"
              className={`transition hover:text-black ${!isBusiness ? "font-semibold" : ""}`}
            >
              {t("home")}
            </Link>
            {!isBusiness && (
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#1db8fa]" />
            )}
          </div>

          <a
            href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner"
            className="transition hover:text-black"
          >
            {t("joinPartner")}
          </a>
        </nav>

        <div className="hidden md:flex ml-10">
          <a href="tel:18001039139" className="group flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f4f7f9] text-[#1db8fa] transition group-hover:bg-[#1db8fa] group-hover:text-white">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1z" />
              </svg>
            </span>
            <span className="flex flex-col text-left">
              <span className="text-[13px] font-medium text-gray-600">
                {t("newConnectionSupport")}
              </span>
              <span className="font-display text-xl font-bold text-[#1db8fa]">1800 1039 139</span>
            </span>
          </a>
        </div>
      </div>

      {/* ================= ROW 2: SUB-NAVBAR ================= */}
      <div className="w-full border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[1400px] px-6 lg:px-12">
          <nav className="ml-[700px] flex flex-wrap items-center gap-8 py-4 text-[15px] font-medium text-gray-600">
            {isBusiness ? (
              <>
                <div className="relative flex h-full items-center">
                  <a
                    href="tel:18001039139"
                    className="font-semibold text-[#0b1c4d] hover:text-[#1db8fa] transition"
                  ></a>
                </div>
                <a href="#" className="transition hover:text-black">
                  {t("newConnection")}
                </a>
                <Link to="/customer-care" className="transition hover:text-black">
                  {t("customerCare")}
                </Link>
              </>
            ) : (
              <>
                <div className="relative flex h-full items-center">
                  <a
                    href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_customer"
                    className="font-semibold text-[#0b1c4d] hover:text-[#1db8fa] transition"
                  >
                    {t("newConnection")}
                  </a>
                  <div className="absolute -bottom-4 left-0 h-[3px] w-full bg-[#1db8fa]" />
                </div>

                <button
                  onClick={() => setShowRecharge(true)}
                  className="transition hover:text-black"
                >
                  {t("recharge")}
                </button>
                <a href="#plans" className="transition hover:text-black">
                  {t("tariff")}
                </a>

                <div className="group relative flex cursor-pointer items-center gap-1 transition hover:text-black">
                  <span>{t("login")}</span>
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                  <div className="invisible absolute left-0 top-full z-50 mt-2 w-48 rounded-md bg-white p-2 opacity-0 shadow-lg ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {[
                      ["subscriber", "#"],
                      ["ANPs", "/anps"],
                      ["AGNPs", "/agnps"],
                      ["MSPs", "/msp"],
                    ].map(([l, h]) =>
                      l === "subscriber" ? (
                        <button
                          key={l}
                          type="button"
                          onClick={() => {
                            setShowSubscriber(true);
                            setSubscriberState("");
                          }}
                          className="block w-full rounded-md px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-100 hover:text-[#1db8fa]"
                        >
                          {t("subscriber")}
                        </button>
                      ) : (
                        <Link
                          key={l}
                          to={h as "/anps" | "/agnps" | "/msp"}
                          className="block rounded-md px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-[#1db8fa]"
                        >
                          {l}
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                <Link to="/customer-care" className="transition hover:text-black">
                  {t("customerCare")}
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* ================= RECHARGE MODAL ================= */}
      {showRecharge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-lg bg-white px-8 py-6 shadow-2xl">
            <button
              onClick={() => setShowRecharge(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="mb-4 text-lg font-medium text-gray-800">{t("selectState")}</h3>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none focus:border-[#1db8fa] focus:ring-1 focus:ring-[#1db8fa]"
            >
              <option value="">{t("chooseState")}</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {t(`states.${s}`, { defaultValue: s })}
                </option>
              ))}
            </select>

            {selectedState && (
              <button
                onClick={() => {
                  const stateLinks: Record<string, string> = {
                    "Andhra Pradesh": "https://ap.railwire.co.in/Websitebsscntl",
                    Assam: "https://as.railwire.co.in/Websitebsscntl",
                    Bihar: "https://bh.railwire.co.in/Websitebsscntl",
                    Chhattisgarh: "https://ch.railwire.co.in/Websitebsscntl",
                    Delhi: "https://dl.railwire.co.in/Websitebsscntl",
                    Gujarat: "https://gj.railwire.co.in/Websitebsscntl",
                    Haryana: "https://hr.railwire.co.in/Websitebsscntl",
                    "Himachal Pradesh": "https://hp.railwire.co.in/Websitebsscntl",
                    "Jammu & Kashmir": "https://jk.railwire.co.in/Websitebsscntl",
                    Jharkhand: "https://jh.railwire.co.in/Websitebsscntl",
                    Karnataka: "https://ka.railwire.co.in/Websitebsscntl",
                    Kerala: "https://kl.railwire.co.in/Websitebsscntl",
                    Lakshadweep: "https://ld.railwire.co.in/Websitebsscntl",
                    "Madhya Pradesh": "https://mp.railwire.co.in/Websitebsscntl",
                    "Maharashtra & Goa": "https://mh.railwire.co.in/Websitebsscntl",
                    "Mizoram, Meghalaya & Tripura": "https://ne1.railwire.co.in/Websitebsscntl",
                    "Manipur, Nagaland & Arunachal Pradesh":
                      "https://ne2.railwire.co.in/Websitebsscntl",
                    Odisha: "https://od.railwire.co.in/Websitebsscntl",
                    Punjab: "https://pb.railwire.co.in/Websitebsscntl",
                    Rajasthan: "https://rj.railwire.co.in/Websitebsscntl",
                    "Tamil Nadu": "https://tn.railwire.co.in/Websitebsscntl",
                    Telangana: "https://ts.railwire.co.in/Websitebsscntl",
                    "UP East": "https://upeast.railwire.co.in/Websitebsscntl",
                    "UP West": "https://up.railwire.co.in/Websitebsscntl",
                    "West Bengal": "https://wb.railwire.co.in/Websitebsscntl",
                  };

                  const redirectUrl =
                    stateLinks[selectedState] || "https://crm.railwire.co.in/subrcntl";

                  window.location.href = redirectUrl;
                }}
                className="mt-4 w-full rounded-md bg-[#1db8fa] py-3 font-semibold text-white hover:bg-blue-600 transition"
              >
                {t("continue")}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ================= SUBSCRIBER STATE MODAL ================= */}
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

                const redirectUrl = subscriberStateLinks[subscriberState];

                if (redirectUrl) {
                  window.location.href = redirectUrl;
                } else {
                  alert(
                    `The subscriber portal link for ${subscriberState} has not been added yet.`,
                  );
                }
              }}
              className="mt-4 w-full rounded-md bg-[#1db8fa] py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("continue")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
