// app/connect/page.tsx
"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaCheck,
  FaLock,
  FaShieldAlt,
  FaArrowRight,
  FaChevronLeft,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConnectFacebookPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [connectedPages, setConnectedPages] = useState<string[]>([]);

  const steps = [
    {
      number: 1,
      title: "Authorization",
      description: "Grant permissions to ChatTime AI",
    },
    {
      number: 2,
      title: "Select Pages",
      description: "Choose pages to connect",
    },
    { number: 3, title: "Configure", description: "Setup auto-reply settings" },
  ];

  // Mock pages from Facebook
  const mockFacebookPages = [
    {
      id: "1",
      name: "My Business Store",
      category: "Retail",
      followers: "1.2K",
    },
    {
      id: "2",
      name: "Tech Startup",
      category: "Technology",
      followers: "3.4K",
    },
    {
      id: "3",
      name: "Coffee Shop",
      category: "Food & Beverage",
      followers: "456",
    },
  ];

  const handleFacebookAuth = async () => {
    setLoading(true);

    // In production, this would redirect to Facebook OAuth
    // For now, simulate the process
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const togglePageSelection = (pageId: string) => {
    setConnectedPages((prev) =>
      prev.includes(pageId)
        ? prev.filter((id) => id !== pageId)
        : [...prev, pageId],
    );
  };

  const handleComplete = () => {
    setLoading(true);
    // Save connected pages and redirect to dashboard
    setTimeout(() => {
      router.push("/dashboard?connected=true");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link
                href="/dashboard"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaChevronLeft className="mr-2" />
                Back to Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaFacebook className="text-white text-sm" />
              </div>
              <span className="font-bold text-gray-900">Connect Facebook</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between relative">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                    step >= s.number
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step > s.number ? <FaCheck /> : s.number}
                </div>
                <div className="mt-4 text-center">
                  <div
                    className={`font-bold ${step >= s.number ? "text-gray-900" : "text-gray-400"}`}
                  >
                    {s.title}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {s.description}
                  </div>
                </div>
              </div>
            ))}
            {/* Connecting Line */}
            <div className="absolute top-6 left-16 right-16 h-1 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {step === 1 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaLock className="text-blue-600 text-3xl" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Authorize ChatTime AI with Facebook
              </h2>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                ChatTime AI needs permission to read and reply to messages on
                your Facebook Pages. We only access the pages you select and
                never post on your behalf.
              </p>

              {/* Permissions List */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <FaShieldAlt className="text-green-500 mr-2" />
                  Permissions we request:
                </h4>
                <ul className="space-y-3 text-left">
                  {[
                    "Read messages from your Pages",
                    "Send replies to messages",
                    "Read and reply to comments",
                    "Access basic page info",
                    "Never post on your timeline",
                  ].map((permission, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{permission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleFacebookAuth}
                disabled={loading}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <FaFacebook className="text-xl" />
                <span className="text-lg font-bold">
                  {loading
                    ? "Connecting to Facebook..."
                    : "Continue with Facebook"}
                </span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-4 text-gray-500 text-sm">
                You&apos;ll be redirected to Facebook to authorize ChatTime AI
              </p>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Select Pages to Connect
              </h2>
              <p className="text-gray-600 mb-8">
                Choose which Facebook Pages you want to connect with ChatTime AI
              </p>

              <div className="space-y-4 mb-8">
                {mockFacebookPages.map((page) => (
                  <div
                    key={page.id}
                    onClick={() => togglePageSelection(page.id)}
                    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                      connectedPages.includes(page.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                            <FaFacebook className="text-gray-700 text-2xl" />
                          </div>
                          {connectedPages.includes(page.id) && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <FaCheck className="text-white text-xs" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{page.name}</h3>
                          <p className="text-gray-600">
                            {page.category} • {page.followers} followers
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 ${
                          connectedPages.includes(page.id)
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        {connectedPages.includes(page.id) && (
                          <FaCheck className="text-white w-4 h-4 mx-auto mt-0.5" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={connectedPages.length === 0}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-xl transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Continue with {connectedPages.length} Page
                  {connectedPages.length !== 1 ? "s" : ""}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Configure Your Pages
              </h2>
              <p className="text-gray-600 mb-8">
                Customize how ChatTime AI interacts with your pages
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Auto-Reply Settings
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-blue-600"
                      />
                      <span>Enable automatic replies to messages</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-blue-600"
                      />
                      <span>Enable replies to post comments</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600"
                      />
                      <span>Enable lead capture form</span>
                    </label>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Working Hours</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Time
                      </label>
                      <input
                        type="time"
                        defaultValue="09:00"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Time
                      </label>
                      <input
                        type="time"
                        defaultValue="17:00"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-4">
                    Outside these hours, ChatTime AI will use your
                    &quot;Away&quot; message template
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Default Welcome Message
                  </h3>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-lg h-32"
                    placeholder="Enter your welcome message..."
                    defaultValue="Hello! Thanks for reaching out. This is an AI assistant. How can I help you today?"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    This message will be sent when someone messages your page
                    for the first time
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  disabled={loading}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:shadow-xl transition disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center space-x-3"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Setting up...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Setup</span>
                      <FaArrowRight />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="font-bold text-xl mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: "Is my Facebook data safe?",
                a: "Yes, we use end-to-end encryption and never store your login credentials. We only access the pages you explicitly authorize.",
              },
              {
                q: "Can I disconnect a page later?",
                a: "Yes, you can disconnect any page at any time from your dashboard settings.",
              },
              {
                q: "Will ChatTime AI post on my page?",
                a: "No, ChatTime AI only reads and replies to messages and comments. It never posts on your timeline or creates new posts.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
