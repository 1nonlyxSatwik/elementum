export default function HelpSection() {
  return (
    <section className="py-16 md:py-[120px]" style={{ backgroundColor: '#FFFBF0' }} id="help">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-10">
          {/* Image with smiley overlay – left side */}
          <div className="w-full md:w-[50%] relative flex justify-center">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-full w-64 h-64 md:w-[420px] md:h-[420px]">
                <img
                  src="https://picsum.photos/500/500?random=11"
                  alt="Help you progress"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay */}
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
              {/* Smiley emoji overlay */}
              <div
                className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 w-16 h-16 md:w-20 md:h-20 bg-amber-300 rounded-full flex items-center justify-center text-3xl md:text-4xl z-20"
                style={{
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}
              >
                😊
              </div>
            </div>
          </div>

          {/* Text Content – right side */}
          <div className="w-full md:w-[45%] md:pl-8">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-elegant font-serif text-charcoal mb-6">
              See how we can
              <br />
              help you progress
            </h2>
            <p className="text-gray-500 text-[16px] leading-[1.7] mb-8 max-w-md">
              We add a layer of positive insights and action that allows change
              stories to transform their target audience to also read in detail about
              digital events and local experts.
            </p>
            <a
              href="#"
              className="link-underline text-[16px] font-serif font-medium text-charcoal"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
