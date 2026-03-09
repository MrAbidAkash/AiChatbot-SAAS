"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Code,
  Key,
  MessageSquare,
  Users,
  Webhook,
  FileText,
  ArrowRight,
} from "lucide-react";

const endpoints = [
  {
    icon: Key,
    title: "Authentication",
    description: "Learn how to authenticate API requests with API keys and OAuth.",
    methods: ["POST /auth/token", "POST /auth/refresh"],
  },
  {
    icon: MessageSquare,
    title: "Conversations",
    description: "Create and manage conversation sessions with your chatbots.",
    methods: ["GET /conversations", "POST /conversations", "GET /conversations/:id"],
  },
  {
    icon: MessageSquare,
    title: "Messages",
    description: "Send and receive messages within conversations.",
    methods: ["GET /messages", "POST /messages", "DELETE /messages/:id"],
  },
  {
    icon: Users,
    title: "Users",
    description: "Manage end-user profiles and preferences.",
    methods: ["GET /users", "POST /users", "PUT /users/:id"],
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Configure webhooks to receive real-time event notifications.",
    methods: ["GET /webhooks", "POST /webhooks", "DELETE /webhooks/:id"],
  },
  {
    icon: FileText,
    title: "Documents",
    description: "Upload and manage training documents for your chatbots.",
    methods: ["GET /documents", "POST /documents", "DELETE /documents/:id"],
  },
];

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">REST API v1.0</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              API Reference
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Complete reference documentation for the ChatFlow AI REST API.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/docs">
                  Getting Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Download OpenAPI Spec
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Base URL */}
      <section className="border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Base URL</h2>
            <div className="rounded-lg border border-border bg-muted p-4">
              <code className="text-sm text-foreground">https://api.chatflow.ai/v1</code>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">API Endpoints</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore all available endpoints and their documentation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {endpoints.map((endpoint) => (
              <Card key={endpoint.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <endpoint.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{endpoint.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{endpoint.description}</p>
                  <div className="space-y-2">
                    {endpoint.methods.map((method) => (
                      <div key={method} className="rounded bg-muted px-2 py-1 font-mono text-xs text-foreground">
                        {method}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="#" 
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View docs
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Quick Example
            </h2>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">
                  POST
                </span>
                <code className="text-sm text-muted-foreground">/v1/messages</code>
              </div>
              <pre className="overflow-x-auto rounded bg-muted p-4 text-sm text-foreground">
                <code>{`curl -X POST https://api.chatflow.ai/v1/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "conversation_id": "conv_123abc",
    "content": "Hello, how can I help you today?",
    "role": "assistant"
  }'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Official SDKs
            </h2>
            <p className="mb-8 text-muted-foreground">
              Use our official SDKs for faster integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">JavaScript/Node.js</Button>
              <Button variant="outline">Python</Button>
              <Button variant="outline">PHP</Button>
              <Button variant="outline">Ruby</Button>
              <Button variant="outline">Go</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
