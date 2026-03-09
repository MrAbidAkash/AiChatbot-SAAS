"use client";

import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaEnvelope,
  FaFacebook,
  FaChartLine,
} from "react-icons/fa";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function PrivacyPolicyBN() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-primary text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              গোপনীয়তা নীতিমালা
            </h1>
            <p className="text-lg text-muted-foreground">
              সর্বশেষ হালনাগাদ: {new Date().toLocaleDateString("bn-BD")}
            </p>
            <p className="text-muted-foreground mt-2">
              ChatTime AI • ঢাকা, বাংলাদেশ • support@chattimeai.com
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">পরিচয়</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ChatTime AI ("আমরা," "আমাদের," বা "আমাদের") আপনার গোপনীয়তা
              সুরক্ষার জন্য প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতিমালা ব্যাখ্যা করে
              যে আমরা কীভাবে আপনার তথ্য সংগ্রহ করি, ব্যবহার করি, সংরক্ষণ করি এবং
              সুরক্ষিত রাখি যখন আপনি আমাদের AI চালিত চ্যাটবট অটোমেশন প্ল্যাটফর্ম
              ব্যবহার করেন।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ChatTime AI ব্যবহার করে আপনি এই নীতিমালা অনুযায়ী তথ্য সংগ্রহ ও
              ব্যবহারের সাথে সম্মত হচ্ছেন।
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              আমরা কি তথ্য সংগ্রহ করি
            </h2>

            <div className="space-y-6">
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                  <FaFacebook className="mr-2 text-primary" />
                  ফেসবুক এবং ইনস্টাগ্রাম ডেটা
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • ফেসবুক পেজ আইডি এবং ইনস্টাগ্রাম ব্যবসায়িক অ্যাকাউন্ট আইডি
                  </li>
                  <li>• আপনার পেজে প্রাপ্ত বার্তা এবং মন্তব্য</li>
                  <li>
                    • ব্যবহারকারীর নাম এবং মিথস্ক্রিয়া থেকে প্রোফাইল তথ্য
                  </li>
                  <li>• কথোপকথনের ইতিহাস এবং চ্যাট লগ</li>
                  <li>• কথোপকথনে শেয়ার করা মিডিয়া ফাইল (ছবি, ভিডিও)</li>
                </ul>
              </div>

              <div className="bg-success/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                  <FaUserSecret className="mr-2 text-success" />
                  অ্যাকাউন্ট তথ্য
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• অ্যাকাউন্ট তৈরির জন্য ইমেল ঠিকানা এবং নাম</li>
                  <li>• ব্যবসায়িক তথ্য এবং যোগাযোগের বিবরণ</li>
                  <li>• প্ল্যাটফর্ম সংযোগের জন্য প্রমাণীকরণ টোকেন</li>
                  <li>• ব্যবহারের ধরণ এবং পছন্দ</li>
                </ul>
              </div>

              <div className="bg-accent/5 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                  <FaChartLine className="mr-2 text-accent" />
                  বিশ্লেষণ এবং কর্মক্ষমতা ডেটা
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• বার্তা প্রতিক্রিয়া সময় এবং সাফল্যের হার</li>
                  <li>• AI মডেল কর্মক্ষমতা মেট্রিক্স</li>
                  <li>• প্ল্যাটফর্ম ব্যবহারের পরিসংখ্যান</li>
                  <li>• ত্রুটি লগ এবং সিস্টেম ডায়াগনস্টিক্স</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              আমরা আপনার তথ্য কীভাবে ব্যবহার করি
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  মূল সেবা কার্যকারিতা
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>
                    • স্বয়ংক্রিয়ভাবে বার্তা প্রক্রিয়াকরণ এবং প্রতিক্রিয়া
                  </li>
                  <li>• ভাল প্রতিক্রিয়ার জন্য AI মডেল প্রশিক্ষণ</li>
                  <li>• কথোপকথনের ইতিহাস বজায় রাখা</li>
                  <li>• বিশ্লেষণ এবং অন্তর্দৃষ্টি প্রদান</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  সেবা উন্নতি
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• বৈশিষ্ট্য উন্নতির জন্য ব্যবহারের ধরণ বিশ্লেষণ</li>
                  <li>• সিস্টেম কর্মক্ষমতা পর্যবেক্ষণ</li>
                  <li>• নতুন ক্ষমতা বিকাশ</li>
                  <li>• গ্রাহক সহায়তা প্রদান</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Storage & Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ডেটা সংরক্ষণ এবং নিরাপত্তা
            </h2>
            <div className="bg-linear-to-r from-primary/5 to-accent/5 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <FaLock className="mr-2 text-primary" />
                    নিরাপত্তা ব্যবস্থা
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• ডেটা ট্রান্সমিশনের জন্য এন্ড-টু-এন্ড এনক্রিপশন</li>
                    <li>• এনক্রিপ্টেড ডাটাবেস স্টোরেজ (AES-256)</li>
                    <li>• নিয়মিত নিরাপত্তা অডিট এবং অনুপ্রবেশ পরীক্ষা</li>
                    <li>• মাল্টি-ফ্যাক্টর বিকল্প সহ নিরাপদ প্রমাণীকরণ</li>
                    <li>
                      • আমাদের দলের জন্য ভূমিকা-ভিত্তিক অ্যাক্সেস নিয়ন্ত্রণ
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    ডেটা ধারণ
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• কথোপকথনের ডেটা ২ বছর ধরে সংরক্ষিত</li>
                    <li>
                      • বিশ্লেষণাত্মক ডেটা ৯০ দিনের পরে সমষ্টিগত এবং গোপনীয়
                    </li>
                    <li>
                      • মুছে ফেলা ব্যবহারকারী ডেটা ৩০ দিনের মধ্যে সরানো হয়
                    </li>
                    <li>• ব্যাকআপ ডেটা এনক্রিপ্ট এবং সুরক্ষিতভাবে সংরক্ষিত</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              আপনার ডেটা অধিকার
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold text-foreground">
                  অ্যাক্সেস এবং বহনযোগ্যতা
                </h3>
                <p className="text-muted-foreground">
                  যেকোনো সময় আপনার সমস্ত ব্যক্তিগত ডেটার একটি অনুলিপি অনুরোধ
                  করুন।
                </p>
              </div>
              <div className="border-l-4 border-success pl-6 py-2">
                <h3 className="font-semibold text-foreground">সংশোধন</h3>
                <p className="text-muted-foreground">
                  ভুল ব্যক্তিগত তথ্য আপডেট বা সংশোধন করুন।
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-semibold text-foreground">মুছে ফেলা</h3>
                <p className="text-muted-foreground">
                  আপনার অ্যাকাউন্ট এবং সমস্ত সম্পর্কিত ডেটা স্থায়ীভাবে মুছে
                  ফেলার অনুরোধ করুন।
                </p>
              </div>
              <div className="border-l-4 border-warning pl-6 py-2">
                <h3 className="font-semibold text-foreground">অপ্ট-আউট</h3>
                <p className="text-muted-foreground">
                  নির্দিষ্ট বৈশিষ্ট্য বা সম্পূর্ণভাবে ডেটা প্রসেসিং অক্ষম করুন।
                </p>
              </div>
            </div>
          </section>

          {/* Data Deletion Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ডেটা মুছে ফেলার প্রক্রিয়া
            </h2>
            <div className="bg-destructive/5 rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-4">
                আপনার ডেটা মুছে ফেলা কীভাবে করবেন
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-destructive font-bold">১</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-medium">
                      আমাদের ইমেল করুন
                    </p>
                    <p className="text-muted-foreground text-sm">
                      support@chattimeai.com এ মুছে ফেলার অনুরোধ পাঠান
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-destructive font-bold">২</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-medium">
                      পরিচয় যাচাই করুন
                    </p>
                    <p className="text-muted-foreground text-sm">
                      আমরা আপনার নিবন্ধিত ইমেল ব্যবহার করে আপনার পরিচয় যাচাই
                      করব
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-destructive font-bold">৩</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-medium">
                      সম্পূর্ণ মুছে ফেলা
                    </p>
                    <p className="text-muted-foreground text-sm">
                      সমস্ত ডেটা ৩০ দিনের মধ্যে স্থায়ীভাবে মুছে ফেলা হবে
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-card rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>বিকল্প:</strong>{" "}
                  <Link
                    href="/delete-data"
                    className="text-primary hover:underline"
                  >
                    /delete-data
                  </Link>{" "}
                  পরিদর্শন করুন স্বয়ংক্রিয় মুছে ফেলার অনুরোধের জন্য।
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              তৃতীয় পক্ষের সেবা
            </h2>
            <p className="text-muted-foreground mb-4">
              আমরা নিম্নলিখিত বিশ্বস্ত তৃতীয় পক্ষের সেবা ব্যবহার করি:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">
                  Meta প্ল্যাটফর্ম
                </h4>
                <p className="text-sm text-muted-foreground">
                  ফেসবুক এবং ইনস্টাগ্রাম API একীকরণ
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">
                  ক্লাউড অবকাঠামো
                </h4>
                <p className="text-sm text-muted-foreground">
                  নিরাপদ ডেটা হোস্টিং এবং প্রসেসিং
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">
                  পেমেন্ট প্রসেসর
                </h4>
                <p className="text-sm text-muted-foreground">
                  নিরাপদ পেমেন্ট পরিচালনা
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">বিশ্লেষণ সেবা</h4>
                <p className="text-sm text-muted-foreground">
                  ব্যবহার পর্যবেক্ষণ এবং অপ্টিমাইজেশন
                </p>
              </div>
            </div>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              আন্তর্জাতিক ডেটা স্থানান্তর
            </h2>
            <p className="text-gray-700">
              একটি বাংলাদেশ-ভিত্তিক কোম্পানি হিসাবে, আমরা সেবা প্রদানের জন্য
              ডেটা আন্তর্জাতিকভাবে স্থানান্তর করতে পারি। সমস্ত স্থানান্তর
              প্রযোজ্য ডেটা সুরক্ষা আইন মেনে চলে এবং মান চুক্তিমূলক শর্তাবলী সহ
              উপযুক্ত সুরক্ষা অন্তর্ভুক্ত করে।
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <div className="bg-linear-to-r from-primary to-accent rounded-xl p-8 text-foreground">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <FaEnvelope className="mr-2" />
                    গোপনীয়তা অনুসন্ধান
                  </h3>
                  <div className="space-y-2 text-blue-100">
                    <p>ইমেল: support@chattimeai.com</p>
                    <p>প্রতিক্রিয়া সময়: ৪৮ ঘণ্টার মধ্যে</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    ব্যবসায়িক তথ্য
                  </h3>
                  <div className="space-y-2 text-blue-100">
                    <p>ChatTime AI</p>
                    <p>ঢাকা, বাংলাদেশ</p>
                    <p>ট্রেড লাইসেন্স: [আপনার লাইসেন্স নম্বর]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              নীতিমালা আপডেট
            </h2>
            <p className="text-gray-700">
              আমরা সময়ে সময়ে এই গোপনীয়তা নীতিমালা আপডেট করতে পারি।
              উল্লেখযোগ্য পরিবর্তনের ক্ষেত্রে আমরা ইমেল বা প্রধান ওয়েবসাইট
              নোটিসের মাধ্যমে আপনাকে অবহিত করব। আমাদের সেবা ব্যবহার অব্যাহত রাখা
              আপডেট করা নীতিমালা গ্রহণ নির্দেশ করে।
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
