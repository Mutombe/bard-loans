import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, WhatsappLogo, Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from '../ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#offerings' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { dark, toggle } = useTheme()

  // Track scroll position for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Nav background
  const scrolledClasses = scrolled
    ? dark
      ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20'
      : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
    : 'bg-transparent'

  const mobileIconColor = scrolled && !dark ? 'text-navy' : 'text-white'

  // Desktop link styles — active vs inactive
  const getLinkClasses = (href) => {
    const sectionId = href.replace('#', '')
    const isActive = activeSection === sectionId

    if (isActive) {
      return scrolled && !dark
        ? 'text-orange font-semibold'
        : 'text-orange font-semibold'
    }
    return scrolled && !dark
      ? 'text-navy/70 hover:text-orange-dark'
      : 'text-white/70 hover:text-orange'
  }

  // Mobile link styles
  const getMobileLinkClasses = (href) => {
    const sectionId = href.replace('#', '')
    const isActive = activeSection === sectionId

    if (isActive) {
      return dark
        ? 'text-orange bg-white/5 font-semibold'
        : 'text-orange bg-orange/5 font-semibold'
    }
    return dark
      ? 'text-white/80 hover:text-orange hover:bg-white/5'
      : 'text-navy/80 hover:text-orange hover:bg-navy/5'
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1 group">
              <img
                src="/logo.png"
                alt="Bard Loans"
                className={`h-10 w-auto transition-all group-hover:scale-105 ${
                  scrolled && !dark ? '' : 'brightness-0 invert'
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-inter transition-colors rounded-none hover:bg-white/5 ${getLinkClasses(link.href)}`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={toggle}
                className={`p-2.5 rounded-none transition-colors ${
                  scrolled && !dark
                    ? 'text-navy/60 hover:bg-navy/5 hover:text-orange'
                    : 'text-white/60 hover:bg-white/10 hover:text-orange'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={20} weight="bold" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={20} weight="bold" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <a
                href="https://wa.me/27676151569"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-emerald text-white text-sm font-jakarta font-semibold rounded-none hover:bg-emerald/90 transition-colors"
              >
                <WhatsappLogo weight="fill" size={18} />
                WhatsApp
              </a>
              <a
                href="#calculator"
                className="btn-orange px-5 py-2.5 bg-orange text-navy text-sm font-jakarta font-bold rounded-none hover:bg-orange-dark transition-colors"
              >
                Get a Loan
              </a>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="lg:hidden flex items-center gap-1">
              <button
                onClick={toggle}
                className={`p-2 rounded-none transition-colors ${mobileIconColor}`}
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={22} weight="bold" /> : <Moon size={22} weight="bold" />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 ${mobileIconColor}`}
              >
                {mobileOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — full screen overlay, NOT inside nav (prevents wedging) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel slides from top */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute top-16 left-0 right-0 shadow-2xl border-t ${
                dark
                  ? 'bg-navy border-white/10'
                  : 'bg-white border-black/5'
              }`}
            >
              <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-none transition-colors font-inter text-sm ${getMobileLinkClasses(link.href)}`}
                  >
                    {link.label}
                    {activeSection === link.href.replace('#', '') && (
                      <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-orange" />
                    )}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="https://wa.me/27676151569"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald text-white font-jakarta font-semibold rounded-none"
                  >
                    <WhatsappLogo weight="fill" size={18} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="#calculator"
                    onClick={() => setMobileOpen(false)}
                    className="btn-orange text-center px-4 py-3 bg-orange text-navy font-jakarta font-bold rounded-none"
                  >
                    Get a Loan
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
