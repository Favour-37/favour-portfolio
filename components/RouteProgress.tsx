"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setVisible(true);
    setProgress(20);
    const t1 = setTimeout(() => setProgress(70), 100);
    const t2 = setTimeout(() => setProgress(100), 300);
    const t3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100]">
      <div
        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all ease-out"
        style={{ width: `${progress}%`, transitionDuration: progress === 100 ? "150ms" : "300ms" }}
      />
    </div>
  );
}