import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Briefcase,
  Store,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Minus,
  Plus,
  ChevronRight,
  Check,
} from "lucide-react";
import { img } from "../components/railwire/assets";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/business")({
  component: BusinessPage,
});

export function BusinessPage() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: t("businessPage.faqs.0.q", {
        defaultValue: "How Can I Get a New RailWire Connection?",
      }),
      a: t("businessPage.faqs.0.a", {
        defaultValue:
          "You can apply for a new connection through our website or contact your nearest local partner. Our team will assist you with quick installation and activation based on your location.",
      }),
    },
    {
      q: t("businessPage.faqs.1.q", {
        defaultValue: "What Documents Are Required For Installation?",
      }),
      a: t("businessPage.faqs.1.a", {
        defaultValue:
          "To get a new connection, you need a valid ID proof (such as Aadhar card), a passport-size photograph, and an active mobile number for registration.",
      }),
    },
    {
      q: t("businessPage.faqs.2.q", {
        defaultValue: "Are There Any Installation Charges?",
      }),
      a: t("businessPage.faqs.2.a", {
        defaultValue:
          "Yes, installation charges may apply depending on your location and plan. Our team will inform you about the exact cost before proceeding.",
      }),
    },
    {
      q: t("businessPage.faqs.3.q", {
        defaultValue: "Is The Internet Plan Unlimited?",
      }),
      a: t("businessPage.faqs.3.a", {
        defaultValue:
          "Yes, RailWire offers unlimited broadband plans. However, speeds may be adjusted as per Fair Usage Policy (FUP) after a certain limit.",
      }),
    },
  ];

  return (
    <main className="bg-white pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex h-[500px] items-center justify-start px-6 lg:px-24">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img("2024/08/slider-1-layer-2.jpg")})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl text-white">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-3 w-6 rounded-full border-2 border-[#1db8fa] bg-[#1db8fa]/70" />
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#1db8fa]">
              {t("businessPage.hero.tag", { defaultValue: "Smart Shop Connectivity" })}
            </span>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold leading-[1.2] md:text-6xl">
            {t("businessPage.hero.title1", { defaultValue: "Uninterrupted Connectivity" })} <br />
            {t("businessPage.hero.title2", {
              defaultValue: "Built to Drive Your Store Sales",
            })}
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            {t("businessPage.hero.desc", {
              defaultValue:
                "Power your daily shop operations with zero downtime from instant digital payments and live CCTV monitoring to cloud POS and seamless customer Wi-Fi.",
            })}
          </p>
        </div>
      </section>

      {/* ================= SOLUTIONS SECTION ================= */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="font-display text-2xl font-bold text-[#1db8fa]">
            {t("businessPage.solutions.heading", {
              defaultValue: "Connectivity Solutions for Every Business",
            })}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-500">
            {t("businessPage.solutions.subheading", {
              defaultValue:
                "Choose the right solution for your business needs. We serve Corporate, SME and MSME customers with tailored broadband and enterprise connectivity solutions.",
            })}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <Building2 className="h-8 w-8 text-white" />,
              title: t("businessPage.solutions.corporate.title", { defaultValue: "Corporate" }),
              desc: t("businessPage.solutions.corporate.desc", {
                defaultValue:
                  "Enterprise-grade connectivity and networking solutions for organizations with demanding connectivity requirements",
              }),
            },
            {
              icon: <Briefcase className="h-8 w-8 text-white" />,
              title: t("businessPage.solutions.sme.title", { defaultValue: "SME" }),
              desc: t("businessPage.solutions.sme.desc", {
                defaultValue:
                  "Reliable and economical broadband solutions designed to support growing businesses.",
              }),
            },
            {
              icon: <Store className="h-8 w-8 text-white" />,
              title: t("businessPage.solutions.msme.title", { defaultValue: "MSME" }),
              desc: t("businessPage.solutions.msme.desc", {
                defaultValue:
                  "Flexible and scalable connectivity solutions designed around the needs of small and medium businesses.",
              }),
            },
          ].map((box, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center rounded-[2rem] bg-[#f8f9fa] px-8 pb-10 pt-14 text-center shadow-sm"
            >
              <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1db8fa]">
                  {box.icon}
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-[#0b1c4d]">{box.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-12 px-6 md:flex-row">
          <div className="flex flex-1 flex-col gap-10">
            {[
              {
                icon: <Briefcase />,
                title: t("businessPage.whyChoose.f1", {
                  defaultValue: "Competitive Business Tariffs",
                }),
              },
              {
                icon: <ShieldCheck />,
                title: t("businessPage.whyChoose.f2", { defaultValue: "Reliable Connectivity" }),
              },
              {
                icon: <CheckCircle2 />,
                title: t("businessPage.whyChoose.f3", {
                  defaultValue: "Economical And Scalable Connectivity Solutions.",
                }),
              },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f7f9] text-[#1db8fa]">
                  {f.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1c4d]">{f.title}</h4>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <img
              src={img("2026/06/ach-kumar-1-e1782174096422.png")}
              alt="Business professional"
              className="mx-auto h-[300px] object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col gap-10 text-left">
            {[
              {
                icon: <Building2 />,
                title: t("businessPage.whyChoose.f4", {
                  defaultValue: "Solutions for Corporate, SME And MSME Customers",
                }),
              },
              {
                icon: <TrendingUp />,
                title: t("businessPage.whyChoose.f5", { defaultValue: "Scalable Solutions" }),
              },
              {
                icon: <CheckCircle2 />,
                title: t("businessPage.whyChoose.f6", {
                  defaultValue: "Grow Seamlessly With Your Business Needs.",
                }),
              },
            ].map((f, i) => (
              <div key={i} className="flex flex-row-reverse items-center gap-4 text-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f7f9] text-[#1db8fa]">
                  {f.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1c4d]">{f.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS SECTION ================= */}
      <section className="bg-[#f8f9fa] py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#0b1c4d]">
            {t("businessPage.benefits.heading", {
              defaultValue: "Key business broadband benefits",
            })}
          </h2>

          <div className="flex flex-col gap-6">
            {/* Benefit 1 */}
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1db8fa] text-white">
                <Briefcase />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#0b1c4d]">
                  {t("businessPage.benefits.b1.title", {
                    defaultValue: "Competitive Business Broadband Tariffs",
                  })}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t("businessPage.benefits.b1.desc", {
                    defaultValue:
                      "Flexible and cost-effective broadband plans tailored to SME and MSME connectivity needs, with options to support business growth and changing bandwidth requirements.",
                  })}
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1db8fa] text-white">
                <ShieldCheck />
              </div>
              <div className="w-full">
                <h3 className="font-display text-xl font-bold text-[#0b1c4d]">
                  {t("businessPage.benefits.b2.title", { defaultValue: "Static IP Facility" })}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t("businessPage.benefits.b2.desc", {
                    defaultValue:
                      "Support remote access, CCTV surveillance, VPN connectivity, hosting and other business applications with a dedicated static IP facility.",
                  })}
                </p>
                <div className="mt-6 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-[#1db8fa]" />{" "}
                    {t("businessPage.benefits.b2.sme", { defaultValue: "SME Customers" })}
                    <span className="text-xs text-gray-400">
                      {t("businessPage.benefits.b2.smeFree", {
                        defaultValue: "Static IP provided free of cost.",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-[#1db8fa]" />{" "}
                    {t("businessPage.benefits.b2.msme", { defaultValue: "MSME Customers" })}
                    <span className="text-xs text-gray-400">
                      {t("businessPage.benefits.b2.msmePaid", {
                        defaultValue: "Static IP facility available on a paid basis.",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1db8fa] text-white">
                <TrendingUp />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#0b1c4d]">
                  {t("businessPage.benefits.b3.title", {
                    defaultValue: "Scalable Connectivity",
                  })}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {t("businessPage.benefits.b3.desc", {
                    defaultValue:
                      "Choose connectivity solutions to suit your current business needs and expand as your operations, users and network requirements grow.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="relative overflow-hidden bg-[#0b1c4d] py-24 text-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${img("2026/03/social-image.png")})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-white">
          <p className="mb-6 text-lg text-white/90">
            {t("businessPage.cta.desc", {
              defaultValue:
                "Go beyond broadband with RailTel’s comprehensive portfolio of enterprise connectivity and managed network solutions.",
            })}
          </p>
          <a
            href="https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner"
            className="inline-flex items-center gap-2 rounded bg-[#1db8fa] px-8 py-3 font-display text-sm font-bold text-white transition hover:bg-white hover:text-[#1db8fa]"
          >
            {t("businessPage.cta.btn", { defaultValue: "Get A Business Connection" })}{" "}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-3xl bg-[#f3f4f6] transition-all duration-300 ${openFaq === i ? "rounded-3xl" : ""}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center gap-4 p-4 text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1c29] text-white">
                    {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                  <span className="font-display text-lg font-semibold capitalize text-[#0b1c4d]">
                    {faq.q}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-16 pb-6 text-sm leading-relaxed text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* OTT Activation */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f3f4f6] text-[#1db8fa]">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0b1c4d]">
              {t("businessPage.ott.title", { defaultValue: "OTT Activation" })}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {t("businessPage.ott.desc", {
                defaultValue: "Watch this video to know how to activate your OTT",
              })}
            </p>

            <div className="mt-8 w-full max-w-sm overflow-hidden rounded-2xl bg-[#3b0764] p-4 shadow-xl">
              <img src={img("2026/03/ott.png")} alt="OTT Apps" className="w-full object-contain" />
            </div>

            <a
              href="/faq"
              className="mt-10 inline-flex items-center gap-2 rounded bg-[#3b0764] px-10 py-3 font-semibold text-white transition hover:bg-[#0b1c4d]"
            >
              {t("businessPage.ott.viewAll", { defaultValue: "View All" })}{" "}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
