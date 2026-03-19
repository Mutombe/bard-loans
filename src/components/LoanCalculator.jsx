import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import {
  Calculator,
  CurrencyCircleDollar,
  CalendarBlank,
  Percent,
  ArrowRight,
  Info,
  WhatsappLogo,
} from '@phosphor-icons/react'

const INTEREST_RATE = 0.05
const INITIATION_RATE = 0.05
const SERVICE_RATE = 0.10

function formatRand(amount) {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000)
  const [loanTerm, setLoanTerm] = useState(1)
  const [animatePayment, setAnimatePayment] = useState(false)

  const initiationFee = loanAmount * INITIATION_RATE
  const totalInterest = loanAmount * INTEREST_RATE * loanTerm
  const totalServiceFee = loanAmount * SERVICE_RATE * loanTerm
  const totalRepayment = loanAmount + initiationFee + totalInterest + totalServiceFee
  const monthlyInstallment = totalRepayment / loanTerm
  const totalCost = totalRepayment - loanAmount

  useEffect(() => {
    setAnimatePayment(true)
    const timer = setTimeout(() => setAnimatePayment(false), 300)
    return () => clearTimeout(timer)
  }, [loanAmount, loanTerm])

  const handleApply = () => {
    const message = `Hi Bard Loans! I'd like to apply for a loan of ${formatRand(loanAmount)} over ${loanTerm} month(s). Monthly installment: ${formatRand(monthlyInstallment)}. Please assist.`
    const url = `https://wa.me/27676151569?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    toast.success('Redirecting to WhatsApp...', {
      description: 'Our team will assist you shortly.',
    })
  }

  const handleEmail = () => {
    const subject = `Loan Application - ${formatRand(loanAmount)}`
    const body = `Dear Bard Loans,\n\nI would like to apply for the following loan:\n\nLoan Amount: ${formatRand(loanAmount)}\nTerm: ${loanTerm} month(s)\nMonthly Installment: ${formatRand(monthlyInstallment)}\nTotal Repayment: ${formatRand(totalRepayment)}\n\nPlease send me the application forms.\n\nThank you.`
    window.location.href = `mailto:apply@bardloans.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    toast.success('Opening your email client...', {
      description: 'Send us your application details.',
    })
  }

  const amountPercent = ((loanAmount - 500) / (5000 - 500)) * 100

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-white dark:bg-navy transition-colors duration-300">
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
            Loan Calculator
          </span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy dark:text-white mt-3">
            See What You&apos;ll{' '}
            <span className="text-orange">Pay</span>
          </h2>
          <p className="mt-4 text-slate dark:text-white/50 text-lg font-inter">
            Use our calculator to get an instant estimate. No obligations, no surprises.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 dark:shadow-black/30 border border-mist dark:border-white/10">
            <div className="grid lg:grid-cols-5">
              {/* Left: Controls */}
              <div className="lg:col-span-3 p-8 sm:p-10 bg-white dark:bg-navy-card transition-colors duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                    <Calculator size={22} weight="duotone" className="text-orange" />
                  </div>
                  <h3 className="font-jakarta font-bold text-navy dark:text-white text-xl">
                    Configure Your Loan
                  </h3>
                </div>

                {/* Loan Amount Slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-sm font-inter text-slate dark:text-white/60">
                      <CurrencyCircleDollar size={18} className="text-orange" />
                      Loan Amount
                    </label>
                    <span className="font-mono font-medium text-xl text-navy dark:text-white">
                      {formatRand(loanAmount)}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="500"
                      max="5000"
                      step="50"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full"
                      style={{
                        background: `linear-gradient(to right, #EE7D36 0%, #EE7D36 ${amountPercent}%, rgba(128,128,128,0.2) ${amountPercent}%, rgba(128,128,128,0.2) 100%)`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate/60 dark:text-white/30 font-inter">
                    <span>R500</span>
                    <span>R5,000</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-sm font-inter text-slate dark:text-white/60">
                      <CalendarBlank size={18} className="text-orange" />
                      Loan Term
                    </label>
                    <span className="font-mono font-medium text-xl text-navy dark:text-white">
                      {loanTerm} {loanTerm === 1 ? 'month' : 'months'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {[1, 2, 3].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTerm(term)}
                        className={`flex-1 py-3.5 rounded-xl font-jakarta font-semibold text-sm transition-all ${
                          loanTerm === term
                            ? 'bg-navy text-orange shadow-lg shadow-navy/20'
                            : 'bg-mist dark:bg-white/5 text-slate dark:text-white/50 hover:bg-navy/5 dark:hover:bg-white/10'
                        }`}
                      >
                        {term} {term === 1 ? 'Month' : 'Months'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fee breakdown */}
                <div className="bg-pearl dark:bg-white/5 rounded-xl p-5 transition-colors duration-300">
                  <h4 className="flex items-center gap-2 text-sm font-jakarta font-semibold text-navy dark:text-white mb-4">
                    <Info size={16} className="text-orange" />
                    Fee Breakdown
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Initiation Fee (5%)', value: initiationFee, note: 'Once-off' },
                      { label: 'Interest (5%/mo)', value: totalInterest, note: `${loanTerm}mo` },
                      { label: 'Service Fee (10%/mo)', value: totalServiceFee, note: `${loanTerm}mo` },
                    ].map(({ label, value, note }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-sm text-slate dark:text-white/50 font-inter">{label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate/50 dark:text-white/30 font-inter">{note}</span>
                          <span className="font-mono text-sm text-navy dark:text-white font-medium">
                            {formatRand(value)}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-mist dark:border-white/10 pt-3 flex items-center justify-between">
                      <span className="text-sm font-jakarta font-semibold text-navy dark:text-white">Total Cost of Credit</span>
                      <span className="font-mono text-sm text-orange-dark font-medium">
                        {formatRand(totalCost)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Results — always dark */}
              <div className="lg:col-span-2 bg-navy p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/10 rounded-full blur-[60px]" />

                <div className="relative">
                  <p className="text-white/50 font-inter text-sm mb-2">Monthly Installment</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={monthlyInstallment}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono font-bold text-4xl sm:text-5xl text-orange"
                    >
                      {formatRand(monthlyInstallment)}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-white/30 font-inter text-sm mt-1">per month</p>

                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-sm font-inter">Total Repayment</span>
                      <span className="font-mono text-white font-medium text-lg">
                        {formatRand(totalRepayment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-sm font-inter">Loan Amount</span>
                      <span className="font-mono text-white/80 font-medium">
                        {formatRand(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-sm font-inter">Total Fees</span>
                      <span className="font-mono text-orange/80 font-medium">
                        {formatRand(totalCost)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex gap-1 h-3 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-navy-mid rounded-l-full"
                        animate={{ width: `${(loanAmount / totalRepayment) * 100}%` }}
                        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                      />
                      <motion.div
                        className="bg-orange rounded-r-full"
                        animate={{ width: `${(totalCost / totalRepayment) * 100}%` }}
                        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-navy-mid flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-navy-mid inline-block" />
                        Principal
                      </span>
                      <span className="text-orange/80 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-orange inline-block" />
                        Fees & Interest
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 space-y-3">
                  <button
                    onClick={handleApply}
                    className="btn-orange w-full flex items-center justify-center gap-2 py-4 bg-orange text-navy font-jakarta font-bold rounded-xl hover:bg-orange-dark transition-all hover:shadow-lg hover:shadow-orange/25"
                  >
                    <WhatsappLogo weight="fill" size={20} />
                    Apply via WhatsApp
                  </button>
                  <button
                    onClick={handleEmail}
                    className="w-full flex items-center justify-center gap-2 py-3.5 border border-white/20 text-white font-jakarta font-semibold rounded-xl hover:bg-white/5 transition-all text-sm"
                  >
                    Apply via Email
                    <ArrowRight size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate/60 dark:text-white/30 mt-6 font-inter max-w-lg mx-auto">
            * This calculator provides an estimate only. Final loan terms may vary based on
            credit assessment. Interest rate: 5% p.m. Initiation fee: 5%. Service fee: 10% p.m.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
