import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Pill() {
  return (
    <span className="inline-block h-3 w-6 rounded-full border-2 border-primary bg-primary/70" />
  );
}

export function Eyebrow({
  children,
  center,
  both,
  light,
}: {
  children: ReactNode;
  center?: boolean;
  both?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-wide ${light ? "text-primary-foreground" : "text-primary"} ${center ? "justify-center" : ""}`}
    >
      <Pill />
      {children}
      {both && <Pill />}
    </div>
  );
}

export function Heading({
  pre,
  hl,
  className = "",
  light,
}: {
  pre: string;
  hl?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-display text-4xl font-bold leading-tight md:text-5xl ${light ? "text-primary-foreground" : "text-ink"} ${className}`}
    >
      {pre}{" "}
      {hl && (
        <span className="relative inline-block text-primary">
          {hl}
          <svg
            className="absolute -bottom-2 left-0 h-3 w-1/2"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
          >
            <path
              d="M2 9 C 30 2, 70 2, 98 7"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </h2>
  );
}

export function BtnLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "white";
}) {
  const cls =
    variant === "white"
      ? "bg-card text-primary hover:bg-ink hover:text-primary-foreground"
      : "bg-primary text-primary-foreground hover:bg-ink";
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-md px-7 py-3.5 font-display font-semibold transition-colors duration-300 ${cls}`}
    >
      {children}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
