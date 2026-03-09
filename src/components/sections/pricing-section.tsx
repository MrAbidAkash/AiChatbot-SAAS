"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { 
  Check, 
  Sparkles,
  Zap,
  Building2,
  HelpCircle,
  ArrowRight
} from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "1 Chatbot",
      "1,000 conversations/month",
      "WhatsApp integration",
      "Basic analytics",
      "Email support",
      "5 document uploads",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses with advanced needs",
    monthlyPrice: 79,
    yearlyPrice: 66,
    features: [
      "5 Chatbots",
      "10,000 conversations/month",
      "All social integrations",
      "Advanced analytics",
      "Priority support",
      "50 document uploads",
      "Custom branding",
      "Team collaboration (3 users)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring scale",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited Chatbots",
      "Unlimited conversations",
      "All integrations + API",
      "Real-time analytics",
      "24/7 dedicated support",
      "Unlimited documents",
      "White-label solution",
      "Unlimited team members",
      "SSO & advanced security",
      "Custom AI training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const faqs = [
  {
    question: "What happens after my free trial?",
    answer: "After your 14-day free trial, you'll be asked to select a plan. You won't be charged until you actively choose to subscribe. No credit card is required for the trial."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to new features. When downgrading, changes take effect at your next billing cycle."
  },
  {
    question: "What counts as a conversation?",
    answer: "A conversation is a complete interaction between a customer and your chatbot, regardless of the number of messages exchanged within that session."
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer: "Yes, we offer special pricing for registered nonprofits and educational institutions. Contact our sales team to learn more about our discount programs."
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary">
            <Sparkles className="mr-2 h-3 w-3" />
            Pricing
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="border-green-500/30 bg-green-500/10 text-green-400">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-border bg-card ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  {plan.name === "Starter" && <Zap className="h-5 w-5 text-primary" />}
                  {plan.name === "Professional" && <Sparkles className="h-5 w-5 text-primary" />}
                  {plan.name === "Enterprise" && <Building2 className="h-5 w-5 text-primary" />}
                  <CardTitle className="text-lg text-foreground">{plan.name}</CardTitle>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-foreground">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="ml-2 text-muted-foreground">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-foreground">Custom</div>
                  )}
                  {isYearly && plan.monthlyPrice && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Billed annually (${plan.yearlyPrice! * 12}/year)
                    </p>
                  )}
                </div>

                <Button
                  className={`mb-6 w-full gap-2 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-muted-foreground">
              {"Everything you need to know about our pricing"}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">{faq.question}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20">
          <Card className="border-border bg-card">
            <CardContent className="flex flex-col items-center justify-between gap-6 p-8 lg:flex-row lg:p-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Transform Your Customer Engagement?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                  Start Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-sm text-muted-foreground">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["TechCorp", "GlobalRetail", "HealthPlus", "EduLearn", "FinanceHub"].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
