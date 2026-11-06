import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp, Download, MessageCircle, Play } from "lucide-react";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

type QA = { question: string; answer: string };
type Video = { id: string; title: string; url: string; thumbnail?: string };

const faqCategories: { id: string; label: string; items: QA[] }[] = [
  {
    id: "general",
    label: "General & Connection",
    items: [
      {
        question: "What is RailWire broadband?",
        answer:
          "RailWire is a high-speed fiber broadband service designed to deliver fast, stable, and reliable internet connectivity for both homes and businesses. It uses advanced fiber-optic technology to ensure better speed, low latency, and uninterrupted performance for activities like streaming, online classes, gaming, and office work.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Installation is usually completed within 1 to 3 working days after your request is confirmed. The exact time may vary depending on your location, network availability, and technical feasibility. Our team will keep you informed throughout the process.",
      },
      {
        question: "How can I apply for a new connection?",
        answer:
          "Getting a new connection is simple. You can apply directly through our website by filling out the connection form, or you can contact your nearest local partner. Once your request is received, our team will verify your location, guide you through the available plans, and schedule installation at your convenience.",
      },
      {
        question: "What documents are required for a new connection?",
        answer:
          "You may be asked to provide basic identity and address details. Please confirm the required documents with your local RailWire service provider. To process your connection request, you will need a valid identity proof such as an Aadhar card, a passport-size photograph, and an active mobile number. These details are required for registration and verification purposes to ensure a smooth onboarding process.",
      },
      {
        question: "Is RailWire available in my area?",
        answer:
          "RailWire services are rapidly expanding across urban and rural regions. To check availability, you can enter your location on our website or contact our support team. If service is not currently available, we may still be able to assist through nearby partners.",
      },
    ],
  },
  {
    id: "support",
    label: "Support & Troubleshooting",
    items: [
      {
        question: "What should I do if my internet is not working?",
        answer:
          "If your internet stops working, first try restarting your router by turning it off and on after a few seconds. Check if cables are properly connected. If the issue continues, contact our support team or your local partner for quick assistance.",
      },
      {
        question: "How can I check my internet speed?",
        answer:
          "You can check your internet speed using online tools like Speedtest. Simply open the website and click “Go” to measure your download and upload speeds. For accurate results, ensure no other devices are using the network during the test.",
      },
      {
        question: "How do I change my WiFi password?",
        answer:
          "To change your WiFi password, log in to your router settings using the IP address (usually mentioned on the router). Enter your username and password, navigate to wireless settings, and update your WiFi password. Save changes and reconnect your devices.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our customer support team via phone, WhatsApp, or email. Our support team is available to assist you with installation, billing, and technical issues to ensure a smooth experience.",
      },
      {
        question: "What should I do if my connection is slow?",
        answer:
          "If your internet speed is slow, check for background downloads, limit the number of connected devices, and restart your router. If the issue persists, contact support to check for network issues or plan-related limitations.",
      },
    ],
  },
  {
    id: "plans",
    label: "Plans, Billing & Usage",
    items: [
      {
        question: "What are the available plans?",
        answer:
          "RailWire offers a variety of broadband plans tailored to different needs, including home users, small businesses, and enterprises. Plans vary based on speed, data usage, and pricing, allowing you to choose the one that best suits your requirements.",
      },
      {
        question: "Are the plans unlimited?",
        answer:
          "Yes, most RailWire plans come with unlimited data usage. However, under the Fair Usage Policy (FUP), speeds may be reduced after a certain data limit is reached. This ensures fair usage across all users while still providing continuous internet access.",
      },
      {
        question: "How can I pay my bill?",
        answer:
          "You can conveniently pay your bills online using UPI, debit/credit cards, net banking, or through your local service provider. Some partners may also offer offline payment options. Timely payment ensures uninterrupted service.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes, you have the flexibility to upgrade or downgrade your plan at any time. Simply contact our support team or your local partner, and they will assist you in selecting and activating a new plan based on your needs.",
      },
      {
        question: "Will I receive a bill or invoice?",
        answer:
          "Yes, a detailed invoice is generated for every payment you make. You can access it through your account or receive it from your service provider. This helps you track your usage and billing history.",
      },
    ],
  },
];

const guides = [
  {
    id: "wifi",
    title: "WiFi Setup Guide",
    description: "Step-by-step instructions to configure your router.",
    file: "/guides/WiFi_Setup_Guide.pdf",
  },
  {
    id: "billing",
    title: "Billing & Payment Guide",
    description: "Learn how to pay bills, track payments, and download invoices.",
    file: "/guides/Billing_Payment_Guide.pdf",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting Guide",
    description: "Quick fixes and solutions for common internet and connectivity issues.",
    file: "/guides/Troubleshooting_Guide.pdf",
  },
];

const videoCategories = [
  { id: "getting", label: "Getting Started" },
  { id: "account", label: "Account & Billing" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "router", label: "Router & Settings" },
  { id: "advanced", label: "Advanced / Awareness" },
];

const videosByCategory: Record<string, Video[]> = {
  getting: [
    {
      id: "apply",
      title: "How to Apply for a New Broadband Connection",
      url: "https://youtu.be/-57M0qyFYv4?si=2dAAu78hgQjMEOOH",
      thumbnail: img("How to Apply for a New Broadband Connection (1).png"),
    },
    {
      id: "installation",
      title: "RailWire Installation Process Explained Step-by-Step",
      url: "https://youtu.be/iW7tjSnI_N4?si=RSTJpxACg28roOSv",
      thumbnail: img("RailWire Installation Process Explained Step-by-Step (1).png"),
    },
    {
      id: "chooseplan",
      title: "How to Choose the Right Internet Plan for Your Needs",
      url: "https://youtu.be/AwTGiRvO4Ao?si=9p1f2CtuNM5Vhylt",
      thumbnail: img("How to choose plan.png"),
    },
  ],
  account: [
    {
      id: "payBill",
      title: "How to Pay Your Broadband Bill Online (UPI, Card & More)",
      url: "https://youtu.be/wr0S8TbSs_o?si=IdLv3Stm1H6-mi_I",
      thumbnail: img("pay bill.png"),
    },
    {
      id: "invoice",
      title: "How to Download Your Invoice or Payment Receipt",
      url: "https://youtu.be/-Dmdc0tCc6s?si=g5WFEEtXRK3n2413",
      thumbnail: img("download invoice.png"),
    },
    {
      id: "upgrade",
      title: "How to Upgrade or Change Your Internet Plan",
      url: "https://youtu.be/XCibzOEflQw?si=hk28Tug97a5y8gDY",
      thumbnail: img("plan change.png"),
    },
  ],
  troubleshooting: [],
  router: [],
  advanced: [],
};

function FAQPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [activeVideoCategory, setActiveVideoCategory] = useState("getting");

  const category = faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0]!;
  const videos = videosByCategory[activeVideoCategory] ?? [];

  return (
    <main className="min-h-screen bg-white text-[#09094d]">
      {/* FAQ Hero */}
      <section className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-gradient-to-r from-[#26004e] via-[#31006d] to-[#110044] px-5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -bottom-40 left-0 h-80 w-full rounded-[50%] border border-fuchsia-400" />
          <div className="absolute -bottom-32 left-0 h-72 w-full rounded-[50%] border border-cyan-400" />
          <div className="absolute -bottom-24 left-0 h-64 w-full rounded-[50%] border border-fuchsia-500" />
          <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_25px_10px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="relative z-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {t("faqPage.hero.eyebrow", { defaultValue: "RailWire Customer Support" })}
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t("faqPage.hero.title", { defaultValue: "FAQ" })}
          </h1>
          <p className="mt-4 text-sm text-white/70">
            {t("faqPage.hero.subtitle", {
              defaultValue: "We are here to help you stay connected.",
            })}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t("faqPage.heading.title", {
              defaultValue: "Support & Frequently Asked Questions",
            })}
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            {t("faqPage.heading.text", {
              defaultValue:
                "Find quick answers to common questions about our services, plans, and support.",
            })}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_0.9fr]">
          {/* Questions */}
          <div className="rounded border border-gray-200 p-3 md:p-4">
            <div className="mb-5 grid grid-cols-1 gap-1 sm:grid-cols-3">
              {faqCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCategory(c.id);
                    setOpenQuestion(0);
                  }}
                  className={`min-h-11 px-3 py-3 text-xs font-semibold transition ${
                    activeCategory === c.id
                      ? "bg-[#079fdb] text-white"
                      : "bg-[#09094d] text-white hover:bg-blue-900"
                  }`}
                >
                  {t(`faqPage.categories.${c.id}`, { defaultValue: c.label })}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {category.items.map((item, index) => {
                const isOpen = openQuestion === index;

                return (
                  <div key={item.question} className="overflow-hidden rounded-xl bg-[#eeede8]">
                    <button
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-[#10102e]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#079fdb]">
                          {isOpen ? "−" : "+"}
                        </span>
                        {t(`faqPage.items.${category.id}.${index}.question`, {
                          defaultValue: item.question,
                        })}
                      </span>
                      {isOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                    </button>

                    {isOpen && (
                      <div className="border-t border-white/70 px-4 py-4 text-sm leading-6 text-gray-500">
                        {t(`faqPage.items.${category.id}.${index}.answer`, {
                          defaultValue: item.answer,
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Guides */}
          <aside className="border border-gray-200 p-4">
            <h3 className="text-center text-lg font-bold">
              {t("faqPage.guidesTitle", { defaultValue: "Guides And Downloads" })}
            </h3>
            <p className="mb-5 mt-2 text-center text-xs text-gray-400">
              {t("faqPage.guidesText", { defaultValue: "Helpful guides and manuals to download" })}
            </p>

            {guides.map((guide) => (
              <div key={guide.id} className="border-b border-gray-200 py-5 last:border-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-medium">
                    {t(`faqPage.guides.${guide.id}.title`, { defaultValue: guide.title })}
                  </h4>

                  <a
                    href={guide.file}
                    download
                    className="flex shrink-0 items-center gap-1 bg-[#09094d] px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800"
                  >
                    <Download size={13} />
                    {t("faqPage.downloadHere", { defaultValue: "Download Here" })}
                  </a>
                </div>
                <p className="mt-3 text-xs leading-5 text-gray-600">
                  {t(`faqPage.guides.${guide.id}.description`, {
                    defaultValue: guide.description,
                  })}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#27005d] via-[#17105f] to-[#0066c9] px-5 py-12">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-10 text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("faqPage.videoTitle1", { defaultValue: "Watch easy-to-follow videos" })}
              <br />
              {t("faqPage.videoTitle2", { defaultValue: "and resolve issues quickly." })}
            </h2>
            <p className="mt-4 text-sm text-white/80">
              {t("faqPage.videoText", {
                defaultValue: "Step-by-step tutorials to guide you at every stage.",
              })}
            </p>
          </div>

          <div className="grid gap-4 bg-white p-4 md:grid-cols-[180px_1fr] md:p-6">
            <div className="flex flex-col gap-1">
              {videoCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveVideoCategory(c.id)}
                  className={`px-3 py-3 text-xs font-medium text-white ${
                    activeVideoCategory === c.id ? "bg-[#079fdb]" : "bg-[#09094d] hover:bg-blue-900"
                  }`}
                >
                  {t(`faqPage.videoCategories.${c.id}`, { defaultValue: c.label })}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, index) => {
                const title = t(`faqPage.videos.${video.id}`, { defaultValue: video.title });
                return (
                  <button
                    key={video.id}
                    className="group overflow-hidden border-2 border-[#09094d] text-left"
                    onClick={() => {
                      if (video.url) {
                        window.open(video.url, "_blank", "noopener,noreferrer");
                      } else {
                        alert(
                          t("faqPage.comingSoon", {
                            defaultValue: "This tutorial video is coming soon.",
                          }),
                        );
                      }
                    }}
                  >
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-[#070744] to-[#087fce]">
                      {video.thumbnail && (
                        <>
                          <img
                            src={video.thumbnail}
                            alt={title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30" />
                        </>
                      )}

                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-sky-400 text-sky-400 transition group-hover:scale-110">
                        <Play size={27} fill="currentColor" />
                      </div>
                      <span className="absolute bottom-2 left-2 z-10 text-xs font-bold text-white">
                        {t("faqPage.tutorialLabel", {
                          n: index + 1,
                          defaultValue: "RAILWIRE TUTORIAL {{n}}",
                        })}
                      </span>
                    </div>

                    <div className="min-h-20 bg-slate-100 p-3 text-sm font-semibold leading-5">
                      {title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition hover:scale-105"
        aria-label={t("faqPage.chatAria", { defaultValue: "Chat with us" })}
        onClick={() =>
          alert(
            t("faqPage.chatAlert", {
              defaultValue: "Connect your RailWire chat support here.",
            }),
          )
        }
      >
        <MessageCircle size={25} />
      </button>
    </main>
  );
}
