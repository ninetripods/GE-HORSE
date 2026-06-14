import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gen-gallery-1.jpg', alt: 'Mare and foal at golden hour' },
  { src: '/images/gen-gallery-2.jpg', alt: 'Young girl riding a donkey' },
  { src: '/images/gen-gallery-3.jpg', alt: 'Little girl smiling on a pony with coach' },
  { src: '/images/gen-gallery-4.jpg', alt: 'Show jumping at Gray Equine' },
  { src: '/images/gen-gallery-5.jpg', alt: 'Coach helping a child mount a pony' },
  { src: '/images/gen-gallery-6.jpg', alt: 'Two white horses grazing at sunset' },
  { src: '/images/gen-gallery-7.jpg', alt: 'Child brushing a pony in the stable' },
  { src: '/images/gen-gallery-8.jpg', alt: 'Two riders cantering across the paddock' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.gallery-item');
        gsap.fromTo(
          items,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-sand py-24 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-[5vw]">
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-sunset mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-espresso mb-4">
            Life at Gray Equine
          </h2>
          <p className="font-sans text-espresso/60 text-base max-w-lg mx-auto">
            Every photo tells a story — of confidence found, friendships made, and the quiet magic between a child and a horse.
          </p>
        </div>

        <div
          ref={gridRef}
          className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="gallery-item break-inside-avoid rounded overflow-hidden group cursor-pointer"
            >
              <div className={`relative overflow-hidden ${index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
