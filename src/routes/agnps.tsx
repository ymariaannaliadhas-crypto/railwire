import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/agnps")({
  component: AgnpsPage,
});

const mspServices = [
  {
    title: "Service 01.",
    text: "RailWire's Managed Service Partner (MSP) identifies prospective Access Network Providers (ANPs) and selects suitable ANPs, leading to signing of agreements between RailTel, the MSP and the ANP.",
  },
  {
    title: "Service 02.",
    text: "MSP manages the ANP Networks, Billing and Customer Support through centrally-hosted Operational Support System and Business Support System.",
  },
  {
    title: "Service 03.",
    text: "MSP arranges the requisite infrastructure along with IT accessories like personal computers and thin clients to manage the OSS, BSS, NMS and CRM systems.",
  },
  {
    title: "Service 04.",
    text: "MSP arranges supporting infrastructure like commercial AC power, alternate power source, UPS battery sets, air-conditioning, space and staff.",
  },
  {
    title: "Service 05.",
    text: "RailTel connects the MSP location through fibre to the nearest available network along with the necessary hardware for connectivity and OSS, BSS, NMS and CRM systems.",
  },
  {
    title: "Service 06.",
    text: "MSP facilitates call-centre services with an interface with RailTel's toll-free number and handles queries, complaints and customer maintenance support.",
  },
  {
    title: "Service 07.",
    text: "MSP receives direct queries of the customers through e-mails addressed to the webmail helpdesk.",
  },
  {
    title: "Service 08.",
    text: "MSP operates a service-centre together with requisite skilled manpower on a 24/7/365 basis, specifically for RailWire customers.",
  },
  {
    title: "Service 09.",
    text: "MSP ensures that all legal obligations required of an ISP are fulfilled, including keeping KYC data duly filled and available for inspection.",
  },
  {
    title: "Service 10.",
    text: "MSP does the revenue collections from ANPs and manages the accounting and settlement through the RailWire Billing System.",
  },
  {
    title: "Service 11.",
    text: "RailTel ensures that revenue collections from ANPs are deposited into an escrow account and reconciled on a monthly basis.",
  },
  {
    title: "Service 12.",
    text: "MSP pursues targets fixed by the joint working group consisting of RailTel and MSP officials.",
  },
  {
    title: "Service 13.",
    text: "MSP educates ANPs about the RailWire network, its rules, agreements and operational procedures.",
  },
  {
    title: "Service 14.",
    text: "On a need basis, MSP may enter into independent agreements with financial institutions to offer loan facilities to RailWire subscribers.",
  },
  {
    title: "Service 15.",
    text: "MSP shares with RailTel copies of agreements signed by MSPs in connection with the RailWire business.",
  },
  {
    title: "Service 16.",
    text: "MSP may procure and supply access network equipment and customer-premise equipment subject to RailTel's approval.",
  },
  {
    title: "Service 17.",
    text: "MSP measures periodically the customer experience of brand RailWire in accordance with customer experience standards.",
  },
];

const anpServices = [
  {
    title: "Service 01.",
    text: "Formal building permission is obtained from building owners or apartment associations. Permissions include suitable space for equipment racks, LAN switches, fibre termination and power supply arrangements.",
  },
  {
    title: "Service 02.",
    text: "Charges, if any, towards electricity drawn from the building payable by the ANP. In the event the building owner or building association demands rental charges towards rack-space, the same is borne by the ANP.",
  },
  {
    title: "Service 03.",
    text: "The access network from RailTel's POP to the customer premises is built and maintained by the ANP.",
  },
  {
    title: "Service 04.",
    text: "The ANP provides the service described here, including the necessary equipment and support to users.",
  },
  {
    title: "Service 05.",
    text: "The ANP ensures service availability and supports the network infrastructure for customers.",
  },
  {
    title: "Service 06.",
    text: "The ANP provides maintenance and technical assistance to all connected subscribers.",
  },
];

function ServiceGrid({ services }: { services: { title: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article key={service.title}>
          <h3 className="mb-3 text-sm font-bold">{service.title}</h3>
          <p className="text-xs leading-relaxed text-gray-700">{service.text}</p>
        </article>
      ))}
    </div>
  );
}

function AgnpsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Partner introduction */}
      <section className="bg-gray-300 px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="text-center">
            <img
              src={img("msp.png")}
              alt="Managed Service Provider (MSP)"
              className="mx-auto aspect-square w-full max-w-64 rounded-xl object-contain"
            />
            <h2 className="mt-4 font-bold">
              {t("mspPage.badge", { defaultValue: "Managed Service Provider" })}
            </h2>
            <p className="mt-2 text-xs">
              {t("mspPage.badgeSub", {
                defaultValue:
                  "For companies with a minimum turnover and strengths in marketing and operations.",
              })}
            </p>

            <a
              href="#msp-services"
              className="mt-7 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              {t("hero.achiever.cta", { defaultValue: "Know More" })}
            </a>
          </div>

          <div className="text-center">
            <img
              src={img("anp.png")}
              alt="Access Network Provider (ANP)"
              className="mx-auto aspect-square w-full max-w-64 rounded-xl object-contain"
            />
            <h2 className="mt-4 font-bold">Access Network Provider (ANP)</h2>
            <p className="mt-2 text-xs">
              {t("anpPage.badgeFor", {
                defaultValue:
                  "For local cable operators who have an active network of subscribers with co-axial or optical fibre connectivity.",
              })}
            </p>
            <a
              href="#anp-services"
              className="mt-7 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              {t("hero.achiever.cta", { defaultValue: "Know More" })}
            </a>
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-tight">
              {t("agnpPage.heroTitle", { defaultValue: "Become a RailWire AGNP Partner" })}
            </h1>
            <p className="mt-5 text-sm leading-relaxed">
              {t("anpPage.heroDesc", {
                defaultValue:
                  "RailTel works with MSPs and ANPs to take high-speed broadband internet to all parts of the country through its optical fibre backbone and local connectivity network.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* MSP section */}
      <section className="px-6 py-12 md:px-14">
        <div className="mx-auto max-w-6xl">
          <h2 id="msp-services" className="mx-auto max-w-3xl text-center text-xl font-bold">
            {t("mspPage.eligibility", {
              defaultValue:
                "A RailWire MSP is a company with at least INR 20 Crore turn over and able to execute various services on behalf of RailTel",
            })}
          </h2>

          <img
            src={img("msp.png")}
            alt="Managed Service Provider (MSP)"
            className="mx-auto my-6 h-auto w-40 object-contain"
          />

          <ServiceGrid
            services={mspServices.slice(0, 6).map((s, idx) => ({
              title: t("mspPage.serviceTitle", {
                n: String(idx + 1).padStart(2, "0"),
                defaultValue: s.title,
              }),
              text: t(`mspPage.services.${idx}`, { defaultValue: s.text }),
            }))}
          />
        </div>
      </section>

      <section className="bg-slate-200 px-6 py-12 md:px-14">
        <div className="mx-auto max-w-6xl">
          <ServiceGrid
            services={mspServices.slice(6, 12).map((s, idx) => ({
              title: t("mspPage.serviceTitle", {
                n: String(idx + 7).padStart(2, "0"),
                defaultValue: s.title,
              }),
              text: t(`mspPage.services.${idx + 6}`, { defaultValue: s.text }),
            }))}
          />
        </div>
      </section>

      <section className="px-6 py-12 md:px-14">
        <div className="mx-auto max-w-6xl">
          <ServiceGrid
            services={mspServices.slice(12).map((s, idx) => ({
              title: t("mspPage.serviceTitle", {
                n: String(idx + 13).padStart(2, "0"),
                defaultValue: s.title,
              }),
              text: t(`mspPage.services.${idx + 12}`, { defaultValue: s.text }),
            }))}
          />
        </div>
      </section>

      {/* ANP section */}
      <section className="bg-gray-300 px-6 py-12 md:px-14">
        <div className="mx-auto max-w-6xl">
          <h2 id="anp-services" className="mx-auto max-w-3xl text-center text-xl font-bold">
            {t("anpPage.definition", {
              defaultValue:
                "A RailWire ANP is a Local Cable Operator with at least 50 active cable subscribers on optical fibre, co-axial cable or wireless connectivity.",
            })}
          </h2>

          <img
            src={img("anp.png")}
            alt="Access Network Provider (ANP)"
            className="mx-auto my-6 h-auto w-40 object-contain"
          />

          <ServiceGrid
            services={anpServices.map((s, idx) => ({
              title: t("anpPage.serviceTitle", {
                n: String(idx + 1).padStart(2, "0"),
                defaultValue: s.title,
              }),
              text: t(`anpPage.s${idx + 1}`, { defaultValue: s.text }),
            }))}
          />

          <div className="mt-10 text-center">
            <a
              href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-500 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-gray-100"
            >
              {t("anpPage.applyBtn", { defaultValue: "Apply for ANP" })}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
