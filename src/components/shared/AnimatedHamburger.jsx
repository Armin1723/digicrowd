
const AnimatedHamburger = () => {
  return (
      <button
      name="Hamburger"
        className="relative h-16 w-16 rounded-full flex flex-col items-end justify-center gap-2 bg-white/0 transition-colors hover:bg-white/20"
      >
        <span
          className=" h-[0.15rem] w-10 bg-black"
        />
        <span
          className=" h-[0.15rem] w-5 bg-black"
        />
      </button>
  );
};

export default AnimatedHamburger;