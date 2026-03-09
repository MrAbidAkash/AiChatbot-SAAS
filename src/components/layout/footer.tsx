import Link from "next/link"
import { Bot, Github, Twitter, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  product: [
    { name: "AI Chatbot Builder", href: "#" },
    { name: "Flow Designer", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
    { name: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">ChatFlow AI</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Transform your customer engagement with intelligent AI chatbots. Connect seamlessly across all social media channels.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 ChatFlow AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
