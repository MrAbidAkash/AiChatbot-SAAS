"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">Last updated: March 1, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  What Are Cookies
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently and to provide
                  information to website owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  How We Use Cookies
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  ChatTime AI uses cookies and similar technologies for several
                  purposes:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>To enable certain functions of the Service</li>
                  <li>
                    To provide analytics and understand how you use our Service
                  </li>
                  <li>To store your preferences and settings</li>
                  <li>
                    To enable advertisements delivery, including behavioral
                    advertising
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Types of Cookies We Use
                </h2>

                <div className="mt-6 space-y-6">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      Essential Cookies
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      These cookies are necessary for the website to function
                      properly. They enable core functionality such as security,
                      network management, and accessibility. You cannot opt out
                      of these cookies.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      Analytics Cookies
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      These cookies help us understand how visitors interact
                      with our website by collecting and reporting information
                      anonymously. This helps us improve our website and
                      services.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      Functionality Cookies
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      These cookies allow the website to remember choices you
                      make (such as your username, language, or region) and
                      provide enhanced, more personalized features.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold text-foreground">
                      Marketing Cookies
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      These cookies are used to track visitors across websites.
                      The intention is to display ads that are relevant and
                      engaging for the individual user.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Third-Party Cookies
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In addition to our own cookies, we may also use various
                  third-party cookies to report usage statistics of the Service
                  and deliver advertisements on and through the Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Managing Cookies
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Most web browsers allow you to control cookies through their
                  settings preferences. However, if you limit the ability of
                  websites to set cookies, you may impact your overall user
                  experience.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To manage cookies in your browser:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and Security →
                    Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security →
                    Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Cookies and
                    website data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and site
                    permissions → Manage and delete cookies
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Cookie Consent
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  When you first visit our website, you will be shown a cookie
                  banner asking for your consent to set non-essential cookies.
                  You can change your cookie preferences at any time by clicking
                  the &quot;Cookie Settings&quot; link in our website footer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Updates to This Policy
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, regulation, or our business practices.
                  Any changes will be posted on this page with an updated
                  revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Us
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If you have any questions about our use of cookies, please
                  contact us:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Email: privacy@chattimeai.com</li>
                  <li>
                    Contact form:{" "}
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
