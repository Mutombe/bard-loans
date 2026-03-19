import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Heart, Scales, UsersThree } from '@phosphor-icons/react'

const values = [
  {
    icon: Heart,
    title: 'Community First',
    desc: 'We uplift the communities we serve by fostering financial inclusion and trust.',
    hasPattern: false,
  },
  {
    icon: Scales,
    title: 'Transparent & Fair',
    desc: 'No hidden fees, no surprises. Every term is clear, fair, and upfront.',
    hasPattern: true,
  },
  {
    icon: UsersThree,
    title: 'Personalized Service',
    desc: 'Tailored financial solutions designed around your unique needs.',
    hasPattern: false,
  },
  {
    icon: CheckCircle,
    title: 'Accessible Credit',
    desc: 'Bridging the gap for those underserved by traditional financial systems.',
    hasPattern: true,
  },
]

const aboutStats = [
  { end: 10, suffix: '+', label: 'Years empowering futures', duration: 1200 },
  { end: 5, suffix: 'K+', label: 'Happy clients', duration: 1000 },
  { end: 24, suffix: 'hr', label: 'Fast approval', duration: 1400 },
]

function AboutCountUp({ end, suffix = '', duration = 1500 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-30px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) { setCount(0); return }
    let start = null
    let frame
    const run = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end))
      if (p < 1) frame = requestAnimationFrame(run)
    }
    frame = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

function DiamondPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
      <defs>
        <pattern id="about-card-diamond" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-card-diamond)" />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden transition-colors duration-300">
      {/* ═══ Top: Full-bleed team photo with gradient overlay ═══ */}
      <div className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[600px] flex items-center">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-navy to-transparent z-20" />

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/bg2.jpg"
            alt="The Bard Loans team"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Mobile: heavier overlay across entire width for readability */}
          <div
            className="absolute inset-0 lg:hidden dark:hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 50%, rgba(255,255,255,0.75) 100%)',
            }}
          />
          <div
            className="absolute inset-0 lg:hidden hidden dark:block"
            style={{
              background: 'linear-gradient(to bottom, rgba(49,47,77,0.95) 0%, rgba(49,47,77,0.88) 50%, rgba(49,47,77,0.75) 100%)',
            }}
          />
          {/* Desktop: left-to-right gradient — wider solid zone for text readability */}
          <div
            className="absolute inset-0 hidden lg:block dark:hidden"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0.82) 55%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.08) 100%)',
            }}
          />
          <div
            className="absolute inset-0 hidden lg:dark:block"
            style={{
              background:
                'linear-gradient(to right, rgba(49,47,77,0.98) 0%, rgba(49,47,77,0.95) 35%, rgba(49,47,77,0.82) 55%, rgba(49,47,77,0.4) 75%, rgba(49,47,77,0.08) 100%)',
            }}
          />
          {/* Top/bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 dark:from-navy/40 via-transparent to-white/60 dark:to-navy/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-orange font-jakarta font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy dark:text-white mt-3 leading-tight">
                Rooted in Trust,{' '}
                <span className="text-orange">Built for You</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-navy/80 dark:text-white/70 text-base sm:text-lg leading-relaxed font-inter">
                At Bard Loans, we believe that access to credit should be seamless,
                empowering, and rooted in trust. We understand that financial challenges
                and opportunities are a part of life, and we are here to ensure that
                individuals, families, and businesses have the resources they need to thrive.
              </p>
              <p className="mt-3 sm:mt-4 text-navy/60 dark:text-white/50 text-sm sm:text-base leading-relaxed font-inter">
                What sets us apart is our unwavering commitment to accessibility,
                transparency, and community impact. By offering personalized financial
                services and innovative lending solutions, we aim to bridge the gap for
                those underserved by traditional financial systems.
              </p>
            </motion.div>

            {/* Stat bar with count-up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 sm:gap-4 bg-navy dark:bg-navy-card rounded-xl p-4 sm:p-5 shadow-lg border border-transparent dark:border-white/10"
            >
              {aboutStats.map(({ end, suffix, label, duration }, i) => (
                <div key={label} className="flex items-center gap-3 sm:gap-4">
                  {i > 0 && <div className="w-px h-8 sm:h-10 bg-white/10" />}
                  <div className="text-center">
                    <p className="font-mono text-2xl sm:text-3xl font-bold text-orange">
                      <AboutCountUp end={end} suffix={suffix} duration={duration} />
                    </p>
                    <p className="text-white/70 text-[10px] sm:text-xs mt-1 font-inter">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ Bottom: Value cards ═══ */}
      <div className="relative bg-white dark:bg-navy transition-colors duration-300">
        <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-navy to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28 -mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="font-jakarta font-bold text-navy dark:text-white text-lg sm:text-xl">
              Why <span className="text-orange">Bard Loans</span>?
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {values.map(({ icon: Icon, title, desc, hasPattern }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-4 sm:p-5 rounded-xl bg-pearl dark:bg-navy-card border border-mist dark:border-white/5 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 transition-all overflow-hidden"
              >
                {/* Brand pattern on 2nd and 4th cards */}
                {hasPattern && (
                  <div className="absolute inset-0 text-orange opacity-[0.06] dark:opacity-[0.08]">
                    <DiamondPattern />
                  </div>
                )}
                <div className="relative">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-orange/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={22} weight="duotone" className="text-orange" />
                  </div>
                  <h4 className="font-jakarta font-bold text-navy dark:text-white text-xs sm:text-sm">
                    {title}
                  </h4>
                  <p className="text-slate dark:text-white/50 text-[11px] sm:text-xs mt-1.5 sm:mt-2 leading-relaxed font-inter">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
