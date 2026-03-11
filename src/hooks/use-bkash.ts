"use client";

import { useState } from "react";
import {
  BkashCreatePaymentRequest,
  BkashCreatePaymentResponse,
} from "@/lib/bkash";

interface UseBkashOptions {
  onSuccess?: (data: BkashCreatePaymentResponse) => void;
  onError?: (error: string) => void;
}

export function useBkash({ onSuccess, onError }: UseBkashOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPayment = async (paymentData: BkashCreatePaymentRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/bkash/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Payment creation failed");
      }

      if (data.bkashURL) {
        window.location.href = data.bkashURL;
      }

      onSuccess?.(data);
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      onError?.(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createPayment,
    isLoading,
    error,
  };
}
