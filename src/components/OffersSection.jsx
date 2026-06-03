export default function OffersSection() {
  const offers = [
    {
      id: 1,
      subtitle: 'Different yet stylish. Internet content.',
      title: 'Collaborative & partnership',
      description: 'Building lasting relationships through strategic collaboration and shared vision for growth.',
    },
    {
      id: 2,
      subtitle: 'The longest ROI for term digital opportunities.',
      title: 'We talk about our weight',
      description: 'Data-driven insights that deliver measurable results and sustainable business impact.',
    },
    {
      id: 3,
      subtitle: 'Safe buyer content, social, digital.',
      title: 'Piloting digital confidence',
      description: 'Navigating the digital landscape with expertise, ensuring your brand stands out.',
    },
  ];

  return (
    <section className="py-16 md:py-[120px] bg-white" id="offers">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Headline */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-elegant font-serif text-charcoal">
            What we can
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">offer you!</span>
              <span
                className="absolute left-[-12px] bottom-[2px] md:bottom-[4px] h-[40%] rounded"
                style={{
                  right: '-12px',
                  background: 'linear-gradient(120deg, #FCD34D 0%, #FBBF24 100%)',
                  zIndex: 0,
                }}
              />
            </span>
          </h2>
        </div>

        {/* Subtle dividing line */}
        <div className="w-10 h-[2px] bg-gray-200 mb-10" />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="card-lift group border border-gray-200 rounded-lg p-8 bg-white hover:bg-off-white cursor-pointer"
              id={`offer-card-${offer.id}`}
            >
              <p className="text-[12px] text-gray-400 mb-3 tracking-wide uppercase">
                {offer.subtitle}
              </p>
              <h3 className="text-[18px] font-bold text-charcoal font-sans mb-3">
                {offer.title}
              </h3>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                {offer.description}
              </p>
              <div className="flex justify-end">
                <span className="text-[20px] text-purple transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
