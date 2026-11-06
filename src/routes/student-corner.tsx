import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/student-corner")({
  component: StudentCornerPage,
});

const HERO_IMG = img("students.png");
const NEWS_IMG = img("school-lib.png");
const JOBS_IMG = img("clg-students.png");
const TROPHY_IMG = img("trophy.png");

const NEWS = [
  {
    title:
      "How employers are rethinking graduate employability: Axis Bank HR head on what universities must change",
    url: "https://education.economictimes.indiatimes.com/news/industry/how-employers-are-rethinking-graduate-employability-axis-bank-hr-head-on-what-universities-must-change/135322414",
    date: "2026-10-30",
  },
  {
    title: "Why BITS Pilani revamped its undergraduate curriculum, explains Prof V Ramgopal Rao",
    url: "https://education.economictimes.indiatimes.com/news/higher-education/why-bits-pilani-revamped-its-undergraduate-curriculum-explains-prof-v-ramgopal-rao/135257282",
    date: "2026-10-28",
  },
  {
    title: "Not every university needs to become a research institution: Vineet Gupta",
    url: "https://education.economictimes.indiatimes.com/news/higher-education/not-every-university-needs-to-become-a-research-institution-vineet-gupta/135226283",
    date: "2026-10-27",
  },
  {
    title:
      "AI could narrow entry-level career paths, pushing universities to rethink graduate training: IIT Madras paper",
    url: "https://education.economictimes.indiatimes.com/news/higher-education/ai-could-narrow-entry-level-career-paths-pushing-universities-to-rethink-graduate-training-iit-madras-paper/135205285",
    date: "2026-10-26",
  },
  {
    title:
      "AI-led universities must rethink teaching, assessment and faculty roles without losing human touch: Education leaders",
    url: "https://education.economictimes.indiatimes.com/news/higher-education/ai-led-universities-must-rethink-teaching-assessment-and-faculty-roles-without-losing-human-touch-education-leaders/135143708",
    date: "2026-10-23",
  },
  {
    title: "Choosing the right degree: Why informed decisions matter more than following the crowd",
    url: "https://education.economictimes.indiatimes.com/news/industry/choosing-the-right-degree-why-informed-decisions-matter-more-than-following-the-crowd/135139134",
    date: "2026-10-23",
  },
  {
    title:
      "India’s Education leaders meet in Goa today: ETEducation Chancellors’ Conclave 2026 begins",
    url: "https://education.economictimes.indiatimes.com/news/higher-education/indias-education-leaders-meet-in-goa-today-eteducation-chancellors-conclave-2026-begins/135114399",
    date: "2026-10-22",
  },
  {
    title: "Indian students in US: Rising headcount masks a shift in enrolment as costs mount",
    url: "https://education.economictimes.indiatimes.com/news/international/indian-students-in-us-rising-headcount-masks-a-shift-in-enrolment-as-costs-mount/135073565",
    date: "2026-10-21",
  },
];

const JOBS = [
  {
    title: "JCI Deputy Manager Recruitment 2026 – Apply Offline",
    url: "https://www.freejobalert.com/articles/jci-deputy-manager-law-recruitment-2026-3077400",
    date: "2026-10-30",
  },
  {
    title:
      "DH&FWS Jhargram Recruitment 2026 – Apply Online for 33 Pharmacist, Staff Nurse and More Posts",
    url: "https://www.freejobalert.com/articles/dh-fws-jhargram-recruitment-2026-pharmacist-staff-nurse-3077398",
    date: "2026-10-30",
  },
  {
    title: "CBMR Project Research Scientist I Recruitment 2026 – Apply Online",
    url: "https://www.freejobalert.com/articles/cbmr-project-research-scientist-i-recruitment-2026-3077396",
    date: "2026-10-30",
  },
  {
    title: "IISER Thiruvananthapuram Project Assistant Recruitment 2026 – Apply Online",
    url: "https://www.freejobalert.com/articles/iiser-thiruvananthapuram-project-assistant-recruitment-2026-3077394",
    date: "2026-10-30",
  },
  {
    title:
      "NRLM Karnataka Block Technical Coordinator – Enterprise Promotion OSF Recruitment 2026 – Apply Online",
    url: "https://www.freejobalert.com/articles/nrlm-karnataka-block-technical-coordinator-enterprise-recruitment-2026-3077392",
    date: "2026-10-30",
  },
  {
    title:
      "IIT Kharagpur Junior Research Fellow (Chemical Engineering) Recruitment 2026 – Apply Online",
    url: "https://www.freejobalert.com/articles/iit-kharagpur-junior-research-fellow-research-recruitment-2026-3077390",
    date: "2026-10-30",
  },
  {
    title: "MAMC Senior Resident (Pathology) Recruitment 2026 – Walkin",
    url: "https://www.freejobalert.com/articles/mamc-senior-resident-recruitment-2026-3077388",
    date: "2026-10-30",
  },
  {
    title: "RECPDCL Senior Consultant Recruitment 2026 – Apply Online",
    url: "https://www.freejobalert.com/articles/recpdcl-senior-consultant-renewable-energy-recruitment-2026-3077386",
    date: "2026-10-30",
  },
];

// Placeholder entries copied from the reference page. Replace with real study material.
const STUDY = [
  { title: "Test post title", url: "https://testbook.com/blog/test-post-title-3/" },
  { title: "Test post title", url: "https://testbook.com/blog/test-post-title-2/" },
  { title: "Test post title", url: "https://testbook.com/blog/test-post-title/" },
  {
    title: "Coronavirus disease 2019",
    url: "https://testbook.com/blog/coronavirus-disease-2019-7/",
  },
  {
    title: "Coronavirus disease 2019",
    url: "https://testbook.com/blog/coronavirus-disease-2019-8/",
  },
  {
    title: "Coronavirus disease 2019",
    url: "https://testbook.com/blog/coronavirus-disease-2019-9/",
  },
  {
    title: "Coronavirus disease 2019",
    url: "https://testbook.com/blog/coronavirus-disease-2019-4/",
  },
  {
    title: "Coronavirus disease 2019",
    url: "https://testbook.com/blog/coronavirus-disease-2019-5/",
  },
];

function StudentCornerPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white text-[#09094d]">
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#1b1b2e]/80" />
        <h1 className="relative flex h-full items-center justify-center text-center text-4xl font-bold text-white md:text-5xl">
          {t("studentPage.heroTitle", { defaultValue: "Student Corner" })}
        </h1>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-56 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* News + photo */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {NEWS.map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border-t-4 border-[#0a5dc2] bg-white p-6 shadow-md transition hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold leading-7 text-[#0b2a6f]">{n.title}</h3>
              <p className="mt-4 text-sm text-gray-500">
                {t("studentPage.source", { defaultValue: "Source" })}:{" "}
                <span className="font-semibold text-[#0b2a6f]">education.economictimes</span> |{" "}
                {t("studentPage.date", { defaultValue: "Date" })}: {n.date} |{" "}
                {t("studentPage.by", { defaultValue: "By" })} Railwireadmin
              </p>
            </a>
          ))}
        </div>

        <div>
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="relative h-4 w-8 rounded-full border-2 border-[#0ea5e9]">
                <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0ea5e9]" />
              </span>
              <p className="text-3xl font-bold uppercase tracking-wide text-[#0ea5e9]">
                {t("studentPage.latestNews", { defaultValue: "Latest" })}
              </p>
              <span className="relative h-4 w-8 rounded-full border-2 border-[#0ea5e9]">
                <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0ea5e9]" />
              </span>
            </div>
            <h2 className="mt-2 text-5xl font-bold text-[#2d2a3e]">
              {t("studentPage.newsTitle", { defaultValue: "News & Updates" })}
            </h2>
          </div>

          <img src={NEWS_IMG} alt="" className="w-full rounded-sm object-cover" />
          <p className="mt-5 text-base leading-7 text-gray-500">
            {t("studentPage.newsDesc", {
              defaultValue:
                "Explore important student updates including government exams, career opportunities, scholarships, and current educational news all in one place.",
            })}
          </p>
        </div>
      </section>

      {/* Job banner */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={JOBS_IMG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative pt-14 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="relative h-4 w-8 rounded-full border-2 border-[#0ea5e9]">
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0ea5e9]" />
            </span>
            <p className="text-3xl font-bold uppercase tracking-wide text-[#0ea5e9]">
              {t("studentPage.oppHub", { defaultValue: "Opportunity Hub" })}
            </p>
            <span className="relative h-4 w-8 rounded-full border-2 border-[#0ea5e9]">
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0ea5e9]" />
            </span>
          </div>
          <h2 className="mt-2 text-6xl font-bold text-[#2d2a3e]">
            {t("studentPage.jobAlert", { defaultValue: "Job Alert" })}
          </h2>
        </div>

        <img
          src={TROPHY_IMG}
          alt=""
          className="absolute bottom-6 left-1/2 h-[320px] -translate-x-1/2 object-contain"
        />
      </section>

      {/* Job alerts */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-6 md:grid-cols-3">
          {JOBS.map((j) => (
            <li key={j.url} className="list-disc pl-2 marker:text-[#0a5dc2]">
              <a
                href={j.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md bg-white p-6 shadow-md transition hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold leading-7 text-[#09094d]">{j.title}</h3>
                <p className="mt-4 text-sm text-gray-500">
                  {t("studentPage.source", { defaultValue: "Source" })}:{" "}
                  <span className="font-semibold text-[#09094d]">FreeJobAlert.Com</span> |{" "}
                  {t("studentPage.date", { defaultValue: "Date" })}: {j.date} |{" "}
                  {t("studentPage.by", { defaultValue: "By" })} Railwireadmin
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Study material */}
      <section className="relative overflow-hidden px-5 py-16">
        <img
          src={img("Abstract Blue Wave Technology Background.png")}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#09094d] md:text-4xl">
            {t("studentPage.studyMaterial", { defaultValue: "Study Material" })}
          </h2>
          <ul className="mx-auto max-w-4xl space-y-4">
            {STUDY.map((s, n) => (
              <li key={`${s.url}-${n}`}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md bg-white px-6 py-5 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#09094d]">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    <span className="font-semibold text-[#0a5dc2]">testbook.com</span> | September
                    1, 2026 | By Siddhant Singh
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
