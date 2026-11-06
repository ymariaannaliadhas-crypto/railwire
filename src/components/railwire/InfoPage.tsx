import type { ReactNode } from "react";

export function InfoPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative mx-3 mt-4 h-[380px] overflow-hidden rounded-[28px] bg-[#2a2c3c] md:mx-6">
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-1/2 h-14 w-44 -translate-x-1/2 bg-white"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1000px] px-5 py-16">{children}</div>
    </main>
  );
}
