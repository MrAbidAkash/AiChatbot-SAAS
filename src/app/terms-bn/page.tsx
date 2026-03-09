"use client";

import React from "react";
import Link from "next/link";
import {
  FaFileContract,
  FaShieldAlt,
  FaGavel,
  FaCreditCard,
} from "react-icons/fa";

export default function TermsBN() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaFileContract className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              শর্তাবলী ও ব্যবহার নীতি
            </h1>
            <p className="text-gray-600">
              সর্বশেষ হালনাগাদ: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-500 mt-2">
              ChatTime AI • ঢাকা, বাংলাদেশ • support@chattimeai.com
            </p>
          </div>

          {/* Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black!">শর্তাবলীতে সম্মতি</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ChatTime AI ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীর সাথে সম্মত
              হচ্ছেন। যদি আপনি এই শর্তাবলীর সাথে একমত না হন, অনুগ্রহ করে সেবা
              ব্যবহার করবেন না।
            </p>
            <p className="text-gray-700 leading-relaxed">
              এই শর্তাবলী সব ব্যবহারকারীর জন্য প্রযোজ্য, যার মধ্যে গ্রাহক,
              ব্যবসায়ী, কন্ট্রিবিউটার এবং অন্যান্য পক্ষ অন্তর্ভুক্ত।
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">সেবার বিবরণ</h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                ChatTime AI একটি AI ভিত্তিক চ্যাটবট ও অটোমেশন প্ল্যাটফর্ম যা
                নিম্নলিখিত সুবিধা প্রদান করে:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• ফেসবুক ও ইনস্টাগ্রাম মেসেজ অটোমেশন</li>
                <li>• AI গ্রাহক সাপোর্ট ও স্বয়ংক্রিয় উত্তর</li>
                <li>• মেসেজ অ্যানালিটিক্স এবং রিপোর্ট</li>
                <li>• সোশ্যাল মিডিয়ার বহু-প্ল্যাটফর্ম ম্যানেজমেন্ট</li>
                <li>• কাস্টম AI ট্রেইনিং এবং কন্টেন্ট নিয়ন্ত্রণ</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">ব্যবহারকারীর দায়িত্ব</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <FaGavel className="mr-2 text-red-500" />
                  আইন মেনে চলা
                </h3>
                <p className="text-gray-700">
                  ব্যবহারকারীদের বাংলাদেশ এবং ফেসবুক/ইনস্টাগ্রাম প্ল্যাটফর্ম
                  নীতিমালা এবং ডেটা সুরক্ষা আইন মেনে চলা বাধ্যতামূলক।
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  অ্যাকাউন্ট নিরাপত্তা
                </h3>
                <p className="text-gray-700">
                  আপনার অ্যাকাউন্টের তথ্য নিরাপদ রাখা এবং সকল কার্যক্রমের জন্য
                  আপনি দায়ী।
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  কন্টেন্ট দায়িত্ব
                </h3>
                <p className="text-gray-700">
                  স্বয়ংক্রিয় উত্তর, AI ট্রেইনিং ডেটা এবং সকল যোগাযোগের জন্য
                  ব্যবহারকারী নিজেই দায়ী।
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  প্ল্যাটফর্মের নিয়মাবলী মেনে চলা
                </h3>
                <p className="text-gray-700">
                  ব্যবহারকারীকে ফেসবুক, ইনস্টাগ্রাম ও অন্যান্য প্ল্যাটফর্মের
                  শর্তাবলী মেনে চলতে হবে।
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">সঠিক ব্যবহার</h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4">নিষিদ্ধ কার্যকলাপ</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">কন্টেন্ট সীমাবদ্ধতা</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• স্প্যাম বা অননুমোদিত মেসেজ</li>
                    <li>• ভুল বা বিভ্রান্তিকর তথ্য</li>
                    <li>• হয়রানি বা অপমানজনক কন্টেন্ট</li>
                    <li>• অবৈধ কার্যকলাপ</li>
                    <li>• কপিরাইট লঙ্ঘন</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">প্রযুক্তিগত সীমাবদ্ধতা</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• সার্ভিসের রিভার্স ইঞ্জিনিয়ারিং</li>
                    <li>• রেট লিমিট এড়ানো</li>
                    <li>• সার্ভিসে বিঘ্ন সৃষ্টি করা</li>
                    <li>• অতিরিক্ত অটোমেটেড স্ক্রিপ্ট ব্যবহার</li>
                    <li>• নিরাপত্তা দুর্বলতা কাজে লাগানো</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">পেমেন্ট শর্তাবলী</h2>
            <div className="bg-green-50 rounded-xl p-6">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ফ্রি ট্রায়াল: ১৪ দিন, কোন ক্রেডিট কার্ড প্রয়োজন নয়</li>
                <li>• মাসিক সাবস্ক্রিপশন: স্বয়ংক্রিয়ভাবে নবায়ন হবে</li>
                <li>
                  • বার্ষিক সাবস্ক্রিপশন: ২০% ডিসকাউন্ট, স্বয়ংক্রিয় নবায়ন
                </li>
                <li>• এন্টারপ্রাইজ: কাস্টম মূল্য এবং শর্তাবলী</li>
              </ul>
            </div>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ১১. ওয়েবসাইট ও সামাজিক যোগাযোগ মাধ্যমের নিয়মাবলী
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              হ্যাঁ, ChatTime AI-এর ওয়েবসাইট ও সামাজিক যোগাযোগ মাধ্যমের সকল
              নিয়ম ও শর্তাবলী বাংলায় দেওয়া আছে। আমাদের সকল সেবার শর্তাবলী
              স্পষ্টভাবে বাংলায় উল্লেখ করা হয়েছে।
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                বাংলায় উপলব্ধ নিয়মাবলী:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  • <strong>ওয়েবসাইট ব্যবহারের শর্তাবলী:</strong>{" "}
                  chattimeai.com/terms-bn
                </li>
                <li>
                  • <strong>গোপনীয়তা নীতিমালা:</strong> ব্যবহারকারীর তথ্য
                  সুরক্ষা
                </li>
                <li>
                  • <strong>সেবা প্রদানের শর্ত:</strong> AI চ্যাটবট ব্যবহার
                </li>
                <li>
                  • <strong>পেমেন্ট নীতিমালা:</strong> সাবস্ক্রিপশন ও মূল্য
                  প্রদান
                </li>
                <li>
                  • <strong>রিফান্ড নীতি:</strong> ৭ দিনের মানি ব্যাক গ্যারান্টি
                </li>
                <li>
                  • <strong>ডাটা সুরক্ষা:</strong> ব্যবহারকারীর তথ্য সুরক্ষা
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                সামাজিক যোগাযোগ মাধ্যম:
              </h3>
              <p className="text-gray-700 mb-4">
                আমাদের Facebook Page, Instagram, WhatsApp এবং অন্যান্য সামাজিক
                যোগাযোগ মাধ্যমে বাংলায় সেবা প্রদান করা হয়। গ্রাহকরা বাংলায়
                যোগাযোগ করতে পারবেন।
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    যোগাযোগের মাধ্যম:
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Facebook: ChatTime AI Bangladesh</li>
                    <li>• WhatsApp: +8801607008272</li>
                    <li>• Email: support@chattimeai.com</li>
                    <li>• Website: chattimeai.com</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    সেবার ভাষা:
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• বাংলা সাপোর্ট</li>
                    <li>• ইংরেজি সাপোর্ট</li>
                    <li>• বাংলা AI চ্যাটবট</li>
                    <li>• বাংলা ডকুমেন্টেশন</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ১২. আইনগত তথ্য
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl mr-3" />
                <h3 className="font-semibold text-gray-900">
                  গোপনীয়তার প্রতিশ্রুতি
                </h3>
              </div>
              <p className="text-gray-700">
                ব্যবহারকারীর তথ্য সুরক্ষা আমাদের মূল অঙ্গীকার। বিস্তারিত তথ্য
                ব্যবস্থাপনা আমাদের{" "}
                <Link href="/privacy" className="text-blue-600 underline">
                  গোপনীয়তা নীতি
                </Link>
                -এ পাওয়া যাবে।
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">প্রযোজ্য আইন</h2>
            <p className="text-gray-700">
              এই শর্তাবলী বাংলাদেশের প্রচলিত আইন অনুযায়ী পরিচালিত হবে। যেকোনো
              বিরোধ সমাধান ঢাকা, বাংলাদেশ-এ অনুষ্ঠিত হবে।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
