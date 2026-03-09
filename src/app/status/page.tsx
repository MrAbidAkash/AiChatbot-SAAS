"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const services = [
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Web Application", status: "operational", uptime: "99.98%" },
  { name: "Chat Widget", status: "operational", uptime: "99.99%" },
  { name: "Facebook Messenger", status: "operational", uptime: "99.97%" },
  { name: "WhatsApp Business", status: "operational", uptime: "99.95%" },
  { name: "Telegram Bot", status: "operational", uptime: "99.99%" },
  { name: "Analytics Dashboard", status: "operational", uptime: "99.96%" },
  { name: "Document Processing", status: "operational", uptime: "99.94%" },
];

const incidents = [
  {
    date: "March 5, 2026",
    title: "Scheduled Maintenance Completed",
    description: "Database optimization completed successfully. No service interruption.",
    status: "resolved",
  },
  {
    date: "February 28, 2026",
    title: "Minor API Latency",
    description: "Increased response times were observed for approximately 15 minutes. Issue was identified and resolved.",
    status: "resolved",
  },
  {
    date: "February 15, 2026",
    title: "WhatsApp Integration Delay",
    description: "Message delivery was delayed due to third-party API issues. Services restored after 30 minutes.",
    status: "resolved",
  },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-green-500/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>All Systems Operational</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              System Status
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Real-time status of ChatFlow AI services and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Service Status</h2>
          <div className="space-y-3">
            {services.map((service) => (
              <Card key={service.name} className="border-border bg-card">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {service.uptime} uptime
                    </span>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium capitalize text-green-600">
                      {service.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Stats */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Overall Uptime
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-foreground">99.99%</p>
                <p className="mt-2 text-sm text-muted-foreground">Last 24 hours</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-foreground">99.97%</p>
                <p className="mt-2 text-sm text-muted-foreground">Last 7 days</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-foreground">99.95%</p>
                <p className="mt-2 text-sm text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <Card key={incident.title} className="border-border bg-card">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-foreground">{incident.title}</CardTitle>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {incident.date}
                      </p>
                    </div>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium capitalize text-green-600">
                      {incident.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{incident.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="border-t border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl text-center">
            <AlertCircle className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Get Status Updates
            </h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to receive notifications about service disruptions and maintenance.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
