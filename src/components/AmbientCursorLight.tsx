import React, { useEffect, useRef } from "react";

/**
 * AmbientCursorLight
 * Renders a subtle dark-green ambient spotlight following the cursor.
 * Operates at z-0 in the background canvas, smoothly trailing the pointer via lerp interpolation.
 * Since cards have opaque dark backgrounds (z-10), the light is visible only on the page canvas (bg),
 * and never washes out or shows through the cards.
 */
const AmbientCursorLight: React.FC = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -1000, y: -1000 });
  const targetRef = useRef({ x: -1000, y: -1000 });
  const isVisibleRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run on devices with a pointer/mouse
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const updatePosition = () => {
      // Lerp for smooth trailing motion
      const ease = 0.085;
      const dx = targetRef.current.x - posRef.current.x;
      const dy = targetRef.current.y - posRef.current.y;

      posRef.current.x += dx * ease;
      posRef.current.y += dy * ease;

      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Keep animating if still moving
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafRef.current = requestAnimationFrame(updatePosition);
      } else {
        rafRef.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        posRef.current = { x: e.clientX, y: e.clientY };
        if (lightRef.current) {
          lightRef.current.style.opacity = "1";
        }
      }

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (lightRef.current) {
        lightRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      posRef.current = { x: e.clientX, y: e.clientY };
      isVisibleRef.current = true;
      if (lightRef.current) {
        lightRef.current.style.opacity = "1";
      }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={lightRef}
        className="absolute top-0 left-0 w-[650px] h-[650px] rounded-full pointer-events-none transition-opacity duration-700 ease-out will-change-transform"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(46, 82, 53, 0.22) 0%, rgba(27, 59, 43, 0.12) 35%, rgba(10, 22, 14, 0.04) 65%, transparent 75%)",
        }}
      />
    </div>
  );
};

export default AmbientCursorLight;
