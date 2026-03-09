"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Search,
  MessageSquare,
  Settings,
  CreditCard,
  Shield,
  Puzzle,
  HelpCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

const categories = [
  {
    icon: MessageSquare,
    title: "Getting Started",
    description: "New to ChatTime AI? Start here.",
    articles: 12,
  },
  {
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your account and preferences.",
    articles: 8,
  },
  {
    icon: CreditCard,
    title: "Billing & Plans",
    description: "Payments, invoices, and subscription management.",
    articles: 10,
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description: "Connect with third-party platforms.",
    articles: 15,
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Keep your data safe and secure.",
    articles: 7,
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions.",
    articles: 20,
  },
];

const popularQuestions = [
  "How do I create my first chatbot?",
  "How do I connect to Facebook Messenger?",
  "What payment methods do you accept?",
  "How do I upgrade my plan?",
  "How do I train my chatbot with documents?",
  "How do I reset my password?",
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              How can we help?
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Search our knowledge base or browse categories below.
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full rounded-lg border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category.title}
                className="border-border bg-card transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {category.articles} articles
                    </span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Browse
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Popular Questions
          </h2>
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-3">
              {popularQuestions.map((question) => (
                <li key={question}>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <span className="text-foreground">{question}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Still need help?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Our support team is available to assist you.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-border bg-card">
                <CardContent className="flex flex-col items-center p-6">
                  <Mail className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">
                    Email Support
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Get a response within 24 hours
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Send Email</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="flex flex-col items-center p-6">
                  <Phone className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">
                    Live Chat
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Available Mon-Fri, 9am-6pm
                  </p>
                  <Button>Start Chat</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
