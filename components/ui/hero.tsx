'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(SplitText, useGSAP);

interface HeroProps {
  title: string;
  description: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
  darkMode?: boolean;
}

export default function Hero({
  title,
  description,
  ctaButtons = [
    { text: "View Work", href: "#experience", primary: true },
    { text: "Get in Touch", href: "#connect" }
  ],
  microDetails = ["Human-Centered AI", "Multi-Agent Systems", "NLP Research"],
  darkMode = false
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headerRef.current!, {
          type: 'lines',
          wordsClass: 'lines',
        });

        gsap.set(split.lines, {
          filter: 'blur(8px)',
          yPercent: 20,
          autoAlpha: 0,
          transformOrigin: '50% 100%',
        });

        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 10 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 10 });
        }

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        tl.to(
          split.lines,
          {
            filter: 'blur(0px)',
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.12,
          },
          0.3,
        );

        if (paraRef.current) {
          tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.4');
        }
        if (ctaRef.current) {
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.3');
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-neutral-950' : 'bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30'
        }`}
    >
      {/* Grid Pattern Background */}
      <div
        className={`absolute inset-0 ${darkMode ? 'opacity-10' : 'opacity-40'}`}
        style={{
          backgroundImage: `
            linear-gradient(${darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle Radial Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center gap-6 px-4 sm:px-6 pt-28 pb-20 sm:pt-36 md:pt-44">
        {/* Main Headline */}
        <h1
          ref={headerRef}
          className={`max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'
            }`}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          ref={paraRef}
          className={`max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
        >
          {description}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${button.primary
                ? darkMode
                  ? "bg-white text-neutral-900 hover:bg-neutral-200"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
                : darkMode
                  ? "border border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                  : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
            >
              {button.text}
              {button.primary && <ArrowRight className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* Micro Details / Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6 sm:pt-8">
          {microDetails.map((detail, index) => (
            <span
              key={index}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${darkMode
                ? 'bg-neutral-800 text-neutral-400'
                : 'bg-neutral-100 text-neutral-600'
                }`}
            >
              {detail}
            </span>
          ))}
        </div>
      </div>

      {/* Previously At Section */}
      <div className="relative z-10 pb-12 sm:pb-16">
        <p className={`text-center text-xs sm:text-sm mb-4 sm:mb-6 ${darkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
          Previously at
        </p>
        <div className={`flex items-center justify-center gap-4 sm:gap-8 flex-wrap px-4 ${darkMode ? 'opacity-50' : 'opacity-60'}`}>
          {["Meta", "LinkedIn", "Kaiser", "NASA"].map((company) => (
            <span key={company} className={`text-sm sm:text-lg font-medium ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
