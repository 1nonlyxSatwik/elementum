export default function ProfileCircle({ src, size = 'md', className = '', delay = 0 }) {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-[120px] h-[120px]',
  };

  return (
    <img
      src={src}
      alt="Team member"
      className={`rounded-full border-[6px] border-white object-cover animate-fade-in-up ${sizeClasses[size] || sizeClasses.md} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))',
      }}
    />
  );
}
