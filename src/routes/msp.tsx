import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/msp")({
  component: MSPPage,
});

const defaultServices = [
  "RailWire's Managed Service Partner (MSP) identifies prospective Access Network Providers (ANPs) to be the Multi-Service Operators (MSOs) or the Local Cable Operators (LCOs), evangelizes RailWire business and its uniqueness with the ANPs. MSP short-lists and selects suitable ANPs, leading to signing of agreements between RailTel, the MSP & the ANP. RailTel arranges for connectivity of the ANP location(s) to the RailTel network.",
  "MSP manages the ANP Networks, Billing and Customer Support through the centrally-hosted Operational Support Software System (OSS), Business Support Software System (BSS), Network Management Software System (NMS) and Customer Relationship Management Software System (CRM) of RailTel. MSP will always have access to RailTel's OSS, BSS, NMS and CRM systems.",
  "MSP arranges the requisite infrastructure along with IT accessories like Personal Computers/Thin Clients at its own cost for managing the OSS, BSS, NMS, and CRM systems.",
  "MSP arranges other supporting infrastructure like commercial AC power, alternate power source, UPS battery sets, air-conditioning (cooling), space, and staff.",
  "RailTel connects the MSP Location through fiber/RF from its nearest available network along with all necessary hardware for availability of access to RailTel's centrally-hosted OSS, BSS, NMS, and CRM systems. Wherever feasible, subject to availability, RailTel will offer to the MSP its raw space at nominal price such that the MSP can renovate and create requisite infrastructure for RailWire offices and support centre(s).",
  "MSP facilitates call-center services at its own cost, which will interface with RailTel's toll-free number and handle queries, complaints, and extend maintenance support to RailWire customers.",
  "MSP resolves direct queries of the customers through e-mails addressed to webmaster/helpdesk.",
  "MSP operates a service-center together with requisite skilled manpower on a 24x7x365 basis, specifically for RailWire customers.",
  "MSP ensures that all legal obligations required of an ISP, as mandated by the DoT, including keeping KYC data are fulfilled. These records and processes are made available for monthly and/or quarterly inspection by RailTel and/or DoT officials.",
  "MSP does the revenue collections from ANPs, does the accounting and settlement through the RailWire Billing System. Based on prepayment, RailWire connections are provisioned by RailTel through its regional/territorial Network Operating Centers (NOCs).",
  "RailTel ensures that all revenue collection from ANPs are deposited into an escrow account in a nationalized/first class commercial Bank, opened and maintained by RailTel and reconciled on a monthly basis. The appropriation of revenue to RailTel and MSP is carried out on a weekly basis. Likewise, RailTel reconciles the monthly Bank receipts with the RailWire-provided data in order to confirm complete billing and realization. From time-to-time, the services of the MSP gets audited by RailTel officials and/or third party auditors. Payments to the ANPs are facilitated through a payment gateway.",
  "MSP pursues targets fixed by the joint working group (JWG) consisting of RailTel and ANP officials. MSP deploys necessary resources for branding, marketing, and sales of RailWire services. In consultation with the JWG, MSP organizes outdoor advertisements, print and electronic media advertisements, road-shows, tele-marketing, SMS campaign etc. RailTel will provide the creative inputs for brand-building and campaign advertisements.",
  "MSP educates the ANPs in evangelizing the concept of RailWire and its uniqueness to apartment associations, builders community, various residential colonies as well as the retail community. MSP educates the ANPs on the design rules of the RailWire network that needs to be followed by the ANPs when rolling-out their Aggregation Network, Edge Network, and/or In-Building Network for RailWire. MSPs employ adequate staff trained in networking.",
  "On a need basis, MSP may enter into independent agreements with financial institutions to offer loan facilities to RailWire subscribers for bundled offerings from RailWire – hardware, other devices, or 3rd party software licences. RailTel will not be a party to this agreement. MSP operates a service-center together with requisite skilled manpower on a 24x7x365 basis, specifically for RailWire customers.",
  "MSP shares with RailTel copies of all agreements signed by MSPs in connection with RailWire business, whether or not such agreement required the approval of RailTel.",
  "MSP may procure and supply access network equipment, customer premise equipment (CPE), ethernet-over-coaxial cable modems at competitive rates to ANPs. MSP takes RailTel's approval for technical suitability of equipment being deployed in access bandwidth by the ANP.",
  "MSP measures periodically the customer experience of brand-RailWire in accordance with customer experience fulfilment standards laid down by RailTel so as to ensure that RailWire subscribers perceive similar quality of service irrespective of the Circle/Region that the MSP services.",
];

function MSPPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white">
      {/* MSP HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#05266f] via-[#063b91] to-[#001b57] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -right-20 top-0 h-full w-3/5 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,#38bdf8_1px,transparent_2px)] [background-size:22px_22px]" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-10 md:grid-cols-[260px_1fr] md:py-12">
          {/* MSP LOGO AND APPLY BUTTON */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
              <img
                src={img("msplg-e1782455936956-270x270.png")}
                alt="Managed Service Provider MSP"
                className="h-full w-full object-contain"
              />
            </div>

            <h2 className="mt-4 max-w-[230px] text-sm font-bold leading-tight">
              {t("mspPage.badgeSub", {
                defaultValue:
                  "For companies with a minimum turn over of INR 5 crores and strengths in marketing and operations",
              })}
            </h2>

            <a
              href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner"
              className="mt-5 rounded bg-[#08baf2] px-7 py-2.5 text-sm font-bold text-white shadow transition hover:bg-sky-500"
            >
              {t("mspPage.applyBtn", { defaultValue: "Apply For MSP" })}
            </a>
          </div>

          {/* HERO CONTENT */}
          <div>
            <h1 className="mb-4 text-center font-display text-2xl font-bold md:text-left md:text-3xl">
              {t("mspPage.heroTitle", { defaultValue: "Become a RailWire MSP Partner" })}
            </h1>

            <p className="max-w-3xl text-justify text-sm leading-7 text-blue-50">
              {t("mspPage.heroDesc", {
                defaultValue:
                  "RailTel works with MSPs and ANPs to take high speed broadband internet to all parts of the country through its 61,000+ km optical fibre backbone and you could qualify to become a partner in making wired broadband available to your community. Not only will this add to your monthly income, but you will also serve as an example of local entrepreneurship to thousands of young minds in your area.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* MSP ELIGIBILITY */}
      <section className="px-5 py-8 text-center md:py-10">
        <h2 className="mx-auto max-w-4xl font-display text-xl font-bold leading-tight text-[#092b70] md:text-2xl">
          {t("mspPage.eligibility", {
            defaultValue:
              "A RailWire MSP is a company with at least INR 20 Crore turn over (INR 5 Crore for North East) and able to execute various services on behalf of RailTel",
          })}
        </h2>
      </section>

      {/* MSP SERVICES */}
      <section className="bg-[#eaf8fb]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-12 gap-y-10 px-5 py-8 md:grid-cols-2 md:px-8 md:py-10">
          {defaultServices.map((defaultText, index) => {
            const num = String(index + 1).padStart(2, "0");
            const text = t(`mspPage.services.${index}`, { defaultValue: defaultText });
            return (
              <article key={num} className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#2db9d9] text-xl font-bold text-white shadow-sm">
                  »
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 font-display text-xl font-bold text-[#42bfdc] md:text-2xl">
                    {t("mspPage.serviceTitle", { n: num, defaultValue: `Service ${num}` })}
                  </h3>

                  <p className="text-justify text-xs leading-6 text-gray-500">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
