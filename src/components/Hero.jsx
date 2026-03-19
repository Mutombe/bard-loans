import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShieldCheck, Clock, CurrencyCircleDollar, CheckCircle } from '@phosphor-icons/react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1581006867287-9f90a3f3a8b0?w=1400&h=900&fit=crop&q=80',
    alt: 'Johannesburg skyline at sunset',
  },
  {
    src: '/investment-banker-working.jpg',
    alt: 'Financial advisor analyzing data',
  },
  {
    src: '/Board-room-0x2000-c.jpg',
    alt: 'Professional boardroom',
  },
]

const textLine = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* ═══ Full-bleed background carousel ═══ */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            initial={{ opacity: 0, x: 80, scale: 1.08 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* ═══ Gradient overlay: solid navy left → transparent right ═══ */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(49,47,77,0.97) 0%, rgba(49,47,77,0.92) 25%, rgba(49,47,77,0.75) 50%, rgba(49,47,77,0.35) 70%, rgba(49,47,77,0.10) 85%, rgba(49,47,77,0.03) 100%)',
          }}
        />
        {/* Extra top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/60" />

        {/* Subtle grid pattern on the text side */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ═══ Content layer ═══ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          {/* ── Left: Text content (takes ~7 cols) ── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/60 text-sm font-inter mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              Trusted by thousands across South Africa
            </motion.div>

            <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
              <motion.span
                custom={0}
                variants={textLine}
                initial="initial"
                animate="animate"
                className="block text-white drop-shadow-lg"
              >
                Empowering
              </motion.span>
              <motion.span
                custom={1}
                variants={textLine}
                initial="initial"
                animate="animate"
                className="block text-white drop-shadow-lg"
              >
                Your{' '}
                <span className="text-orange relative">
                  Financial
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <motion.path
                      d="M2 6C50 2 150 2 198 6"
                      stroke="#EE7D36"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}
                    />
                  </svg>
                </span>
              </motion.span>
              <motion.span
                custom={2}
                variants={textLine}
                initial="initial"
                animate="animate"
                className="block text-white drop-shadow-lg"
              >
                Future
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-6 text-lg sm:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 font-inter leading-relaxed drop-shadow-md"
            >
              Quick loans from R500 to R5,000. Simple application, fast approval,
              and transparent terms. Your financial partner in Sandton.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#calculator"
                className="btn-orange group inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange text-navy font-jakarta font-bold text-lg rounded-xl hover:bg-orange-dark transition-all hover:shadow-lg hover:shadow-orange/25"
              >
                Calculate Your Loan
                <ArrowRight
                  size={20}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-jakarta font-semibold text-lg rounded-xl hover:bg-white/5 backdrop-blur-sm transition-all"
              >
                Learn More
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: ShieldCheck, label: 'NCR Registered' },
                { icon: Clock, label: '24hr Approval' },
                { icon: CurrencyCircleDollar, label: 'Competitive Rates' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/50 text-sm">
                  <Icon size={18} weight="fill" className="text-orange/70" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Floating cards (takes ~5 cols, positioned over the visible image) ── */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center gap-6 relative h-[500px]">
            {/* Approved card — top right area */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: 'spring', stiffness: 100 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl shadow-black/30 mr-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center">
                  <CheckCircle size={26} weight="fill" className="text-emerald" />
                </div>
                <div>
                  <p className="text-xs text-slate font-inter">Loan Approved</p>
                  <p className="font-mono font-bold text-navy text-2xl">R5,000</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-emerald/20">
                  <motion.div
                    className="h-full rounded-full bg-emerald"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.8, duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-[10px] text-emerald font-mono font-medium">Complete</span>
              </div>
            </motion.div>

            {/* Stats card — middle right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl shadow-black/30 mr-16"
            >
              <p className="text-xs text-slate font-inter mb-1">Average Approval Time</p>
              <p className="font-mono font-bold text-navy text-3xl">24hrs</p>
              <div className="flex gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-7 h-2 rounded-full bg-orange"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.8 + i * 0.1, duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Clients served card — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8, type: 'spring', stiffness: 100 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl shadow-black/30 mr-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                  <ShieldCheck size={26} weight="fill" className="text-orange" />
                </div>
                <div>
                  <p className="text-xs text-slate font-inter">Clients Served</p>
                  <p className="font-mono font-bold text-navy text-2xl">5,000+</p>
                </div>
              </div>
            </motion.div>

            {/* Carousel indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex gap-2 mr-12 mt-2"
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentImage === i
                      ? 'w-8 bg-orange'
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade — white in light mode, navy-deep in dark mode */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-deep to-transparent" />
    </section>
  )
}
