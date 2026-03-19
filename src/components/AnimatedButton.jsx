import { motion } from 'framer-motion'

export default function AnimatedButton({
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
  ...props
}) {
  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}
