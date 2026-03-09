"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  GitBranch,
  MousePointer,
  Layers,
  Copy,
  History,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: MousePointer,
    title: "Drag & Drop Interface",
    description:
      "Visually design conversation flows with our intuitive drag-and-drop editor. No coding required.",
  },
  {
    icon: GitBranch,
    title: "Conditional Logic",
    description:
      "Create branching paths based on user responses, data, or external triggers.",
  },
  {
    icon: Layers,
    title: "Reusable Components",
    description:
      "Build once, use everywhere. Create modular components for consistent experiences.",
  },
  {
    icon: Copy,
    title: "Template Library",
    description:
      "Start faster with pre-built templates for common use cases and industries.",
  },
  {
    icon: History,
    title: "Version Control",
    description:
      "Track changes, rollback to previous versions, and manage multiple flow variants.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together in real-time with comments, approvals, and role-based access.",
  },
];

export default function FlowDesignerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Visual Conversation Designer</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Design Conversations{" "}
              <span className="text-primary">Visually</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Create complex conversation flows with our powerful visual editor.
              Build, test, and deploy without writing a single line of code.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Try Flow Designer
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Editor Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Build Complex Flows with Ease
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our visual flow designer makes it simple to create sophisticated
              conversation experiences.
            </p>
          </div>
          
          {/* Flow Designer Mock */}
          <div className="mx-auto max-w-5xl rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-muted-foreground">Customer Support Flow</span>
            </div>
            <div className="flex items-center justify-center gap-4 py-12">
              <div className="rounded-lg border-2 border-primary bg-primary/10 p-4 text-center">
                <p className="text-sm font-medium text-foreground">Start</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border border-border bg-muted p-4 text-center">
                <p className="text-sm font-medium text-foreground">Welcome Message</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col gap-2">
                <div className="rounded-lg border border-border bg-muted p-3 text-center">
                  <p className="text-xs font-medium text-foreground">Support</p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-3 text-center">
                  <p className="text-xs font-medium text-foreground">Sales</p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-3 text-center">
                  <p className="text-xs font-medium text-foreground">Billing</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-lg border-2 border-green-500 bg-green-500/10 p-4 text-center">
                <p className="text-sm font-medium text-foreground">Resolve</p>
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
              Powerful Features for Every Team
            </h2>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Start Designing Your Flows Today
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              No credit card required. Get started with our free plan.
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
