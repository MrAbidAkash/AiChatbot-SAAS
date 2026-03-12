"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  Brain, 
  Workflow, 
  BarChart3, 
  Users, 
  Zap,
  FileText,
  Globe,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Settings,
  Webhook
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Chatbot Builder",
    description: "Create intelligent chatbots with our visual builder. No coding required. Deploy to multiple channels instantly.",
    badge: "Core Feature",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Context-Aware AI",
    description: "Train your AI with your documents, FAQs, and knowledge base for accurate, personalized responses.",
    badge: "AI Powered",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Workflow,
    title: "Flow Designer",
    description: "Design complex conversation flows with our intuitive drag-and-drop interface. Handle any scenario.",
    badge: "Visual Editor",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track conversations, measure engagement, and optimize performance with real-time insights.",
    badge: "Insights",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team. Assign conversations, share templates, and manage permissions.",
    badge: "Teamwork",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Go live in minutes. Connect to your social channels and start engaging customers immediately.",
    badge: "Fast",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
]

const capabilities = [
  {
    icon: FileText,
    title: "Document Training",
    description: "Upload PDFs, docs, and connect cloud drives to train your AI with your business knowledge.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support customers in 50+ languages with automatic translation and localization.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and role-based access control.",
  },
  {
    icon: Webhook,
    title: "API & Webhooks",
    description: "Connect to your existing tools with powerful APIs and real-time webhooks.",
  },
  {
    icon: Settings,
    title: "Custom Branding",
    description: "Match your brand with custom colors, logos, and personalized chat experiences.",
  },
  {
    icon: Layers,
    title: "Template Library",
    description: "Get started quickly with pre-built templates for common business scenarios.",
  },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:max-w-[90%] md:mx-auto">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary">
            <Sparkles className="mr-2 h-3 w-3" />
            Powerful Features
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything You Need to Build{" "}
            <span className="gradient-text">Intelligent Chatbots</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete platform for creating, managing, and scaling AI-powered conversations across all your social media channels.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group cursor-pointer border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${activeFeature === index ? 'border-primary' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <CardContent className="p-6">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <Badge variant="outline" className="mb-3 text-xs">
                  {feature.badge}
                </Badge>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Capabilities */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Additional Capabilities
            </h3>
            <p className="mt-2 text-muted-foreground">
              Enterprise-grade features for scaling your customer engagement
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div 
                key={capability.title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <capability.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{capability.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Preview Card */}
        <div className="mt-20">
          <Card className="overflow-hidden border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">
                  Visual Builder
                </Badge>
                <h3 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Design Conversations Visually
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Create complex chatbot flows with our intuitive drag-and-drop interface. 
                  Connect triggers, conditions, and actions to build sophisticated automation.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Drag-and-drop flow builder",
                    "Pre-built templates for common scenarios",
                    "Real-time preview and testing",
                    "Version control and rollback",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 gap-2 bg-primary text-primary-foreground">
                  Explore Flow Builder
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative bg-muted p-8">
                {/* Flow Builder Preview */}
                <div className="space-y-4">
                  {/* Start Node */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <MessageSquare className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 rounded-lg border border-border bg-card p-3">
                      <p className="text-sm font-medium text-foreground">Trigger: New Message</p>
                      <p className="text-xs text-muted-foreground">When customer sends a message</p>
                    </div>
                  </div>
                  
                  <div className="ml-6 h-8 w-px bg-border" />
                  
                  {/* AI Node */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                      <Brain className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1 rounded-lg border border-border bg-card p-3">
                      <p className="text-sm font-medium text-foreground">AI Response</p>
                      <p className="text-xs text-muted-foreground">Generate contextual reply</p>
                    </div>
                  </div>
                  
                  <div className="ml-6 h-8 w-px bg-border" />
                  
                  {/* Condition Node */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4">
                      <Workflow className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="flex-1 rounded-lg border border-border bg-card p-3">
                      <p className="text-sm font-medium text-foreground">Condition: Intent</p>
                      <p className="text-xs text-muted-foreground">Route based on customer intent</p>
                    </div>
                  </div>
                  
                  <div className="ml-6 flex gap-4">
                    <div className="h-8 w-px bg-border" />
                    <div className="mt-4 h-px flex-1 bg-border" />
                    <div className="h-8 w-px bg-border" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-primary/50 bg-card p-3">
                      <p className="text-xs font-medium text-primary">Sales Inquiry</p>
                    </div>
                    <div className="rounded-lg border border-accent/50 bg-card p-3">
                      <p className="text-xs font-medium text-accent">Support Request</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
