import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/installation-charges")({
  component: InstallationPage,
});

function InstallationPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="relative mx-3 mt-4 h-[380px] overflow-hidden rounded-[28px] bg-[#2a2c3c] md:mx-6">
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            {t("installationPage.title", { defaultValue: "Installation" })}
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-44 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </section>

      {/* Banner */}
      <img src={img("tech.png")} alt="" className="mt-16 h-[420px] w-full object-cover" />

      <section className="grid md:grid-cols-2">
        <img
          src={img("installationLeft.png")}
          alt="Installation"
          className="min-h-[420px] w-full object-cover"
        />

        <div className="flex flex-col justify-center bg-[#141414] px-8 py-14 md:px-14">
          <h2 className="text-3xl font-bold text-[#38bdf8] md:text-4xl">
            {t("installationPage.heading", {
              defaultValue: "New Installations @ INR 3,000/- across India",
            })}
          </h2>
          <p className="mt-6 leading-7 text-slate-200">
            {t("installationPage.desc", {
              defaultValue:
                "RailWire has standardised a maximum of INR 3,000/- as the one-time installation cost for new connections, including the fiber and customer premises equipment (ONU). For cases where the installation location is beyond the ANP's feasible limit and the ANP is not able to install a new connection for INR 3,000/-, subscribers need to sign the consent form below.",
            })}
          </p>
          <a
            href="/guides/Consent Form - RailWire OTC.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block self-center bg-[#0b5cff] px-8 py-3 text-sm font-semibold text-white hover:bg-[#0a4ad1]"
          >
            {t("installationPage.consentBtn", { defaultValue: "Consent Form" })}
          </a>
        </div>
      </section>
    </main>
  );
}
