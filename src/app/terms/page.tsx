"use client";

import React from "react";
import Link from "next/link";
import {
  FaFileContract,
  FaShieldAlt,
  FaGavel,
  FaCreditCard,
} from "react-icons/fa";

export default function TermsEN() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaFileContract className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-500 mt-2">
              ChatTime AI • Dhaka, Bangladesh • support@chattimeai.com
            </p>
          </div>

          {/* Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using ChatTime AI, you agree to these terms and conditions. If
              you do not agree, please do not use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms apply to all users, including customers, businesses,
              contributors, and any other parties.
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Service Description</h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                ChatTime AI is an AI-based chatbot and automation platform
                providing:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Facebook & Instagram message automation</li>
                <li>• AI-powered customer support</li>
                <li>• Message analytics and reporting</li>
                <li>• Multi-platform social media management</li>
                <li>• Custom AI training and content control</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FaGavel className="mr-2 text-red-500" />
                  Legal Compliance
                </h3>
                <p className="text-gray-700">
                  Users must comply with Bangladeshi law and Facebook/Instagram
                  platform policies and data protection rules.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Account Security
                </h3>
                <p className="text-gray-700">
                  Users are responsible for maintaining the security of their
                  accounts and all activity under it.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Content Responsibility
                </h3>
                <p className="text-gray-700">
                  Users are responsible for AI-generated content, automated
                  responses, and all communications sent through the platform.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Platform Rules
                </h3>
                <p className="text-gray-700">
                  Users must follow Facebook, Instagram, and other platform
                  rules while using our services.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Prohibited Activities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Content Restrictions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Spam or unauthorized messages</li>
                    <li>• False or misleading information</li>
                    <li>• Harassment or abusive content</li>
                    <li>• Illegal activities</li>
                    <li>• Copyright infringement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technical Restrictions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Reverse engineering the service</li>
                    <li>• Bypassing rate limits</li>
                    <li>• Disrupting the service</li>
                    <li>• Excessive automated scripts</li>
                    <li>• Exploiting security vulnerabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <div className="bg-green-50 rounded-xl p-6">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Free Trial: 14 days, no credit card required</li>
                <li>• Monthly Subscription: auto-renews</li>
                <li>• Annual Subscription: 20% discount, auto-renews</li>
                <li>• Enterprise: custom pricing and terms</li>
              </ul>
            </div>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Privacy & Data Protection
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl mr-3" />
                <h3 className="font-semibold text-gray-900">
                  Privacy Commitment
                </h3>
              </div>
              <p className="text-gray-700">
                We take user data protection seriously. Please see our{" "}
                <Link href="/privacy" className="text-blue-600 underline">
                  Privacy Policy
                </Link>{" "}
                for detailed information.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These Terms & Conditions shall be governed by the laws of
              Bangladesh. Any disputes shall be resolved in Dhaka, Bangladesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
