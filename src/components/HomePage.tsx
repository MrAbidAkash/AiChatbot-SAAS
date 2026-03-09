/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { DocumentTrainingSection } from "@/components/sections/document-training-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ProductDesignOutline() {
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const integrationsRef = useRef(null);
  const dashboardRef = useRef(null);
  const trainingRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidde">
      <Header />

      {/* Sticky Navigation */}
      <div className="sticky top-16 px-4 z-40 border-b bg-background w-full">
        <div className="container mx-auto flex flex-wrap gap-4 sm:gap-10 px-4 py-2 ">
          <button
            onClick={() => scrollToSection(overviewRef)}
            className="hover:text-primary cursor-pointer"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection(featuresRef)}
            className="hover:text-primary cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection(integrationsRef)}
            className="hover:text-primary cursor-pointer"
          >
            Integrations
          </button>
          <button
            onClick={() => scrollToSection(dashboardRef)}
            className="hover:text-primary cursor-pointer"
          >
            Dashboard
          </button>
          <button
            onClick={() => scrollToSection(trainingRef)}
            className="hover:text-primary cursor-pointer"
          >
            AI Training
          </button>
          <button
            onClick={() => scrollToSection(pricingRef)}
            className="hover:text-primary cursor-pointer"
          >
            Pricing
          </button>
        </div>
      </div>

      <main className="px-4">
        <section ref={overviewRef}>
          <HeroSection />
        </section>

        <section ref={featuresRef}>
          <FeaturesSection />
        </section>

        <section ref={integrationsRef}>
          <IntegrationsSection />
        </section>

        <section ref={dashboardRef}>
          <DashboardPreview />
        </section>

        <section ref={trainingRef}>
          <DocumentTrainingSection />
        </section>

        <section ref={pricingRef}>
          <PricingSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
