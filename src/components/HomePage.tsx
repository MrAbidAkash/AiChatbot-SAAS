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
  FaAward,
  FaUsers,
  FaGlobe,
  FaCertificate,
} from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { signIn, Session } from "@/lib/auth-client";

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [session, setSession] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Session();
        console.log("data", data);
        setSession(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    })();
  }, []);

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
            <button className="text-gray-700 hover:text-blue-600 font-medium transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced HERO Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badges */}
              {/* <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  ✓ DBID Registered
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  ✓ Meta Verified
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  ✓ ISO 27001 Certified
                </span>
              </div> */}

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered Customer Support
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  for Modern Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your customer service with intelligent AI chatbots.
                Available 24/7, supporting Bengali & English, trusted by 10+
                businesses across Bangladesh.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-600">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <div className="text-sm">
                  <strong>10+</strong> Businesses
                </div>
                <div className="text-sm">
                  <strong>24/7</strong> Support
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    ChatTime AI Dashboard
                  </span>
                </div>

                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">
                        Active Conversations
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        247
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaComments className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          Customer: সেবার মূল্য কত?
                        </p>
                        <p className="text-xs text-gray-500">
                          AI: আমাদের সেবা মাসিক...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">
                        98%
                      </div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600">
                        2.3s
                      </div>
                      <div className="text-xs text-gray-600">Response</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold">🎉 New: Bengali AI!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-gray-600">
              Join 10+ businesses using ChatTime AI for customer excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FaGlobe className="text-3xl text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FaUsers className="text-3xl text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Businesses</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FaComments className="text-3xl text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">5K+</div>
              <div className="text-sm text-gray-600">Conversations</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FaAward className="text-3xl text-orange-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to provide exceptional customer service with
              AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FaRobot className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI-Powered Responses
              </h3>
              <p className="text-gray-700 mb-4">
                Advanced natural language processing for accurate, context-aware
                responses in Bengali and English.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Natural conversation flow
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Context understanding
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Multi-language support
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-700 mb-4">
                Bank-level encryption and compliance with international data
                protection standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  GDPR compliant
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Regular security audits
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advanced Analytics
              </h3>
              <p className="text-gray-700 mb-4">
                Real-time insights and detailed analytics to optimize your
                customer service.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Customer insights
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Performance metrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integrate with Your Favorite Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Connect ChatTime AI with all your customer communication channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaFacebook className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Facebook Messenger
              </h3>
              <p className="text-sm text-gray-600">
                Auto-reply to messages and comments
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                WhatsApp Business
              </h3>
              <p className="text-sm text-gray-600">
                24/7 automated customer support
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaInstagram className="text-pink-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Instagram DMs
              </h3>
              <p className="text-sm text-gray-600">
                Handle Instagram messages automatically
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SiGoogle className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Google Business
              </h3>
              <p className="text-sm text-gray-600">
                Google Chat integration available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ৳2,999<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  Up to 500 conversations/month
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  Basic AI responses
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">
                ৳7,999<span className="text-lg opacity-75">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-white mr-3" />
                  Up to 2,000 conversations/month
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-white mr-3" />
                  Advanced AI with learning
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-white mr-3" />
                  Analytics dashboard
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                Custom<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  Unlimited conversations
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  Custom AI training
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-3" />
                  API access
                </li>
              </ul>
              <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Businesses Across Bangladesh
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about ChatTime AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "ChatTime AI transformed our customer service. Response time
                decreased by 80% and customer satisfaction increased
                significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Ahmed</div>
                  <div className="text-sm text-gray-600">Messenger</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The Bengali language support is amazing! Our customers love
                getting instant responses in their native language."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Mohammad Rahman
                  </div>
                  <div className="text-sm text-gray-600">Messenger</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Best investment we made for our e-commerce business. 24/7
                support has increased our sales by 30%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Nusrat Jahan
                  </div>
                  <div className="text-sm text-gray-600">Whatsapp </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 10+ businesses using ChatTime AI to provide exceptional
            customer support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaRobot className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold">ChatTime AI</h3>
              </div>
              <p className="text-gray-400">
                AI-powered customer support for modern businesses in Bangladesh
                and beyond.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-white transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="hover:text-white transition"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-bn"
                    className="hover:text-white transition"
                  >
                    শর্তাবলী (বাংলা)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="hover:text-white transition"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delete-data"
                    className="hover:text-white transition"
                  >
                    Data Deletion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="hover:text-white transition"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                © {new Date().getFullYear()} ChatTime AI. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="hover:text-white transition mx-2"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition mx-2"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/terms-bn"
                  className="hover:text-white transition mx-2"
                >
                  শর্তাবলী (বাংলা)
                </Link>
                <Link
                  href="/refund-policy"
                  className="hover:text-white transition mx-2"
                >
                  Refund Policy
                </Link>
                <Link
                  href="/delete-data"
                  className="hover:text-white transition mx-2"
                >
                  Data Deletion
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition mx-2"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="hover:text-white transition mx-2"
                >
                  About
                </Link>
                <Link
                  href="/security"
                  className="hover:text-white transition mx-2"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
