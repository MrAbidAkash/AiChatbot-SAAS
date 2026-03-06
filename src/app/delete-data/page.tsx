"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTrash, FaEnvelope, FaShieldAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function DataDeletion() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl w-full">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-600 text-3xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Deletion Request Received
            </h1>
            <p className="text-gray-600 mb-8">
              Your data deletion request has been submitted successfully. 
              We will process your request within 30 days.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Email Verification</p>
                    <p className="text-gray-600 text-sm">We'll send a confirmation email to verify your identity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Data Processing</p>
                    <p className="text-gray-600 text-sm">Your data will be permanently deleted from our systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Final Confirmation</p>
                    <p className="text-gray-600 text-sm">You'll receive an email when deletion is complete</p>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaTrash className="text-red-600 text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Data Deletion Request
            </h1>
            <p className="text-lg text-gray-600">
              Permanently delete all your data from ChatTime AI
            </p>
          </div>

          {/* Warning Notice */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <FaExclamationTriangle className="text-red-600 text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Important Notice</h3>
                <p className="text-red-800 text-sm">
                  This action is permanent and cannot be undone. Once your data is deleted, 
                  it cannot be recovered. Please make sure you have backups of any important 
                  information before proceeding.
                </p>
              </div>
            </div>
          </div>

          {/* What Will Be Deleted */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What Will Be Deleted
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Account Information</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Your account profile and credentials</li>
                  <li>• Business information and settings</li>
                  <li>• Payment and subscription history</li>
                  <li>• API keys and access tokens</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Conversation Data</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• All message history and logs</li>
                  <li>• AI training data and responses</li>
                  <li>• Customer contact information</li>
                  <li>• Analytics and insights data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deletion Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Deletion Methods
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FaEnvelope className="mr-2 text-blue-600" />
                  Email Request (Recommended)
                </h3>
                <p className="text-gray-700 mb-3">
                  Send an email to support@chattimeai.com with:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Your registered email address</li>
                  <li>• Subject: &quot;Data Deletion Request&quot;</li>
                  <li>• Confirmation of identity</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FaShieldAlt className="mr-2 text-green-600" />
                  Automated Form Below
                </h3>
                <p className="text-gray-700">
                  Use the form below to submit an automated deletion request. 
                  We'll send a confirmation email to verify your identity.
                </p>
              </div>
            </div>
          </section>

          {/* Deletion Form */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Submit Deletion Request
            </h2>
            <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your-email@example.com"
                />
                <p className="text-sm text-gray-600 mt-2">
                  This must be the email address associated with your ChatTime AI account.
                </p>
              </div>

              <div className="mb-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-sm">
                    I understand that this action is permanent and cannot be undone. 
                    I confirm that I want to delete all my data from ChatTime AI.
                  </span>
                </label>
              </div>

              <div className="mb-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-sm">
                    I understand that I will lose access to all features, data, and 
                    services associated with my account.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Request Permanent Data Deletion'}
              </button>
            </form>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Deletion Timeline
            </h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">0</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Request Submitted</h3>
                    <p className="text-gray-600 text-sm">Immediate confirmation email sent</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">24h</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Identity Verification</h3>
                    <p className="text-gray-600 text-sm">Email verification and account confirmation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">7d</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Data Processing</h3>
                    <p className="text-gray-600 text-sm">Permanent deletion from all systems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">30d</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Completion</h3>
                    <p className="text-gray-600 text-sm">Final confirmation and backup cleanup</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Need Help?
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <FaEnvelope className="mr-2" />
                    Contact Support
                  </h3>
                  <div className="space-y-2 text-blue-100">
                    <p>Email: support@chattimeai.com</p>
                    <p>Response Time: Within 48 hours</p>
                    <p>Subject: Data Deletion Request</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Business Information</h3>
                  <div className="space-y-2 text-blue-100">
                    <p>ChatTime AI</p>
                    <p>Dhaka, Bangladesh</p>
                    <p>Data Protection Officer: privacy@chattimeai.com</p>
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
