import React, { useEffect, useRef, useState, FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import partyhat from 'public/images/partyhat.png'
import Image from 'next/image';

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 5;
const STAGGER = 0.025;

interface AnimatedTextProps {
  phrases: string[];
}

const AnimatedText: FC<AnimatedTextProps> = ({ phrases }) => {
  const countRef = useRef<number>(0);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases.length]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4">
      <AnimatePresence mode="popLayout">
        {phrases[active].split(" ").map((word, wordIndex) => {
          if (wordIndex === 0) {
            countRef.current = 0;
          }

          return (
            <motion.div key={word} className="whitespace-nowrap text-violet-50">
              {word.split("").map((letter, letterIndex) => {
                const delay = (countRef.current++) * STAGGER;

                return (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      delay: delay,
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                    }}
                    className="inline-block"
                    style={{
                      textShadow: '2px 2px 8px rgba(0,0,0,1)'
                    }}
                    key={letterIndex}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export const VanishText: FC = () => {
  return (
    <div className="bg-violet-700 w-full px-4 py-24 text-center md:py-36 relative overflow-hidden">
      <div className="image-container">
        <Image src={partyhat} alt="Party Hat" width={500} height={500} objectFit="contain" />
      </div>
      <h3 className="relative z-10 text-3xl font-medium text-violet-400 sm:text-4xl md:text-5xl lg:text-6xl">

        I Owe You is...
        
        <AnimatedText
          phrases={[
            "100% No Utility",
            "All In For Community",
            "Determined By Perception",
            "Just For Fun",
            "Purely a MEME",
            "You",
            "Nothing",
            "Everything",
            "Worthless",
            "Priceless",
          ]}
        />
      </h3>
    </div>
  );
};
