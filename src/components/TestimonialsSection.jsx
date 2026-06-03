import ProfileCircle from './ProfileCircle';

export default function TestimonialsSection() {
  const profiles = [
    { src: 'https://picsum.photos/200/200?random=20', position: '-top-10 -left-6 md:-top-12 md:-left-10' },
    { src: 'https://picsum.photos/200/200?random=21', position: '-top-10 -right-6 md:-top-12 md:-right-10' },
    { src: 'https://picsum.photos/200/200?random=22', position: '-bottom-10 -left-4 md:-bottom-12 md:-left-6' },
    { src: 'https://picsum.photos/200/200?random=23', position: '-bottom-10 -right-4 md:-bottom-12 md:-right-6' },
    { src: 'https://picsum.photos/200/200?random=24', position: '-bottom-14 left-1/2 -translate-x-1/2' },
  ];

  return (
    <section className="py-16 md:py-[120px] bg-off-white" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-elegant font-serif text-charcoal max-w-[600px] mx-auto">
            What our customer
            <br />
            says About Us
          </h2>
        </div>

        {/* Testimonial Box with surrounding profile images */}
        <div className="relative max-w-3xl mx-auto">
          {/* Profile circles positioned around the quote */}
          <div className="hidden md:block">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className={`absolute ${profile.position} z-10`}
              >
                <ProfileCircle
                  src={profile.src}
                  size="lg"
                  delay={index * 150}
                />
              </div>
            ))}
          </div>

          {/* Quote Box */}
          <div className="bg-white border-2 border-gray-200 rounded-xl px-8 py-12 md:px-16 md:py-[60px] mx-auto md:mx-16 relative z-0">
            {/* Opening decorative quote mark */}
            <div
              className="font-serif text-[64px] leading-none mb-4 select-none"
              style={{ color: 'rgba(109, 40, 217, 0.3)' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <p className="text-gray-500 text-[18px] leading-[1.8] italic font-medium font-serif max-w-lg">
              Elementum delivers the ultra with time media.
              The customer&rsquo;s all-seek, in the direct boost a 63%
              increase in traffic with a clear area is focus. They
              help at re-processes stability I can feel to explore that
              this can grow brand reach, which have also planned is
              the way sure and reliable.
            </p>

            {/* Customer info */}
            <div className="mt-6">
              <p className="text-[14px] font-bold text-charcoal font-sans">
                Sarah Mitchell
              </p>
              <p className="text-[13px] text-gray-400 font-sans">
                Marketing Director, TechFlow
              </p>
            </div>

            {/* Closing decorative quote mark */}
            <div
              className="font-serif text-[64px] leading-none text-right mt-2 select-none"
              style={{ color: 'rgba(109, 40, 217, 0.3)' }}
              aria-hidden="true"
            >
              &rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
