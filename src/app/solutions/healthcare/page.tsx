"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Heart,
  Calendar,
  FileText,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Let patients book, reschedule, or cancel appointments 24/7 through chat.",
  },
  {
    icon: FileText,
    title: "Patient Intake",
    description:
      "Automate pre-visit forms, medical history collection, and insurance verification.",
  },
  {
    icon: Heart,
    title: "Symptom Checker",
    description:
      "Help patients understand their symptoms and route them to appropriate care.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description:
      "Enterprise-grade security with full HIPAA compliance for protected health information.",
  },
  {
    icon: Clock,
    title: "Wait Time Updates",
    description:
      "Keep patients informed about wait times and appointment status in real-time.",
  },
  {
    icon: Users,
    title: "Staff Coordination",
    description:
      "Internal chatbots for staff scheduling, protocols, and administrative tasks.",
  },
];

const benefits = [
  "HIPAA compliant platform",
  "40% reduction in no-shows",
  "24/7 patient support",
  "Seamless EHR integration",
  "Automated appointment reminders",
  "Reduced administrative burden",
];

export default function HealthcarePage() {
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
                Healthcare Solutions
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Transform <span className="text-primary">Patient Care</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              HIPAA-compliant AI chatbots that improve patient engagement,
              streamline operations, and reduce administrative burden.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Compliance Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Trusted by Healthcare Providers
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our healthcare-specific AI chatbots are designed to meet the
                unique needs of medical practices, hospitals, and healthcare
                systems.
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
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Welcome to MedCare. How can I assist you today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <p className="text-sm text-primary-foreground">
                      I need to schedule a check-up with Dr. Smith
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Dr. Smith has availability on Tuesday at 2pm or Thursday
                      at 10am. Which works better for you?
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
              Healthcare-Specific Features
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
              Improve Patient Experience Today
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Schedule a demo to see how ChatTime AI can transform your
              healthcare practice.
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
