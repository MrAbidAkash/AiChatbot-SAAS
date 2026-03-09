"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  FileText,
  Upload,
  Brain,
  RefreshCw,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Easy Upload",
    description:
      "Upload PDFs, Word docs, websites, or paste text directly. We handle the rest.",
  },
  {
    icon: Brain,
    title: "AI Understanding",
    description:
      "Our AI extracts knowledge and context from your documents automatically.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Sync",
    description:
      "Keep your chatbot up-to-date with automatic document synchronization.",
  },
  {
    icon: Shield,
    title: "Secure Processing",
    description:
      "Your documents are encrypted and processed with enterprise-grade security.",
  },
  {
    icon: Zap,
    title: "Instant Training",
    description:
      "Train your chatbot in minutes, not hours. See results immediately.",
  },
  {
    icon: FileText,
    title: "Multi-Format Support",
    description:
      "Support for PDF, DOCX, TXT, HTML, and direct website crawling.",
  },
];

const supportedFormats = [
  "PDF Documents",
  "Word Documents (.docx)",
  "Text Files (.txt)",
  "HTML Pages",
  "Website URLs",
  "CSV Data",
];

export default function DocumentTrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">AI Document Training</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Train Your Chatbot with{" "}
              <span className="text-primary">Your Data</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Upload your documents, websites, and knowledge base. Our AI learns
              from your content to provide accurate, contextual responses.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Start Training
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Demo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Simple 3-Step Process
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Training your chatbot with custom knowledge has never been easier.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Upload</h3>
                <p className="text-muted-foreground">
                  Drag and drop your documents or paste URLs to crawl.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Process</h3>
                <p className="text-muted-foreground">
                  Our AI extracts and indexes knowledge automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Deploy</h3>
                <p className="text-muted-foreground">
                  Your chatbot is ready with your custom knowledge base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Supported Document Formats
              </h2>
              <p className="mb-8 text-muted-foreground">
                We support a wide range of document formats and data sources to
                make training your chatbot as flexible as possible.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {supportedFormats.map((format) => (
                  <li key={format} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{format}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-dashed border-border bg-card p-12 text-center">
              <Upload className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Drop your files here
              </h3>
              <p className="mb-4 text-muted-foreground">
                or click to browse from your computer
              </p>
              <Button variant="outline">Browse Files</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Powerful Training Features
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
              Train Your Chatbot Today
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Upload your first document and see your chatbot learn in minutes.
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
