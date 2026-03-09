"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  BookOpen,
  Rocket,
  Settings,
  Code,
  Puzzle,
  Shield,
  ArrowRight,
  Search,
} from "lucide-react";

const sections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Learn the basics and set up your first chatbot in minutes.",
    links: ["Quick Start Guide", "Account Setup", "Your First Chatbot", "Platform Overview"],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize your chatbot behavior, appearance, and responses.",
    links: ["Bot Settings", "Response Templates", "Custom Variables", "Fallback Handling"],
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description: "Connect your chatbot to messaging platforms and tools.",
    links: ["Facebook Messenger", "WhatsApp Business", "Website Widget", "Webhooks"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Build custom integrations with our comprehensive API.",
    links: ["Authentication", "Conversations API", "Messages API", "Webhooks API"],
  },
  {
    icon: BookOpen,
    title: "Flow Designer",
    description: "Create conversation flows with our visual builder.",
    links: ["Flow Basics", "Conditions & Logic", "Variables & Data", "Testing Flows"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Learn about our security practices and compliance certifications.",
    links: ["Data Protection", "GDPR Compliance", "HIPAA Guidelines", "Security FAQ"],
  },
];

const popularArticles = [
  "How to create your first chatbot",
  "Connecting to Facebook Messenger",
  "Using the Flow Designer",
  "API Authentication",
  "Custom webhook integrations",
  "Training your AI with documents",
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Documentation
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Everything you need to build and deploy powerful AI chatbots.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full rounded-lg border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link 
                          href="#" 
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Popular Articles
          </h2>
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-3">
              {popularArticles.map((article) => (
                <li key={article}>
                  <Link 
                    href="#" 
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <span className="text-foreground">{article}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Need Help?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Our support team is here to assist you with any questions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/help">Visit Help Center</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
