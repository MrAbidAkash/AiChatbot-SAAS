"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  Users,
  Rocket,
  Coffee,
  ArrowRight,
} from "lucide-react";

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote",
    type: "Contract",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive. We care about results, not hours.",
  },
  {
    icon: MapPin,
    title: "Remote First",
    description: "Work from anywhere in the world. Our team spans multiple time zones.",
  },
  {
    icon: Rocket,
    title: "Growth Budget",
    description: "Annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Coffee,
    title: "Home Office Setup",
    description: "Stipend to create your ideal work-from-home environment.",
  },
  {
    icon: Users,
    title: "Team Retreats",
    description: "Annual company retreats to connect and collaborate in person.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">We are Hiring!</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Join Our Team
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Help us build the future of conversational AI. We are looking for
              passionate individuals who want to make an impact.
            </p>
            <Button size="lg" className="gap-2">
              View Open Positions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Why Work With Us
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer competitive benefits and a culture that supports your growth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Open Positions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find your next opportunity at ChatFlow AI.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {openPositions.map((position) => (
              <Card key={position.title} className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-foreground">{position.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline">Apply</Button>
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
              Do Not See the Right Role?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              We are always looking for talented people. Send us your resume and we will
              reach out when we have a role that matches your skills.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
