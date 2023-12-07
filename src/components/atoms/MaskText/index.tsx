"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { PropsWithClassName } from "~/types/general";
import gsap from "gsap";

type MaskTextProps = {
  delay?: number;
};

const MaskText = ({
  children,
  className,
  delay = 0,
}: PropsWithChildren & PropsWithClassName & MaskTextProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const textRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.to(textRef.current, {
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: delay,
      });
    }
  }, [inView, delay]);

  return (
    <div className={`overflow-hidden ${className}`} ref={ref}>
      <div ref={textRef} style={{ transform: "translateY(100%)" }}>
        {children}
      </div>
    </div>
  );
};

export default MaskText;
