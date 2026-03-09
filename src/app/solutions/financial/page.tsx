"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Landmark,
  CreditCard,
  Shield,
  TrendingUp,
  Users,
  Lock,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Account Services",
    description:
      "Balance inquiries, transaction history, and account management through secure chat.",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description:
      "Real-time alerts and verification for suspicious activity on customer accounts.",
  },
  {
    icon: TrendingUp,
    title: "Investment Insights",
    description:
      "Provide market updates, portfolio summaries, and investment recommendations.",
  },
  {
    icon: Landmark,
    title: "Loan Applications",
    description:
      "Guide customers through loan applications and pre-qualification processes.",
  },
  {
    icon: Users,
    title: "Onboarding",
    description:
      "Streamline new account opening with automated KYC and document collection.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Bank-grade encryption, SOC 2 compliance, and multi-factor authentication.",
  },
];

const benefits = [
  "SOC 2 Type II certified",
  "PCI DSS compliant",
  "End-to-end encryption",
  "Multi-factor authentication",
  "Regulatory compliance",
  "Audit trail logging",
];

export default function FinancialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                Financial Services Solutions
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Secure AI for{" "}
              <span className="text-primary">Financial Services</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Enterprise-grade AI chatbots built for banks, fintech, and
              financial institutions with the highest security and compliance
              standards.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Security Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security First */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Built for Financial Security
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our platform meets the strictest security and compliance
                requirements for financial institutions worldwide.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Landmark className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Welcome to SecureBank. Please verify your identity to
                      continue.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <p className="text-sm text-primary-foreground">
                      Check my account balance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Landmark className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Identity verified. Your checking account balance is
                      $12,450.00. Your savings account is $35,200.00.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Financial Services Features
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Secure Your Customer Experience
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Schedule a demo to see how ChatTime AI meets financial compliance
              standards.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
