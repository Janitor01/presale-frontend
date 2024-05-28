import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const MagnetButton = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    window.open('https://app.common.fi', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transform }}
      className="group relative grid h-[220px] w-[220px] place-content-center rounded-full border-2 border-black transition-colors duration-700 ease-out"
    >
      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-100" />
      <span className="pointer-events-none relative z-10 text-5xl text-black font-bold">
        BUY NOW
      </span>
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="pointer-events-none absolute z-10"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        width="200" height="200"
      >
        <path
          id="circlePath"
          d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            fill="black"
            className="fill-black text-lg font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          >
            BUY NOW YOU PUSSY... WHAT YOU WAITING FOR?! YOU DEGEN ENOUGH?!
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  );
};

export default MagnetButton;
