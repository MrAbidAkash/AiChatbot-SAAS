"use client";

import { useEffect, useState } from "react";
import { useBkash } from "@/hooks/use-bkash";
import { BkashCreatePaymentRequest } from "@/lib/bkash";

interface Variant {
  id?: string;
  pricingId?: string;
  label: string;
  price: number;
  size?: string;
  sizes?: Array<{ size: string }>;
}

interface ProductCheckoutProps {
  page: {
    pricing: Variant[];
  };
}

export default function ProductCheckout({ page }: ProductCheckoutProps) {
  const data = page?.pricing;
  const [variant] = useState<Variant>(data[0]);
  const [payment] = useState<"partial" | "full" | "pickup">("partial");
  const [deliveryCharge] = useState(99);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
  }>({});

  const { createPayment, isLoading, error } = useBkash({
    onSuccess: (data) => {
      if (data.bkashURL) {
        window.location.href = data.bkashURL;
      }
    },
    onError: (errorMessage) => {
      alert(`bKash payment failed: ${errorMessage}`);
    },
  });

  const DELIVERY_CHARGE = deliveryCharge;
  const fullPrice = variant?.price;

  const generateEventId = (prefix: string) =>
    `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;

  // ===== BOTH PLATFORMS EVENT FUNCTIONS =====

  // Send ViewContent to both platforms
  const sendViewContentEvents = async () => {
    const eventId = generateEventId("view_content");

    // 1. Facebook Pixel (browser)
    if (
      typeof window !== "undefined" &&
      (
        window as unknown as {
          fbq?: (
            command: string,
            event: string,
            data?: Record<string, unknown>,
          ) => void;
        }
      ).fbq
    ) {
      (
        window as unknown as {
          fbq: (
            command: string,
            event: string,
            data?: Record<string, unknown>,
          ) => void;
        }
      ).fbq("track", "ViewContent", {
        content_ids: [variant.id || variant.pricingId],
        content_name: variant.label,
        content_type: "product",
        currency: "BDT",
        value: variant.price,
        eventID: eventId,
      });
    }

    // 2. TikTok Pixel (browser)
    if (
      typeof window !== "undefined" &&
      (
        window as unknown as {
          ttq?: {
            track: (event: string, data: Record<string, unknown>) => void;
          };
        }
      ).ttq
    ) {
      (
        window as unknown as {
          ttq: {
            track: (event: string, data: Record<string, unknown>) => void;
          };
        }
      ).ttq.track("ViewContent", {
        content_id: variant.id || variant.pricingId,
        content_type: "product",
        currency: "BDT",
        value: variant.price,
      });
    }

    // 3. Facebook Server Event
    const facebookEventData = {
      platform: "facebook",
      event_name: "ViewContent",
      event_id: eventId,
      customer_info: customerInfo,
      currency: "BDT",
      value: variant.price,
      custom_data: {
        variant,
        content_ids: [variant.id || variant.pricingId],
        content_type: "product",
        product_name: variant.label,
        size: variant.size || variant.sizes?.[0]?.size,
        product_price: variant.price,
      },
    };

    // 4. TikTok Server Event
    const tiktokEventData = {
      platform: "tiktok",
      event_name: "ViewContent",
      event_id: eventId,
      value: variant.price,
      currency: "BDT",
      contents: [
        {
          content_id: variant.id || variant.pricingId,
          content_name: variant.label,
          content_type: "product",
          price: variant.price,
          quantity: 1,
        },
      ],
      customer: customerInfo,
    };

    // Send both events in parallel
    try {
      await Promise.all([
        fetch("/api/fb-conversion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(facebookEventData),
        }),
        fetch("/api/fb-conversion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tiktokEventData),
        }),
      ]);
    } catch (error) {
      console.error("Error sending ViewContent events:", error);
    }
  };

  // Send InitiateCheckout to both platforms
  const sendInitiateCheckoutEvents = async () => {
    const eventId = generateEventId("initiate_checkout");

    // 2. TikTok Pixel (browser)
    if (
      typeof window !== "undefined" &&
      (
        window as unknown as {
          ttq?: {
            track: (event: string, data: Record<string, unknown>) => void;
          };
        }
      ).ttq
    ) {
      (
        window as unknown as {
          ttq: {
            track: (event: string, data: Record<string, unknown>) => void;
          };
        }
      ).ttq.track("InitiateCheckout", {
        content_id: variant.id || variant.pricingId,
        content_type: "product",
        currency: "BDT",
        value: fullPrice,
        quantity: 1,
      });
    }

    // 3. Facebook Server Event
    const facebookEventData = {
      platform: "facebook",
      event_name: "InitiateCheckout",
      event_id: eventId,
      customer_info: customerInfo,
      currency: "BDT",
      value: fullPrice,
      custom_data: {
        variant,
        content_ids: [variant.id || variant.pricingId],
        content_type: "product",
        product_name: variant.label,
        size: variant.size || variant.sizes?.[0]?.size,
        product_price: variant.price,
        delivery_charge: DELIVERY_CHARGE,
        num_items: 1,
      },
    };

    // 4. TikTok Server Event
    const tiktokEventData = {
      platform: "tiktok",
      event_name: "InitiateCheckout",
      event_id: eventId,
      value: fullPrice,
      currency: "BDT",
      contents: [
        {
          content_id: variant.id || variant.pricingId,
          content_name: variant.label,
          content_type: "product",
          price: variant.price,
          quantity: 1,
        },
      ],
      customer: customerInfo,
    };

    // Send both events in parallel
    try {
      await Promise.all([
        fetch("/api/fb-conversion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(facebookEventData),
        }),
        fetch("/api/fb-conversion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tiktokEventData),
        }),
      ]);
    } catch (error) {
      console.error("Error sending InitiateCheckout events:", error);
    }
  };

  // Send on component mount
  useEffect(() => {
    sendViewContentEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ===== FORM VALIDATION =====
  const validateField = (
    field: "name" | "address" | "phone" | "email",
    value: string,
  ) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required";
        return undefined;
      case "address":
        if (!value.trim()) return "Address is required";
        return undefined;
      case "phone":
        if (!value.trim()) return "Mobile number is required";
        if (!/^01\d{9}$/.test(value))
          return "Enter a valid 11-digit Bangladeshi number";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Enter a valid email address";
        return undefined;
      default:
        return undefined;
    }
  };

  // ===== PURCHASE HANDLER =====
  const handlePurchase = async () => {
    const newErrors = {
      name: validateField("name", customerInfo.name),
      phone: validateField("phone", customerInfo.phone),
      email: validateField("email", customerInfo.email),
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      // Send InitiateCheckout events to both platforms
      await sendInitiateCheckoutEvents();

      // Use the new bKash integration
      const paymentData: BkashCreatePaymentRequest = {
        amount: fullPrice,
        callbackURL: `${window.location.origin}/api/bkash/callback`,
        payerReference: payment,
        customerInfo: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          address: customerInfo.address,
        },
      };

      await createPayment(paymentData);
    } catch (error) {
      console.error("Payment error:", error);
      if (!error) {
        alert("Something went wrong while processing payment.");
      }
    }
  };

  const isFormValid =
    customerInfo.name &&
    /^01\d{9}$/.test(customerInfo.phone) &&
    customerInfo.email;

  return (
    <div className="w-[95%] pb-10 bg-transparent mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 borer rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* LEFT */}
      <div className="lg:col-span-2 space-y-10 py-3">
        {/* Variants */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 pt-5.5">Product</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="variant" checked={true} />
              <span className="flex-1">
                How to Satisfy a Woman in Bed – Course × 1
              </span>
              <span className="font-medium">৳{variant.price}</span>
            </label>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">এনরোলের জন্য আপনার তথ্য দিন</h2>
          <label className="font-semibold" htmlFor="name">
            আপনার নাম লিখুন
          </label>
          <input
            id="name"
            className={`w-full border rounded p-3 mt-2 ${errors.name ? "border-red-500" : ""}`}
            placeholder="সম্পূর্ণ নাম লিখুন"
            value={customerInfo.name}
            onChange={(e) => {
              const value = e.target.value;
              setCustomerInfo({ ...customerInfo, name: value });
              setErrors({ ...errors, name: validateField("name", value) });
            }}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}

          <label className="font-semibold" htmlFor="mobile">
            আপনার মোবাইল নাম্বর লিখুন{" "}
          </label>
          <input
            id="mobile"
            className={`w-full border rounded p-3 mt-2 ${errors.phone ? "border-red-500" : ""}`}
            placeholder="01XXXXXXXXX"
            value={customerInfo.phone}
            onChange={(e) => {
              const value = e.target.value;
              setCustomerInfo({ ...customerInfo, phone: value });
              setErrors({ ...errors, phone: validateField("phone", value) });
            }}
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}

          <label className="font-semibold" htmlFor="email">
            আপনার ইমেইল লিখুন
          </label>
          <input
            id="email"
            className={`w-full border rounded p-3 mt-2 ${errors.email ? "border-red-500" : ""}`}
            placeholder="your@email.com"
            value={customerInfo.email}
            onChange={(e) => {
              const value = e.target.value;
              setCustomerInfo({ ...customerInfo, email: value });
              setErrors({ ...errors, email: validateField("email", value) });
            }}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
        </section>
      </div>

      {/* RIGHT */}
      <div className="border-l border-gray-200">
        <aside className="sticky top-6 rounded-lg pb-6 ml-6 pt-3 space-y-6 h-fit">
          <div className="space-y-2">
            <h3 className="font-semibold mb-3 text-2xl pt-5">
              Purchase Summary
            </h3>
            <div className="flex justify-between mb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between mr-5">
              <span>How to Satisfy a Woman in Bed – Course × 1</span>
              <span>৳{fullPrice}</span>
            </div>

            <hr className="my-3" />
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span>৳{fullPrice}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>৳{fullPrice}</span>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            disabled={isLoading || !isFormValid}
            className={`w-full bg-black text-white py-3  rounded text-lg ${isLoading || !isFormValid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isLoading ? "Processing..." : `Place Purchase — ৳${fullPrice}`}
          </button>
        </aside>
      </div>
    </div>
  );
}
