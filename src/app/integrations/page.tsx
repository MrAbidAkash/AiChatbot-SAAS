"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  MessageSquare,
  Facebook,
  Send,
  Globe,
  ShoppingBag,
  Code,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const integrations = [
  {
    name: "Facebook Messenger",
    icon: Facebook,
    description:
      "Connect your chatbot to Facebook Messenger and engage with customers directly.",
    category: "Social Media",
  },
  {
    name: "WhatsApp Business",
    icon: MessageSquare,
    description:
      "Deploy your chatbot on WhatsApp to reach billions of users worldwide.",
    category: "Messaging",
  },
  {
    name: "Telegram",
    icon: Send,
    description:
      "Build Telegram bots that handle customer queries and automate tasks.",
    category: "Messaging",
  },
  {
    name: "Instagram",
    icon: Globe,
    description:
      "Automate Instagram DM responses and engage with your followers.",
    category: "Social Media",
  },
  {
    name: "Shopify",
    icon: ShoppingBag,
    description:
      "Integrate with Shopify for seamless e-commerce automation and support.",
    category: "E-commerce",
  },
  {
    name: "WooCommerce",
    icon: ShoppingBag,
    description:
      "Connect your WooCommerce store for order tracking and customer service.",
    category: "E-commerce",
  },
  {
    name: "WordPress",
    icon: Globe,
    description:
      "Add a chat widget to your WordPress site with our simple plugin.",
    category: "Website",
  },
  {
    name: "Custom API",
    icon: Code,
    description: "Use our REST API and webhooks to build custom integrations.",
    category: "Developer",
  },
];

const categories = [
  "All",
  "Social Media",
  "Messaging",
  "E-commerce",
  "Website",
  "Developer",
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">50+ Integrations</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Connect <span className="text-primary">Everywhere</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Integrate ChatTime AI with your favorite platforms and tools.
              Deploy your chatbot across all channels with one-click
              integrations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                View All Integrations
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                API Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration) => (
              <Card
                key={integration.name}
                className="border-border bg-card transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <integration.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    {integration.name}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground">
                    {integration.category}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Build Custom Integrations
              </h2>
              <p className="mb-8 text-muted-foreground">
                Use our comprehensive REST API and webhooks to build any
                integration you need. Full documentation and SDKs available.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/docs">API Documentation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/api-reference">API Reference</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <pre className="overflow-x-auto text-sm text-muted-foreground">
                <code>{`// Send a message via API
const response = await fetch(
  'https://api.ChatTime.ai/v1/messages',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      conversation_id: 'conv_123',
      message: 'Hello from API!'
    })
  }
);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Need a Custom Integration?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Our team can help you build custom integrations for your specific
              needs.
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
