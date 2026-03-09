// app/inbox/page.tsx
"use client";

import { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaCheck,
  FaReply,
  FaRobot,
  FaUser,
  FaClock,
  FaPaperPlane,
  FaEllipsisV,
  FaTag,
  FaArrowLeft,
  FaComments,
} from "react-icons/fa";
import Link from "next/link";

export default function ConversationInbox() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock conversations
  const conversations = [
    {
      id: "1",
      page: "My Store",
      name: "John Doe",
      lastMessage: "Hi, what's your return policy?",
      time: "2 min ago",
      unread: true,
      status: "ai_replied",
      avatar: "JD",
    },
    {
      id: "2",
      page: "My Store",
      name: "Sarah Smith",
      lastMessage: "Do you ship internationally?",
      time: "5 min ago",
      unread: false,
      status: "pending",
      avatar: "SS",
    },
    {
      id: "3",
      page: "Tech Startup",
      name: "Mike Johnson",
      lastMessage: "I need help with my order #12345",
      time: "12 min ago",
      unread: true,
      status: "human_replied",
      avatar: "MJ",
    },
  ];

  // Mock conversation messages
  const conversationMessages = [
    {
      id: "1",
      sender: "customer",
      name: "John Doe",
      message: "Hi, what's your return policy?",
      time: "2:30 PM",
      avatar: "JD",
    },
    {
      id: "2",
      sender: "ai",
      name: "AI Assistant",
      message:
        "Our return policy allows returns within 30 days of purchase with original packaging. Would you like me to send you our detailed return policy document?",
      time: "2:31 PM",
      avatar: "AI",
    },
    {
      id: "3",
      sender: "customer",
      name: "John Doe",
      message: "Yes, please send it. Also, are return shipping costs covered?",
      time: "2:32 PM",
      avatar: "JD",
    },
  ];

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    // Send message API call would go here
    setTimeout(() => {
      setMessage("");
      setLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="md:hidden text-gray-600">
                <FaArrowLeft />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">
                Conversation Inbox
              </h1>
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <span className="text-gray-500">Active:</span>
                <span className="font-bold">3 conversations</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl w-64"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Conversation List */}
        <div
          className={`${selectedConversation ? "hidden md:block" : "block"} md:w-96 border-r border-gray-200 bg-white`}
        >
          {/* Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex space-x-2">
              {["all", "unread", "pending"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                    filter === f
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
              <button className="ml-auto text-gray-600 hover:text-gray-900">
                <FaFilter />
              </button>
            </div>
          </div>

          {/* Conversation Items */}
          <div className="overflow-y-auto h-[calc(100vh-128px)]">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                  selectedConversation === conv.id ? "bg-blue-50" : ""
                } ${conv.unread ? "bg-blue-50/50" : ""}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                      {conv.avatar}
                    </div>
                    <div
                      className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        conv.status === "ai_replied"
                          ? "bg-green-500"
                          : conv.status === "human_replied"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                      }`}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-gray-900">
                          {conv.name}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded mr-2">
                            {conv.page}
                          </span>
                          <FaClock className="mr-1" size={10} />
                          {conv.time}
                        </div>
                      </div>
                      {conv.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>

                    <p className="mt-2 text-gray-600 truncate">
                      {conv.lastMessage}
                    </p>

                    <div className="mt-2 flex items-center space-x-2">
                      {conv.status === "ai_replied" && (
                        <span className="inline-flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          <FaRobot className="mr-1" size={10} /> AI Replied
                        </span>
                      )}
                      {conv.status === "pending" && (
                        <span className="inline-flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          <FaClock className="mr-1" size={10} /> Pending
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div
          className={`${selectedConversation ? "block" : "hidden md:block"} flex-1 flex flex-col`}
        >
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="bg-white border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedConversation(null)}
                      className="md:hidden text-gray-600"
                    >
                      <FaArrowLeft />
                    </button>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Online • My Store
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">
                      <FaTag />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <FaEllipsisV />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
                {conversationMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "customer" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`flex max-w-[80%] ${msg.sender === "customer" ? "" : "flex-row-reverse"}`}
                    >
                      <div
                        className={`flex-shrink-0 ${msg.sender === "customer" ? "mr-3" : "ml-3"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            msg.sender === "customer"
                              ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                              : "bg-gradient-to-br from-green-500 to-blue-600 text-white"
                          }`}
                        >
                          {msg.sender === "customer" ? (
                            <FaUser size={14} />
                          ) : (
                            <FaRobot size={14} />
                          )}
                        </div>
                      </div>

                      <div>
                        <div
                          className={`rounded-2xl p-4 ${
                            msg.sender === "customer"
                              ? "bg-white border border-gray-200"
                              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          }`}
                        >
                          <p
                            className={
                              msg.sender === "customer"
                                ? "text-gray-800"
                                : "text-white"
                            }
                          >
                            {msg.message}
                          </p>
                        </div>
                        <div
                          className={`text-xs text-gray-500 mt-1 ${msg.sender === "customer" ? "text-left" : "text-right"}`}
                        >
                          {msg.time}
                          {msg.sender === "ai" && (
                            <span className="ml-2 inline-flex items-center">
                              <FaCheck size={10} className="mr-1" /> AI
                              Generated
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message here..."
                      className="w-full p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:border-blue-500"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={loading || !message.trim()}
                    className="self-end bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <FaPaperPlane />
                    )}
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button className="hover:text-blue-600">
                      <FaReply className="mr-1 inline" /> AI Reply
                    </button>
                    <button className="hover:text-blue-600">
                      <FaRobot className="mr-1 inline" /> Suggest Reply
                    </button>
                  </div>
                  <div>
                    Press{" "}
                    <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd>{" "}
                    to send
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Empty Chat State */
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center mb-6">
                <FaComments className="text-blue-500 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No conversation selected
              </h3>
              <p className="text-gray-600 text-center max-w-md mb-8">
                Select a conversation from the list to view messages and reply
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">
                    Total Conversations
                  </div>
                  <div className="text-2xl font-bold">24</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">
                    Avg. Response Time
                  </div>
                  <div className="text-2xl font-bold">2.3s</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
