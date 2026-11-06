import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/anps")({
  component: ANPsPage,
});

function ANPsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#eaf8fc]">
      {/* ANP HERO SECTION */}
      <section
        className="relative min-h-[304px] overflow-hidden bg-[#06317f] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url("${img("2024/08/slider-1-layer-2.jpg")}")`,
        }}
      >
        <div className="absolute inset-0 bg-[#002b79]/75" />

        <div className="relative mx-auto grid min-h-[304px] max-w-[1200px] items-center gap-8 px-6 py-8 md:grid-cols-[35%_65%]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-[22px] bg-white text-[#0b328a] shadow-lg">
              <span className="text-lg font-medium tracking-[5px] text-gray-800">access</span>
              <span className="text-xs text-black">Network Provider</span>
              <span className="text-4xl font-bold">ANP</span>
              <span className="mt-1 text-[8px] text-gray-700">
                {t("anpPage.badgeSub", { defaultValue: "Last Mile Connectivity" })}
              </span>
            </div>

            <h2 className="mb-5 max-w-[290px] text-base font-bold leading-5">
              {t("anpPage.badgeFor", {
                defaultValue:
                  "For Local Cable Operators who have an active network of subscribers with co-axial/optical fiber connectivity.",
              })}
            </h2>

            <a
              href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner"
              className="rounded bg-[#00b8ef] px-6 py-2 text-sm font-semibold text-white shadow transition hover:bg-sky-600"
            >
              {t("anpPage.applyBtn", { defaultValue: "Apply For ANP" })}
            </a>
          </div>

          {/* RIGHT CONTENT */}
          <div className="mx-auto max-w-[600px]">
            <h1 className="mb-3 text-2xl font-bold md:text-3xl">
              {t("anpPage.heroTitle", { defaultValue: "Become a RailWire Business Partner" })}
            </h1>

            <p className="text-sm leading-6 text-white">
              {t("anpPage.heroDesc", {
                defaultValue:
                  "RailTel works with MSPs and ANPs to take high speed broadband internet to all parts of the country through its 61,000+ km optical fibre backbone and you could qualify to become a partner in making wired broadband available to your community. Not only will this add to your monthly income, but you will also serve as an example of local entrepreneurship to thousands of young minds in your area.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="bg-white px-6 py-7 text-center">
        <h2 className="mx-auto max-w-[650px] text-xl font-bold leading-6 text-[#0b2c78] md:text-2xl">
          {t("anpPage.definition", {
            defaultValue:
              "A RailWire ANP is a Local Cable Operator with at least 50 active cable subscribers on optical fibre, co-axial cable or wireless connectivity.",
          })}
        </h2>
      </section>

      {/* LIGHT BLUE CONTENT AREA */}
      {/* SERVICES SECTION */}
      <section className="bg-[#eaf8fc] px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {/* Service 01 */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#35b8df] text-3xl font-bold leading-none text-white shadow-sm">
              »
            </span>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#43c0e3]">
                {t("anpPage.serviceTitle", { n: "01", defaultValue: "Service 01" })}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {t("anpPage.s1", {
                  defaultValue:
                    "Formal building permission is obtained from building owners or apartment associations. Permissions shall include, but not be limited to allocating space for equipment rack, LAN switch, fiber termination in the Building & premises. Power supply arrangement & right to draw electricity from the building/apartment and in-building/premises. Cable-laying works to connect subscribers.",
                })}
              </p>
            </div>
          </div>

          {/* Service 02 */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#35b8df] text-3xl font-bold leading-none text-white shadow-sm">
              »
            </span>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#43c0e3]">
                {t("anpPage.serviceTitle", { n: "02", defaultValue: "Service 02" })}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {t("anpPage.s2", {
                  defaultValue:
                    "Charges, if any, towards electricity drawn from the building payable by the ANP. In the event the building owner or building association demands rental charges towards rack-space, the same is borne by the ANP.",
                })}
              </p>
            </div>
          </div>

          {/* Service 03 */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#35b8df] text-3xl font-bold leading-none text-white shadow-sm">
              »
            </span>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#43c0e3]">
                {t("anpPage.serviceTitle", { n: "03", defaultValue: "Service 03" })}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {t("anpPage.s3", {
                  defaultValue:
                    "The access network from RailTel’s POP to the customer premises is built and maintained by the ANP.",
                })}
              </p>
            </div>
          </div>

          {/* Service 04 */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#35b8df] text-3xl font-bold leading-none text-white shadow-sm">
              »
            </span>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#43c0e3]">
                {t("anpPage.serviceTitle", { n: "04", defaultValue: "Service 04" })}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {t("anpPage.s4", {
                  defaultValue:
                    "The ANP provides end-to-end customer premise installation and support, ensuring optimal fiber line connectivity.",
                })}
              </p>
            </div>
          </div>

          {/* Service 05 */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#35b8df] text-3xl font-bold leading-none text-white shadow-sm">
              »
            </span>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#43c0e3]">
                {t("anpPage.serviceTitle", { n: "05", defaultValue: "Service 05" })}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {t("anpPage.s5", {
                  defaultValue:
                    "The ANP delivers prompt troubleshooting and local maintenance to minimize any network downtime.",
                })}
              </p>
            </div>
          </div>

          {/* Service 06 */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#35b8df] text-3xl font-bold leading-none text-white shadow-sm">
              »
            </span>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#43c0e3]">
                {t("anpPage.serviceTitle", { n: "06", defaultValue: "Service 06" })}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {t("anpPage.s6", {
                  defaultValue:
                    "Continuous coordination with RailTel and the MSP ensures top-tier broadband quality for every subscriber.",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
