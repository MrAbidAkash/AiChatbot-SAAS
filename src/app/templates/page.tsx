"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  ShoppingCart,
  Heart,
  GraduationCap,
  Landmark,
  Building,
  Headphones,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";

const templates = [
  {
    icon: ShoppingCart,
    title: "E-commerce Support",
    description: "Handle orders, returns, and product inquiries for online stores.",
    category: "E-commerce",
    uses: "2.5k",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "General customer support bot for any business type.",
    category: "Support",
    uses: "4.2k",
  },
  {
    icon: Heart,
    title: "Healthcare Assistant",
    description: "Appointment scheduling and patient FAQ for clinics.",
    category: "Healthcare",
    uses: "1.8k",
  },
  {
    icon: GraduationCap,
    title: "Education Helper",
    description: "Student support and course information bot.",
    category: "Education",
    uses: "1.2k",
  },
  {
    icon: Landmark,
    title: "Banking Assistant",
    description: "Account inquiries and financial services support.",
    category: "Finance",
    uses: "980",
  },
  {
    icon: Building,
    title: "Real Estate Agent",
    description: "Property inquiries and appointment scheduling.",
    category: "Real Estate",
    uses: "750",
  },
  {
    icon: Users,
    title: "HR & Recruiting",
    description: "Employee onboarding and job application handling.",
    category: "HR",
    uses: "890",
  },
  {
    icon: Headphones,
    title: "IT Help Desk",
    description: "Technical support and troubleshooting assistance.",
    category: "IT",
    uses: "1.5k",
  },
];

const categories = ["All", "E-commerce", "Support", "Healthcare", "Education", "Finance", "Real Estate", "HR", "IT"];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">50+ Pre-built Templates</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Chatbot{" "}
              <span className="text-primary">Templates</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Start with a pre-built template and customize it for your needs.
              Launch faster with proven conversation flows.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {templates.map((template) => (
              <Card key={template.title} className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <template.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{template.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{template.category}</span>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {template.uses} uses
                    </span>
                    <Button variant="outline" size="sm">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Want a Custom Template?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Our team can create a custom template tailored to your business needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Custom Template</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
