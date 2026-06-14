import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: 'top 80%',
          onEnter: () => titleRef.current?.classList.add('active'),
          onLeaveBack: () => titleRef.current?.classList.remove('active'),
        });
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
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
      id="story"
      ref={sectionRef}
      className="bg-sand py-24 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-sunset mb-4">
              Our Story
            </span>

            <h2
              ref={titleRef}
              className="line-draw-text font-display text-4xl md:text-6xl lg:text-7xl text-espresso mb-8"
            >
              Meet Friday
            </h2>

            <div ref={textRef} className="space-y-5 font-sans text-espresso/70 leading-[1.8]">
              <p>
                Friday is the heart and soul of Gray Equine. With years of experience in horse training 
                and teaching, she has built a reputation as one of the most patient and knowledgeable 
                riding coaches in Western Australia&apos;s South West region.
              </p>
              <p>
                Whether you&apos;re a complete beginner taking your first steps into the saddle, a seasoned 
                rider looking to refine your skills, or a parent wanting to introduce your child to the 
                magical world of horses — Friday&apos;s warm, personalised approach ensures every rider feels 
                safe, supported, and inspired.
              </p>
              <p>
                Our beautiful Metricup property is home to quiet, friendly horses, adorable foals, gentle 
                ponies, and even our lovable donkeys. It&apos;s more than a riding school — it&apos;s a community 
                where families come together and lasting memories are made.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="font-display text-3xl text-sunset">4+</div>
                <div className="font-sans text-xs uppercase tracking-wider text-espresso/50">Years Old</div>
              </div>
              <div className="w-px h-12 bg-espresso/10" />
              <div className="text-center">
                <div className="font-display text-3xl text-sunset">9</div>
                <div className="font-sans text-xs uppercase tracking-wider text-espresso/50">Programs</div>
              </div>
              <div className="w-px h-12 bg-espresso/10" />
              <div className="text-center">
                <div className="font-display text-3xl text-sunset">5.0</div>
                <div className="font-sans text-xs uppercase tracking-wider text-espresso/50">Google Rating</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded overflow-hidden shadow-lg">
                <img
                  src="/images/gen-coach-friday.jpg"
                  alt="Coach Friday with a horse at Gray Equine"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sunset/30 rounded -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sunset/10 rounded -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
