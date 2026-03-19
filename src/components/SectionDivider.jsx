function BardDiamondPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="bard-diamond"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0 L60 30 L30 60 L0 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M30 10 L50 30 L30 50 L10 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bard-diamond)" />
    </svg>
  )
}

function BardLogoPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="bard-bl-grid"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Simplified BL monogram as geometric paths */}
          <circle cx="40" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path
            d="M32 28 L32 52 M32 40 L48 40 M32 28 L48 28 M32 52 L48 52"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bard-bl-grid)" />
    </svg>
  )
}

export default function SectionDivider({
  pattern = 'diamond',
  height = 80,
  fromColor = 'white',
  toColor = 'pearl',
  fromColorDark = 'navy',
  toColorDark = 'navy-light',
}) {
  const PatternComponent = pattern === 'diamond' ? BardDiamondPattern : BardLogoPattern
  const patternColor = pattern === 'diamond'
    ? 'text-navy dark:text-white'
    : 'text-orange'
  const patternOpacity = pattern === 'diamond'
    ? 'opacity-[0.04] dark:opacity-[0.06]'
    : 'opacity-[0.05] dark:opacity-[0.08]'

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `${height}px` }}
    >
      {/* Light mode gradient bridge */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: `linear-gradient(to bottom, var(--color-${fromColor}) 0%, var(--color-${toColor}) 100%)`,
        }}
      />
      {/* Dark mode gradient bridge */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `linear-gradient(to bottom, var(--color-${fromColorDark}) 0%, var(--color-${toColorDark}) 100%)`,
        }}
      />

      {/* Pattern overlay */}
      <div className={`absolute inset-0 ${patternColor} ${patternOpacity}`}>
        <PatternComponent />
      </div>

      {/* Top fade — dissolves pattern into top section */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3 dark:hidden"
        style={{ background: `linear-gradient(to bottom, var(--color-${fromColor}), transparent)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-1/3 hidden dark:block"
        style={{ background: `linear-gradient(to bottom, var(--color-${fromColorDark}), transparent)` }}
      />

      {/* Bottom fade — dissolves pattern into bottom section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 dark:hidden"
        style={{ background: `linear-gradient(to top, var(--color-${toColor}), transparent)` }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 hidden dark:block"
        style={{ background: `linear-gradient(to top, var(--color-${toColorDark}), transparent)` }}
      />

      {/* Subtle orange horizon line at midpoint */}
      {height >= 100 && (
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/10 to-transparent" />
      )}
    </div>
  )
}
