"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor({isDarkMode}) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const isVisible = useRef(true);
  const isHovering = useRef(false);

  // simple linear interpolation
  const lerp = (a, b, n) => (1 - n) * a + n * b;

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // update mouse coords
    const mouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      isVisible.current = true;
      dot.style.opacity = 1;
      ring.style.opacity = 1;
    };

    const mouseLeave = () => {
      isVisible.current = false;
      dot.style.opacity = 0;
      ring.style.opacity = 0;
    };

    const handleDown = () => {
      dot.classList.add("cursor--active");
      ring.classList.add("cursor--active");
    };
    const handleUp = () => {
      dot.classList.remove("cursor--active");
      ring.classList.remove("cursor--active");
    };

    // Elements that should trigger hover state
    const hoverables = "a, button, input, textarea, select, label, [role='button'], .cursor-pointer";

    const addHoverEvents = () => {
      document.querySelectorAll(hoverables).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          isHovering.current = true;
          dot.classList.add("cursor--hover");
          ring.classList.add("cursor--hover");
        });
        el.addEventListener("mouseleave", () => {
          isHovering.current = false;
          dot.classList.remove("cursor--hover");
          ring.classList.remove("cursor--hover");
        });
      });
    };

    // animation loop
    const render = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.18);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.18);

      // dot (fast, centered)
      dot.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;

      // ring (smooth trailing)
      ring.style.transform = `translate3d(${pos.current.x - 18}px, ${pos.current.y - 18}px, 0)`;

      requestRef.current = requestAnimationFrame(render);
    };

    addHoverEvents();
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    requestRef.current = requestAnimationFrame(render);

    // Re-run hover listeners when DOM changes (optional)
    const observer = new MutationObserver(() => addHoverEvents());
    observer.observe(document.body, { childList: true, subtree: true });

    // disable on touch devices
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      dot.style.display = "none";
      ring.style.display = "none";
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Small center dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring border-black"
        aria-hidden="true"
      />
    </>
  );
}
