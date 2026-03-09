"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Bot,
  MessageSquare,
  Zap,
  Globe,
  Shield,
  BarChart3,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description:
      "Build chatbots that understand context, sentiment, and intent for human-like interactions.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description:
      "Deploy your chatbot across multiple channels in minutes with our one-click integration.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Reach global audiences with automatic translation and localization in 50+ languages.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance with GDPR, SOC 2, and HIPAA standards.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track performance, user satisfaction, and conversion rates with detailed insights.",
  },
  {
    icon: Bot,
    title: "AI Learning",
    description:
      "Your chatbot continuously learns and improves from every conversation.",
  },
];

const useCases = [
  "24/7 Customer Support",
  "Lead Generation & Qualification",
  "Order Tracking & Updates",
  "FAQ Automation",
  "Appointment Scheduling",
  "Product Recommendations",
];

export default function ChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">AI-Powered Chatbot Platform</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Build Intelligent Chatbots{" "}
              <span className="text-primary">Without Code</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Create, customize, and deploy AI chatbots that understand your customers
              and drive conversions. No technical expertise required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Start Building Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Everything You Need to Build Smart Chatbots
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform provides all the tools to create, train, and optimize
              your AI chatbots for maximum engagement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Automate Any Customer Interaction
              </h2>
              <p className="mb-8 text-muted-foreground">
                From simple FAQ responses to complex multi-turn conversations,
                our AI chatbot builder handles it all with ease.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Hi! How can I help you today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <p className="text-sm text-primary-foreground">
                      I want to track my order #12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Your order #12345 is out for delivery and will arrive today
                      between 2-4 PM. Would you like me to send you live tracking updates?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Build Your First Chatbot?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Join thousands of businesses already using ChatFlow AI to automate
              customer conversations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
