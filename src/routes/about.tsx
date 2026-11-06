import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Award, Globe, Wifi, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Testimonials } from "../components/railwire/Sections";

import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* HERO BANNER */}
      <section className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-gradient-to-r from-[#09002f] via-[#270078] to-[#6500c7] px-5 py-16 md:min-h-[220px]">
        <div className="absolute inset-0">
          <div className="absolute left-[5%] top-8 grid grid-cols-5 gap-5 opacity-50">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-purple-400" />
            ))}
          </div>

          <div className="absolute left-[17%] top-1/2 h-8 w-8 rounded-full bg-purple-700/30" />

          <div className="absolute right-[-100px] top-[-180px] h-[500px] w-[500px] rounded-full border border-purple-400/20" />

          <div className="absolute right-[-70px] top-[-150px] h-[450px] w-[450px] rounded-full border border-purple-400/20" />

          <div className="absolute right-[-40px] top-[-120px] h-[400px] w-[400px] rounded-full border border-purple-400/20" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-3xl font-bold text-white md:text-4xl"
        >
          {t("aboutPage.heroTitle", { defaultValue: "About Railwire" })}
        </motion.h1>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <img
              src={img("fatherandson.jpg")}
              alt="RailWire connectivity"
              className="h-[300px] w-full object-cover md:h-[380px]"
            />

            {/* YEARS BADGE */}
            <div className="absolute -left-3 top-10 flex h-28 w-28 flex-col items-center justify-center bg-[#079fdf] text-center text-white shadow-lg md:-left-7 md:h-32 md:w-32">
              <Award size={35} />

              <h3 className="mt-2 text-lg font-bold">
                {t("aboutPage.yearsBadge.years", { defaultValue: "10+ Years" })}
              </h3>

              <p className="text-xs">
                {t("aboutPage.yearsBadge.label", { defaultValue: "of Connectivity" })}
              </p>
            </div>

            {/* SMALL OVERLAPPING IMAGE */}
            <div className="absolute -bottom-8 right-0 w-[45%] overflow-hidden rounded-xl border-[6px] border-white shadow-xl md:-right-5">
              <img
                src={img("internet-for-school.jpg")}
                alt="Student using internet"
                className="h-28 w-full object-cover md:h-36"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6 lg:pt-0"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="relative h-3 w-7 rounded-full bg-[#08a5e5]">
                <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-base font-bold text-[#08a5e5]">
                {t("aboutPage.eyebrow", { defaultValue: "ABOUT OUR INTERNET" })}
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#292938] md:text-5xl">
              {t("aboutPage.title.line1", { defaultValue: "Reliable Internet" })}
              <br />
              {t("aboutPage.title.powered", { defaultValue: "Powered by Railtel" })}{" "}
              <span className="text-[#08a5e5]">
                {t("aboutPage.title.network", { defaultValue: "Network" })}
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              {t("aboutPage.desc", {
                defaultValue:
                  "Enjoy high-speed fiber internet with smooth browsing, streaming, and downloads. RailWire ensures stable and consistent connectivity for all your daily needs.",
              })}
            </p>

            <div className="mt-8 flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[#00a5e5]">
                <Globe size={38} />
              </div>

              <div>
                <h3 className="font-bold text-gray-800">
                  {t("aboutPage.fastConnected.title", { defaultValue: "Fast Connected" })}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {t("aboutPage.fastConnected.desc", {
                    defaultValue:
                      "Connecting people through reliable internet connectivity and advanced fiber infrastructure.",
                  })}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-sky-200 px-4 py-2 text-sm font-bold text-sky-500">
                {t("aboutPage.happyUsers", { defaultValue: "2.5M HAPPY USERS" })}
              </span>

              <div className="flex items-center -space-x-3">
                <img
                  src={img("2024_08_user-1.png")}
                  alt="RailWire user"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={img("2024_08_user-2.png")}
                  alt="RailWire user"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={img("2024_08_user-3.png")}
                  alt="RailWire user"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-bold">
                  +65
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE RAILWIRE BROADBAND */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={img("power.jpg")}
              alt="Family enjoying RailWire broadband"
              className="h-[300px] w-full object-cover md:h-[390px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold leading-tight text-[#59b9e6] md:text-3xl">
              {t("aboutPage.experience.title1", { defaultValue: "Experience the Power of" })}
              <br />
              {t("aboutPage.experience.title2", { defaultValue: "RailWire Broadband" })}
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              {t("aboutPage.experience.p1", {
                defaultValue:
                  "RailWire is a high-speed fiber broadband service powered by RailTel, designed to deliver reliable and affordable internet connectivity to homes, businesses, and communities across India.",
              })}
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {t("aboutPage.experience.p2", {
                defaultValue:
                  "With advanced optical fiber infrastructure and high-speed broadband plans, RailWire enables seamless streaming, online learning, work-from-home, gaming, video conferencing, and smart home connectivity. RailWire focuses on providing stable internet services with wide network coverage.",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* RELIABLE FIBER BROADBAND */}
      <section className="mx-auto max-w-[1300px] px-5 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl font-bold text-[#59b9e6] md:text-3xl">
              {t("aboutPage.lifestyle.title", {
                defaultValue: "Reliable Fiber Broadband for Every Lifestyle",
              })}
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              {t("aboutPage.lifestyle.p1", {
                defaultValue:
                  "RailTel Corporation of India Ltd. is a Mini Ratna (Category-I) Public Sector Undertaking under the Ministry of Railways, Government of India.",
              })}
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {t("aboutPage.lifestyle.p2", {
                defaultValue:
                  "RailTel owns one of the largest neutral telecom infrastructure networks in the country, built on a nationwide optical fiber cable network laid along railway tracks.",
              })}
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {t("aboutPage.lifestyle.p3", {
                defaultValue:
                  "With a strong digital infrastructure and extensive connectivity across cities, towns, and rural areas, RailTel plays a key role in supporting India's digital transformation by providing telecom, broadband, data center, and network services.",
              })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <img
              src={img("Fiber Broadband.jpg")}
              alt="Family enjoying internet connectivity"
              className="h-[300px] w-full object-cover md:h-[390px]"
            />
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />
    </main>
  );
}
