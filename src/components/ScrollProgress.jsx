import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        (scrollTop / documentHeight) * 100;

      setProgress(percentage);
    }

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-1 bg-[#d8ff3e]"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}

export default ScrollProgress;