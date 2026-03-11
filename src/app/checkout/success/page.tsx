"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import AuthGuard from "@/components/auth-guard";
import {
  CheckCircle,
  ArrowRight,
  Download,
  Settings,
  Mail,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <AuthGuard>
      <CheckoutSuccessContent />
    </AuthGuard>
  );
}

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  // Extract payment details from URL parameters during component initialization
  const paymentId = searchParams.get("paymentID");
  const transactionId = searchParams.get("trxID");
  const amount = searchParams.get("amount");
  const plan = searchParams.get("plan");
  const paymentMethod = searchParams.get("paymentMethod") || "bKash";

  const [paymentDetails] = useState(() => ({
    orderId: paymentId ? `BK-${paymentId.slice(-8)}` : `ORD-${Date.now()}`,
    plan: plan || "Professional",
    amount: amount ? parseFloat(amount) : 2999,
    paymentMethod,
    paymentId: paymentId || "",
    transactionId: transactionId || "",
  }));

  const [nextBillingDate] = useState(() =>
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  );

  useEffect(() => {
    // Simulate payment verification
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                <Loader2 className="h-8 w-8 text-blue-600 dark:text-blue-400 animate-spin" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Verifying Your Payment...
              </h1>
              <p className="text-muted-foreground">
                Please wait while we confirm your payment status.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Payment Successful!
            </h1>
            <p className="text-lg text-muted-foreground">
              {paymentDetails.paymentMethod === "bKash"
                ? "Thank you for your purchase. Your bKash payment has been confirmed and your subscription is now active."
                : "Thank you for your purchase. Your subscription is now active."}
            </p>
            {paymentDetails.paymentMethod === "bKash" && (
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300">
                Paid with bKash
              </div>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-medium">{paymentDetails.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium">{paymentDetails.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Paid</span>
                  <span className="font-medium">
                    ৳{paymentDetails.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium">
                    {paymentDetails.paymentMethod}
                  </span>
                </div>
                {paymentDetails.transactionId && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Transaction ID
                    </span>
                    <span className="font-medium">
                      {paymentDetails.transactionId}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Billing</span>
                  <span className="font-medium">{nextBillingDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What&apos;s Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-medium text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">Check Your Email</h4>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve sent a confirmation email with your receipt
                        and account details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-medium text-sm">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">Access Your Dashboard</h4>
                      <p className="text-sm text-muted-foreground">
                        Start building your chatbot and explore all features
                        available in your plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-medium text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">Integrate & Launch</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect your preferred channels and start engaging with
                        your customers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/dashboard">
                    <Sparkles className="h-4 w-4" />
                    Go to Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Resend Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="mt-6 border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-medium mb-2">
                Need Help Getting Started?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you make the most of your new
                subscription.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  View Setup Guide
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
