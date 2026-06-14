import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Beginner Lessons',
    description: 'Perfect first steps into the saddle — building confidence, balance, and a lifelong love of horses from day one.',
    price: 'From $75/session',
    image: '/images/gen-program-beginner.jpg',
  },
  {
    title: 'Group Lessons',
    description: 'Fun, social riding sessions where kids and adults learn together in a supportive, encouraging atmosphere.',
    price: '$85–$115/session',
    image: '/images/gen-program-group.jpg',
  },
  {
    title: 'Private Lessons',
    description: 'One-on-one tuition with Friday for faster progress, tailored to your personal riding goals.',
    price: '$130–$165/session',
    image: '/images/gen-program-private.jpg',
  },
  {
    title: 'Youth Programs',
    description: 'Weekly progressive sessions designed specifically for young riders aged 4–16, from walk to confident canter.',
    price: '$80–$110/session',
    image: '/images/gen-program-youth.jpg',
  },
  {
    title: 'Advanced Training',
    description: 'Refine your technique, master complex movements, and take your riding to competition level.',
    price: '$120–$150/session',
    image: '/images/gen-program-advanced.jpg',
  },
  {
    title: 'Show Riding Training',
    description: 'Learn the art of presentation, jumping, and ring craft — for aspiring competitors and confident performers.',
    price: '$110–$140/session',
    image: '/images/gen-program-show.jpg',
  },
  {
    title: 'Horsemanship Training',
    description: 'Go beyond riding — understand horse behaviour, groundwork, care, and the deep bond between horse and human.',
    price: '$90–$120/session',
    image: '/images/gen-program-horsemanship.jpg',
  },
  {
    title: 'Horse Leasing',
    description: 'Experience the joy of regular riding without ownership — lease one of our well-trained, gentle horses by the hour.',
    price: '$65–$95/hour',
    image: '/images/gen-program-leasing.jpg',
  },
  {
    title: 'School Holiday Camps',
    description: 'Half-day and full-day camps packed with riding, grooming, games, and unforgettable memories with our ponies and donkeys.',
    price: '$120–$220/day',
    image: '/images/gen-program-camps.jpg',
  },
];

export default function Programs() {
  const gateContainerRef = useRef<HTMLDivElement>(null);
  const gateLeftRef = useRef<HTMLDivElement>(null);
  const gateRightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gateContainerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to([gateLeftRef.current, gateRightRef.current], {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1.2,
        ease: 'expo.inOut',
      }).fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
        0.3
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.program-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleBook = (programTitle: string) => {
    sessionStorage.setItem('selectedProgram', programTitle);
    const formEl = document.getElementById('booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="programs" ref={gateContainerRef} className="gate-container">
      <div ref={gateLeftRef} className="gate-left" />
      <div ref={gateRightRef} className="gate-right" />

      <div ref={contentRef} className="relative z-10 bg-sand py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-sunset mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-espresso mb-6">
              Programs &amp; Pricing
            </h2>
            <p className="font-sans text-espresso/60 text-base md:text-lg max-w-lg mx-auto">
              Something for every age, every level, every dream.
            </p>
          </div>

          <div className="flex gap-4 mb-16 overflow-hidden rounded">
            <div className="w-1/2 h-48 md:h-72 overflow-hidden rounded">
              <img
                src="/images/gen-program-show.jpg"
                alt="Show jumping at Gray Equine"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-1/2 h-48 md:h-72 overflow-hidden rounded">
              <img
                src="/images/gen-program-beginner.jpg"
                alt="Little girl riding a pony"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <div key={index} className="program-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="card-image aspect-[4/3]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="card-title font-display text-2xl md:text-[28px] text-espresso mb-2">
                    {program.title}
                  </h3>
                  <p className="font-sans text-sm text-espresso/60 mb-3 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-espresso/5">
                    <p className="font-sans text-sm font-medium text-sunset">
                      {program.price}
                    </p>
                    <button
                      onClick={() => handleBook(program.title)}
                      className="inline-flex items-center gap-1.5 bg-sunset text-white font-sans text-xs uppercase tracking-wider px-4 py-2 rounded-md hover:bg-sunset-dark transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-sans text-xs text-espresso/40 mt-12">
            Prices are indicative only and subject to confirmation at time of booking. Contact us for package deals and term discounts.
          </p>
        </div>
      </div>
    </div>
  );
}
