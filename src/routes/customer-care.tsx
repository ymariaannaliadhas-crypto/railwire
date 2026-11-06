import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Users, MessageSquare, Mail, Phone, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { img } from "../components/railwire/assets";

const supportEmails = [
  { circle: "Andhra Pradesh", email: "ap.railwire@gmail.com" },
  { circle: "Assam", email: "railwiretech@shaildhar-india.com" },
  { circle: "Bihar", email: "bihar.railwaresupport@acemicro.in" },
  { circle: "Chhattisgarh", email: "supportdesk1@lightwaveindia.com" },
  { circle: "Delhi", email: "coordinateddc@gmail.com" },
  { circle: "Gujarat", email: "gj.support@railware.com" },
  { circle: "Haryana", email: "support.haryana@pkonline.in" },
  { circle: "Himachal Pradesh", email: "multiinkindia@gmail.com" },
  { circle: "Jharkhand", email: "msp.jh@lightwaveindia.com" },
  { circle: "Karnataka", email: "Support.ka@railwire.co.in" },
  { circle: "Kerala", email: "support.kl@railware.com" },
  { circle: "Lakshadweep", email: "support.lk@railware.com" },
  { circle: "Madhya Pradesh", email: "support.mp@railwire.co.in" },
  { circle: "Maharashtra & Goa", email: "mh.support@railwire.co.in" },
  { circle: "North East 1", email: "ne1.support@railwire.co.in" },
  { circle: "North East 2", email: "ne2.support@railwire.co.in" },
  { circle: "Rajasthan", email: "railwiresupport.rjmsp@acemicro.in" },
  { circle: "Tamil Nadu", email: "support.tn@railwire.co.in" },
  { circle: "Telangana", email: "ts.support@railwire.co.in" },
  { circle: "UP East", email: "support.upeastrailwire@pkonline.in" },
  { circle: "UP West", email: "support.upwest@pkonline.in" },
  { circle: "West Bengal", email: "wbmsp.railwiresupport@acemicro.in" },
  { circle: "Others", email: "grievance@railwire.co.in" },
];

export const Route = createFileRoute("/customer-care")({
  component: CustomerCarePage,
});

function CustomerCarePage() {
  const { t } = useTranslation();
  const [activeOption, setActiveOption] = useState("complaint");
  const [showComplaint, setShowComplaint] = useState(true);
  const [showEmails, setShowEmails] = useState(false);
  const [showCall, setShowCall] = useState(false);

  return (
    <main className="bg-white pb-20">
      {/* HERO SECTION */}
      <section className="relative flex h-[175px] items-center justify-center overflow-hidden bg-[#1a0b2e] text-center text-white">
        <img
          src={img("2024/08/slider-1-layer-2.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="relative z-10 px-6">
          <h1 className="whitespace-nowrap font-display text-xl font-bold sm:text-2xl md:text-3xl">
            {t("customerCarePage.heroTitle", {
              defaultValue: "Welcome to Railwire Customer Support",
            })}
          </h1>
        </div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="mx-auto max-w-[1000px] px-6 py-16 text-center">
        <h2 className="mb-6 font-display text-3xl font-semibold text-gray-700">
          {t("customerCarePage.heading", { defaultValue: "We are here to support you." })}
        </h2>
        {/* Quick Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {/* Complaint Button */}
          <button
            type="button"
            onClick={() => {
              setActiveOption("complaint");
              setShowComplaint(true);
              setShowEmails(false);
              setShowCall(false);
            }}
            className={`flex items-center gap-2 rounded px-6 py-3 font-semibold transition ${
              activeOption === "complaint"
                ? "bg-[#005baa] text-white"
                : "bg-[#f3f4f6] text-[#005baa] hover:bg-gray-200"
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            {t("customerCarePage.tabComplaint", { defaultValue: "Complaint" })}
          </button>

          {/* E-mail Button */}
          <button
            type="button"
            onClick={() => {
              setActiveOption("email");
              setShowComplaint(false);
              setShowEmails(true);
              setShowCall(false);
            }}
            className={`flex items-center gap-2 rounded px-6 py-3 font-semibold transition ${
              activeOption === "email"
                ? "bg-[#005baa] text-white"
                : "bg-[#f3f4f6] text-[#005baa] hover:bg-gray-200"
            }`}
          >
            <Mail className="h-5 w-5" />
            {t("customerCarePage.tabEmail", { defaultValue: "E-mail" })}
          </button>

          {/* Call Button */}
          <button
            type="button"
            onClick={() => {
              setActiveOption("call");
              setShowComplaint(false);
              setShowEmails(false);
              setShowCall(true);
            }}
            className={`flex items-center gap-2 rounded px-6 py-3 font-semibold transition ${
              activeOption === "call"
                ? "bg-[#005baa] text-white"
                : "bg-[#f3f4f6] text-[#005baa] hover:bg-gray-200"
            }`}
          >
            <Phone className="h-5 w-5" />
            {t("customerCarePage.tabCall", { defaultValue: "Call" })}
          </button>
        </div>

        {showCall && (
          <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-left shadow-md md:p-14">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex-1">
                  <p className="mb-3 text-xs font-bold uppercase text-gray-900">
                    {t("customerCarePage.needImmediate", {
                      defaultValue: "Need Immediate Assistance?",
                    })}
                  </p>

                  <h3 className="mb-3 font-display text-2xl font-bold text-[#005baa] md:text-3xl">
                    {t("customerCarePage.care247", { defaultValue: "24×7 Customer Care" })}
                  </h3>

                  <p className="mb-8 max-w-xl text-sm leading-7 text-gray-500">
                    {t("customerCarePage.careDesc", {
                      defaultValue:
                        "Our customer care team is available round the clock to assist you with any queries or support you need.",
                    })}
                  </p>

                  <a
                    href="tel:18001039139"
                    className="inline-flex items-center gap-2 rounded bg-[#005baa] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Phone className="h-5 w-5" />
                    {t("customerCarePage.tollFree", { defaultValue: "Toll-Free No" })}
                  </a>
                </div>

                <div className="flex shrink-0 items-center justify-center">
                  <img
                    src={img("hours and week.png")}
                    alt="24/7 Customer Care"
                    className="h-36 w-36 object-contain md:h-44 md:w-44"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONDITIONAL EMAIL TABLE SECTION */}
        {showEmails && (
          <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="mb-6 font-display text-2xl font-semibold text-[#005baa]">
              {t("customerCarePage.emailDirectory", { defaultValue: "E-mail Directory" })}
            </h3>
            <div className="overflow-hidden rounded-t-lg border border-gray-200 text-left">
              <table className="w-full text-sm">
                <thead className="bg-[#0073b7] text-white">
                  <tr>
                    <th className="px-4 py-3 font-medium w-16">
                      {t("customerCarePage.tableNo", { defaultValue: "No." })}
                    </th>
                    <th className="px-4 py-3 font-medium w-1/3">
                      {t("customerCarePage.tableCircle", { defaultValue: "Circle/State" })}
                    </th>
                    <th className="px-4 py-3 font-medium">
                      {t("customerCarePage.tableEmail", {
                        defaultValue: "Customer Support Email",
                      })}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-[#f8f9fa]">
                  {supportEmails.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100 transition">
                      <td className="px-4 py-3 text-gray-600">{index + 1}</td>
                      <td className="px-4 py-3 text-gray-800">
                        {t(`states.${item.circle}`, { defaultValue: item.circle })}
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        <a
                          href={`mailto:${item.email}`}
                          className="hover:text-[#005baa] hover:underline"
                        >
                          {item.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showComplaint && (
          <p className="mb-10 text-gray-600">
            {t("customerCarePage.complaintSubtitle", {
              defaultValue:
                "Please select the option that best describes you to get the right support.",
            })}
          </p>
        )}
        {showComplaint && (
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {/* New Customer */}
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-10 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#005baa] text-white">
                <User className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-[#005baa]">
                {t("customerCarePage.newCustomer.title", { defaultValue: "New Customer" })}
              </h3>
              <p className="mb-8 text-center text-sm text-gray-500">
                {t("customerCarePage.newCustomer.desc", {
                  defaultValue: "Need assistance or want to raise a new customer grievance?",
                })}
              </p>
              <a
                href="https://crm.railwire.co.in/Portalcntl/rlwr_griviance_request"
                className="rounded bg-[#005baa] px-8 py-2.5 font-semibold text-white transition hover:bg-blue-700"
              >
                {t("customerCarePage.newCustomer.btn", { defaultValue: "Submit Request" })}
              </a>
            </div>

            {/* Existing Customer */}
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-10 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#005baa] text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-[#005baa]">
                {t("customerCarePage.existingCustomer.title", {
                  defaultValue: "Existing Customer",
                })}
              </h3>
              <p className="mb-8 text-center text-sm text-gray-500">
                {t("customerCarePage.existingCustomer.desc", {
                  defaultValue: "Already a RailWire customer? Access billing and customer support.",
                })}
              </p>
              <a
                href="https://crm.railwire.co.in/subrcntl"
                className="rounded bg-[#005baa] px-8 py-2.5 font-semibold text-white transition hover:bg-blue-700"
              >
                {t("customerCarePage.existingCustomer.btn", { defaultValue: "Get Support" })}
              </a>
            </div>
          </div>
        )}
      </section>

      {/* OTHER IMPORTANT MAILS SECTION */}
      <section className="mx-auto max-w-[1000px] px-6 pb-20">
        <div className="rounded-xl bg-[#f0f7ff] p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="rounded-full bg-[#005baa] p-3 text-white">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-[#0b1c4d]">
                {t("customerCarePage.otherMails.title", {
                  defaultValue: "Other Important Mails",
                })}
              </h3>
              <p className="text-sm text-gray-600">
                {t("customerCarePage.otherMails.desc", {
                  defaultValue:
                    "Need more help? Here are a few important email IDs you can reach out to.",
                })}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <h4 className="mb-4 font-display text-lg font-semibold text-[#005baa]">
              {t("customerCarePage.appellate.title", {
                defaultValue: "Appellate Authority",
              })}
            </h4>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />{" "}
                {t("customerCarePage.appellate.emailLabel", { defaultValue: "E-mail:" })}{" "}
                <a
                  href="mailto:appellate@railtelindia.com"
                  className="text-[#005baa] hover:underline"
                >
                  appellate@railtelindia.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />{" "}
                {t("customerCarePage.appellate.contactLabel", { defaultValue: "Contact No.:" })}{" "}
                <a href="tel:01244236085" className="text-[#005baa] hover:underline">
                  0124-4236085
                </a>
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg bg-white p-4 text-xs text-gray-600">
            <Info className="h-4 w-4 text-[#005baa]" />
            <span>
              {t("customerCarePage.appellateNote", {
                defaultValue:
                  "Note: Please mention the valid complaint ticket number while escalating the issue to the Appellate Authority.",
              })}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
