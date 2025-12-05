import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollower = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    const interval = setInterval(updateFollower, 10);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [position]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "30px" : "20px",
          height: isHovering ? "30px" : "20px",
          opacity: isHovering ? 0.8 : 1,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
        }}
      />
    </>
  );
};
