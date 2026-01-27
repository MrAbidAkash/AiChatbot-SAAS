/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaRobot,
  FaChartLine,
  FaComments,
  FaBell,
  FaCog,
  FaPlus,
  FaArrowRight,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard({ session }: any) {
  const [hasConnectedPages, setHasConnectedPages] = useState(false);
  const [pages, setPages] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock data for when pages are connected
  const mockStats = {
    totalMessages: 1247,
    responseRate: 94,
    avgResponseTime: "2.3s",
    leadsCaptured: 89,
    satisfactionRate: 96,
  };

  const recentConversations = [
    {
      id: 1,
      page: "My Store",
      message: "Hi, what's your return policy?",
      time: "2 min ago",
      status: "replied",
    },
    {
      id: 2,
      page: "My Store",
      message: "Do you ship internationally?",
      time: "5 min ago",
      status: "pending",
    },
    {
      id: 3,
      page: "My Store",
      message: "I need help with my order",
      time: "12 min ago",
      status: "replied",
    },
  ];

  const handleConnectPage = () => {
    // This would redirect to Facebook OAuth flow
    window.location.href = "/connect";
  };

  const quickActions = [
    {
      title: "Setup Auto-Replies",
      description: "Configure automatic responses for common questions",
      icon: <FaRobot className="text-blue-500" />,
      link: "/setup/auto-replies",
      color: "bg-blue-50 hover:bg-blue-100",
    },
    {
      title: "Train Your AI",
      description: "Improve responses by training with your content",
      icon: <FaLightbulb className="text-purple-500" />,
      link: "/setup/training",
      color: "bg-purple-50 hover:bg-purple-100",
    },
    {
      title: "View Analytics",
      description: "See how your chatbot is performing",
      icon: <SiGoogleanalytics className="text-green-500" />,
      link: "/analytics",
      color: "bg-green-50 hover:bg-green-100",
    },
    {
      title: "Setup Lead Capture",
      description: "Configure automatic lead collection",
      icon: <FaComments className="text-orange-500" />,
      link: "/setup/leads",
      color: "bg-orange-50 hover:bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, User!
          </h1>
          <p className="text-gray-600 mt-2">
            Here&apos;s what&apos;s happening with your chatbot.
          </p>
        </div>

        {!hasConnectedPages ? (
          /* EMPTY STATE */
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-8">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
                    🚀 STEP 1 OF 3
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Connect Your First
                    <span className="block text-blue-600">Facebook Page</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Connect your Facebook page to start automating
                    conversations, replying to comments, and capturing leads
                    24/7.
                  </p>

                  <div className="space-y-4 mb-10">
                    {[
                      "Auto-reply to messages and comments",
                      "Capture leads automatically",
                      "24/7 AI-powered responses",
                      "No coding required",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleConnectPage}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3"
                  >
                    <FaFacebook className="text-xl" />
                    <span className="text-lg font-bold">
                      Connect Facebook Page
                    </span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="mt-4 text-gray-500 text-sm">
                    ⚡ Setup takes 2 minutes • No credit card required
                  </p>
                </div>

                <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
                  <div className="relative">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <FaFacebook className="text-blue-600 text-2xl" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">
                            Your Connected Pages
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Pages you&apos;ve authorized with ChatTime AI
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                              <div>
                                <div className="font-medium">
                                  Your Facebook Page
                                </div>
                                <div className="text-sm text-gray-500">
                                  Connected • Auto-replies active
                                </div>
                              </div>
                            </div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <FaClock className="text-green-600 text-xl" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">24/7</div>
                          <div className="text-sm text-gray-600">
                            Active Support
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Start Guide */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "1",
                  title: "Connect Pages",
                  description: "Authorize your Facebook & Instagram pages",
                  icon: "🔗",
                },
                {
                  step: "2",
                  title: "Train Your AI",
                  description: "Upload FAQs and train your chatbot",
                  icon: "🧠",
                },
                {
                  step: "3",
                  title: "Go Live",
                  description: "Activate AI and start automating",
                  icon: "🚀",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        STEP {step.step}
                      </div>
                      <div className="font-bold text-lg">{step.title}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Features Preview */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What you&apos;ll get after connecting
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.link}
                    className={`${action.color} rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        {action.icon}
                      </div>
                      <h4 className="font-bold text-lg">{action.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {action.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* DASHBOARD WITH DATA */
          <div className="max-w-7xl mx-auto">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {Object.entries(mockStats).map(([key, value], index) => (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {value}
                  </div>
                  <div className="text-gray-500 text-sm capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Connected Pages */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Connected Pages
                    </h3>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Manage →
                    </button>
                  </div>

                  <div className="space-y-4">
                    {[1, 2].map((page) => (
                      <div
                        key={page}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FaFacebook className="text-gray-600 text-2xl" />
                          </div>
                          <div>
                            <div className="font-bold">My Business Page</div>
                            <div className="text-sm text-gray-500">
                              Facebook Page • Last active 2 min ago
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Active</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <Link
                        key={index}
                        href={action.link}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center space-x-3">
                          {action.icon}
                          <div>
                            <div className="font-medium">{action.title}</div>
                            <div className="text-sm text-gray-500">
                              {action.description}
                            </div>
                          </div>
                        </div>
                        <FaArrowRight className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Need help getting started?
              </h3>
              <p className="text-gray-600">
                Check out our setup guide or contact support
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-white transition">
                View Guide
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
