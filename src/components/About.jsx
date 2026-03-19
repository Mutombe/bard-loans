import { motion } from 'framer-motion'
import { CheckCircle, Heart, Scales, UsersThree } from '@phosphor-icons/react'

const values = [
  {
    icon: Heart,
    title: 'Community First',
    desc: 'We uplift the communities we serve by fostering financial inclusion and trust.',
  },
  {
    icon: Scales,
    title: 'Transparent & Fair',
    desc: 'No hidden fees, no surprises. Every term is clear, fair, and upfront.',
  },
  {
    icon: UsersThree,
    title: 'Personalized Service',
    desc: 'Tailored financial solutions designed around your unique needs.',
  },
  {
    icon: CheckCircle,
    title: 'Accessible Credit',
    desc: 'Bridging the gap for those underserved by traditional financial systems.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-navy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/bg2.jpg"
                  alt="The Bard Loans team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Accent overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-navy dark:bg-navy-card rounded-xl p-6 shadow-lg max-w-[200px] border border-transparent dark:border-white/10">
                <p className="font-mono text-3xl font-bold text-orange">10+</p>
                <p className="text-white/70 text-sm mt-1 font-inter">Years of empowering financial futures</p>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-orange/30 rounded-xl" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            <p className="mt-6 text-slate dark:text-white/60 text-lg leading-relaxed font-inter">
              At Bard Loans, we believe that access to credit should be seamless,
              empowering, and rooted in trust. We understand that financial challenges
              and opportunities are a part of life, and we are here to ensure that
              individuals, families, and businesses have the resources they need to thrive.
            </p>
            <p className="mt-4 text-slate dark:text-white/50 leading-relaxed font-inter">
              What sets us apart is our unwavering commitment to accessibility,
              transparency, and community impact. By offering personalized financial
              services and innovative lending solutions, we aim to bridge the gap for
              those underserved by traditional financial systems.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group p-4 rounded-xl border border-mist dark:border-white/10 hover:border-orange/30 hover:bg-orange/5 transition-all"
                >
                  <Icon
                    size={28}
                    weight="duotone"
                    className="text-orange group-hover:text-orange transition-colors"
                  />
                  <h3 className="font-jakarta font-bold text-navy dark:text-white mt-3 text-sm">
                    {title}
                  </h3>
                  <p className="text-slate dark:text-white/50 text-xs mt-1 leading-relaxed font-inter">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
