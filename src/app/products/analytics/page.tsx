"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  BarChart3,
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const metrics = [
  {
    icon: MessageSquare,
    title: "Conversation Analytics",
    description:
      "Track conversation volume, duration, and resolution rates across all channels.",
  },
  {
    icon: Users,
    title: "User Insights",
    description:
      "Understand user behavior, preferences, and satisfaction with detailed reports.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description:
      "Monitor chatbot performance with real-time KPIs and trend analysis.",
  },
  {
    icon: Clock,
    title: "Response Time",
    description:
      "Measure and optimize response times to improve customer experience.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set and track conversion goals, from lead generation to sales completion.",
  },
  {
    icon: BarChart3,
    title: "Custom Reports",
    description:
      "Build custom dashboards and reports tailored to your business needs.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Advanced Analytics Dashboard</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Data-Driven{" "}
              <span className="text-primary">Decisions</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Get actionable insights from every conversation. Understand your customers
              better and optimize your chatbot performance.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                View Live Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Real-Time Dashboard
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Monitor all your key metrics in one place with our intuitive dashboard.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Total Conversations</p>
                  <p className="text-3xl font-bold text-foreground">24,521</p>
                  <p className="text-sm text-green-600">+12.5% from last week</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Resolution Rate</p>
                  <p className="text-3xl font-bold text-foreground">94.2%</p>
                  <p className="text-sm text-green-600">+3.1% from last week</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                  <p className="text-3xl font-bold text-foreground">1.2s</p>
                  <p className="text-sm text-green-600">-0.3s from last week</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  <p className="text-3xl font-bold text-foreground">4.8/5</p>
                  <p className="text-sm text-green-600">+0.2 from last week</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Comprehensive Analytics Suite
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <Card key={metric.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{metric.description}</p>
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
              Start Making Data-Driven Decisions
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Unlock the full potential of your chatbot with advanced analytics.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
