import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programOptions = [
  'Beginner Lessons',
  'Group Lessons',
  'Private Lessons',
  'Youth Programs',
  'Advanced Training',
  'Show Riding Training',
  'Horsemanship Training',
  'Horse Leasing',
  'School Holiday Camps',
];

const experienceLevels = [
  'No Experience',
  'Beginner',
  'Intermediate',
  'Advanced',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    experience: '',
    program: '',
    preferredDate: '',
    preferredTime: '',
    participants: '1',
    notes: '',
    hearAbout: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if a program was pre-selected from the Programs section
    const selected = sessionStorage.getItem('selectedProgram');
    if (selected && programOptions.includes(selected)) {
      setFormData((prev) => ({ ...prev, program: selected }));
      sessionStorage.removeItem('selectedProgram');
    }

    const ctx = gsap.context(() => {
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-off-black py-24 md:py-40"
    >
      <div className="w-full h-64 md:h-80 overflow-hidden mb-16">
        <img
          src="/images/gen-reviews-banner.jpg"
          alt="Riders celebrating in the golden fields of Western Australia"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-[5vw]">
        <div className="text-center mb-16">
          <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-sunset mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            Stay Connected
          </h2>
          <p className="font-sans text-white/50 text-base max-w-lg mx-auto">
            Join our community or send an enquiry — we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Facebook className="w-6 h-6 text-[#1877F2]" />
                <h3 className="font-display text-2xl text-white">Join Our Community</h3>
              </div>
              <p className="font-sans text-white/60 text-sm mb-6 leading-relaxed">
                We&apos;re always sharing something new — behind-the-scenes moments with our horses, 
                foal updates, camp photos, lesson highlights, and last-minute availability. 
                When you follow Gray Equine on Facebook, you never miss a thing.
              </p>
              <a
                href="https://www.facebook.com/61555500454937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-sans text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-[#166fe5] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Facebook className="w-4 h-4" />
                Follow on Facebook
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Phone className="w-5 h-5 text-sunset mb-3" />
                <div className="font-sans text-xs uppercase tracking-wider text-white/40 mb-1">Phone</div>
                <a href="tel:0897550199" className="font-sans text-white hover:text-sunset transition-colors duration-300">
                  (08) 9755 0199
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Mail className="w-5 h-5 text-sunset mb-3" />
                <div className="font-sans text-xs uppercase tracking-wider text-white/40 mb-1">Email</div>
                <a href="mailto:hello@grayequine.com.au" className="font-sans text-white hover:text-sunset transition-colors duration-300">
                  hello@grayequine.com.au
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <MapPin className="w-5 h-5 text-sunset mb-3" />
                <div className="font-sans text-xs uppercase tracking-wider text-white/40 mb-1">Location</div>
                <p className="font-sans text-white text-sm">
                  Metricup, WA 6280<br />
                  <span className="text-white/50">South West Western Australia</span>
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Clock className="w-5 h-5 text-sunset mb-3" />
                <div className="font-sans text-xs uppercase tracking-wider text-white/40 mb-1">Opening Hours</div>
                <p className="font-sans text-white text-sm">
                  Mon – Sun<br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href="tel:0897550199"
                className="flex items-center justify-center gap-2 bg-[#27AE60] text-white font-sans text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-[#219653] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call Gray Equine
              </a>
              <a
                href="https://www.google.com/maps/search/Gray+Equine+Metricup+WA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#4285F4] text-white font-sans text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-[#3367D6] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>

          <div id="booking-form" className="bg-white/5 border border-white/10 rounded-lg p-8 scroll-mt-28">
            <h3 className="font-display text-2xl text-white mb-2">Book Your Experience</h3>
              <p className="font-sans text-white/50 text-sm mb-8">
                Send us an enquiry and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-sunset/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sunset" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-white mb-2">Enquiry Sent!</h4>
                  <p className="font-sans text-white/60 text-sm">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Parent / Guardian Name *</label>
                      <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300 placeholder:text-white/30"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300 placeholder:text-white/30"
                        placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300 placeholder:text-white/30"
                        placeholder="04XX XXX XXX" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Child&apos;s Name</label>
                      <input type="text" name="childName" value={formData.childName} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300 placeholder:text-white/30"
                        placeholder="Optional" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Child&apos;s Age *</label>
                      <select name="childAge" required value={formData.childAge} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300">
                        <option value="" className="bg-off-black">Select age</option>
                        {[...Array(13)].map((_, i) => (
                          <option key={i} value={i + 4} className="bg-off-black">{i + 4} years</option>
                        ))}
                        <option value="16+" className="bg-off-black">16+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Riding Experience *</label>
                      <select name="experience" required value={formData.experience} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300">
                        <option value="" className="bg-off-black">Select level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level} className="bg-off-black">{level}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Preferred Program *</label>
                      <select name="program" required value={formData.program} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300">
                        <option value="" className="bg-off-black">Select program</option>
                        {programOptions.map((program) => (
                          <option key={program} value={program} className="bg-off-black">{program}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Preferred Date *</label>
                      <input type="date" name="preferredDate" required value={formData.preferredDate} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Preferred Time</label>
                      <select name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300">
                        <option value="" className="bg-off-black">Any time</option>
                        <option value="morning" className="bg-off-black">Morning (9AM–12PM)</option>
                        <option value="afternoon" className="bg-off-black">Afternoon (12PM–3PM)</option>
                        <option value="late" className="bg-off-black">Late Afternoon (3PM–6PM)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Participants *</label>
                      <input type="number" name="participants" min="1" max="10" required value={formData.participants} onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">Special Requests / Questions</label>
                    <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300 placeholder:text-white/30 resize-none"
                      placeholder="Any allergies, special needs, or questions..." />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-white/40 mb-2">How did you hear about us?</label>
                    <select name="hearAbout" value={formData.hearAbout} onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm py-2 focus:outline-none focus:border-sunset transition-colors duration-300">
                      <option value="" className="bg-off-black">Select option</option>
                      <option value="google" className="bg-off-black">Google</option>
                      <option value="facebook" className="bg-off-black">Facebook</option>
                      <option value="wordofmouth" className="bg-off-black">Word of Mouth</option>
                      <option value="local" className="bg-off-black">Local Signage</option>
                      <option value="other" className="bg-off-black">Other</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full bg-sunset text-white font-sans text-sm uppercase tracking-wider py-4 rounded-lg hover:bg-white hover:text-off-black transition-all duration-300 hover:-translate-y-0.5">
                    Send Booking Enquiry
                  </button>

                  <p className="font-sans text-xs text-white/40 text-center">
                    We&apos;ll confirm availability and pricing within 24 hours. No payment required today.
                  </p>
                </form>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}
