import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../layout/Container';
import Navbar from '../layout/Navbar';

const featuredLogos = [
  { name: 'Business Insider', className: 'font-semibold tracking-[0.08em] uppercase text-[11px] sm:text-xs' },
  { name: 'The New York Times', className: 'font-[family-name:var(--font-heading)] italic text-sm sm:text-base' },
  { name: 'Good Morning America', className: 'font-semibold tracking-wide uppercase text-[10px] sm:text-[11px]' },
  { name: 'Financial Times', className: 'font-serif font-bold tracking-tight text-sm sm:text-base' },
  { name: 'BBC Radio 4', className: 'font-bold tracking-tight text-xs sm:text-sm' },
  { name: "Men's Health", className: 'font-black italic tracking-tight text-sm sm:text-base' },
];

const Hero = () => {
  return (
    <section className="bg-white px-2 sm:px-3 lg:px-4 pt-3 sm:pt-4 lg:pt-5 pb-5 sm:pb-6 lg:pb-8">
      <Container className="max-w-[1520px]">
        {/* One continuous cream shell — shared color + pattern for both parts */}
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] bg-[#fdf8f2]">
          {/* Shared wavy pattern across the entire hero */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <svg
              className="absolute -left-[12%] top-[18%] w-[75%] h-[55%] opacity-70"
              viewBox="0 0 800 600"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M-40 120 C 120 40, 260 180, 400 100 C 560 10, 700 160, 860 80 L 860 600 L -40 600 Z"
                fill="#f3ebe0"
              />
            </svg>
            <svg
              className="absolute -right-[8%] top-[42%] w-[70%] h-[65%] opacity-80"
              viewBox="0 0 800 600"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0 200 C 140 280, 220 120, 360 200 C 500 280, 620 140, 800 220 L 800 0 L 0 0 Z"
                fill="#f5eee4"
              />
              <path
                d="M100 520 C 240 440, 380 560, 520 460 C 660 360, 760 480, 860 400 L 860 600 L 100 600 Z"
                fill="#efe6da"
              />
            </svg>
            <svg
              className="absolute left-[20%] bottom-[-5%] w-[60%] h-[40%] opacity-60"
              viewBox="0 0 800 400"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0 280 C 160 200, 320 340, 480 240 C 640 140, 760 260, 800 200 L 800 400 L 0 400 Z"
                fill="#f1e8dc"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <Navbar embedded />

            {/* ── Part 1: Intro ── */}
            <div className="relative px-5 sm:px-8 lg:px-10 xl:px-14 pb-12 sm:pb-16 lg:pb-20 pt-4 sm:pt-6 lg:pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-8 lg:gap-4 xl:gap-8 items-center">
                <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative w-[min(100%,320px)] sm:w-[360px] lg:w-[400px] xl:w-[420px] aspect-square animate-soft-float">
                    <svg
                      className="absolute -left-[8%] top-[4%] w-[72%] h-[92%] pointer-events-none"
                      viewBox="0 0 220 320"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M195 28 C 95 48, 55 120, 55 160 C 55 210, 95 278, 195 292"
                        stroke="#f5d46a"
                        strokeWidth="2.25"
                        strokeDasharray="7 9"
                        strokeLinecap="round"
                      />
                      <path
                        d="M178 48 C 105 65, 78 120, 78 160 C 78 205, 108 260, 178 275"
                        stroke="#f5d46a"
                        strokeWidth="1.5"
                        strokeDasharray="5 8"
                        strokeLinecap="round"
                        opacity="0.55"
                      />
                    </svg>

                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 420 420"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M210 48
                           C 300 48, 368 116, 368 210
                           C 368 275, 330 330, 275 352
                           C 300 330, 312 300, 300 275
                           C 285 300, 250 318, 210 318
                           C 120 318, 52 250, 52 210
                           C 52 116, 120 48, 210 48 Z"
                        fill="#f9d56e"
                      />
                      <path
                        d="M340 195 L 398 228 L 328 235 C 338 220, 340 208, 340 195 Z"
                        fill="#f9d56e"
                      />
                    </svg>

                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 420 420"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M250 340 C 310 320, 355 270, 365 210"
                        stroke="rgba(255,255,255,0.85)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute left-[11%] top-[11%] right-[11%] bottom-[11%] rounded-full overflow-hidden bg-[#f3f0eb] ring-[6px] ring-white shadow-[0_10px_36px_rgba(27,22,36,0.1)]">
                      <Image
                        src="/Phil Foden-image.png"
                        alt="Nomolabs mentor"
                        fill
                        className="object-cover object-[center_12%]"
                        priority
                        sizes="(max-width: 768px) 280px, 360px"
                      />
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-2 xl:pl-4">
                  <div className="inline-flex items-end justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-7 animate-fade-up">
                    <h1 className="relative font-[family-name:var(--font-heading)] text-[clamp(2.85rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#1a1a1a]">
                      Hey Friends
                      <svg
                        className="absolute left-[0.15em] right-[-0.1em] -bottom-[0.12em] h-[0.38em] w-[calc(100%-0.05em)] pointer-events-none"
                        viewBox="0 0 320 22"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden
                      >
                        <path
                          d="M4 8 C 50 2, 95 12, 150 6 S 250 4, 316 9"
                          stroke="#7ed8f5"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 16 C 60 11, 110 19, 165 14 S 255 12, 312 17"
                          stroke="#7ed8f5"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </h1>

                    <span className="relative inline-flex items-center pb-1 shrink-0" aria-hidden>
                      <svg
                        className="absolute -left-4 sm:-left-5 top-[18%] w-7 sm:w-8 h-5 sm:h-6"
                        viewBox="0 0 36 24"
                        fill="none"
                      >
                        <path d="M32 5 C 26 2, 21 5, 18 10" stroke="#7ed8f5" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M34 12 C 28 8, 23 11, 20 16" stroke="#7ed8f5" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M33 19 C 28 16, 24 18, 22 21" stroke="#7ed8f5" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                      </svg>
                      <span className="text-[clamp(2.1rem,5vw,3.4rem)] leading-none select-none drop-shadow-sm">
                        👋
                      </span>
                    </span>
                  </div>

                  <p className="animate-fade-up-delay text-[1.05rem] sm:text-lg lg:text-[1.2rem] text-[#1a1a1a] leading-[1.65] max-w-[34rem] mx-auto lg:mx-0">
                    Welcome to Nomolabs. We run live cohort-based classes in Web
                    Development, Content Writing, and UI/UX Design — learn from
                    expert mentors and invest in{' '}
                    <strong className="font-semibold underline decoration-[#1a1a1a] decoration-[1.5px] underline-offset-[4px]">
                      Your Future.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* ── Part 2: Product card on the same cream + pattern ── */}
            <div className="relative px-4 sm:px-5 lg:px-6 xl:px-8 pb-10 sm:pb-12 lg:pb-14">
              <div className="relative w-full overflow-visible">
                <div className="relative overflow-visible bg-white rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem] shadow-[0_4px_40px_rgba(27,22,36,0.06)] px-6 sm:px-10 lg:px-12 xl:px-14 py-8 sm:py-10 lg:py-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center overflow-visible">
                    <div className="flex flex-col items-start max-w-md">
                      <div className="flex items-center gap-2.5 mb-6 sm:mb-7">
                        <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#1a1a1a]" aria-hidden>
                          <span className="h-3 w-3 rounded-full bg-white" />
                        </span>
                        <span className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#1a1a1a]">
                          Nomolabs
                        </span>
                      </div>

                      <h2 className="font-sans text-[1.65rem] sm:text-[1.9rem] lg:text-[2.15rem] font-bold leading-[1.2] tracking-[-0.025em] text-[#1a1a1a] mb-4 sm:mb-5">
                        Ideas only change your life if you take daily action.
                      </h2>

                      <p className="text-[0.95rem] sm:text-[1.05rem] text-[#3a3a3a] leading-[1.65] mb-7 sm:mb-8">
                        Nomolabs brings live cohorts, expert mentors, and hands-on
                        projects together so your learning is planned around what
                        actually builds your career.
                      </p>

                      <Link
                        href="/courses"
                        className="inline-flex items-center justify-center rounded-full bg-[#7ed8f5] hover:bg-[#5dcdf1] text-[#1a1a1a] font-semibold text-[0.95rem] sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 transition-colors"
                      >
                        Check Out Courses
                      </Link>
                    </div>

                    {/* Right — mockup + hand-drawn arrow aimed at its top-right */}
                    <div className="relative w-full">
                      {/*
                        Ali Abdaal arrow: single counter-clockwise curl at top,
                        stem curves down-left, simple two-line tip at mockup corner.
                      */}
                      <div
                        className="hidden md:block absolute -top-[4.5rem] -right-1 lg:-top-20 lg:right-2 z-20 pointer-events-none"
                        aria-hidden
                      >
                        <svg
                          width="78"
                          height="108"
                          viewBox="0 0 78 108"
                          fill="none"
                          className="overflow-visible"
                        >
                          {/* Continuous hand-drawn stroke: curl → stem */}
                          <path
                            d="
                              M 52 34
                              C 58 34, 62 28, 62 22
                              C 62 14, 55 8, 47 9
                              C 38 10, 33 17, 35 25
                              C 36.5 31, 43 35, 50 33
                              C 48 42, 44 54, 40 66
                              C 35 80, 34 90, 36 98
                            "
                            stroke="#e9967a"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          {/* Open V arrowhead, hand-drawn angle */}
                          <path
                            d="M 27 90 L 36 100 L 48 88"
                            stroke="#e9967a"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl sm:rounded-[1.35rem] border border-[#ece7e1] bg-[#faf8f5] shadow-[0_8px_28px_rgba(27,22,36,0.08)]">
                        <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-[#ece7e1] bg-white/80">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#fdd46b]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#79d287]" />
                          <span className="ml-3 text-[10px] sm:text-xs text-[#9a9590] font-medium">
                            Student Dashboard
                          </span>
                        </div>

                        <div className="grid grid-cols-[0.85fr_1.15fr_0.95fr] min-h-[220px] sm:min-h-[260px] lg:min-h-[280px]">
                          <div className="border-r border-[#ece7e1] p-3 sm:p-4 bg-white/60">
                            <p className="text-[10px] sm:text-xs font-semibold text-[#1a1a1a] mb-3">
                              Today&apos;s Goals
                            </p>
                            <ul className="space-y-2.5">
                              {[
                                { label: 'Finish wireframes', color: 'bg-[#fd976d]' },
                                { label: 'Review mentor notes', color: 'bg-[#79d287]' },
                                { label: 'Ship landing hero', color: 'bg-[#5dcdf1]' },
                                { label: 'Practice React hooks', color: 'bg-[#c9b1fb]' },
                              ].map((item) => (
                                <li key={item.label} className="flex items-start gap-2">
                                  <span className={`mt-0.5 h-2 w-2 rounded-full shrink-0 ${item.color}`} />
                                  <span className="text-[9px] sm:text-[11px] leading-snug text-[#3a3a3a]">
                                    {item.label}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="border-r border-[#ece7e1] p-3 sm:p-4 bg-[#fcfaf7]">
                            <p className="text-[10px] sm:text-xs font-semibold text-[#1a1a1a] mb-3">
                              Live Sessions
                            </p>
                            <div className="space-y-2">
                              <div className="rounded-lg bg-[#f8c4d8]/70 px-2.5 py-2.5 sm:py-3">
                                <p className="text-[9px] sm:text-[11px] font-semibold text-[#1a1a1a]">UI Critique</p>
                                <p className="text-[8px] sm:text-[10px] text-[#5a5550] mt-0.5">10:00 – 11:30</p>
                              </div>
                              <div className="rounded-lg bg-[#d4c4f7]/70 px-2.5 py-2.5 sm:py-3">
                                <p className="text-[9px] sm:text-[11px] font-semibold text-[#1a1a1a]">React Build Lab</p>
                                <p className="text-[8px] sm:text-[10px] text-[#5a5550] mt-0.5">14:00 – 16:00</p>
                              </div>
                              <div className="rounded-lg bg-[#b8ebf5]/60 px-2.5 py-2 sm:py-2.5 hidden sm:block">
                                <p className="text-[9px] sm:text-[11px] font-semibold text-[#1a1a1a]">Writing Clinic</p>
                                <p className="text-[8px] sm:text-[10px] text-[#5a5550] mt-0.5">17:00 – 18:00</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 sm:p-4 bg-white/70">
                            <p className="text-[9px] sm:text-[11px] font-semibold text-[#1a1a1a] leading-snug mb-2">
                              Strong morning — let&apos;s fine tune your afternoon.
                            </p>
                            <p className="text-[8px] sm:text-[10px] text-[#7a7570] mb-3">Recommended for you</p>
                            <div className="space-y-2">
                              <div className="rounded-md bg-[#f3ede9] px-2 py-1.5">
                                <p className="text-[8px] sm:text-[10px] font-medium text-[#1a1a1a]">Mentor office hours</p>
                              </div>
                              <div className="rounded-md bg-[#f3ede9] px-2 py-1.5">
                                <p className="text-[8px] sm:text-[10px] font-medium text-[#1a1a1a]">Portfolio review</p>
                              </div>
                              <div className="rounded-md bg-[#e8f7fb] px-2 py-1.5 hidden sm:block">
                                <p className="text-[8px] sm:text-[10px] font-medium text-[#1a1a1a]">Cohort standup</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* As featured in — same shell */}
              <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 w-full px-1">
                <p className="text-xs sm:text-sm text-[#9a9590] shrink-0 whitespace-nowrap">
                  As featured in:
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7 lg:gap-x-9 text-[#1a1a1a]/70">
                  {featuredLogos.map((logo) => (
                    <span key={logo.name} className={`${logo.className} opacity-80`}>
                      {logo.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
