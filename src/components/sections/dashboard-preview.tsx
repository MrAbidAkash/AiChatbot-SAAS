"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  MessageSquare,
  Users,
  TrendingUp,
  BarChart3,
  Settings,
  FileText,
  Inbox,
  Workflow,
  Zap,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Search,
  Bell,
  Moon,
} from "lucide-react";

const sidebarItems = [
  { icon: Inbox, label: "Inbox", badge: 12, active: false },
  { icon: Bot, label: "Chatbots", badge: null, active: true },
  { icon: Workflow, label: "Flows", badge: null, active: false },
  { icon: FileText, label: "Training", badge: null, active: false },
  { icon: Users, label: "Contacts", badge: null, active: false },
  { icon: BarChart3, label: "Analytics", badge: null, active: false },
  { icon: Settings, label: "Settings", badge: null, active: false },
];

const chatbots = [
  {
    name: "Customer Support Bot",
    status: "active",
    channels: ["WhatsApp", "Web"],
    conversations: 1234,
    satisfaction: 94,
    trend: "up",
  },
  {
    name: "Sales Assistant",
    status: "active",
    channels: ["Instagram", "Facebook"],
    conversations: 856,
    satisfaction: 91,
    trend: "up",
  },
  {
    name: "FAQ Bot",
    status: "draft",
    channels: ["Telegram"],
    conversations: 0,
    satisfaction: 0,
    trend: "neutral",
  },
];

const analytics = [
  {
    label: "Total Conversations",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
  },
  { label: "Response Rate", value: "98.2%", change: "+2.1%", trend: "up" },
  { label: "Avg. Response Time", value: "1.2s", change: "-0.3s", trend: "up" },
  { label: "Customer Satisfaction", value: "94%", change: "+3%", trend: "up" },
];

export function DashboardPreview() {
  const [selectedBot, setSelectedBot] = useState(0);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary">
            <BarChart3 className="mr-2 h-3 w-3" />
            Dashboard Preview
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Powerful Management <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A clean, intuitive interface to manage all your chatbots, monitor
            conversations, and analyze performance.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16">
          <Card className="overflow-hidden border-border bg-card shadow-2xl">
            <div className="flex h-[700px]">
              {/* Sidebar */}
              <div className="hidden w-64 flex-col border-r border-border bg-sidebar lg:flex">
                {/* Logo */}
                <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-sidebar-foreground">
                    ChatTime AI
                  </span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-3">
                  <ul className="space-y-1">
                    {sidebarItems.map((item) => (
                      <li key={item.label}>
                        <button
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                            item.active
                              ? "bg-sidebar-accent text-sidebar-primary"
                              : "text-sidebar-foreground hover:bg-sidebar-accent"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-xs text-primary-foreground">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* User */}
                <div className="border-t border-sidebar-border p-3">
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-sidebar-accent">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-primary">
                      JD
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-sidebar-foreground">
                        John Doe
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-1 flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="flex h-16 items-center justify-between border-b border-border px-6">
                  <div className="flex items-center gap-4">
                    <h1 className="text-lg font-semibold text-foreground">
                      Chatbots
                    </h1>
                    <Badge variant="outline" className="text-muted-foreground">
                      3 bots
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 rounded-lg border border-border bg-muted py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Moon className="h-4 w-4" />
                    </Button>
                    <Button className="gap-2 bg-primary text-primary-foreground">
                      <Plus className="h-4 w-4" />
                      <span className="hidden sm:inline">New Chatbot</span>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Stats */}
                  <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {analytics.map((stat) => (
                      <Card
                        key={stat.label}
                        className="border-border bg-muted/50"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">
                              {stat.label}
                            </p>
                            <div
                              className={`flex items-center gap-1 text-xs ${
                                stat.trend === "up"
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >
                              {stat.trend === "up" ? (
                                <ArrowUpRight className="h-3 w-3" />
                              ) : (
                                <ArrowDownRight className="h-3 w-3" />
                              )}
                              {stat.change}
                            </div>
                          </div>
                          <p className="mt-2 text-2xl font-bold text-foreground">
                            {stat.value}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Chatbots List */}
                  <Card className="border-border bg-muted/30">
                    <CardHeader className="border-b border-border pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-foreground">
                          Your Chatbots
                        </CardTitle>
                        <div className="flex gap-2">
                          <Badge
                            variant="outline"
                            className="cursor-pointer text-muted-foreground hover:text-foreground"
                          >
                            All
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer text-muted-foreground hover:text-foreground"
                          >
                            Active
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer text-muted-foreground hover:text-foreground"
                          >
                            Draft
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border">
                        {chatbots.map((bot, index) => (
                          <div
                            key={bot.name}
                            className={`flex cursor-pointer items-center gap-4 p-4 transition-colors hover:bg-muted/50 ${
                              selectedBot === index ? "bg-muted/50" : ""
                            }`}
                            onClick={() => setSelectedBot(index)}
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                              <Bot className="h-6 w-6 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-foreground">
                                  {bot.name}
                                </p>
                                <Badge
                                  variant="outline"
                                  className={
                                    bot.status === "active"
                                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                                      : "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                                  }
                                >
                                  {bot.status}
                                </Badge>
                              </div>
                              <div className="mt-1 flex flex-wrap gap-2">
                                {bot.channels.map((channel) => (
                                  <span
                                    key={channel}
                                    className="text-xs text-muted-foreground"
                                  >
                                    {channel}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="hidden text-right sm:block">
                              <p className="text-sm font-medium text-foreground">
                                {bot.conversations.toLocaleString()} convos
                              </p>
                              <div
                                className={`flex items-center justify-end gap-1 text-xs ${
                                  bot.trend === "up"
                                    ? "text-green-400"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {bot.satisfaction > 0 && (
                                  <>
                                    {bot.trend === "up" && (
                                      <TrendingUp className="h-3 w-3" />
                                    )}
                                    {bot.satisfaction}% satisfaction
                                  </>
                                )}
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <Card className="group cursor-pointer border-border bg-muted/30 transition-colors hover:border-primary/50">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Workflow className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Flow Builder
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Design conversation flows
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="group cursor-pointer border-border bg-muted/30 transition-colors hover:border-primary/50">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Train AI
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Upload documents
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="group cursor-pointer border-border bg-muted/30 transition-colors hover:border-primary/50">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Integrations
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Connect channels
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Design Principles */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Clean & Minimal",
              description:
                "Focus on essential information with a clutter-free interface",
            },
            {
              title: "Dark by Default",
              description: "Sophisticated dark theme that's easy on the eyes",
            },
            {
              title: "Intuitive Navigation",
              description:
                "Logical structure that makes finding features effortless",
            },
            {
              title: "Real-time Updates",
              description: "Live data and instant feedback for all actions",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
