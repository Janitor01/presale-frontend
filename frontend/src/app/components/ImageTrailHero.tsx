import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDownCircle, FiDollarSign } from "react-icons/fi";
import Image from "next/image";
import MagnetButton from './magnetbutton'; 

import IOULOGO from 'public/images/IOULOGO.png'



export const ImageTrailHero = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/images/0.png",
        "/images/1.png",
        "/images/100 (1).png",
        "/images/2.png",
        "/images/100 (2).png",
        "/images/3.png",
        "/images/100 (3).png",
        "/images/4.png",
        "/images/5.png",
        "/images/100 (4).png",
        "/images/100 (5).png",
        "/images/6.png",
        "/images/100 (6).png",
        "/images/7.png",
        "/images/100 (7).png",
        "/images/8.png",
        "/images/9.png",
        "/images/100 (8).png",
        "/images/100 (9).png",
        "/images/10.png",
        "/images/11.png",
        "/images/100 (10).png",
        "/images/100 (11).png",
        "/images/12.png",
        "/images/13.png",
        "/images/100 (12).png",
        "/images/100 (13).png",
        "/images/14.png",
        "/images/15.png",
        "/images/100 (14).png",
        "/images/100 (15).png",
        "/images/16.png",
        "/images/100 (16).png",
        "/images/17.png",
        "/images/100 (17).png",
        "/images/18.png",
        "/images/100 (18).png",
        "/images/19.png",
        "/images/100 (19).png",
        "/images/20.png",
        "/images/100 (20).png",
        "/images/21.png",
        "/images/100 (21).png",
        "/images/22.png",
        "/images/100 (22).png",
        "/images/23.png",
        "/images/100 (23).png",
        "/images/24.png",
        "/images/25.png",
        "/images/100 (24).png",
        "/images/100 (25).png",
      ]}
    >
      <section className="h-screen bg-slate-200">
      
        <Copy />
        
        <WatermarkWrapper />
        
      </section>
    </MouseImageTrail>
  );
};



const Copy = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0  z-[1]">
      <div className="mx-auto flex items-end justify-between p-4 sm:max-w-xl md:max-w-7xl md:p-8">
      <h1 className=" max-w-4xl text-6l font-black leading-[1.1] text-slate-900  md:text-8xl">
        BUY NOW
        </h1>
        <MagnetButton />
        </div>
      </div>
    <div className="absolute bottom-0 left-0 right-0  z-[1]">
      <div className="mx-auto flex items-end justify-between p-4 sm:max-w-xl md:max-w-7xl md:p-8">

        <div>
          <h1 className=" max-w-4xl text-6xl font-black leading-[1.1] text-slate-900  md:text-8xl">
            Office Party delivers <span className="text-indigo-500">$IOU</span>
          </h1>
          <p className="max-w-xl text-slate-700 md:text-lg">
          $IOU, short for I Owe You, is an engaging meme token presented by Office Party, exclusively designed for the Aleph Zero ecosystem. In line with the ethos of Office Party, $IOU boasts a commitment to 100% community engagement, humorously coupled with a promise of 100% zero utility.
          </p>
          <p  className='text-slate-600 text-xs'>Contract Address:<br/>
          5GCubYQbm9x6TQbthbWpUVrgEibXMDXhgisw8DFYCpPJQ5f7</p>
          
        </div>
        
        <FiArrowDownCircle className="hidden text-8xl text-slate-500 md:block" />
      </div>
    </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile devices
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resizing
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: isMobile ? '25%' : '50%', // Adjust top position for mobile
        left: '50%', 
        transform: `translate(-50%, ${isMobile ? '-50%' : '-75%'})`, // Adjust transform for mobile
        zIndex: 0 
      }}>
        <Image src={IOULOGO} width={500} height={500} objectFit="cover" alt="logo" />
      </div>
      

      <div style={{ position: 'relative'}}>
        <Watermark text="$IOU is love" />
        <Watermark text="$IOU is life" reverse />
        <Watermark text="It's worthless" />
        <Watermark text="Until it's not" reverse />
        <Watermark text="It's just a meme bro" />
        <Watermark text="no utility" reverse />
        <Watermark text="100% Community" />
        <Watermark text="no value, except what you give it" reverse />
      </div>
    </div>
  );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);
  console.log('Loaded images:', images);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 7, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};