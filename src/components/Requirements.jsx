import { motion } from 'framer-motion'
import {
  IdentificationCard,
  Money,
  MapPin,
  FileText,
  Handshake,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react'

const requirements = [
  {
    icon: IdentificationCard,
    title: 'Identification',
    desc: 'Valid South African ID document or passport.',
    step: '01',
  },
  {
    icon: Money,
    title: 'Proof of Income',
    desc: 'Latest payslip or bank statement showing income.',
    step: '02',
  },
  {
    icon: MapPin,
    title: 'Proof of Address',
    desc: 'Utility bill or bank statement not older than 3 months.',
    step: '03',
  },
  {
    icon: FileText,
    title: 'Application Form',
    desc: "Complete our simple application — we'll guide you through it.",
    step: '04',
  },
  {
    icon: Handshake,
    title: 'Loan Agreement',
    desc: 'Review and sign the loan agreement with clear terms.',
    step: '05',
  },
]

export default function Requirements() {
  return (
    <section id="requirements" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden transition-colors duration-300">
      {/* Background image blended in */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=900&fit=crop&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lighter overlay so the image is more visible */}
        <div className="absolute inset-0 bg-pearl/75 dark:bg-navy-light/80" />
      </div>
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pearl dark:from-navy-light to-transparent z-[1]" />
      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy to-transparent z-[1]" />
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange/5 rounded-full blur-[100px]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-orange font-jakarta font-semibold text-sm uppercase tracking-wider">
            What You Need
          </span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy dark:text-white mt-3">
            Simple{' '}
            <span className="text-orange">Requirements</span>
          </h2>
          <p className="mt-4 text-slate dark:text-white/50 text-lg font-inter">
            Getting started is easy. Here&apos;s everything you need to apply.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {requirements.map(({ icon: Icon, title, desc, step }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative flex items-start gap-6 mb-8 last:mb-0"
            >
              {i < requirements.length - 1 && (
                <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-orange/30 to-transparent" />
              )}

              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-none bg-white dark:bg-navy-card shadow-lg shadow-navy/5 dark:shadow-black/20 border border-mist dark:border-white/10 flex items-center justify-center transition-colors">
                  <Icon size={28} weight="duotone" className="text-orange" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange text-navy text-[10px] font-mono font-bold flex items-center justify-center">
                  {step}
                </span>
              </div>

              <div className="bg-white dark:bg-navy-card rounded-none p-5 flex-1 border border-mist dark:border-white/10 hover:border-orange/20 hover:shadow-md transition-all">
                <h3 className="font-jakarta font-bold text-navy dark:text-white text-lg">{title}</h3>
                <p className="text-slate dark:text-white/50 text-sm mt-1 font-inter leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald/10 rounded-none">
            <CheckCircle size={22} weight="fill" className="text-emerald" />
            <p className="text-emerald text-sm font-jakarta font-semibold">
              That&apos;s it! We&apos;ve kept it simple so you can focus on what matters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
