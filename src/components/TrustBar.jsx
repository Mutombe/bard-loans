import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Users, Handshake, ChartLineUp } from '@phosphor-icons/react'

const stats = [
  { icon: Users, end: 5000, prefix: '', suffix: '+', label: 'Clients Served', duration: 2000 },
  { icon: Handshake, end: 10, prefix: 'R', suffix: 'M+', label: 'Loans Disbursed', duration: 1500 },
  { icon: ChartLineUp, end: 98, prefix: '', suffix: '%', label: 'Approval Rate', duration: 1800 },
  { icon: ShieldCheck, end: 100, prefix: '', suffix: '%', label: 'Transparent', duration: 2000 },
]

function CountUp({ end, prefix, suffix, duration }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }

    let startTime = null
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  const formatted = end >= 1000
    ? count.toLocaleString('en-ZA')
    : count.toString()

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden">
      {/* ═══ Full-width gradient bridge zone: hero dark → about light ═══ */}
      <div className="absolute inset-0">
        {/* Gradient: dark at top (from hero) → light at bottom (into about) */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(248,249,252,1) 40%, rgba(255,255,255,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: 'linear-gradient(to bottom, var(--color-navy-deep) 0%, var(--color-navy) 40%, var(--color-navy) 100%)',
          }}
        />

        {/* Diamond pattern texture across the bridge */}
        <div className="absolute inset-0 text-navy dark:text-white opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="trust-diamond" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#trust-diamond)" />
          </svg>
        </div>

        {/* Warm glow behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange/5 rounded-full blur-[100px]" />
      </div>

      {/* The floating stats card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/80 dark:bg-navy-card/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-navy/10 dark:shadow-black/30 border border-white/60 dark:border-white/10 p-6 sm:p-8 transition-colors duration-300"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map(({ icon: Icon, end, prefix, suffix, label, duration }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange/10 flex items-center justify-center"
                >
                  <Icon size={24} weight="duotone" className="text-orange" />
                </motion.div>
                <p className="font-mono font-medium text-2xl sm:text-3xl text-navy dark:text-white">
                  <CountUp
                    end={end}
                    prefix={prefix}
                    suffix={suffix}
                    duration={duration}
                  />
                </p>
                <p className="text-sm text-slate dark:text-white/50 font-inter mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
