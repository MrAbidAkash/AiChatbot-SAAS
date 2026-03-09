"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Upload,
  Cloud,
  Database,
  CheckCircle,
  XCircle,
  RefreshCw,
  Brain,
  Sparkles,
  ArrowRight,
  FolderOpen,
  Link2,
  HardDrive,
  FileType,
  Globe,
  Zap,
} from "lucide-react";

const uploadSources = [
  {
    icon: Upload,
    title: "Upload Files",
    description: "Drag & drop or browse files",
    formats: ["PDF", "DOCX", "TXT", "CSV"],
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Connect Google Drive, Dropbox",
    formats: ["Sync folders", "Auto-update"],
  },
  {
    icon: Globe,
    title: "Website URLs",
    description: "Crawl and index web pages",
    formats: ["HTML", "Sitemap"],
  },
  {
    icon: Database,
    title: "Database",
    description: "Connect to your database",
    formats: ["PostgreSQL", "MySQL"],
  },
];

const documents = [
  {
    name: "Product Catalog 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    status: "trained",
    chunks: 156,
    lastUpdated: "2 hours ago",
  },
  {
    name: "Return Policy.docx",
    type: "DOCX",
    size: "124 KB",
    status: "trained",
    chunks: 23,
    lastUpdated: "1 day ago",
  },
  {
    name: "FAQ Database.csv",
    type: "CSV",
    size: "892 KB",
    status: "training",
    chunks: 89,
    lastUpdated: "5 min ago",
  },
  {
    name: "Support Guidelines.pdf",
    type: "PDF",
    size: "1.8 MB",
    status: "queued",
    chunks: 0,
    lastUpdated: "Just now",
  },
];

const integrations = [
  { name: "Google Drive", icon: HardDrive, connected: true },
  { name: "Dropbox", icon: FolderOpen, connected: false },
  { name: "Notion", icon: FileType, connected: true },
  { name: "Confluence", icon: Link2, connected: false },
];

export function DocumentTrainingSection() {
  const [dragActive, setDragActive] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(67);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary">
            <Brain className="mr-2 h-3 w-3" />
            AI Training
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Train Your AI with{" "}
            <span className="gradient-text">Your Knowledge</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Upload your documents, connect cloud storage, or link your website
            to train the AI with your business knowledge for accurate,
            context-aware responses.
          </p>
        </div>

        {/* Upload Sources */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {uploadSources.map((source) => (
            <Card
              key={source.title}
              className="group cursor-pointer border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <source.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {source.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {source.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {source.formats.map((format) => (
                    <Badge
                      key={format}
                      variant="outline"
                      className="text-xs text-muted-foreground"
                    >
                      {format}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Training Interface */}
        <div className="mt-12 w-full grid gap-6 overflow-x-hidden lg:grid-cols-3">
          {/* Upload Area */}
          <div className="lg:col-span-2 w-full max-md:truncate">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Knowledge Base
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Drop Zone */}
                <div
                  className={`mb-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors ${
                    dragActive
                      ? "border-primary bg-primary/5"
                      : "border-border bg-muted/30 hover:border-primary/50"
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={() => setDragActive(false)}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mt-4 text-center font-medium text-foreground">
                    Drop files here or click to upload
                  </p>
                  <p className="mt-1 text-center text-sm text-muted-foreground">
                    Supports PDF, DOCX, TXT, CSV, and more
                  </p>
                  <Button className="mt-4 gap-2 bg-primary text-primary-foreground">
                    <Upload className="h-4 w-4" />
                    Browse Files
                  </Button>
                </div>

                {/* Documents List */}
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate font-medium text-foreground">
                            {doc.name}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {doc.type}
                          </Badge>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.chunks} chunks</span>
                          <span>•</span>
                          <span>{doc.lastUpdated}</span>
                        </div>
                        {doc.status === "training" && (
                          <Progress
                            value={trainingProgress}
                            className="mt-2 h-1 "
                          />
                        )}
                      </div>
                      <div className="shrink-0 max-md:-mt-7">
                        {doc.status === "trained" && (
                          <Badge className="border-green-500/30 bg-green-500/10 text-green-400">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Trained
                          </Badge>
                        )}
                        {doc.status === "training" && (
                          <Badge className="border-blue-500/30 bg-blue-500/10 text-blue-400">
                            <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
                            Training
                          </Badge>
                        )}
                        {doc.status === "queued" && (
                          <Badge className="border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                            Queued
                          </Badge>
                        )}
                        {doc.status === "error" && (
                          <Badge className="border-red-500/30 bg-red-500/10 text-red-400">
                            <XCircle className="mr-1 h-3 w-3" />
                            Error
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Training Stats */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Training Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Documents
                  </span>
                  <span className="font-medium text-foreground">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Total Chunks
                  </span>
                  <span className="font-medium text-foreground">268</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Knowledge Size
                  </span>
                  <span className="font-medium text-foreground">5.2 MB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Last Updated
                  </span>
                  <span className="font-medium text-foreground">5 min ago</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Training Status
                    </span>
                    <Badge className="border-green-500/30 bg-green-500/10 text-green-400">
                      Ready
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connected Sources */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Connected Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <integration.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-foreground">
                        {integration.name}
                      </span>
                    </div>
                    {integration.connected ? (
                      <Badge className="border-green-500/30 bg-green-500/10 text-green-400">
                        Connected
                      </Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              How AI Training Works
            </h3>
            <p className="mt-2 text-muted-foreground">
              Transform your business documents into intelligent AI responses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: Upload,
                title: "Upload Your Content",
                description:
                  "Upload PDFs, documents, or connect your cloud storage. We support all major file formats and can even crawl your website.",
              },
              {
                step: "02",
                icon: Brain,
                title: "AI Processing",
                description:
                  "Our AI analyzes your content, extracts key information, and creates semantic embeddings for intelligent retrieval.",
              },
              {
                step: "03",
                icon: Sparkles,
                title: "Smart Responses",
                description:
                  "Your chatbot now delivers accurate, context-aware responses based on your actual business knowledge.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {item.step !== "03" && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">
                <Zap className="mr-2 h-3 w-3" />
                Key Benefits
              </Badge>
              <h3 className="text-2xl font-bold text-foreground lg:text-3xl">
                Context-Aware AI That Knows Your Business
              </h3>
              <p className="mt-4 text-muted-foreground">
                Stop wasting time on generic responses. Train your AI with your
                unique business knowledge for accurate, helpful customer
                interactions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "95% Accuracy",
                  description: "Responses based on your actual data",
                },
                {
                  title: "Auto-Sync",
                  description: "Keep knowledge base always up-to-date",
                },
                {
                  title: "Multi-Language",
                  description: "Train in any language, respond in 50+",
                },
                {
                  title: "Secure",
                  description: "Your data is encrypted and private",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-lg border border-border bg-muted/30 p-4"
                >
                  <h4 className="font-semibold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
