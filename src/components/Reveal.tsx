import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Atraso em segundos (para stagger manual entre irmãos) */
  delay?: number;
  /** Direção da entrada */
  from?: 'up' | 'left' | 'right';
  className?: string;
}

/**
 * Wrapper de scroll-reveal: anima uma única vez quando entra na viewport.
 * Respeita prefers-reduced-motion — acessibilidade não é opcional.
 */
export function Reveal({ children, delay = 0, from = 'up', className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const offset = { up: { y: 40, x: 0 }, left: { y: 0, x: -40 }, right: { y: 0, x: 40 } }[from];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}
