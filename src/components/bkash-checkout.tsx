"use client";

import { useState } from "react";
import { useBkash } from "@/hooks/use-bkash";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BkashCheckoutProps {
  amount: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function BkashCheckout({
  amount,
  customerInfo,
  onSuccess,
  onError,
}: BkashCheckoutProps) {
  const [payerReference, setPayerReference] = useState("");
  const { createPayment, isLoading, error } = useBkash({
    onSuccess,
    onError,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const callbackURL = `${window.location.origin}/api/bkash/callback`;

      await createPayment({
        amount,
        callbackURL,
        payerReference,
        customerInfo,
      });
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>bKash Payment</CardTitle>
        <CardDescription>
          Complete your payment of ৳{amount} using bKash
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={customerInfo.name} disabled required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={customerInfo.email}
              disabled
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={customerInfo.phone} disabled required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="payerReference">Payer Reference (Optional)</Label>
            <Input
              id="payerReference"
              value={payerReference}
              onChange={(e) => setPayerReference(e.target.value)}
              placeholder="Enter reference if any"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : `Pay ৳${amount} with bKash`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
