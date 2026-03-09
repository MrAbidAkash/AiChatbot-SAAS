"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for small businesses getting started",
    price: "৳0",
    period: "/month",
    features: [
      "100 conversations/month",
      "1 chatbot",
      "WhatsApp integration",
      "Basic analytics",
      "Email support",
      "Website widget",
      "Basic customization",
      "1 document upload",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: "999",
    period: "/month",
    features: [
      "1,000 conversations/month",
      "1 chatbot",
      "WhatsApp and Facebook integration",
      "Basic analytics",
      "Email support",
      "Website widget",
      "Basic customization",
      "10 document uploads",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses with higher demands",
    price: "৳2999",
    period: "/month",
    features: [
      "4,000 conversations/month",
      "2 chatbots",
      "All social integrations",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom branding",
      "Team collaboration",
      "API access",
      "20 document uploads",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "For growing businesses with higher demands",
    price: "৳5999",
    period: "/month",
    features: [
      "10,000 conversations/month",
      "4 chatbots",
      "All social integrations",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom branding",
      "Team collaboration",
      "API access",
      "50 document uploads",
    ],
    cta: "Start Free Trial",
    // popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited conversations",
      "Unlimited chatbots",
      "All social integrations",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "White-label solution",
      "SSO & advanced security",
      "SLA guarantee",
      "On-premise option",
      "Unlimited document uploads",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
  },
  {
    question: "What counts as a conversation?",
    answer:
      "A conversation is counted when a user initiates a chat session with your chatbot. Multiple messages within the same session count as one conversation.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All paid plans come with a 14-day free trial. No credit card required to start.",
  },
];

export default function PricingPage() {
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
                Simple, Transparent Pricing
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Choose Your <span className="text-primary">Plan</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Start free and scale as you grow. All plans include a 14-day
              trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-border bg-card ${plan.popular ? "border-2 border-primary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Zap className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href={
                        plan.name === "Enterprise"
                          ? "/contact"
                          : `/checkout?plan=${plan.name.toLowerCase()}`
                      }
                    >
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="mb-2 font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Our team is here to help you find the right plan for your
              business.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
