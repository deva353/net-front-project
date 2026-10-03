import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    function handleMouseEnter() {
      setActive(true);
    }

    function handleMouseLeave() {
      setActive(false);
    }

    window.addEventListener("mousemove", handleMouseMove);

    const elements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    elements.forEach((element) => {
      element.addEventListener(
        "mouseenter",
        handleMouseEnter
      );

      element.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      elements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      });
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[90] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 lg:block ${
        active
          ? "scale-150 border-[#d8ff3e] bg-[#d8ff3e]/20"
          : "border-white/70"
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}

export default CustomCursor;