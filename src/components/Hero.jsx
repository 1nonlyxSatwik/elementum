import ProfileCircle from './ProfileCircle';

export default function Hero() {
  const profiles = [
    { src: 'https://picsum.photos/200/200?random=1', size: 'lg' },
    { src: 'https://picsum.photos/200/200?random=2', size: 'xl' },
    { src: 'https://picsum.photos/200/200?random=3', size: 'md' },
    { src: 'https://picsum.photos/200/200?random=4', size: 'lg' },
    { src: 'https://picsum.photos/200/200?random=5', size: 'xl' },
    { src: 'https://picsum.photos/200/200?random=6', size: 'md' },
  ];

  return (
    <section
      className="relative overflow-visible pt-16 pb-20 md:pt-[60px] md:pb-[80px]"
      id="hero"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
      }}
    >
      {/* Decorative purple circle – top right, 25% opacity, blend mode */}
      <div
        className="absolute -top-20 -right-20 w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(109, 40, 217, 0.25)',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Headline */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-[1.1] tracking-elegant font-serif text-charcoal">
            The thinkers and
            <br />
            doers were{' '}
            <span className="text-purple" style={{ opacity: 0.85 }}>
              changing
            </span>
            <br />
            the{' '}
            <span className="text-green-700" style={{ opacity: 0.85 }}>
              status
            </span>{' '}
            quo.
          </h1>
          <p className="mt-8 text-gray-500 text-[16px] max-w-[600px] mx-auto leading-relaxed" style={{ letterSpacing: '0.5px' }}>
            We are a team of strategists, designers and developers who create top
            notch products. Together, we explore for progress and happiness with you.
          </p>
        </div>

        {/* Decorative wavy SVG line */}
        <svg
          className="w-full max-w-xl mx-auto h-6 mb-10"
          viewBox="0 0 500 30"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 15 C 80 5, 150 25, 250 15 C 350 5, 420 25, 500 15"
            stroke="#6D28D9"
            fill="transparent"
            strokeWidth="2"
            opacity="0.6"
            strokeLinecap="round"
          />
        </svg>

        {/* Profile Images Grid */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 max-w-2xl mx-auto">
          {profiles.map((profile, index) => (
            <ProfileCircle
              key={index}
              src={profile.src}
              size={profile.size}
              delay={index * 120}
              className={index % 2 === 0 ? 'mt-4' : '-mt-2'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
