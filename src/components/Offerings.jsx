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
  // Row 1: Featured (4 cols) + Personal (2 cols)
  {
    icon: Rocket,
    title: 'Quick Loans',
    desc: 'Emergency cash in as little as 24 hours. Minimal paperwork, maximum speed.',
    color: 'bg-purple-100 dark:bg-purple-500/10',
    iconColor: 'text-purple-600 dark:text-purple-400',
    featured: true,
    href: '#calculator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=faces&q=60',
    lgSpan: 'lg:col-span-4',
  },
  {
    icon: Wallet,
    title: 'Personal Loans',
    desc: 'Flexible personal loans tailored to your needs. From everyday expenses to life milestones.',
    color: 'bg-orange/10',
    iconColor: 'text-orange',
    href: '#calculator',
    lgSpan: 'lg:col-span-2',
  },
  // Row 2: 3 cards × 2 cols each
  {
    icon: Lightning,
    title: 'Short Term Loans',
    desc: 'Quick access to funds when you need them most. Fast approval, simple repayment.',
    color: 'bg-orange/10',
    iconColor: 'text-orange-dark',
    href: '#calculator',
    lgSpan: 'lg:col-span-2',
  },
  {
    icon: CurrencyCircleDollar,
    title: 'Salary Based',
    desc: 'Loans based on your salary for easy qualification. Repay when you get paid.',
    color: 'bg-emerald/10',
    iconColor: 'text-emerald',
    href: '#calculator',
    lgSpan: 'lg:col-span-2',
  },
  {
    icon: PaperPlaneTilt,
    title: 'Send Now, Pay Later',
    desc: 'Get what you need today and pay over time with manageable installments.',
    color: 'bg-rose-50 dark:bg-rose-500/10',
    iconColor: 'text-rose-500 dark:text-rose-400',
    href: '#calculator',
    lgSpan: 'lg:col-span-2',
  },
  // Row 3: 2 cards × 3 cols each = 50/50 split
  {
    icon: Car,
    title: 'Collateral Based',
    desc: 'Use your vehicle or machinery as collateral for larger loan amounts.',
    color: 'bg-navy/5 dark:bg-white/5',
    iconColor: 'text-navy dark:text-white/70',
    href: '#calculator',
    lgSpan: 'lg:col-span-3',
  },
  {
    icon: SolarPanel,
    title: 'Product Based',
    desc: 'Solar systems, boreholes, grocery, and stands — finance the products that matter.',
    color: 'bg-amber-50 dark:bg-amber-500/10',
    iconColor: 'text-amber-600 dark:text-amber-400',
    href: '#calculator',
    lgSpan: 'lg:col-span-3',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden transition-colors duration-300">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=900&fit=crop&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pearl/[0.92] dark:bg-navy-light/[0.94] backdrop-blur-[2px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pearl dark:from-navy-light to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy to-transparent z-[1]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange/5 rounded-full blur-[100px]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-orange font-jakarta font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy dark:text-white mt-3">
            Loans Designed for{' '}
            <span className="text-orange">Every Need</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate dark:text-white/50 text-base sm:text-lg font-inter">
            Whether it&apos;s personal, urgent, or investment-driven — we have a loan product
            that fits your life.
          </p>
        </motion.div>

        {/* Bento grid — 2 cols mobile, 6 cols desktop for precise spanning */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {offerings.map(({ icon: Icon, title, desc, color, iconColor, featured, href, image, lgSpan }, i) => (
            <motion.a
              key={title}
              href={href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative rounded-none p-4 sm:p-6 lg:p-7 border border-transparent dark:border-white/5 hover:border-orange/20 hover:shadow-lg hover:shadow-orange/5 transition-all cursor-pointer overflow-hidden ${lgSpan || ''} ${
                featured
                  ? 'bg-navy dark:bg-navy-card text-white col-span-2'
                  : 'bg-white dark:bg-navy-card'
              }`}
            >
              {/* Quick Loans featured card — blended image */}
              {image && (
                <div className="absolute inset-0">
                  <img
                    src={image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/85 dark:bg-navy-card/90" />
                </div>
              )}

              {/* Decorative glow on featured */}
              {featured && !image && (
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange/15 rounded-full blur-[50px]" />
              )}

              <div className="relative">
                <div
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-none ${
                    featured ? 'bg-orange/20' : color
                  } flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    size={24}
                    weight="duotone"
                    className={`sm:hidden ${featured ? 'text-orange' : iconColor}`}
                  />
                  <Icon
                    size={28}
                    weight="duotone"
                    className={`hidden sm:block ${featured ? 'text-orange' : iconColor}`}
                  />
                </div>
                <h3
                  className={`font-jakarta font-bold text-sm sm:text-lg ${
                    featured ? 'text-white' : 'text-navy dark:text-white'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed font-inter ${
                    featured ? 'text-white/60' : 'text-slate dark:text-white/50'
                  }`}
                >
                  {desc}
                </p>
                <div
                  className="mt-2 sm:mt-4 flex items-center gap-1 text-orange text-xs sm:text-sm font-jakarta font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Apply now
                  <ArrowRight size={14} weight="bold" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
