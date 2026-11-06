import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { STATES } from "../components/railwire/data";
import { toSlug } from "../components/railwire/stateData";

export const Route = createFileRoute("/pm-wani-plans")({
  component: PmWaniPage,
});

const RECHARGE_LINKS: Record<string, string> = {
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
  "Manipur, Nagaland & Arunachal Pradesh": "https://ne2.railwire.co.in/Websitebsscntl",
  Odisha: "https://od.railwire.co.in/Websitebsscntl",
  Punjab: "https://pb.railwire.co.in/Websitebsscntl",
  Rajasthan: "https://rj.railwire.co.in/Websitebsscntl",
  "Tamil Nadu": "https://tn.railwire.co.in/Websitebsscntl",
  Telangana: "https://ts.railwire.co.in/Websitebsscntl",
  "UP East": "https://upeast.railwire.co.in/Websitebsscntl",
  "UP West": "https://up.railwire.co.in/Websitebsscntl",
  "West Bengal": "https://wb.railwire.co.in/Websitebsscntl",
};

const BTN =
  "rounded-lg border-2 border-[#1db8fa] px-6 py-2.5 text-sm font-semibold text-[#1db8fa] transition hover:bg-[#1db8fa] hover:text-white";

function PmWaniPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showRecharge, setShowRecharge] = useState(false);
  const [rechargeState, setRechargeState] = useState("");
  const [planState, setPlanState] = useState("");

  return (
    <main className="bg-white">
      {/* Quick actions */}
      <section className="px-4 pb-6 pt-8 text-center">
        <p className="text-lg text-slate-800">
          {t("plansPortal.supportCall", {
            defaultValue: "For New Connection or any Support Please Call",
          })}
        </p>
        <a
          href="tel:18001039139"
          className="mt-1 inline-block font-display text-4xl font-bold text-[#1db8fa]"
        >
          1800 1039 139
        </a>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-4">
          <a
            href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_customer"
            className={BTN}
          >
            {t("plansPortal.applyNew", { defaultValue: "Apply for New Connection" })}
          </a>
          <button type="button" onClick={() => setShowRecharge(true)} className={BTN}>
            {t("plansPortal.rechargeAccount", { defaultValue: "Recharge My Account" })}
          </button>
          <a href="https://www.railwire.co.in/subscriberlogin.php" className={BTN}>
            {t("plansPortal.subscriberLogin", { defaultValue: "Subscriber Login" })}
          </a>
          <a href="https://crm.railwire.co.in/Portalcntl/rlwr_griviance_request" className={BTN}>
            {t("plansPortal.grievance", { defaultValue: "Grievance" })}
          </a>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("search-plans")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={BTN}
          >
            {t("plansPortal.exploreLocal", { defaultValue: "Click Here To Explore Local Plans" })}
          </button>
        </div>

        <h2 className="mt-10 text-3xl font-bold text-[#0ea5e9] md:text-4xl">
          {t("plansPortal.subheading", { defaultValue: "RailTel Internet & Entertainment" })}
        </h2>
      </section>

      {/* Search plans by state */}
      <section id="search-plans" className="bg-[#f4f7f9] px-4 py-16">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="font-semibold text-[#1db8fa]">
            {t("plansPortal.findPlans", { defaultValue: "📍 Find Plans in Your Area" })}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#0b1c4d]">
            {t("plansPortal.searchPlansTitle", {
              defaultValue: "Search RailWire Broadband Plans",
            })}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-600">
            {t("plansPortal.searchPlansDesc", {
              defaultValue:
                "Select your state or region to view the latest broadband plans, offers and availability in your area.",
            })}
          </p>
          <select
            value={planState}
            onChange={(e) => setPlanState(e.target.value)}
            className="mx-auto mt-8 block w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-slate-800"
          >
            <option value="">
              {t("plansPortal.chooseState", { defaultValue: "Choose Your State" })}
            </option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {t(`states.${s}`, { defaultValue: s })}
              </option>
            ))}
          </select>
          <button
            type="button"
            disabled={!planState}
            onClick={() => navigate({ to: "/state/$slug", params: { slug: toSlug(planState) } })}
            className="mt-4 rounded-lg bg-[#1db8fa] px-9 py-4 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("plansPortal.searchBtn", { defaultValue: "Search Plans →" })}
          </button>
        </div>
      </section>

      {/* Recharge popup */}
      {showRecharge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-lg bg-white px-8 py-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowRecharge(false)}
              aria-label="Close recharge modal"
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="mb-4 text-lg font-medium text-gray-800">
              {t("plansPortal.selectState", { defaultValue: "Select Your State" })}
            </h3>
            <select
              value={rechargeState}
              onChange={(e) => setRechargeState(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none focus:border-[#1db8fa] focus:ring-1 focus:ring-[#1db8fa]"
            >
              <option value="">
                {t("plansPortal.chooseState", { defaultValue: "Choose Your State" })}
              </option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {t(`states.${s}`, { defaultValue: s })}
                </option>
              ))}
            </select>
            {rechargeState && (
              <button
                type="button"
                onClick={() => {
                  window.location.href =
                    RECHARGE_LINKS[rechargeState] || "https://crm.railwire.co.in/subrcntl";
                }}
                className="mt-4 w-full rounded-md bg-[#1db8fa] py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                {t("plansPortal.continue", { defaultValue: "Continue" })}
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
