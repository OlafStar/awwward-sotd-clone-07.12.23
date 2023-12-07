import HeroButton from "~/components/atoms/HeroButton";
import MaskText from "~/components/atoms/MaskText";

const Hero = () => {
  return (
    <section className='w-full h-[100vh] px-8  pt-[85px] pb-[55px] relative flex flex-col justify-between'>
      <div className='absolute left-0 top-0 right-0 bottom-0 '>
        <video
          src={"https://www.datocms-assets.com/105899/1695210411-ep-1.mp4"}
          className='w-full h-full object-cover'
          autoPlay
          playsInline
          muted
          loop
        />
      </div>
      <div className='relative flex flex-col justify-between gap-8 z-2'>
        <div className='w-full'>
          <MaskText className='text-4xl sm:text-7xl lg:text-9xl lg:tracking-[-0.2rem] text-white'>
            {"Get set for an"}
          </MaskText>
          <MaskText
            className='text-4xl sm:text-7xl lg:text-9xl lg:tracking-[-0.2rem] text-white'
            delay={0.1}>
            {"electric future."}
          </MaskText>
        </div>
        <HeroButton delay={0.2} />
      </div>
      <div className='flex justify-between flex-col sm:flex-row gap-8'>
        <div className='flex flex-col'>
          <MaskText className='text-xl sm:text-3xl text-white'>
            {"Experts in smart"}
          </MaskText>
          <MaskText className='text-xl sm:text-3xl text-white' delay={0.2}>
            {"EV charging solutions"}
          </MaskText>
        </div>
        <div className='sm:self-end'>
          <MaskText className='text-xl text-white'>{"Explore"}</MaskText>
        </div>
      </div>
    </section>
  );
};

export default Hero;
