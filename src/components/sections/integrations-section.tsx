"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Send,
  Globe,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  BarChart3
} from "lucide-react"

const socialPlatforms = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    icon: MessageCircle,
    color: "bg-green-500",
    textColor: "text-green-400",
    description: "Connect with billions of users on WhatsApp with official Business API integration.",
    features: [
      "Official WhatsApp Business API",
      "Rich media messages (images, videos, documents)",
      "Quick reply buttons and list messages",
      "Message templates for notifications",
      "End-to-end encryption",
      "Verified business profiles",
    ],
    stats: { users: "2B+", reach: "180+ countries" },
  },
  {
    id: "instagram",
    name: "Instagram Direct",
    icon: Instagram,
    color: "bg-gradient-to-br from-pink-500 to-purple-600",
    textColor: "text-pink-400",
    description: "Engage with your followers through Instagram DMs with automated responses.",
    features: [
      "Direct message automation",
      "Story mention responses",
      "Comment-to-DM automation",
      "Product catalogs integration",
      "Shoppable messages",
      "Influencer collaboration tools",
    ],
    stats: { users: "2B+", reach: "Global" },
  },
  {
    id: "facebook",
    name: "Facebook Messenger",
    icon: Facebook,
    color: "bg-blue-600",
    textColor: "text-blue-400",
    description: "Connect your Facebook Pages with intelligent chatbot automation.",
    features: [
      "Facebook Page integration",
      "Messenger automation",
      "Persistent menu setup",
      "Ice breakers and greetings",
      "Lead generation forms",
      "Facebook Ads integration",
    ],
    stats: { users: "1B+", reach: "Global" },
  },
  {
    id: "telegram",
    name: "Telegram Bot",
    icon: Send,
    color: "bg-sky-500",
    textColor: "text-sky-400",
    description: "Build powerful Telegram bots with advanced automation capabilities.",
    features: [
      "Bot API integration",
      "Inline mode support",
      "Group chat management",
      "Channel broadcasting",
      "Custom keyboards",
      "Payment processing",
    ],
    stats: { users: "700M+", reach: "Global" },
  },
  {
    id: "web",
    name: "Website Widget",
    icon: Globe,
    color: "bg-purple-600",
    textColor: "text-purple-400",
    description: "Embed a customizable chat widget on your website for instant support.",
    features: [
      "Customizable appearance",
      "Proactive chat triggers",
      "Visitor analytics",
      "Mobile responsive design",
      "Multi-language support",
      "Custom branding",
    ],
    stats: { users: "Unlimited", reach: "Your website" },
  },
]

const integrationCategories = [
  {
    title: "CRM & Sales",
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Freshsales"],
  },
  {
    title: "E-commerce",
    integrations: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe"],
  },
  {
    title: "Productivity",
    integrations: ["Slack", "Google Workspace", "Microsoft 365", "Notion", "Asana"],
  },
  {
    title: "Analytics",
    integrations: ["Google Analytics", "Mixpanel", "Segment", "Amplitude", "Heap"],
  },
]

export function IntegrationsSection() {
  const [activeChannel, setActiveChannel] = useState("whatsapp")
  const activePlatform = socialPlatforms.find(p => p.id === activeChannel)

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:max-w-[90%] md:mx-auto">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary">
            <Zap className="mr-2 h-3 w-3" />
            Native Integrations
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Connect Every{" "}
            <span className="gradient-text">Social Channel</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Unified inbox for all your messaging platforms. Manage conversations from WhatsApp, Instagram, Facebook, and more in one place.
          </p>
        </div>

        {/* Channel Selector */}
        <div className="mt-16">
          <Tabs value={activeChannel} onValueChange={setActiveChannel} className="w-full">
            <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 bg-transparent p-0">
              {socialPlatforms.map((platform) => (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <platform.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{platform.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {socialPlatforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id} className="mt-12">
                <Card className="overflow-hidden border-border bg-card">
                  <div className="grid lg:grid-cols-2">
                    {/* Platform Info */}
                    <CardContent className="p-8 lg:p-12">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${platform.color}`}>
                        <platform.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold text-foreground">
                        {platform.name}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {platform.description}
                      </p>

                      {/* Stats */}
                      <div className="mt-6 flex gap-6">
                        <div>
                          <p className="text-2xl font-bold text-foreground">{platform.stats.users}</p>
                          <p className="text-sm text-muted-foreground">Active Users</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{platform.stats.reach}</p>
                          <p className="text-sm text-muted-foreground">Reach</p>
                        </div>
                      </div>

                      <Button className="mt-8 gap-2 bg-primary text-primary-foreground">
                        Connect {platform.name.split(" ")[0]}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>

                    {/* Features List */}
                    <div className="border-t border-border bg-muted/50 p-8 lg:border-l lg:border-t-0 lg:p-12">
                      <h4 className="mb-6 text-lg font-semibold text-foreground">
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {platform.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${platform.color}`}>
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Unified Inbox Preview */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Unified Inbox Experience
            </h3>
            <p className="mt-2 text-muted-foreground">
              All your conversations from every channel in one powerful inbox
            </p>
          </div>

          <Card className="overflow-hidden border-border bg-card">
            <div className="grid lg:grid-cols-4">
              {/* Conversation List */}
              <div className="border-b border-border lg:border-b-0 lg:border-r">
                <div className="border-b border-border p-4">
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="divide-y divide-border">
                  {[
                    { name: "Sarah Johnson", channel: "whatsapp", message: "Thanks for the quick response!", time: "2m", unread: true },
                    { name: "Mike Chen", channel: "instagram", message: "Do you have this in blue?", time: "5m", unread: true },
                    { name: "Emma Wilson", channel: "facebook", message: "Great, I'll order now", time: "12m", unread: false },
                    { name: "Alex Brown", channel: "telegram", message: "Can I get a tracking number?", time: "1h", unread: false },
                  ].map((conv, idx) => (
                    <div key={idx} className={`flex cursor-pointer items-center gap-3 p-4 hover:bg-muted ${idx === 0 ? 'bg-muted' : ''}`}>
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                          {conv.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full ${
                          conv.channel === 'whatsapp' ? 'bg-green-500' :
                          conv.channel === 'instagram' ? 'bg-pink-500' :
                          conv.channel === 'facebook' ? 'bg-blue-500' : 'bg-sky-500'
                        } flex items-center justify-center`}>
                          {conv.channel === 'whatsapp' && <MessageCircle className="h-2.5 w-2.5 text-white" />}
                          {conv.channel === 'instagram' && <Instagram className="h-2.5 w-2.5 text-white" />}
                          {conv.channel === 'facebook' && <Facebook className="h-2.5 w-2.5 text-white" />}
                          {conv.channel === 'telegram' && <Send className="h-2.5 w-2.5 text-white" />}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${conv.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {conv.name}
                          </p>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <p className="truncate text-xs text-muted-foreground">{conv.message}</p>
                      </div>
                      {conv.unread && (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat View */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-sm font-medium text-green-400">
                      SJ
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">WhatsApp • Online</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Users className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 space-y-4 overflow-y-auto p-4">
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-none bg-primary px-4 py-2">
                      <p className="text-sm text-primary-foreground">{"Hi! I'd like to know about your return policy."}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Sparkles className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-muted px-4 py-2">
                      <p className="text-sm text-foreground">
                        {"Hi Sarah! Our return policy allows returns within 30 days of purchase for a full refund. Items must be unused and in original packaging. Would you like me to help you start a return?"}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-none bg-primary px-4 py-2">
                      <p className="text-sm text-primary-foreground">{"That's perfect! Thanks for the quick response!"}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 rounded-lg border border-border bg-muted px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                    <Button className="bg-primary text-primary-foreground">
                      Send
                    </Button>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="border-t border-border bg-muted/30 lg:border-l lg:border-t-0">
                <div className="border-b border-border p-4">
                  <h4 className="font-medium text-foreground">Customer Info</h4>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-lg font-medium text-green-400">
                      SJ
                    </div>
                    <p className="mt-2 font-medium text-foreground">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div className="space-y-3 border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm text-foreground">sarah@example.com</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm text-foreground">New York, USA</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Last Order</p>
                      <p className="text-sm text-foreground">#12345 - $89.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Third-Party Integrations */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Connect Your Favorite Tools
            </h3>
            <p className="mt-2 text-muted-foreground">
              Seamlessly integrate with 100+ popular business applications
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrationCategories.map((category) => (
              <Card key={category.title} className="border-border bg-card">
                <CardContent className="p-6">
                  <h4 className="mb-4 font-semibold text-foreground">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.integrations.map((integration) => (
                      <Badge key={integration} variant="outline" className="text-muted-foreground">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
