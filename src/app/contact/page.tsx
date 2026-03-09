"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaBuilding,
  FaCertificate,
} from "react-icons/fa";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl w-full">
          <div className="text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPaperPlane className="text-success text-3xl" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Message Sent Successfully
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting us. We&apos;ll get back to you within 24
              hours.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary text-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re here to help you succeed with AI-powered customer
            automation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Business Information */}
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaBuilding className="text-primary text-2xl mr-3" />
                <h2 className="text-xl font-bold text-foreground">
                  Business Information
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCertificate className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Trade License</p>
                    <p className="text-muted-foreground">
                      [Your License Number]
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCertificate className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">DBID</p>
                    <p className="text-muted-foreground">
                      [Your Digital Business ID]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaEnvelope className="text-primary text-2xl mr-3" />
                <h2 className="text-xl font-bold text-foreground">
                  Get in Touch
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email Support</p>
                    <p className="text-muted-foreground">
                      support@chattimeai.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">
                      Business Inquiries
                    </p>
                    <p className="text-muted-foreground">
                      business@chattimeai.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Partnerships & enterprise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">
                      Privacy & Legal
                    </p>
                    <p className="text-muted-foreground">
                      legal@chattimeai.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Data protection & compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaClock className="text-primary text-2xl mr-3" />
                <h2 className="text-xl font-bold text-foreground">
                  Business Hours
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium text-foreground">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground">
                    24/7 automated support available for all customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-foreground font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-foreground font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="privacy">Privacy & Data Request</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> We typically respond within
                    24 hours during business days. For urgent technical issues,
                    please include &quot;URGENT&quot; in your subject line.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-primary to-accent text-foreground py-4 rounded-lg font-semibold hover:shadow-lg transition disabled:bg-muted disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-2xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How quickly can I set up ChatTime AI?
                  </h3>
                  <p className="text-muted-foreground">
                    Setup takes less than 5 minutes. Simply connect your
                    Facebook page, customize your AI responses, and you&apos;re
                    ready to automate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you offer customer support?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! We offer 24/7 automated support and human support
                    during business hours. Enterprise customers get priority
                    support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can I cancel my subscription anytime?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. You can cancel your subscription at any time
                    with no penalties. Your service continues until the end of
                    your billing period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <div className="bg-muted py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Based in Dhaka, Serving the World
            </h2>
            <p className="text-muted-foreground mb-6">
              ChatTime AI is proud to be a Bangladesh-based technology company
              serving customers globally with cutting-edge AI automation
              solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  2,500+
                </div>
                <div className="text-muted-foreground">Active Customers</div>
              </div>
              <div className="bg-success/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-success mb-2">5+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="bg-accent/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
