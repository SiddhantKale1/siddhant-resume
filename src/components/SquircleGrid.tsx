interface SquircleGridProps {
  glowPosition?: "right" | "center" | "left" | "sunlight" | "none";
  className?: string;
}

export const SquircleGrid = ({ glowPosition = "right", className = "" }: SquircleGridProps) => {
  const getGlowStyles = () => {
    switch (glowPosition) {
      case "sunlight":
        return "radial-gradient(circle at 72% 32%, rgba(245, 158, 11, 0.45) 0%, rgba(217, 119, 6, 0.28) 28%, rgba(190, 24, 24, 0.18) 50%, rgba(8, 8, 10, 0) 78%)";
      case "right":
        return "radial-gradient(circle at 70% 36%, rgba(190, 24, 24, 0.48) 0%, rgba(153, 27, 27, 0.30) 32%, rgba(120, 18, 18, 0.14) 58%, rgba(8, 8, 10, 0) 80%)";
      case "center":
        return "radial-gradient(circle at 50% 30%, rgba(190, 24, 24, 0.35) 0%, rgba(153, 27, 27, 0.18) 40%, rgba(8, 8, 10, 0) 75%)";
      case "left":
        return "radial-gradient(circle at 25% 40%, rgba(190, 24, 24, 0.40) 0%, rgba(153, 27, 27, 0.20) 35%, rgba(8, 8, 10, 0) 75%)";
      case "none":
      default:
        return "none";
    }
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        background: getGlowStyles(),
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="squircle-pattern"
            width="84"
            height="84"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="4"
              y="4"
              width="76"
              height="76"
              rx="18"
              fill="none"
              stroke="rgba(255, 255, 255, 0.055)"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#squircle-pattern)" />
      </svg>
    </div>
  );
};
