"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import AuthGuard from "@/components/auth-guard";
import {
  CreditCard,
  Smartphone,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";

const plans = {
  starter: {
    name: "Starter",
    price: 999,
    features: ["1,000 conversations/month", "1 chatbot", "Basic analytics"],
  },
  professional: {
    name: "Professional",
    price: 2999,
    features: ["4,000 conversations/month", "2 chatbots", "Advanced analytics"],
  },
  business: {
    name: "Business",
    price: 5999,
    features: ["10,000 conversations/month", "4 chatbots", "Priority support"],
  },
};

export default function CheckoutPage() {
  return (
    <AuthGuard>
      <CheckoutContent />
    </AuthGuard>
  );
}

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") as keyof typeof plans;
  const selectedPlan = plans[plan] || plans["starter"];

  const [paymentMethod, setPaymentMethod] = useState<"card" | "bkash">("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    bkashNumber: "",
    email: "",
    name: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStatus("processing");

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success");
      setIsProcessing(false);
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push("/checkout/success");
      }, 2000);
    }, 3000);
  };

  const isFormValid = () => {
    if (paymentMethod === "card") {
      return (
        formData.cardNumber.replace(/\s/g, "").length === 16 &&
        formData.cardName.length > 0 &&
        formData.expiryDate.length === 5 &&
        formData.cvv.length === 3 &&
        formData.email.length > 0 &&
        formData.name.length > 0
      );
    } else {
      return (
        formData.bkashNumber.length === 11 &&
        formData.email.length > 0 &&
        formData.name.length > 0
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <button
                onClick={() => router.push("/pricing")}
                className="hover:text-foreground"
              >
                Pricing
              </button>
              <span>/</span>
              <span className="text-foreground">Checkout</span>
            </nav>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Payment Status Alert */}
              {paymentStatus === "processing" && (
                <Alert>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <AlertDescription>
                    Processing your payment securely...
                  </AlertDescription>
                </Alert>
              )}

              {paymentStatus === "success" && (
                <Alert className="border-green-500/30 bg-green-500/10 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Payment successful! Redirecting to confirmation page...
                  </AlertDescription>
                </Alert>
              )}

              {paymentStatus === "error" && (
                <Alert className="border-red-500/30 bg-red-500/10 text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Payment failed. Please try again or contact support.
                  </AlertDescription>
                </Alert>
              )}

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="John Doe"
                        disabled={isProcessing}
                        className="mt-1.5 border border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="john@example.com"
                        disabled={isProcessing}
                        className="mt-1.5 border border-border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value) =>
                      setPaymentMethod(value as "card" | "bkash")
                    }
                    disabled={isProcessing}
                  >
                    <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50">
                      <RadioGroupItem value="card" id="card" />
                      <Label
                        htmlFor="card"
                        className="flex items-center space-x-3 cursor-pointer flex-1"
                      >
                        <CreditCard className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Credit/Debit Card</p>
                          <p className="text-sm text-muted-foreground">
                            Visa, Mastercard, American Express
                          </p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50">
                      <RadioGroupItem value="bkash" id="bkash" />
                      <Label
                        htmlFor="bkash"
                        className="flex items-center space-x-3 cursor-pointer flex-1"
                      >
                        <Smartphone className="h-5 w-5" />
                        <div>
                          <p className="font-medium">bKash</p>
                          <p className="text-sm text-muted-foreground">
                            Pay with your bKash account
                          </p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  <Separator />

                  {/* Payment Forms */}
                  {paymentMethod === "card" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            handleInputChange(
                              "cardNumber",
                              formatCardNumber(e.target.value),
                            )
                          }
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          disabled={isProcessing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) =>
                            handleInputChange("cardName", e.target.value)
                          }
                          placeholder="John Doe"
                          disabled={isProcessing}
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) =>
                              handleInputChange(
                                "expiryDate",
                                formatExpiryDate(e.target.value),
                              )
                            }
                            placeholder="MM/YY"
                            maxLength={5}
                            disabled={isProcessing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) =>
                              handleInputChange(
                                "cvv",
                                e.target.value.replace(/[^0-9]/g, ""),
                              )
                            }
                            placeholder="123"
                            maxLength={3}
                            type="password"
                            disabled={isProcessing}
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={!isFormValid() || isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Pay ৳{selectedPlan.price}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}

                  {paymentMethod === "bkash" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* <div>
                        <Label htmlFor="bkashNumber">
                          bKash Account Number
                        </Label>
                        <Input
                          id="bkashNumber"
                          value={formData.bkashNumber}
                          onChange={(e) =>
                            handleInputChange(
                              "bkashNumber",
                              e.target.value.replace(/[^0-9]/g, ""),
                            )
                          }
                          placeholder="01XXXXXXXXX"
                          maxLength={11}
                          disabled={isProcessing}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Enter your 11-digit bKash account number
                        </p>
                      </div> */}

                      <div className="rounded-lg border border-border bg-muted/30 p-4">
                        <h4 className="font-medium mb-2">
                          How to pay with bKash:
                        </h4>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Enter your bKash account number above</li>
                          <li>2. Click &quot;Pay with bKash&quot; button</li>
                          <li>
                            3. You&apos;ll receive a payment request on your
                            bKash app
                          </li>
                          <li>
                            4. Enter your bKash PIN to confirm the payment
                          </li>
                        </ol>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-pink-600 hover:bg-pink-700"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Smartphone className="mr-2 h-4 w-4" />
                            Pay ৳{selectedPlan.price} with bKash
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Security Badge */}
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Lock className="h-4 w-4" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {selectedPlan.name} Plan
                      </span>
                      <Badge variant="secondary">Monthly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed monthly
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    {selectedPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>৳{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (0%)</span>
                      <span>৳0</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>৳{selectedPlan.price}</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-3">
                    <p className="text-xs text-muted-foreground">
                      By completing this purchase, you agree to our Terms of
                      Service and Privacy Policy. Your subscription will
                      auto-renew monthly unless cancelled.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
