export default function TomorrowSection() {
  return (
    <section className="py-16 md:py-[120px] bg-off-white" id="tomorrow">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-10">
          {/* Text Content – 45% */}
          <div className="w-full md:w-[45%] order-2 md:order-1">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-elegant font-serif text-charcoal mb-6">
              Tomorrow should
              <br />
              be better than today
            </h2>
            <p className="text-gray-500 text-[16px] leading-[1.7] mb-8 max-w-md">
              We are a team of strategists, designers and developers who create top
              notch products. Together, we explore for progress only happiness when
              you. When to play, things to do.
            </p>
            <a
              href="#"
              className="link-underline text-[16px] font-serif font-medium text-charcoal"
            >
              Read more
            </a>
          </div>

          {/* Image with decorative shape – 50% */}
          <div className="w-full md:w-[50%] order-1 md:order-2 relative flex justify-center">
            {/* Decorative coral shape */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 w-28 h-28 md:w-36 md:h-36 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] rotate-12 pointer-events-none"
              style={{
                backgroundColor: 'rgba(200, 90, 84, 0.6)',
                mixBlendMode: 'multiply',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-full w-64 h-64 md:w-[420px] md:h-[420px]">
                <img
                  src="https://picsum.photos/500/500?random=10"
                  alt="Tomorrow should be better"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay on image */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.08) 100%)',
                  }}
                />
              </div>
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-gray-200 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
