"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const HeroButton = ({ delay }: { delay?: number }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: delay,
    });
  }, [delay]);

  return (
    <Link
      href={"/"}
      ref={ref}
      className={`hidden sm:flex relative overflow-hidden px-4 py-3 bg-white w-full max-w-[300px] items-center rounded-full justify-between group opacity-0`}>
      <div className='text-base ml-4 font-medium'>
        <div className='absolute z-[2] top-[50%] translate-y-[-50%]'>
          {"Our solutions"}
        </div>
      </div>
      <div
        className={`h-12 w-12 relative aspect-square bg-yellow-300 rounded-full `}>
        <ChevronRight className='h-4 z-[2] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
      </div>
      <div
        className={`absolute rounded-full right-[16px]  w-[48px] h-[48px] bg-yellow-300 z-[1] transition-all duration-700 ease-[cubic-bezier(1,.02,.61,.92)] group-hover:w-full group-hover:right-[0px] group-hover:h-full`}
      />
    </Link>
  );
};

export default HeroButton;
