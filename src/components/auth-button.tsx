"use client";

import { useState, useEffect } from "react";
import { getSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";

interface AuthButtonProps {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
}

export default function AuthButton({
  variant = "default",
  size = "lg",
  className = "",
  showIcon = true,
}: AuthButtonProps) {
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
      <Button variant={variant} size={size} className={className} disabled>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Loading...
      </Button>
    );
  }

  if (isAuthenticated) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link href="/dashboard" className="gap-2">
          {showIcon && <LayoutDashboard className="h-4 w-4" />}
          Go to Dashboard
          {showIcon && <ArrowRight className="h-4 w-4" />}
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href="/signup" className="gap-2">
        {showIcon && <Sparkles className="h-4 w-4" />}
        Start Free Trial
        {showIcon && <ArrowRight className="h-4 w-4" />}
      </Link>
    </Button>
  );
}
