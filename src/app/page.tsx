"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaCheck,
  FaStar,
  FaPlay,
  FaLock,
  FaShieldAlt,
  FaSync,
  FaHeadset,
  FaChartLine,
  FaComments,
  FaRobot,
  FaLightbulb,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { signIn } from "@/lib/auth-client";

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Enhanced NAVBAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FaRobot className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatTime AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="hidden md:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
            >
              Dashboard
            </Link>
            <button
              onClick={() => signIn()}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <SiGoogle className="text-lg" />
              <span className="font-semibold">Get Started Free</span>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced HERO Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              🚀 Trusted by 2,500+ businesses
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              AI That Converts
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Conversations to Customers
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Automatically reply to Facebook & Instagram messages and comments.
              Capture leads and support customers 24/7 with AI that sounds just
              like you.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => signIn()}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3">
                  <FaPlay className="text-lg" />
                  <span className="text-lg font-bold">Start Free Trial</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                  No credit card required • 14-day free trial
                </div>
              </button>

              <button className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100">
                  <FaPlay className="text-gray-700 group-hover:text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Watch Demo</div>
                  <div className="text-sm text-gray-500">2 minutes</div>
                </div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12">
              <div className="text-gray-500 text-sm mb-4">
                Trusted by teams at
              </div>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="h-8 w-24 bg-gray-200 rounded opacity-70" />
                <div className="h-8 w-24 bg-gray-200 rounded opacity-70" />
                <div className="h-8 w-24 bg-gray-200 rounded opacity-70" />
                <div className="h-8 w-24 bg-gray-200 rounded opacity-70" />
              </div>
            </div>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="relative bg-gray-900 p-1">
                {/* Mock browser window */}
                <div className="flex items-center px-4 py-3 bg-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="mx-auto text-sm text-gray-400">
                    ChatTime AI Dashboard
                  </div>
                </div>

                {/* Mock chat interface */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-2xl rounded-bl-none p-4 max-w-[80%]">
                        <div className="text-sm text-gray-300">
                          Hi, I&apos;m interested in your pricing plans.
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Customer • 2:30 PM
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-br-none p-4 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <FaRobot className="text-white text-sm" />
                          <div className="text-sm text-white">
                            AI Assistant is typing...
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-2xl rounded-bl-none p-4 max-w-[80%]">
                        <div className="text-sm text-gray-300">
                          Can you send me the details?
                        </div>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl rounded-br-none p-4 max-w-[80%]">
                        <div className="text-sm text-gray-300">
                          Hello! I&apos;d be happy to help with pricing. We have
                          plans starting at $29/month. Would you like me to send
                          you our detailed pricing PDF?
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-blue-400">
                            AI Generated • 2:31 PM
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-xs px-2 py-1 bg-blue-600 rounded hover:bg-blue-700">
                              👍 Send
                            </button>
                            <button className="text-xs px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
                              ✎ Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FaComments className="text-green-600 text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-600">Instant Replies</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FaChartLine className="text-purple-600 text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-sm text-gray-600">More Leads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Seamless Integration with
              <span className="block text-blue-600 mt-2">
                Social Media Platforms
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Connect once and let AI handle conversations across all your
              social channels
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
              ✨ POWERFUL FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything You Need to
              <span className="block text-blue-600">Automate & Scale</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI capabilities designed specifically for social media
              customer engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaChevronDown className="text-blue-600 transform rotate-45" />
                  </div>
                </div>

                <div
                  className={`w-14 h-14 ${feature.iconColor} rounded-2xl flex items-center justify-center mb-6`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS Section */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get Started in
              <span className="block text-blue-600">3 Simple Steps</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Setup takes less than 5 minutes. No technical skills required.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 px-2 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <div className="text-3xl font-bold text-white">
                          {index + 1}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-center mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center mb-6">
                        {step.description}
                      </p>

                      <div className="bg-gray-50 rounded-xl p-4 mx-10">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            {step.icon}
                          </div>
                          <div className="text-sm">
                            <div className="font-semibold">
                              Time to complete
                            </div>
                            <div className="text-gray-500">{step.time}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => signIn()}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <SiGoogle className="text-xl" />
              <span className="text-lg font-bold">Start Free Trial Now</span>
            </button>
            <p className="mt-4 text-gray-500">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Loved by Businesses
              <span className="block text-blue-600">Worldwide</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about transforming their customer
              support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Simple, Transparent
              <span className="block text-blue-600">Pricing</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, upgrade as you grow. Cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mt-8">
              <button className="px-6 py-2 rounded-full bg-white shadow-sm font-semibold">
                Monthly
              </button>
              <button className="px-6 py-2 rounded-full font-medium text-gray-600">
                Yearly <span className="text-green-500 ml-1">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 p-8 relative ${plan.popular ? "border-blue-500 shadow-2xl transform scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <button
                  onClick={() => signIn()}
                  className={`w-full py-3 rounded-xl font-bold mb-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-all duration-300`}
                >
                  {plan.buttonText}
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheck
                        className={`mr-3 flex-shrink-0 ${plan.popular ? "text-blue-500" : "text-green-500"}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked
              <span className="block text-blue-600">Questions</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Everything you need to know about ChatTime AI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-gray-400 transition-transform duration-300 ${activeFAQ === index ? "transform rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeFAQ === index
                      ? "py-5 border-t border-gray-200"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-8">
            🚀 LIMITED TIME OFFER
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Customer Support?</span>
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 2,500+ businesses using ChatTime AI to save time and convert
            more customers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => signIn()}
              className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3"
            >
              <SiGoogle className="text-xl" />
              <span>Start 14-Day Free Trial</span>
            </button>

            <button className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center space-x-3">
              <FaPlay className="text-lg" />
              <span>Book a Demo</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">14-day</div>
              <div className="text-white/80 text-sm">Free trial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">No credit</div>
              <div className="text-white/80 text-sm">Card required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5-minute</div>
              <div className="text-white/80 text-sm">Setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaRobot className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold">ChatTime AI</h2>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                AI-powered chatbot automation for Facebook and Instagram.
                Convert conversations into customers 24/7.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <FaFacebook />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <FaInstagram />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <FaWhatsapp />
                </div>
              </div>
            </div>

            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                © {new Date().getFullYear()} ChatTime AI. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="hover:text-white transition mx-4"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition mx-4"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-white transition mx-4"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Data Arrays
const platforms = [
  {
    name: "Facebook",
    icon: <FaFacebook className="text-3xl text-white" />,
    color: "bg-blue-600",
    description: "Auto-reply to messages and comments",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-3xl text-white" />,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    description: "Reply to DMs and post comments",
  },
  {
    name: "Messenger",
    icon: <FaComments className="text-3xl text-white" />,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    description: "Instant replies to all messages",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-3xl text-white" />,
    color: "bg-green-500",
    description: "Coming soon",
  },
];

const features = [
  {
    icon: <FaRobot className="text-2xl" />,
    iconColor: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600",
    title: "Smart AI Replies",
    description: "Context-aware responses that sound human",
    bullets: [
      "Natural conversation flow",
      "Context memory for conversations",
      "Multi-language support",
      "Brand voice customization",
    ],
  },
  {
    icon: <FaSync className="text-2xl" />,
    iconColor: "bg-gradient-to-br from-green-100 to-green-200 text-green-600",
    title: "Automated Workflows",
    description: "Create custom automation rules",
    bullets: [
      "Lead qualification bot",
      "Appointment scheduling",
      "FAQ auto-responses",
      "Escalation to human agents",
    ],
  },
  {
    icon: <FaLock className="text-2xl" />,
    iconColor:
      "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600",
    title: "Secure & Compliant",
    description: "Enterprise-grade security",
    bullets: [
      "End-to-end encryption",
      "GDPR compliant",
      "SOC 2 certified",
      "Data never shared with third parties",
    ],
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    iconColor:
      "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600",
    title: "Advanced Analytics",
    description: "Track performance and insights",
    bullets: [
      "Response time analytics",
      "Customer satisfaction scores",
      "Lead conversion tracking",
      "Custom report generation",
    ],
  },
  {
    icon: <FaHeadset className="text-2xl" />,
    iconColor: "bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600",
    title: "24/7 Support",
    description: "Never miss a customer message",
    bullets: [
      "Round-the-clock availability",
      "Holiday mode scheduling",
      "Out-of-hours auto-reply",
      "Priority support queue",
    ],
  },
  {
    icon: <FaLightbulb className="text-2xl" />,
    iconColor:
      "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600",
    title: "Easy Integration",
    description: "Works with your existing tools",
    bullets: [
      "Zapier integration",
      "CRM sync (Salesforce, HubSpot)",
      "Custom API access",
      "Webhook support",
    ],
  },
];

const steps = [
  {
    title: "Connect Your Pages",
    description: "Authorize Facebook and Instagram pages in minutes",
    icon: <FaLock className="text-blue-600" />,
    time: "2 minutes",
  },
  {
    title: "Train Your AI",
    description: "Upload your FAQs and brand guidelines",
    icon: <FaRobot className="text-purple-600" />,
    time: "1 minute",
  },
  {
    title: "Go Live",
    description: "Activate AI and start automating conversations",
    icon: <FaPlay className="text-pink-600" />,
    time: "1 minute",
  },
];

const testimonials = [
  {
    quote:
      "ChatTime AI increased our lead conversion by 40% and reduced response time from hours to seconds.",
    name: "Sarah Johnson",
    role: "Marketing Director, TechStart Inc",
    initials: "SJ",
  },
  {
    quote:
      "The AI handles 80% of our customer queries. We've saved 20+ hours per week on support.",
    name: "Michael Chen",
    role: "E-commerce Owner",
    initials: "MC",
  },
  {
    quote:
      "Best investment we made for customer service. ROI in the first month itself.",
    name: "Emma Davis",
    role: "Founder, Boutique Agency",
    initials: "ED",
  },
];

const stats = [
  { value: "2,500+", label: "Happy Businesses" },
  { value: "24/7", label: "Support Coverage" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "40%", label: "Avg. Response Time Improvement" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small businesses",
    buttonText: "Start Free Trial",
    popular: false,
    features: [
      "1 Facebook Page",
      "1,000 messages/month",
      "Basic AI replies",
      "Email support",
      "7-day message history",
      "Basic analytics",
    ],
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing businesses",
    buttonText: "Start Free Trial",
    popular: true,
    features: [
      "5 Facebook & Instagram Pages",
      "10,000 messages/month",
      "Advanced AI with training",
      "Priority support",
      "30-day message history",
      "Advanced analytics",
      "Zapier integration",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations",
    buttonText: "Contact Sales",
    popular: false,
    features: [
      "Unlimited Pages",
      "Unlimited messages",
      "Custom AI model training",
      "24/7 phone support",
      "Unlimited history",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
  },
];

const faqs = [
  {
    question: "How does the AI handle complex customer queries?",
    answer:
      "Our AI uses advanced natural language processing to understand context and intent. For complex queries, it can either provide detailed responses based on your training data or seamlessly escalate to a human agent with full conversation history.",
  },
  {
    question: "Is my Facebook page data secure?",
    answer:
      "Yes, we use end-to-end encryption for all data transmission and storage. We're SOC 2 compliant and never share your data with third parties. All access tokens are encrypted and stored securely.",
  },
  {
    question: "Can I customize the AI's responses?",
    answer:
      "Absolutely. You can train the AI with your specific FAQs, brand voice guidelines, product information, and conversation examples. You can also create custom response templates for different scenarios.",
  },
  {
    question: "What happens during the free trial?",
    answer:
      "You get full access to all Professional plan features for 14 days. No credit card required. At the end of the trial, you can choose any plan or cancel with no charges.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are up and running in under 5 minutes. Connect your Facebook page, train your AI with basic information, and activate. You can always refine your setup later.",
  },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "API Documentation", href: "/api" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
      { label: "Press Kit", href: "/press" },
    ],
  },
];
