import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Tony Fitzgerald',
    badge: 'Local Guide · 9 reviews',
    rating: 5,
    text: 'Great riding place. My daughters recently went for a half day horse camp and absolutely loved it. Caters for all ages and riding levels and they have really nice horses. Definitely recommend.',
    time: '4 months ago',
  },
  {
    name: 'Chantelle',
    badge: '1 review',
    rating: 5,
    text: "I started doing adult horse riding lessons with Friday over a year ago, and she has exceeded all expectations. Friday's wealth of knowledge shines through in her teaching and in her horsemanship. Under Friday's guidance, I have seen a significant improvement in my riding skills and confidence. Friday's love for horses is evident in what she does and it is clear she wants to share that love and expertise with all her students.",
    time: '2 years ago',
  },
  {
    name: 'Jing',
    badge: '4 reviews',
    rating: 5,
    text: 'Friday is wonderful and very patient with our kids.',
    time: '7 months ago',
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const goTo = (index: number) => {
    if (index < 0) index = reviews.length - 1;
    if (index >= reviews.length) index = 0;
    setActiveIndex(index);
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="bg-white py-24 md:py-40"
    >
      <div className="w-full h-64 md:h-96 overflow-hidden mb-16">
        <img
          src="/images/gen-reviews-banner.jpg"
          alt="Three riders celebrating together"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-[5vw]">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white border border-espresso/10 rounded-full px-6 py-3 shadow-sm mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-sans text-sm font-medium text-espresso">5.0</span>
            <span className="font-sans text-xs text-espresso/50">·</span>
            <span className="font-sans text-xs text-espresso/50">Rated on Google</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-espresso mb-4">
            Loved by Local Families
          </h2>
          <p className="font-sans text-espresso/60 text-base">
            Real riders. Real stories. Real 5-star experiences.
          </p>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 md:px-8">
                  <div className="max-w-3xl mx-auto bg-sand/50 rounded-lg p-8 md:p-12">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="font-sans text-espresso/80 text-base md:text-lg leading-relaxed mb-6">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sunset/20 flex items-center justify-center">
                        <span className="font-display text-lg text-sunset">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-sans text-sm font-medium text-espresso">
                          {review.name}
                        </div>
                        <div className="font-sans text-xs text-espresso/50">
                          {review.badge} · {review.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(activeIndex - 1)}
              className="w-10 h-10 rounded-full border border-espresso/20 flex items-center justify-center hover:bg-sunset hover:border-sunset hover:text-white transition-all duration-300 text-espresso/60"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-sunset w-6' : 'bg-espresso/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(activeIndex + 1)}
              className="w-10 h-10 rounded-full border border-espresso/20 flex items-center justify-center hover:bg-sunset hover:border-sunset hover:text-white transition-all duration-300 text-espresso/60"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=gray+equine+metricup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-sunset hover:text-sunset-dark transition-colors duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
