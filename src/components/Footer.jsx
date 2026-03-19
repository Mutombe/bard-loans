import {
  MapPin,
  Phone,
  Envelope,
  WhatsappLogo,
  ArrowUp,
} from '@phosphor-icons/react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#offerings' },
  { label: 'Loan Calculator', href: '#calculator' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'FAQ', href: '#faq' },
]

const loanTypes = [
  'Personal Loans',
  'Short Term Loans',
  'Salary Based',
  'Quick Loans',
  'Send Now Pay Later',
  'Collateral Based',
  'Product Based',
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 inline-block bg-white/90 rounded-lg px-3 py-1.5">
              <img
                src="/logo.png"
                alt="Bard Loans"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm font-inter leading-relaxed mb-6">
              Empowering your financial future with trust and reliability.
              Your trusted lending partner in South Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/27676151569"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-emerald hover:text-white transition-all"
              >
                <WhatsappLogo size={20} weight="fill" />
              </a>
              <a
                href="mailto:info@bardloans.co.za"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-orange hover:text-white transition-all"
              >
                <Envelope size={20} weight="fill" />
              </a>
              <a
                href="tel:0100176996"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-orange hover:text-navy transition-all"
              >
                <Phone size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-jakarta font-bold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/40 text-sm font-inter hover:text-orange transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="font-jakarta font-bold text-white text-sm uppercase tracking-wider mb-5">
              Loan Types
            </h4>
            <ul className="space-y-3">
              {loanTypes.map((type) => (
                <li key={type}>
                  <span className="text-white/40 text-sm font-inter">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-jakarta font-bold text-white text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} weight="fill" className="text-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm font-inter">
                  2nd Floor Bowmans Building,
                  <br />
                  11 Alice Lane, Sandton, 2196
                </span>
              </li>
              <li>
                <a
                  href="tel:0676151569"
                  className="flex items-center gap-3 text-white/40 text-sm font-inter hover:text-orange transition-colors"
                >
                  <Phone size={18} weight="fill" className="text-orange flex-shrink-0" />
                  067 615 1569
                </a>
              </li>
              <li>
                <a
                  href="tel:0100176996"
                  className="flex items-center gap-3 text-white/40 text-sm font-inter hover:text-orange transition-colors"
                >
                  <Phone size={18} className="text-orange flex-shrink-0" />
                  010 017 6996
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bardloans.co.za"
                  className="flex items-center gap-3 text-white/40 text-sm font-inter hover:text-orange transition-colors"
                >
                  <Envelope size={18} weight="fill" className="text-orange flex-shrink-0" />
                  info@bardloans.co.za
                </a>
              </li>
              <li>
                <a
                  href="mailto:apply@bardloans.co.za"
                  className="flex items-center gap-3 text-white/40 text-sm font-inter hover:text-orange transition-colors"
                >
                  <Envelope size={18} className="text-orange flex-shrink-0" />
                  apply@bardloans.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-inter">
            &copy; {new Date().getFullYear()} Bard Loans. All rights reserved. POPIA compliant.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:bg-orange hover:text-navy transition-all"
          >
            <ArrowUp size={18} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  )
}
