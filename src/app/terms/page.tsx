"use client";

import React from 'react';
import Link from 'next/link';
import { FaFileContract, FaShieldAlt, FaGavel, FaCreditCard } from 'react-icons/fa';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to ChatTime AI
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaFileContract className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-500 mt-2">
              ChatTime AI • Dhaka, Bangladesh • support@chattimeai.com
            </p>
          </div>

          {/* Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using ChatTime AI (&quot;Service&quot;), you agree to be bound 
              by these Terms of Service (&quot;Terms&quot;). If you disagree with any part 
              of these terms, you may not access the Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all users of the Service, including without limitation 
              users who are browsers, vendors, customers, merchants, and/or contributors 
              of content.
            </p>
          </section>

          {/* Description of Service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Description of Service
            </h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                ChatTime AI provides an AI-powered chatbot automation platform that:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Automatically responds to Facebook and Instagram messages</li>
                <li>• Provides AI-driven customer support automation</li>
                <li>• Offers conversation analytics and insights</li>
                <li>• Enables multi-platform social media management</li>
                <li>• Provides customizable AI training and responses</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FaGavel className="mr-2 text-red-500" />
                  Compliance with Laws
                </h3>
                <p className="text-gray-700">
                  You must comply with all applicable laws and regulations, including 
                  Facebook and Instagram platform policies, data protection laws, and 
                  communication regulations in your jurisdiction.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Account Security</h3>
                <p className="text-gray-700">
                  You are responsible for maintaining the confidentiality of your account 
                  credentials and for all activities that occur under your account.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Content Responsibility</h3>
                <p className="text-gray-700">
                  You are solely responsible for the content of automated responses, 
                  AI training data, and all communications sent through our Service.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Platform Compliance</h3>
                <p className="text-gray-700">
                  You must maintain compliance with Facebook, Instagram, and other 
                  platform terms of service when using our automation features.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Acceptable Use
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
              <h3 className="font-semibold text-gray-900 mb-4">Prohibited Activities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Content Restrictions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Spam or unsolicited messages</li>
                    <li>• Misleading or false information</li>
                    <li>• Harassment or abusive content</li>
                    <li>• Illegal or harmful activities</li>
                    <li>• Copyright infringement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Technical Restrictions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Reverse engineering the Service</li>
                    <li>• Bypassing rate limitations</li>
                    <li>• Interfering with Service operation</li>
                    <li>• Using automated scripts excessively</li>
                    <li>• Exploiting security vulnerabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Terms
            </h2>
            <div className="bg-green-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <FaCreditCard className="mr-2 text-green-600" />
                    Subscription Plans
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Free trial: 14 days, no credit card required</li>
                    <li>• Monthly billing: Auto-renewed monthly</li>
                    <li>• Annual billing: 20% discount, auto-renewed yearly</li>
                    <li>• Enterprise: Custom pricing and terms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Billing Policies</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Payments processed securely via third-party providers</li>
                    <li>• Cancellation effective at end of billing period</li>
                    <li>• No refunds for partial months</li>
                    <li>• Prices subject to change with 30-day notice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Level Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Service Level Agreement
            </h2>
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="font-semibold text-gray-900 mb-4">Service Commitment</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">&lt;1s</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  Service credits available for uptime below guaranteed levels. 
                  See our SLA policy for details.
                </p>
              </div>
            </div>
          </section>

          {/* Data and Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data and Intellectual Property
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Your Data</h3>
                <p className="text-gray-700 mb-3">
                  You retain ownership of all data you provide to our Service, including:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Customer conversation data</li>
                  <li>• Business information and content</li>
                  <li>• Custom AI training data</li>
                  <li>• Analytics and insights generated from your data</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Our Intellectual Property</h3>
                <p className="text-gray-700 mb-3">
                  ChatTime AI retains ownership of:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Software platform and technology</li>
                  <li>• AI models and algorithms</li>
                  <li>• Service documentation and materials</li>
                  <li>• Brand names, logos, and trademarks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Privacy and Data Protection
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl mr-3" />
                <h3 className="font-semibold text-gray-900">Privacy Commitment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Your privacy is fundamental to our Service. Our data handling practices 
                are detailed in our Privacy Policy, which forms part of these Terms.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Data Protection</h4>
                  <p className="text-sm text-gray-600">
                    We implement industry-standard security measures to protect your data 
                    and comply with applicable data protection laws.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">User Rights</h4>
                  <p className="text-sm text-gray-600">
                    You have the right to access, correct, and delete your personal data 
                    as described in our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h3>
              <p className="text-gray-700 mb-4">
                Our Service is provided &quot;as is&quot; without warranties of any kind, 
                either express or implied. We disclaim all warranties, including:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>• Accuracy or reliability of AI-generated responses</li>
                <li>• Uninterrupted or error-free operation</li>
                <li>• Compatibility with third-party platforms</li>
                <li>• Fitness for a particular purpose</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-4">Limitation of Damages</h3>
              <p className="text-gray-700">
                In no event shall ChatTime AI be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Account Termination
            </h2>
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Termination by User</h3>
                <p className="text-gray-700 mb-3">
                  You may terminate your account at any time by:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Contacting support at support@chattimeai.com</li>
                  <li>• Using the account deletion feature in your dashboard</li>
                  <li>• Canceling your subscription through your account settings</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Termination by ChatTime AI</h3>
                <p className="text-gray-700 mb-3">
                  We may terminate or suspend your account immediately for:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Violation of these Terms of Service</li>
                  <li>• Non-payment of fees</li>
                  <li>• Fraudulent or illegal activities</li>
                  <li>• Harm to our Service or other users</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law and Dispute Resolution
            </h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Governing Law</h3>
                  <p className="text-gray-700 text-sm">
                    These Terms shall be governed by and construed in accordance with 
                    the laws of Bangladesh, without regard to its conflict of law provisions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                  <p className="text-gray-700 text-sm">
                    Any disputes arising from these Terms shall be resolved through 
                    good faith negotiation, followed by arbitration in Dhaka, Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be 
              effective immediately upon posting. We will notify users of significant 
              changes via email or prominent website notice. Your continued use of the 
              Service constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Legal Inquiries</h3>
                  <div className="space-y-2 text-blue-100">
                    <p>Email: legal@chattimeai.com</p>
                    <p>Response Time: Within 5 business days</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Business Information</h3>
                  <div className="space-y-2 text-blue-100">
                    <p>ChatTime AI</p>
                    <p>Dhaka, Bangladesh</p>
                    <p>Trade License: [Your License Number]</p>
                    <p>DBID: [Your Digital Business ID]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
