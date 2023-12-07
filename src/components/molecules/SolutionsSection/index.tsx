import { ArrowRight } from "lucide-react";
import Image from "next/image";

const items = [
  {
    name: "Home",
  },
  {
    name: "Residental",
  },
  {
    name: "Workplace",
  },
  {
    name: "Commercial",
  },
];

const SolutionsSection = () => {
  return (
    <section className='pt-24 px-12 pb-40 flex flex-col gap-16 '>
      <div className='flex flex-col gap-12 sm:flex-row justify-between'>
        <div className='max-w-[550px] text-4xl'>
          {
            "Future-proof your home or business with our tailored and affordable smart EV charge point solutions."
          }
        </div>
        <div>
          <Image
            src={"/home.webp"}
            alt={"test"}
            width={230}
            height={160}
            className='rounded-xl w-full sm:w-[230px]'
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-sm'>{"Charging solutions for"}</div>
        <div className='flex flex-col text-xl sm:text-6xl'>
          {items.map((item, index) => (
            <div
              className={`grid grid-cols-[1fr_max-content] sm:grid-cols-[20%_1fr_max-content] items-center overflow-hidden ${
                index === 0 && `border-t border-t-black`
              } border-b border-b-black border-opacity-10 py-8 px-8 sm:px-0 relative before:content-[""] before:absolute before:left-0 before:right-0 before:top-0 before:bottom:0 before:bg-[#eeff3b] before:h-full  before:transition-all before:z-[-1] before:translate-y-[100%] hover:before:translate-y-[0%] before:ease-in-out before:duration-300 group`}
              key={index}>
                <div className='hidden sm:block group-hover:translate-x-7 transition-all duration-300'>{`0${index + 1}`}</div>
                <div>{item.name}</div>
                <div>
                  <ArrowRight />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
