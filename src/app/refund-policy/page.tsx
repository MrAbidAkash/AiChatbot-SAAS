import React from 'react';
import Link from 'next/link';
import { FaMoneyBillWave, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to ChatTime AI
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaMoneyBillWave className="text-green-600 text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-500 mt-2">
              ChatTime AI • Dhaka, Bangladesh • support@chattimeai.com
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7-Day Money Back Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We offer a 7-day money-back guarantee for all new subscriptions. If you're not 
              satisfied with ChatTime AI, you can request a full refund within 7 days of your 
              initial purchase.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's Covered:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full refund for first-time customers</li>
                    <li>• Monthly and annual subscriptions</li>
                    <li>• All payment methods</li>
                    <li>• No questions asked policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Request a Refund
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                  <p className="text-gray-600">
                    Email us at support@chattimeai.com with your refund request
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Provide Details</h3>
                  <p className="text-gray-600">
                    Include your account email and reason for refund (optional)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
                  <p className="text-gray-600">
                    We'll process your refund within 5-7 business days
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Refund Timeline
            </h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <FaClock className="text-blue-600 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Request Period</h3>
                    <p className="text-gray-600">Within 7 days of purchase</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-blue-600 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Processing Time</h3>
                    <p className="text-gray-600">5-7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscription Cancellation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can cancel your subscription at any time. Upon cancellation:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• You'll continue to have access until the end of your billing period</li>
              <li>• No future charges will be applied</li>
              <li>• Your data will be safely stored for 30 days</li>
              <li>• You can reactivate your account anytime</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Exceptions
            </h2>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <FaExclamationTriangle className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Not Covered:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Refunds after 7-day period</li>
                    <li>• Partial month refunds for monthly plans</li>
                    <li>• Third-party service fees</li>
                    <li>• Usage overages beyond plan limits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact for Refunds
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Need Help with Refunds?</h3>
                <p className="text-blue-100 mb-6">
                  Our support team is here to help you with any refund requests
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Email Support</h4>
                    <p className="text-blue-100">support@chattimeai.com</p>
                    <p className="text-sm text-blue-200">Response within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <p className="text-blue-100">Saturday - Thursday</p>
                    <p className="text-sm text-blue-200">9:00 AM - 6:00 PM BST</p>
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
