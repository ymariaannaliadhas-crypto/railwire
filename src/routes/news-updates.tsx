import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/news-updates")({
  component: NewsUpdates,
});

function NewsUpdates() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[450px] items-center justify-center bg-cover bg-center bg-no-repeat px-5 py-24 text-center text-white"
        style={{
          backgroundImage: `url("${img("Futuristic Train and Digital Globe Banner.png")}")`,
        }}
      >
        <div className="absolute inset-0 bg-[#07166e]/30" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold">{t("newsPage.heroTitle")}</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7">{t("newsPage.heroDesc")}</p>
        </div>
      </section>

      {/* LOCAL STORIES */}
      <section className="bg-blue-50 px-5 py-16 text-center">
        <span className="font-semibold uppercase tracking-wider text-sky-500">
          {t("newsPage.localStories")}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-[#12336f]">{t("newsPage.latestFeed")}</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">{t("newsPage.localDesc")}</p>
      </section>

      {/* RAILWAY NEWS */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        {/* LEFT SIDE - IMAGE */}
        <div
          className="relative min-h-[450px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${img("Sunlit High-Speed Train at Sunrise.png")}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-8 left-8 z-10 text-white">
            <h2 className="text-4xl font-bold">{t("newsPage.timelyRailway")}</h2>
            <p className="mt-3 max-w-md text-base">{t("newsPage.timelyDesc")}</p>
          </div>
        </div>

        {/* RIGHT SIDE - NEWS LIST */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-[#12336f]">{t("newsPage.latestRailway")}</h2>

          <div className="divide-y divide-gray-200">
            <a
              href="https://www.railpost.in/scors-guntakal-raichur-section-fully-converted-to-automatic-block-signalling/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-5 hover:text-sky-600"
            >
              <h3 className="font-semibold text-[#12336f]">
                SCoR’s Guntakal–Raichur Section fully converted to Automatic Block Signalling
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                By RailPost News Desk · October 29, 2026 at 7:32 pm
              </p>
            </a>

            <a
              href="https://www.railpost.in/cr-traffic-power-block-at-kasara-yard/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-5 hover:text-sky-600"
            >
              <h3 className="font-semibold text-[#12336f]">
                CR traffic &amp; power block at Kasara yard
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                By RailPost News Desk · October 29, 2026 at 6:50 pm
              </p>
            </a>

            <a
              href="https://www.railpost.in/cr-completes-kavach-4-0-inspection-in-133-km-ahilyanagar-yeola-section/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-5 hover:text-sky-600"
            >
              <h3 className="font-semibold text-[#12336f]">
                CR completes Kavach 4.0 inspection in 133-km Ahilyanagar–Yeola Section
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                By RailPost News Desk · October 29, 2026 at 5:55 pm
              </p>
            </a>

            <a
              href="https://www.railpost.in/paschim-railway-ahmedabad-mandal-asarava-sabarmati-a-cabin-navnirmit-bypass-line-ka-sanraksha-nireekshan-sampann/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-5 hover:text-sky-600"
            >
              <h3 className="font-semibold text-[#12336f]">
                परे अहमदाबाद मंडल: असारवा-साबरमती ‘ए’ केबिन नवनिर्मित बायपास लाइन का संरक्षा
                निरीक्षण संपन्न
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                By RailPost News Desk · October 29, 2026 at 5:19 pm
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY NEWS */}
      <section className="relative overflow-hidden bg-blue-50 px-5 py-16">
        <img
          src={img("tech.png")}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          {/* LEFT SIDE - TECHNOLOGY NEWS */}
          <div>
            <h2 className="mb-3 text-3xl font-bold text-[#12336f]">{t("newsPage.techNews")}</h2>

            <p className="mb-6 text-gray-500">{t("newsPage.techDesc")}</p>

            <div className="divide-y divide-gray-200">
              <a
                href="https://techpp.com/2026/10/29/how-to-recover-deleted-photos-and-videos-from-an-sd-card-using-recoverit/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-5 hover:text-sky-600"
              >
                <h3 className="font-semibold text-[#12336f]">
                  How to Recover Deleted Photos and Videos from an SD Card Using Recoverit
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Recover deleted photos and videos from an SD card using Recoverit 15. Follow
                  simple steps to restore lost files, recover RAW photos, and repair damaged videos.
                </p>
              </a>

              <a
                href="https://techpp.com/2026/10/28/apple-ipad-mini-a20-pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-5 hover:text-sky-600"
              >
                <h3 className="font-semibold text-[#12336f]">
                  Maxed out Mini: 12 Things to Note About Apple’s “Smaller iPad”
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Unpack 12 key details about Apple's new iPad mini, featuring an OLED Acoustic
                  Display, IP67 rating, A20 Pro chip, landscape front camera, and fresh pricing.
                </p>
              </a>

              <a
                href="https://techpp.com/2026/10/28/czur-et-max-scanner/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-5 hover:text-sky-600"
              >
                <h3 className="font-semibold text-[#12336f]">
                  CZUR ET Max Scanner: A Faster and Easier Way To Digitize Hundreds of Books
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  The CZUR ET Max Scanner makes digitizing hundreds of books faster and easier with
                  overhead scanning, automatic curve flattening, foot-pedal capture, and OCR.
                </p>
              </a>

              <a
                href="https://techpp.com/2026/10/27/best-alternatives-to-popular-microsoft-apps-on-windows/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-5 hover:text-sky-600"
              >
                <h3 className="font-semibold text-[#12336f]">
                  Best Alternatives to Popular Microsoft Apps You Should Be Using on Your Windows PC
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Check out the best free alternatives to popular Microsoft apps on Windows,
                  offering better features, faster performance, and greater control over your PC.
                </p>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-5 text-4xl font-bold text-[#12336f]">
              {t("newsPage.techNewsTitle")}
            </h3>

            <img
              src={img("tech-news-rnyp8ltzohg6dh9wbhish4l9lmdunrm6di0npme9co.png")}
              alt="Recoverit photo and video recovery software"
              className="h-auto w-full max-w-[380px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
