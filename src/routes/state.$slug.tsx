import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { getStateInfo } from "../components/railwire/stateData";

export const Route = createFileRoute("/state/$slug")({
  component: StatePage,
});

const APPLY_URL = "https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_customer";

function StatePage() {
  const { t } = useTranslation();
  const { slug } = Route.useParams();
  const state = getStateInfo(slug);

  if (!state) {
    return (
      <main className="grid min-h-[60vh] place-items-center px-5 text-center">
        <div>
          <h1 className="text-3xl font-bold text-[#09094d]">
            {t("statePage.notFound", { defaultValue: "State not found" })}
          </h1>
          <Link to="/" className="mt-6 inline-block bg-[#09094d] px-6 py-3 text-sm text-white">
            {t("statePage.backHome", { defaultValue: "Back to Home" })}
          </Link>
        </div>
      </main>
    );
  }

  const { name, content } = state;
  const localizedStateName = t(`states.${name}`, { defaultValue: name });
  const localAddr = t(`stateAddress.${slug}`, { returnObjects: true }) as unknown;
  const loc = (typeof localAddr === "object" && localAddr !== null ? localAddr : {}) as {
    office?: string[];
    msp?: { name?: string; address?: string[] };
  };
  const office = loc.office ?? content.office;
  const mspName = loc.msp?.name ?? content.msp?.name;
  const mspAddress = loc.msp?.address ?? content.msp?.address;

  return (
    <main className="min-h-screen bg-white text-[#09094d]">
      {/* Hero */}
      <section className="flex min-h-[300px] items-center justify-center bg-gradient-to-r from-[#26004e] via-[#31006d] to-[#110044] px-5 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{localizedStateName}</h1>
          <p className="mt-4 text-sm leading-6 text-white/70">
            {t("statePage.heroDesc", {
              defaultValue:
                "Delivering secure, high-speed internet with flexible plans, digital entertainment, and trusted local connectivity backed by RailTel’s nationwide fiber infrastructure",
            })}
          </p>
        </div>
      </section>

      {/* Broadband plans */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t("statePage.plansTitle", { defaultValue: "Broadband Plans" })}
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            {t("statePage.plansDesc", {
              defaultValue:
                "RailWire’s latest flagship Broadband Internet Plans for Homes and Small Offices offering blazing speeds",
            })}
          </p>
        </div>

        {content.plans.length === 0 ? (
          <p className="py-10 text-center text-sm text-gray-500">
            {t("statePage.comingSoon", {
              name: localizedStateName,
              defaultValue: `Plan details for ${localizedStateName} are coming soon. Please call 1800 1039 139 for more information.`,
            })}
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {content.plans.map((p) => (
              <article
                key={p.speed}
                className="flex flex-col rounded-2xl border-2 border-[#079fdb] p-6 text-center"
              >
                <h3 className="text-2xl font-bold">
                  {p.speed} <span className="text-[#079fdb]">@</span>
                </h3>
                <p className="mt-2 text-3xl font-bold text-[#079fdb]">
                  ₹{p.price}
                  <span className="text-sm font-medium text-gray-500">
                    {t("statePage.perMonth", { defaultValue: "/mo" })}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {p.description ??
                    t("statePage.planDesc", {
                      speed: p.speed,
                      defaultValue: `This plan offers ${p.speed} speed with Commercial data limit policy. Terms and Conditions Apply. Taxes Extra.`,
                    })}
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  {t("statePage.feasibility", {
                    defaultValue: "Subject to technical feasibility in your area.",
                  })}
                </p>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-[#09094d] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  {t("statePage.applyNow", { defaultValue: "Apply Now" })}
                </a>
              </article>
            ))}
          </div>
        )}

        {content.plansPdf && (
          <p className="mt-10 text-center">
            <a
              href={content.plansPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#079fdb] underline"
            >
              {t("statePage.morePlans", {
                defaultValue: "For More Local Plans And Details Click here",
              })}
            </a>
          </p>
        )}
      </section>

      {/* Network info */}
      <section className="bg-slate-100 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              {t("statePage.networkTitle", {
                defaultValue: "A Broadband Internet Network Like, No Other.",
              })}
            </h2>
            <h3 className="mt-6 text-lg font-semibold">
              {t("statePage.backboneTitle", {
                defaultValue: "Pan India Optical Fiber Backbone",
              })}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {t("statePage.backboneDesc", {
                defaultValue:
                  "RailWire Broadband streams through India’s largest, nation-wide optical fiber network, running along railway tracks, reaching every remote village and town, in the farthest corners of the country.",
              })}
            </p>
            <h3 className="mt-6 text-lg font-semibold">
              {t("statePage.entrepreneurshipTitle", {
                defaultValue: "Empowering Local Entrepreneurship",
              })}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {t("statePage.entrepreneurshipDesc", {
                defaultValue:
                  "RailWire Broadband partners with local entrepreneurs to provide last-mile broadband connectivity to customers.",
              })}
            </p>
            <Link
              to="/agnps"
              className="mt-6 inline-block bg-[#09094d] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              {t("partner.become", { defaultValue: "Become A Partner" })}
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {t("statePage.tagline", {
                defaultValue: "RailWire is not just another Broadband Connection.",
              })}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {t("statePage.railtelP1", {
                defaultValue:
                  "We are a retail broadband initiative from RailTel – a Navratna CPSE under Ministry of Railways, Government of India who enable local cable operators to leverage their existing cable network to additionally provide broadband internet connectivity to their subscribers in partnership with RailTel.",
              })}
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {t("statePage.railtelP2", {
                defaultValue:
                  "Local Cable operators who sign-up with RailTel and offer RailWire Broadband Connections are called Access Network Providers (ANPs). RailTel further appoints Managed Service Providers (MSPs) in all its circles to support these ANPs with Technology, Customer Care and Marketing.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Offices & MSP */}
      {(office || content.msp) && (
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          {office && (
            <div>
              <h3 className="text-xl font-bold">
                {t("statePage.officesTitle", {
                  state: localizedStateName,
                  defaultValue: `Our Offices in ${localizedStateName}`,
                })}
              </h3>
              <address className="mt-3 text-sm not-italic leading-6 text-gray-600">
                {office.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </address>
            </div>
          )}
          {content.msp && (
            <div>
              <h3 className="text-xl font-bold">
                {t("statePage.mspTitle", {
                  state: localizedStateName,
                  defaultValue: `Our RailWire ${localizedStateName} MSP`,
                })}
              </h3>
              <address className="mt-3 text-sm not-italic leading-6 text-gray-600">
                <div className="font-semibold text-[#09094d]">{mspName}</div>
                {mspAddress?.map((l) => (
                  <div key={l}>{l}</div>
                ))}
                {content.msp.email && (
                  <div className="mt-2">
                    {t("statePage.emailLabel", { defaultValue: "Email:" })} {content.msp.email}
                  </div>
                )}
              </address>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
