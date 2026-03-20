import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, WhatsappLogo, ChatCircleDots } from '@phosphor-icons/react'

const faqs = [
  {
    q: 'How much can I borrow?',
    a: 'You can borrow between R500 and R5,000 depending on your income and affordability assessment. We offer flexible amounts to suit your needs.',
  },
  {
    q: 'How long does approval take?',
    a: 'Most applications are processed within 24 hours. Once approved, funds can be disbursed the same day or the next business day.',
  },
  {
    q: 'What are your interest rates?',
    a: 'Our interest rate is 5% per month with a once-off initiation fee of 5% and a monthly service fee of 10%. Use our loan calculator to see exact amounts for your loan.',
  },
  {
    q: 'What documents do I need?',
    a: 'You need a valid SA ID, proof of income (latest payslip), proof of address (utility bill not older than 3 months), and you will need to complete our application and loan agreement forms.',
  },
  {
    q: 'Can I repay my loan early?',
    a: 'Yes! You can settle your loan early. Contact us to discuss early settlement options and any applicable adjustments.',
  },
  {
    q: 'What happens if I miss a payment?',
    a: 'We understand life happens. Contact us immediately if you foresee any difficulty. We will work with you to find a solution. Late payments may incur additional fees.',
  },
  {
    q: 'Do you offer loans for blacklisted clients?',
    a: 'We assess each application individually. Being blacklisted does not automatically disqualify you. We consider various factors including your current income and affordability.',
  },
  {
    q: 'How do I apply?',
    a: "You can apply through WhatsApp, email, or visit our offices in Sandton. The fastest way is to use our loan calculator above and click 'Apply via WhatsApp' — our team will guide you through the process.",
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-mist dark:border-white/10 rounded-none overflow-hidden hover:border-orange/20 transition-colors"
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
          isOpen
            ? 'bg-orange/5 dark:bg-orange/10'
            : 'bg-white dark:bg-navy-card hover:bg-pearl dark:hover:bg-white/5'
        }`}
      >
        <span className="font-jakarta font-semibold text-navy dark:text-white pr-4">{faq.q}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-none flex items-center justify-center transition-colors ${
            isOpen ? 'bg-orange text-navy' : 'bg-mist dark:bg-white/10 text-slate dark:text-white/50'
          }`}
        >
          {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-slate dark:text-white/60 text-sm leading-relaxed font-inter bg-orange/5 dark:bg-orange/10">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-32 bg-white dark:bg-navy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-orange font-jakarta font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy dark:text-white mt-3">
            Got{' '}
            <span className="text-orange">Questions?</span>
          </h2>
          <p className="mt-4 text-slate dark:text-white/50 text-lg font-inter">
            We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for,
            chat with us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

          {/* Sidebar — always dark */}
          <div className="lg:sticky lg:top-28 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy dark:bg-navy-card rounded-none text-center border border-transparent dark:border-white/10 overflow-hidden"
            >
              {/* Friendly face */}
              <div className="relative h-36 -mx-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop&crop=faces&q=70"
                  alt="Friendly team member ready to help"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy dark:from-navy-card via-navy/30 dark:via-navy-card/30 to-transparent" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-none bg-orange/20 backdrop-blur-sm flex items-center justify-center">
                  <ChatCircleDots size={24} weight="duotone" className="text-orange" />
                </div>
              </div>
              <div className="p-6 pt-4">
              <h3 className="font-jakarta font-bold text-white text-xl">
                Still have questions?
              </h3>
              <p className="text-white/50 text-sm mt-2 font-inter">
                Our team is ready to help you on WhatsApp. Get instant answers.
              </p>
              <a
                href="https://wa.me/27676151569"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald text-white font-jakarta font-semibold rounded-none hover:bg-emerald/90 transition-colors"
              >
                <WhatsappLogo weight="fill" size={20} />
                Chat with us
              </a>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/30 text-xs font-inter">Or email us at</p>
                <a
                  href="mailto:info@bardloans.co.za"
                  className="text-orange text-sm font-inter hover:underline"
                >
                  info@bardloans.co.za
                </a>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
