"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const featuredPost = {
  title: "The Future of AI Chatbots in Customer Service",
  excerpt:
    "Discover how AI-powered chatbots are transforming customer service and what it means for your business in 2026 and beyond.",
  author: "Sarah Chen",
  date: "March 5, 2026",
  readTime: "8 min read",
  category: "Industry Trends",
  image: "/blog/featured.jpg",
};

const posts = [
  {
    title: "10 Ways to Improve Your Chatbot Conversion Rates",
    excerpt:
      "Learn proven strategies to turn more conversations into conversions with your AI chatbot.",
    author: "Michael Ross",
    date: "March 3, 2026",
    readTime: "5 min read",
    category: "Tips & Tricks",
  },
  {
    title: "How to Train Your Chatbot with Custom Documents",
    excerpt:
      "A step-by-step guide to training your chatbot using your own knowledge base and documents.",
    author: "Emily Zhang",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "Tutorials",
  },
  {
    title: "HIPAA Compliance for Healthcare Chatbots",
    excerpt:
      "Everything you need to know about building compliant chatbots for healthcare organizations.",
    author: "Dr. James Wilson",
    date: "February 25, 2026",
    readTime: "10 min read",
    category: "Compliance",
  },
  {
    title: "Integrating ChatTime AI with Shopify",
    excerpt:
      "Complete guide to connecting your e-commerce store with ChatTime AI for better customer support.",
    author: "Lisa Park",
    date: "February 22, 2026",
    readTime: "7 min read",
    category: "Integrations",
  },
  {
    title: "Understanding AI Chatbot Analytics",
    excerpt:
      "How to interpret your chatbot metrics and use data to improve performance.",
    author: "David Kim",
    date: "February 18, 2026",
    readTime: "6 min read",
    category: "Analytics",
  },
  {
    title: "Multi-Language Support: Reaching Global Audiences",
    excerpt:
      "Best practices for deploying chatbots that serve customers in multiple languages.",
    author: "Maria Garcia",
    date: "February 15, 2026",
    readTime: "5 min read",
    category: "Best Practices",
  },
];

const categories = [
  "All",
  "Industry Trends",
  "Tutorials",
  "Tips & Tricks",
  "Integrations",
  "Compliance",
  "Analytics",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Blog
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Insights, tutorials, and best practices for AI chatbot
              development.
            </p>
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

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="bg-muted/50 p-8 lg:p-12">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {featuredPost.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-foreground lg:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button className="mt-6 gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 p-12">
                <div className="text-6xl font-bold text-primary/30">
                  Featured
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="border-border bg-card transition-shadow hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </CardHeader>
                <CardContent>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
