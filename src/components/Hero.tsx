
const Hero = () => {
  return (
    <section className="relative py-36 px-12 md:py-48 md:px-56 bg-white">
      <img src="svg/hero-tl.svg" className="absolute -top-28 -left-12 md:-top-12 lg:top-0 lg:left-0" alt="hero-tl" />
      <img src="svg/hero-br.svg" className="absolute -bottom-28 -right-12 md:-bottom-52 lg:bottom-0 lg:right-0" alt="hero-br" />

      <div className="flex flex-col gap-40 text-black">
        <p className="self-end text-xl max-w-full md:max-w-[580px] text-center font-medium">
          Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="text-2xl max-w-full md:max-w-[580px] text-center italic">
          "Excepteur sint occaecat cupidatat non proident"
        </p>
      </div>

      <img src="svg/metrics.svg" className="mx-auto lg:ml-16 mt-10 w-52 h-52" />
    </section>
  );
};

export default Hero;