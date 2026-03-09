"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { DocumentTrainingSection } from "@/components/sections/document-training-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ProductDesignOutline() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Navigation Tabs for Design Sections */}
        <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <Tabs
              value={activeSection}
              onValueChange={setActiveSection}
              className="w-full"
            >
              <TabsList className="h-12 w-full justify-start gap-2 rounded-none border-0 bg-transparent p-0">
                <TabsTrigger
                  value="overview"
                  className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="integrations"
                  className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Integrations
                </TabsTrigger>
                <TabsTrigger
                  value="dashboard"
                  className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="training"
                  className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  AI Training
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Pricing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <HeroSection />
              </TabsContent>

              <TabsContent value="features" className="mt-0">
                <FeaturesSection />
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <IntegrationsSection />
              </TabsContent>

              <TabsContent value="dashboard" className="mt-0">
                <DashboardPreview />
              </TabsContent>

              <TabsContent value="training" className="mt-0">
                <DocumentTrainingSection />
              </TabsContent>

              <TabsContent value="pricing" className="mt-0">
                <PricingSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
