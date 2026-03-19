import { motion } from 'framer-motion'
import {
  Wallet,
  Lightning,
  CurrencyCircleDollar,
  Rocket,
  PaperPlaneTilt,
  Car,
  SolarPanel,
  ArrowRight,
} from '@phosphor-icons/react'

const offerings = [
  {
    icon: Wallet,
    title: 'Personal Loans',
    desc: 'Flexible personal loans tailored to your needs. From everyday expenses to life milestones.',
    color: 'bg-orange/10',
    iconColor: 'text-orange',
    span: 'sm:col-span-2 lg:col-span-1',
  },
  {
    icon: Lightning,
    title: 'Short Term Loans',
    desc: 'Quick access to funds when you need them most. Fast approval, simple repayment.',
    color: 'bg-orange/10',
    iconColor: 'text-orange-dark',
    span: '',
  },
  {
    icon: CurrencyCircleDollar,
    title: 'Salary Based',
    desc: 'Loans based on your salary for easy qualification. Repay when you get paid.',
    color: 'bg-emerald/10',
    iconColor: 'text-emerald',
    span: '',
  },
  {
    icon: Rocket,
    title: 'Quick Loans',
    desc: 'Emergency cash in as little as 24 hours. Minimal paperwork, maximum speed.',
    color: 'bg-purple-100 dark:bg-purple-500/10',
    iconColor: 'text-purple-600 dark:text-purple-400',
    span: 'lg:col-span-2',
    featured: true,
  },
  {
    icon: PaperPlaneTilt,
    title: 'Send Now, Pay Later',
    desc: 'Get what you need today and pay over time with manageable installments.',
    color: 'bg-rose-50 dark:bg-rose-500/10',
    iconColor: 'text-rose-500 dark:text-rose-400',
    span: '',
  },
  {
    icon: Car,
    title: 'Collateral Based',
    desc: 'Use your vehicle or machinery as collateral for larger loan amounts.',
    color: 'bg-navy/5 dark:bg-white/5',
    iconColor: 'text-navy dark:text-white/70',
    span: '',
  },
  {
    icon: SolarPanel,
    title: 'Product Based',
    desc: 'Solar systems, boreholes, grocery, and stands — finance the products that matter.',
    color: 'bg-amber-50 dark:bg-amber-500/10',
    iconColor: 'text-amber-600 dark:text-amber-400',
    span: 'sm:col-span-2 lg:col-span-1',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="py-20 lg:py-32 bg-pearl dark:bg-navy-light transition-colors duration-300">
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
            Our Services
          </span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy dark:text-white mt-3">
            Loans Designed for{' '}
            <span className="text-orange">Every Need</span>
          </h2>
          <p className="mt-4 text-slate dark:text-white/50 text-lg font-inter">
            Whether it&apos;s personal, urgent, or investment-driven — we have a loan product
            that fits your life.
          </p>
        </motion.div>

        {/* Bento grid — 3 columns on desktop, asymmetric spans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {offerings.map(({ icon: Icon, title, desc, color, iconColor, span, featured }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative rounded-2xl p-6 lg:p-7 border border-transparent dark:border-white/5 hover:border-orange/20 hover:shadow-lg hover:shadow-orange/5 transition-all cursor-pointer overflow-hidden ${span} ${
                featured
                  ? 'bg-navy dark:bg-navy-card text-white'
                  : 'bg-white dark:bg-navy-card'
              }`}
            >
              {/* Decorative corner glow on featured card */}
              {featured && (
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange/15 rounded-full blur-[50px]" />
              )}

              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-xl ${
                    featured ? 'bg-orange/20' : color
                  } flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    size={28}
                    weight="duotone"
                    className={featured ? 'text-orange' : iconColor}
                  />
                </div>
                <h3
                  className={`font-jakarta font-bold text-lg ${
                    featured ? 'text-white' : 'text-navy dark:text-white'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed font-inter ${
                    featured ? 'text-white/60' : 'text-slate dark:text-white/50'
                  }`}
                >
                  {desc}
                </p>
                <div
                  className={`mt-4 flex items-center gap-1 text-sm font-jakarta font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${
                    featured ? 'text-orange' : 'text-orange'
                  }`}
                >
                  Learn more
                  <ArrowRight size={14} weight="bold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
