import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(
      btnRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      trustRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
  }, []);

  const scrollToPrograms = () => {
    const el = document.querySelector('#programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        muted
        loop
        playsInline
        autoPlay
        poster="/images/gen-hero-poster.jpg"
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(61, 29, 0, 0.45) 0%, rgba(61, 29, 0, 0.2) 50%, rgba(61, 29, 0, 0.55) 100%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="font-display text-white text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-[0.85] mb-6"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
        >
          Where Horses
          <br />
          <em className="italic font-light">Meet Hearts</em>
        </h1>

        <p
          ref={subtitleRef}
          className="font-sans text-white/90 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Located in Metricup, WA — Welcoming riders from 4 years old with gentle horses, 
          adorable foals, friendly ponies &amp; our lovable donkeys
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            ref={btnRef}
            href="#booking-form"
            onClick={(e) => { e.preventDefault(); document.querySelector('#booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            className="inline-block bg-white text-[#1a1a1a] font-sans text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Book Online
          </a>
          <a
            href="#programs"
            onClick={(e) => { e.preventDefault(); scrollToPrograms(); }}
            className="inline-block border border-white/60 text-white font-sans text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Explore Programs
          </a>
        </div>
      </div>

      <div
        ref={trustRef}
        className="absolute bottom-0 left-0 right-0 z-10 py-4"
        style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)' }}
      >
        <div className="flex items-center justify-center gap-6 md:gap-12 text-white/90 font-sans text-xs md:text-sm uppercase tracking-[0.1em]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            Ages 4+ Welcome
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            5.0 Google Rated
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            South West WA&apos;s Trusted Riding School
          </span>
        </div>
      </div>
    </section>
  );
}
