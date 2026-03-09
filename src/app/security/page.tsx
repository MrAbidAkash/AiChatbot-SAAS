"use client";

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaServer, FaUserShield, FaCertificate, FaCheckCircle, FaExclamationTriangle, FaKey } from 'react-icons/fa';

export default function SecurityPage() {
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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security & Privacy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Enterprise-grade security protecting your data and customer conversations 
            with industry-leading encryption and compliance standards.
          </p>
        </div>
      </div>

      {/* Security Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Security Commitment
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At ChatTime AI, security is fundamental to everything we do. We implement 
              multiple layers of protection to ensure your data and customer information 
              remain secure, private, and compliant with global regulations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaLock className="text-blue-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Data Encryption</h3>
                </div>
                <p className="text-gray-700">
                  End-to-end encryption for all data transmission and AES-256 encryption 
                  for data at rest, ensuring your information is always protected.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaServer className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Secure Infrastructure</h3>
                </div>
                <p className="text-gray-700">
                  Cloud infrastructure with continuous monitoring, automated threat detection, 
                  and regular security audits to maintain system integrity.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaUserShield className="text-purple-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Access Control</h3>
                </div>
                <p className="text-gray-700">
                  Strict role-based access controls, multi-factor authentication, and 
                  principle of least privilege for all team members.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-orange-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Compliance Ready</h3>
                </div>
                <p className="text-gray-700">
                  Full compliance with GDPR, CCPA, and other data protection regulations 
                  with regular third-party security assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Security Questions or Concerns?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our security team is available 24/7 to address any security-related 
              inquiries or report potential vulnerabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Report a Vulnerability</h3>
                <p className="text-blue-100 mb-2">security@chattimeai.com</p>
                <p className="text-sm text-blue-200">Response within 4 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Security Inquiries</h3>
                <p className="text-blue-100 mb-2">security-team@chattimeai.com</p>
                <p className="text-sm text-blue-200">Response within 24 hours</p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-blue-100">
                <strong>Bug Bounty Program:</strong> We reward responsible disclosure of security 
                vulnerabilities. Please review our responsible disclosure policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
