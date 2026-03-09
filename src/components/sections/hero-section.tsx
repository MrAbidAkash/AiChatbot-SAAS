"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Bot,
  Zap,
  Shield,
  Globe,
  Play
} from "lucide-react"

const stats = [
  { value: "50M+", label: "Messages Processed" },
  { value: "10K+", label: "Active Businesses" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "150+", label: "Countries" },
]

const socialChannels = [
  { name: "WhatsApp", color: "bg-green-500/20 text-green-400" },
  { name: "Instagram", color: "bg-pink-500/20 text-pink-400" },
  { name: "Facebook", color: "bg-blue-500/20 text-blue-400" },
  { name: "Telegram", color: "bg-sky-500/20 text-sky-400" },
]

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "How can I help you today?"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20">
              <Sparkles className="mr-2 h-3 w-3" />
              Powered by Advanced AI
            </Badge>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Intelligent Conversations for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Build, deploy, and manage AI-powered chatbots across WhatsApp, Instagram, 
              and Facebook. Train your AI with your own documents for context-aware, 
              personalized customer interactions.
            </p>

            {/* Social Channels */}
            <div className="mt-8 flex flex-wrap gap-2">
              {socialChannels.map((channel) => (
                <Badge key={channel.name} variant="outline" className={channel.color}>
                  {channel.name}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Sparkles className="h-4 w-4" />
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">ChatFlow Assistant</p>
                  <p className="text-sm text-muted-foreground">Online • Powered by AI</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Chat Messages */}
              <div className="mt-4 space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-muted px-4 py-3">
                    <p className="text-foreground">
                      {typedText}
                      <span className="animate-pulse">|</span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <div className="rounded-2xl rounded-tr-none bg-primary px-4 py-3">
                    <p className="text-primary-foreground">
                      {"I'd like to know about your return policy"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-muted px-4 py-3">
                    <p className="text-foreground">
                      {"Our return policy allows returns within 30 days of purchase. Would you like me to help you start a return?"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  Start a return
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Track my order
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Contact support
                </Button>
              </div>

              {/* Input */}
              <div className="mt-4 flex gap-2">
                <div className="flex flex-1 items-center rounded-full border border-border bg-muted px-4 py-2">
                  <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Type a message...</span>
                </div>
                <Button size="icon" className="rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-4 top-1/4 hidden rounded-lg border border-border bg-card p-3 shadow-lg lg:block">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Instant Responses</span>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 hidden rounded-lg border border-border bg-card p-3 shadow-lg lg:block">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Enterprise Security</span>
              </div>
            </div>

            <div className="absolute -bottom-2 left-1/4 hidden rounded-lg border border-border bg-card p-3 shadow-lg lg:block">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Multi-Channel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
