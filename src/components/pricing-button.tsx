"use client";

import { useState, useEffect } from "react";
import { getSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PricingButtonProps {
  planName: string;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
}

export default function PricingButton({
  planName,
  className = "",
  variant = "default",
}: PricingButtonProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await getSession();
        setIsAuthenticated(!!session.data?.user);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <Button variant={variant} className={className} disabled>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Loading...
      </Button>
    );
  }

  // Get the appropriate CTA text and href based on plan and auth state
  const getButtonContent = () => {
    if (planName === "Enterprise") {
      return {
        text: "Contact Sales",
        href: "/contact",
      };
    }

    if (isAuthenticated) {
      // User is logged in - show upgrade options
      if (planName === "Starter") {
        return {
          text: "Upgrade to Starter",
          href: "/checkout?plan=starter",
        };
      } else if (planName === "Professional") {
        return {
          text: "Upgrade to Professional",
          href: "/checkout?plan=professional",
        };
      } else if (planName === "Business") {
        return {
          text: "Upgrade to Business",
          href: "/checkout?plan=business",
        };
      } else if (planName === "Enterprise") {
        return {
          text: "Upgrade to Enterprise",
          href: "/contact",
        };
      }
    } else {
      // User is not logged in - show start free trial
      return {
        text: "Start Free Trial",
        href: `/checkout?plan=${planName.toLowerCase()}`,
      };
    }

    return {
      text: "Start Free Trial",
      href: `/checkout?plan=${planName.toLowerCase()}`,
    };
  };

  const { text, href } = getButtonContent();

  return (
    <Button variant={variant} className={className} asChild>
      <Link href={href} className="gap-2">
        {text}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
