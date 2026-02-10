export const BiddioLogo = ({ 
  className = "w-12 h-12", 
  showText = false, 
  textClass = "text-2xl" 
}: { 
  className?: string; 
  showText?: boolean; 
  textClass?: string 
}) => (
  <div className="inline-flex items-center gap-3">
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100"
      aria-label="Biddio Logo"
    >
      <title>Biddio Logo</title>
      {/* Background */}
      <rect width="100" height="100" fill="#0a0a0a"/>
      
      {/* Letter B outline */}
      <path 
        d="M 20 15 L 20 85 L 55 85 C 70 85 80 75 80 62.5 C 80 55 75 48 68 45 C 73 42 76 36 76 30 C 76 18 68 15 55 15 Z M 32 25 L 52 25 C 58 25 64 27 64 33 C 64 39 58 41 52 41 L 32 41 Z M 32 51 L 54 51 C 61 51 68 53 68 60 C 68 67 61 75 54 75 L 32 75 Z" 
        fill="#f5a623" 
        stroke="#f5a623" 
        strokeWidth="2"
      />
      
      {/* Play button in the center of B */}
      <g aria-hidden="true">
        <circle cx="50" cy="50" r="16" fill="#0a0a0a" opacity="0.9"/>
        <polygon 
          points="46,42 46,58 60,50" 
          fill="#f5a623"
        />
      </g>
    </svg>
    {showText && (
      <span className={`font-bold ${textClass}`} style={{ color: '#f5a623' }}>
        BIDDIO
      </span>
    )}
  </div>
);

export default BiddioLogo;
