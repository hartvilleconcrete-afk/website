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
      <rect width="100" height="100" fill="#0a0a0a"/>
      <text 
        x="50" 
        y="75" 
        fontFamily="Arial, sans-serif" 
        fontSize="70" 
        fontWeight="bold" 
        fill="#f5a623" 
        textAnchor="middle"
      >
        B
      </text>
    </svg>
    {showText && (
      <span className={`font-bold ${textClass}`} style={{ color: '#f5a623' }}>
        BIDDIO
      </span>
    )}
  </div>
);

export default BiddioLogo;
