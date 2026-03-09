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
  FaRocket,
  FaShieldAlt,
  FaBolt,
  FaChartBar,
  FaUsers,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlay,
  FaPause,
  FaEdit,
  FaTrash,
  FaEye,
  FaDownload,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard({ session }: any) {
  const [hasConnectedPages, setHasConnectedPages] = useState(false);
  const [pages, setPages] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  // Enhanced mock data for dark theme
  const mockStats = {
    totalMessages: 1247,
    responseRate: 94,
    avgResponseTime: "2.3s",
    leadsCaptured: 89,
    satisfactionRate: 96,
    activeUsers: 234,
    automationRate: 78,
    costSavings: 1250,
  };

  const recentConversations = [
    {
      id: 1,
      page: "My Store",
      message: "Hi, what's your return policy?",
      time: "2 min ago",
      status: "replied",
      customer: "John Doe",
      sentiment: "positive",
      priority: "normal",
    },
    {
      id: 2,
      page: "My Store",
      message: "Do you ship internationally?",
      time: "5 min ago",
      status: "pending",
      customer: "Jane Smith",
      sentiment: "neutral",
      priority: "high",
    },
    {
      id: 3,
      page: "Tech Support",
      message: "I need help with my order #12345",
      time: "12 min ago",
      status: "replied",
      customer: "Mike Johnson",
      sentiment: "negative",
      priority: "urgent",
    },
    {
      id: 4,
      page: "Sales",
      message: "What are your pricing plans?",
      time: "25 min ago",
      status: "missed",
      customer: "Sarah Wilson",
      sentiment: "positive",
      priority: "normal",
    },
  ];

  const performanceData = [
    {
      day: "Mon",
      messages: 45,
      responses: 42,
      satisfaction: 94,
      automation: 78,
    },
    {
      day: "Tue",
      messages: 52,
      responses: 48,
      satisfaction: 92,
      automation: 82,
    },
    {
      day: "Wed",
      messages: 38,
      responses: 35,
      satisfaction: 92,
      automation: 75,
    },
    {
      day: "Thu",
      messages: 65,
      responses: 61,
      satisfaction: 94,
      automation: 85,
    },
    {
      day: "Fri",
      messages: 48,
      responses: 45,
      satisfaction: 94,
      automation: 80,
    },
    {
      day: "Sat",
      messages: 28,
      responses: 26,
      satisfaction: 93,
      automation: 70,
    },
    {
      day: "Sun",
      messages: 31,
      responses: 29,
      satisfaction: 94,
      automation: 72,
    },
  ];

  const connectedPagesData = [
    {
      id: 1,
      name: "My Business Page",
      platform: "Facebook",
      status: "active",
      lastActive: "2 min ago",
      messageCount: 1247,
      responseRate: 94,
      automationRate: 78,
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Tech Support",
      platform: "Facebook",
      status: "active",
      lastActive: "5 min ago",
      messageCount: 856,
      responseRate: 89,
      automationRate: 82,
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Customer Service",
      platform: "Instagram",
      status: "inactive",
      lastActive: "2 hours ago",
      messageCount: 423,
      responseRate: 91,
      automationRate: 76,
      avatar: "/api/placeholder/40/40",
    },
  ];

  const handleConnectPage = () => {
    // This would redirect to Facebook OAuth flow
    window.location.href = "/connect";
  };

  const quickActions = [
    {
      title: "AI Training",
      description: "Train your AI with custom data",
      icon: <FaRobot className="text-purple-400" />,
      link: "/setup/training",
      color: "from-purple-900/20 to-purple-800/20 border-purple-700/50",
      glow: "shadow-purple-500/20",
    },
    {
      title: "Analytics",
      description: "Deep insights and performance metrics",
      icon: <SiGoogleanalytics className="text-green-400" />,
      link: "/analytics",
      color: "from-green-900/20 to-green-800/20 border-green-700/50",
      glow: "shadow-green-500/20",
    },
    {
      title: "Automation",
      description: "Configure automated workflows",
      icon: <FaBolt className="text-yellow-400" />,
      link: "/setup/automation",
      color: "from-yellow-900/20 to-yellow-800/20 border-yellow-700/50",
      glow: "shadow-yellow-500/20",
    },
    {
      title: "Lead Capture",
      description: "Advanced lead generation tools",
      icon: <FaUsers className="text-blue-400" />,
      link: "/setup/leads",
      color: "from-blue-900/20 to-blue-800/20 border-blue-700/50",
      glow: "shadow-blue-500/20",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "inactive":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "replied":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "missed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "high":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "normal":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500";
      case "negative":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#000000", background: "#000000" }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 bg-black">
   

        {/* Main Content */}
        <main className="px-6 py-8">
          {!hasConnectedPages ? (
            /* Empty State */
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="relative mb-12">
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-purple-800/30 backdrop-blur-xl">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 space-y-6">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        <FaRocket className="mr-2" />
                        <span className="font-medium">STEP 1 OF 3</span>
                      </div>
                      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Connect Your First
                        <span className="block text-3xl mt-2 text-blue-400">
                          Facebook Page
                        </span>
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Transform your customer service with AI-powered
                        automation. Connect your Facebook page to start
                        responding 24/7, capturing leads, and delighting
                        customers instantly.
                      </p>

                      <div className="space-y-4">
                        {[
                          {
                            icon: <FaBolt />,
                            text: "Lightning-fast responses",
                          },
                          {
                            icon: <FaShieldAlt />,
                            text: "Enterprise-grade security",
                          },
                          { icon: <FaChartBar />, text: "Advanced analytics" },
                          {
                            icon: <FaUsers />,
                            text: "Unlimited conversations",
                          },
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 text-gray-300"
                          >
                            <div className="text-purple-400">
                              {feature.icon}
                            </div>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={handleConnectPage}
                          className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-flex items-center space-x-3"
                        >
                          <FaFacebook className="text-xl" />
                          <span>Connect Facebook Page</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="mt-3 text-gray-400 text-sm">
                          ⚡ 2-minute setup • No credit card required
                        </p>
                      </div>
                    </div>

                    <div className="lg:w-1/2">
                      <div className="relative">
                        <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-xl">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                              <FaFacebook className="text-2xl text-purple-400" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                Connected Pages
                              </h3>
                              <p className="text-gray-400 text-sm">
                                Your active integrations
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></div>
                                  <div>
                                    <div className="font-medium text-white">
                                      Your Facebook Page
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      Connected • Auto-replies active
                                    </div>
                                  </div>
                                </div>
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-2xl p-6 border border-green-700/30 backdrop-blur-xl">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                              <FaClock className="text-xl text-green-400" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white">
                                24/7
                              </div>
                              <div className="text-sm text-gray-400">
                                Always Active
                              </div>
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
                    className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30 text-2xl">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-purple-400 mb-1">
                          STEP {step.step}
                        </div>
                        <div className="font-bold text-lg text-white">
                          {step.title}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Features Preview */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What you&apos;ll get after connecting
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickActions.map((action, index) => (
                    <Link key={index} href={action.link}>
                      <div
                        className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 border backdrop-blur-xl hover:shadow-lg hover:${action.glow} transition-all duration-300 cursor-pointer group`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-gray-900/50 rounded-xl border border-gray-700 group-hover:scale-110 transition-transform">
                            {action.icon}
                          </div>
                          <h4 className="font-bold text-lg text-white">
                            {action.title}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {action.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Dashboard With Data */
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Total Messages",
                    value: mockStats.totalMessages.toLocaleString(),
                    change: 12,
                    trend: "up",
                    icon: <FaEnvelope className="text-purple-400" />,
                    color:
                      "from-purple-900/20 to-purple-800/20 border-purple-700/50",
                  },
                  {
                    title: "Response Rate",
                    value: `${mockStats.responseRate}%`,
                    change: 3,
                    trend: "up",
                    icon: <FaChartLine className="text-green-400" />,
                    color:
                      "from-green-900/20 to-green-800/20 border-green-700/50",
                  },
                  {
                    title: "Avg Response Time",
                    value: mockStats.avgResponseTime,
                    change: 8,
                    trend: "down",
                    icon: <FaClock className="text-yellow-400" />,
                    color:
                      "from-yellow-900/20 to-yellow-800/20 border-yellow-700/50",
                  },
                  {
                    title: "Leads Captured",
                    value: mockStats.leadsCaptured,
                    change: 15,
                    trend: "up",
                    icon: <FaUsers className="text-blue-400" />,
                    color: "from-blue-900/20 to-blue-800/20 border-blue-700/50",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 border backdrop-blur-xl hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-900/50 rounded-xl border border-gray-700">
                        {stat.icon}
                      </div>
                      <div className="flex items-center space-x-1">
                        {stat.trend === "up" ? (
                          <FaArrowRight className="h-3 w-3 text-green-400 rotate-45" />
                        ) : (
                          <FaArrowRight className="h-3 w-3 text-red-400 -rotate-45" />
                        )}
                        <span
                          className={`text-xs ${
                            stat.trend === "up"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {stat.change}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-400">{stat.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connected Pages */}
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-xl">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Connected Pages
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Manage your social media integrations
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center space-x-2">
                      <FaPlus className="text-sm" />
                      <span>Add Page</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {connectedPagesData.map((page) => (
                      <div
                        key={page.id}
                        className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <FaFacebook className="text-white text-xl" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {page.platform} • Last active {page.lastActive}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm text-gray-400">
                              {page.messageCount} messages
                            </div>
                            <div className="text-xs text-gray-500">
                              {page.responseRate}% response rate
                            </div>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(page.status)}`}
                          >
                            {page.status === "active" ? "Active" : "Inactive"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Conversations */}
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-xl">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Recent Conversations
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Latest customer interactions
                      </p>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      View All
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div
                                className={`w-2 h-2 rounded-full ${getSentimentColor(conversation.sentiment)}`}
                              ></div>
                              <span className="font-medium text-white">
                                {conversation.customer}
                              </span>
                              <span className="text-xs text-gray-500">
                                {conversation.time}
                              </span>
                              <div
                                className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(conversation.priority)}`}
                              >
                                {conversation.priority}
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm">
                              {conversation.message}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(conversation.status)}`}
                          >
                            {conversation.status}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-700/50 rounded transition-colors">
                              <FaEye className="text-gray-400 text-sm" />
                            </button>
                            <button className="p-1 hover:bg-gray-700/50 rounded transition-colors">
                              <FaEdit className="text-gray-400 text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Quick Actions
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickActions.map((action, index) => (
                    <Link key={index} href={action.link}>
                      <div
                        className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 border backdrop-blur-xl hover:scale-105 hover:shadow-lg hover:${action.glow} transition-all duration-300 cursor-pointer group`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-gray-900/50 rounded-xl border border-gray-700 group-hover:scale-110 transition-transform">
                            {action.icon}
                          </div>
                          <h4 className="font-bold text-lg text-white">
                            {action.title}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {action.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-800/30 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Need help getting started?
                </h3>
                <p className="text-gray-300">
                  Check out our setup guide or contact support
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-xl transition-colors">
                  View Guide
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
