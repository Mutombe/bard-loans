import { motion } from 'framer-motion'
import { ArrowRight, WhatsappLogo, Phone } from '@phosphor-icons/react'

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-jakarta font-semibold mb-8">
            Ready to get started?
          </span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
            Your Financial Future{' '}
            <span className="text-orange">Starts Today</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg font-inter max-w-2xl mx-auto">
            Join thousands of South Africans who trust Bard Loans for their
            financial needs. Apply in minutes, get funded in hours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27676151569"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange text-navy font-jakarta font-bold text-lg rounded-xl hover:bg-orange-dark transition-all hover:shadow-lg hover:shadow-orange/25"
            >
              <WhatsappLogo weight="fill" size={22} />
              Apply on WhatsApp
              <ArrowRight
                size={20}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:0100176996"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-jakarta font-semibold text-lg rounded-xl hover:bg-white/5 transition-all"
            >
              <Phone size={22} weight="fill" />
              Call Us Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/30 text-sm font-inter">
            <span>No hidden fees</span>
            <span className="text-white/10">|</span>
            <span>Fast approval</span>
            <span className="text-white/10">|</span>
            <span>Transparent terms</span>
            <span className="text-white/10">|</span>
            <span>Trusted by thousands</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
