"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthHeader from "@/components/auth-header";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              ChatTime AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 text-muted-foreground hover:text-foreground"
                >
                  Product
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/products/chatbot-builder">
                    AI Chatbot Builder
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/flow-designer">Flow Designer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/analytics">Analytics Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/document-training">
                    Document Training
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 text-muted-foreground hover:text-foreground"
                >
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/solutions/ecommerce">E-commerce</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/healthcare">Healthcare</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/financial">Financial Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/education">Education</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/integrations">Integrations</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/docs">Documentation</Link>
            </Button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <AuthHeader />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="justify-start text-muted-foreground"
                asChild
              >
                <Link href="/products/chatbot-builder">Product</Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-muted-foreground"
                asChild
              >
                <Link href="/solutions/ecommerce">Solutions</Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-muted-foreground"
                asChild
              >
                <Link href="/integrations">Integrations</Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-muted-foreground"
                asChild
              >
                <Link href="/pricing">Pricing</Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-muted-foreground"
                asChild
              >
                <Link href="/docs">Documentation</Link>
              </Button>
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <AuthHeader />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
