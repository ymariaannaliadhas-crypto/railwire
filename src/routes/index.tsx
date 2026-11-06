import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/railwire/Hero";
import {
  About,
  Achievers,
  BackToTop,
  Blogs,
  DigitalPlatform,
  Entertainment,
  Faq,
  Features,
  Footer,
  PartnerAndPlans,
  PortalCards,
  SearchPlans,
  ShareKnowledge,
  Testimonials,
} from "@/components/railwire/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RailWire – High-Speed Fiber Broadband by RailTel" },
      {
        name: "description",
        content:
          "RailWire fiber broadband by RailTel: fast, reliable internet with OTT bundles for homes and businesses across India.",
      },
      { property: "og:title", content: "RailWire – High-Speed Fiber Broadband by RailTel" },
      {
        property: "og:description",
        content: "Fast, reliable fiber internet with OTT bundles across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden bg-background">
      <main>
        <Hero />
        <PortalCards />
        <About />
        <Features />
        <Entertainment />
        <PartnerAndPlans />
        <SearchPlans />
        <Achievers />
        <Testimonials />
        <DigitalPlatform />
        <Faq />
        <ShareKnowledge />
        <Blogs />
      </main>
      <BackToTop />
    </div>
  );
}
