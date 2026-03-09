"use client";

import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaLock,
  FaServer,
  FaUserShield,
  FaCertificate,
  FaCheckCircle,
  FaExclamationTriangle,
  FaKey,
} from "react-icons/fa";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="bg-linear-to-br from-primary to-accent text-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
            <FaShieldAlt className="text-foreground text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security & Privacy
          </h1>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Enterprise-grade security protecting your data and customer
            conversations with industry-leading encryption and compliance
            standards.
          </p>
        </div>
      </div>

      {/* Security Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Our Security Commitment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At ChatTime AI, security is fundamental to everything we do. We
              implement multiple layers of protection to ensure your data and
              customer information remain secure, private, and compliant with
              global regulations.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaLock className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-foreground">
                    Data Encryption
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  End-to-end encryption for all data transmission and AES-256
                  encryption for data at rest, ensuring your information is
                  always protected.
                </p>
              </div>

              <div className="bg-success/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaServer className="text-success text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-foreground">
                    Secure Infrastructure
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Cloud infrastructure with continuous monitoring, automated
                  threat detection, and regular security audits to maintain
                  system integrity.
                </p>
              </div>

              <div className="bg-accent/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaUserShield className="text-accent text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-foreground">
                    Access Control
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Strict role-based access controls, multi-factor
                  authentication, and principle of least privilege for all team
                  members.
                </p>
              </div>

              <div className="bg-warning/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-warning text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-foreground">
                    Compliance Ready
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Full compliance with GDPR, CCPA, and other data protection
                  regulations with regular third-party security assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-muted px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-primary to-accent rounded-2xl p-12 text-foreground text-center">
            <h2 className="text-3xl font-bold mb-6">
              Security Questions or Concerns?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Our security team is available 24/7 to address any
              security-related inquiries or report potential vulnerabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Report a Vulnerability
                </h3>
                <p className="text-primary/80 mb-2">security@chattimeai.com</p>
                <p className="text-sm text-primary/60">
                  Response within 4 hours
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Security Inquiries
                </h3>
                <p className="text-primary/80 mb-2">
                  security-team@chattimeai.com
                </p>
                <p className="text-sm text-primary/60">
                  Response within 24 hours
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-background/10 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-primary/80">
                <strong>Bug Bounty Program:</strong> We reward responsible
                disclosure of security vulnerabilities. Please review our
                responsible disclosure policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
