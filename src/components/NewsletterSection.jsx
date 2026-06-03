export default function NewsletterSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-[120px]"
      id="newsletter"
      style={{ backgroundColor: '#D4E8DB' }}
    >
      {/* Decorative purple circle – top right */}
      <div
        className="absolute -top-16 -right-16 w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(109, 40, 217, 0.2)',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />

      {/* Decorative coral shape – bottom left */}
      <div
        className="absolute -bottom-10 -left-10 w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full rotate-[30deg] pointer-events-none"
        style={{
          backgroundColor: 'rgba(200, 90, 84, 0.6)',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-elegant font-serif text-charcoal mb-5">
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p className="text-gray-600 text-[16px] mb-10 leading-relaxed">
            Stay updated with our latest insights, stories and digital trends
          </p>

          {/* Email form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-[0.7] h-12 px-5 rounded-lg bg-white text-[15px] text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple transition-shadow duration-200"
              style={{ border: '2px solid #C7D2CB' }}
              id="newsletter-email"
            />
            <button
              className="flex-[0.3] h-12 bg-charcoal text-white text-[16px] font-bold rounded-lg hover:bg-purple transition-colors duration-200 whitespace-nowrap px-6"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              id="subscribe-btn"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
