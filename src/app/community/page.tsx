"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  MessageSquare,
  Users,
  Github,
  Youtube,
  Calendar,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const channels = [
  {
    icon: MessageSquare,
    title: "Discord Community",
    description: "Join thousands of developers and creators building with ChatFlow AI.",
    members: "12,500+",
    cta: "Join Discord",
    link: "#",
  },
  {
    icon: Github,
    title: "GitHub Discussions",
    description: "Ask questions, share ideas, and contribute to open-source projects.",
    members: "3,200+",
    cta: "View GitHub",
    link: "#",
  },
  {
    icon: Youtube,
    title: "YouTube Channel",
    description: "Watch tutorials, webinars, and product updates.",
    members: "8,900+",
    cta: "Subscribe",
    link: "#",
  },
];

const upcomingEvents = [
  {
    title: "Building AI Chatbots Workshop",
    date: "March 15, 2026",
    time: "2:00 PM EST",
    type: "Workshop",
  },
  {
    title: "Monthly Community Call",
    date: "March 20, 2026",
    time: "11:00 AM EST",
    type: "Meetup",
  },
  {
    title: "ChatFlow AI 2.0 Launch Event",
    date: "April 1, 2026",
    time: "10:00 AM EST",
    type: "Launch",
  },
];

const contributors = [
  { name: "Alex Chen", contributions: 142, avatar: "AC" },
  { name: "Maria Garcia", contributions: 98, avatar: "MG" },
  { name: "James Wilson", contributions: 87, avatar: "JW" },
  { name: "Sarah Kim", contributions: 76, avatar: "SK" },
  { name: "David Park", contributions: 65, avatar: "DP" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Join 25,000+ Members</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Community
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Connect with developers, share ideas, and learn from experts building
              the future of conversational AI.
            </p>
            <Button size="lg" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Join Our Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Connect With Us
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join the conversation on your favorite platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((channel) => (
              <Card key={channel.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{channel.description}</p>
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {channel.members} members
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={channel.link}>{channel.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="border-border bg-card">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date} at {event.time}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {event.type}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              <Trophy className="mr-2 inline h-8 w-8 text-yellow-500" />
              Top Contributors
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Recognizing our most active community members.
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="space-y-3">
              {contributors.map((contributor, index) => (
                <Card key={contributor.name} className="border-border bg-card">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-muted-foreground">
                        #{index + 1}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {contributor.avatar}
                      </div>
                      <span className="font-medium text-foreground">{contributor.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {contributor.contributions} contributions
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Join?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Become part of our growing community of developers and creators.
            </p>
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
