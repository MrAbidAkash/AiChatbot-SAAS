"use client";

import { Button } from "@/components/ui/button";
import AuthButton from "@/components/auth-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  ShoppingCart,
  Package,
  CreditCard,
  MessageSquare,
  TrendingUp,
  Clock,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Cart Recovery",
    description:
      "Automatically engage customers who abandon their carts with personalized messages.",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description:
      "Let customers track orders, get shipping updates, and handle returns via chat.",
  },
  {
    icon: CreditCard,
    title: "Payment Assistance",
    description:
      "Guide customers through checkout and resolve payment issues instantly.",
  },
  {
    icon: MessageSquare,
    title: "Product Recommendations",
    description:
      "AI-powered suggestions based on browsing history and preferences.",
  },
  {
    icon: TrendingUp,
    title: "Sales Conversion",
    description:
      "Turn browsers into buyers with proactive engagement and special offers.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Never miss a sale with round-the-clock automated customer service.",
  },
];

const benefits = [
  "30% increase in conversion rates",
  "50% reduction in cart abandonment",
  "90% customer query resolution",
  "24/7 automated support",
  "Seamless platform integrations",
  "Real-time inventory updates",
];

export default function EcommercePage() {
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
                E-commerce Solutions
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Boost Your <span className="text-primary">E-commerce Sales</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Transform your online store with AI-powered chatbots that increase
              conversions, reduce cart abandonment, and provide exceptional
              customer service.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AuthButton size="lg" className="gap-2" />
              <Button size="lg" variant="outline">
                See Demo Store
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
                Why E-commerce Businesses Choose Us
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our AI chatbots are specifically designed for online retail,
                helping you sell more while reducing support costs.
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
                    <ShoppingCart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Hi! I noticed you left some items in your cart. Can I help
                      you complete your purchase?
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <p className="text-sm text-primary-foreground">
                      I had a question about shipping
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <ShoppingCart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm text-foreground">
                      Of course! Free shipping on orders over $50. Your cart
                      qualifies! Plus, use code SAVE10 for 10% off today.
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
              Built for E-commerce Success
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
              Ready to Increase Your Sales?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Join thousands of e-commerce businesses already using ChatTime AI.
            </p>
            <AuthButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
