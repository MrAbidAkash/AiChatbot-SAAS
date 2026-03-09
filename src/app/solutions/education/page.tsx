"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Users,
  MessageSquare,
  Trophy,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "24/7 Tutoring",
    description:
      "AI-powered tutoring assistants that help students with homework and concepts.",
  },
  {
    icon: Calendar,
    title: "Enrollment Support",
    description:
      "Guide prospective students through admissions, enrollment, and registration.",
  },
  {
    icon: Users,
    title: "Student Services",
    description:
      "Handle FAQs about courses, schedules, campus resources, and student life.",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    description:
      "Keep parents informed about student progress, events, and announcements.",
  },
  {
    icon: Trophy,
    title: "Personalized Learning",
    description:
      "Adaptive learning paths that adjust to each student's pace and style.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description:
      "Help students explore career options, internships, and job opportunities.",
  },
];

const benefits = [
  "24/7 student support",
  "Reduced administrative load",
  "Higher engagement rates",
  "Personalized learning",
  "Multi-language support",
  "LMS integration ready",
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Education Solutions</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Transform <span className="text-primary">Education</span> with AI
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              AI-powered chatbots that enhance student engagement, streamline
              administration, and provide personalized learning experiences.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
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
                Empowering Educators and Students
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our AI chatbots help educational institutions provide better
                support to students while reducing the burden on administrative
                staff.
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
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Hi! I am your campus assistant. How can I help you today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <p className="text-sm text-primary-foreground">
                      When is the deadline for course registration?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Course registration for Spring 2026 closes on January
                      15th. Would you like me to help you select courses?
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
              Education-Specific Features
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
              Ready to Transform Your Institution?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              See how ChatTime AI can help your school, college, or university.
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
