import React, { FC } from 'react';
import MagnetButton from './magnetbutton'; // Ensure the path is correct
import { FiLogIn } from "react-icons/fi"; // Import icon used in the button
import Image from 'next/image'
import liquidity from 'public/images/liqudity.png'

const contractAddress = "5GCubYQbm9x6TQbthbWpUVrgEibXMDXhgisw8DFYCpPJQ5f7";

const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(contractAddress)
    .then(() => alert('Contract address copied to clipboard!'))
    .catch(err => console.error('Failed to copy text: ', err));
};

const RoundedSlideButton1 = () => {
  const url = "https://github.com/InkWhale-net/contracts/blob/feature/upgrade-op-4/op4_contracts/contracts/psp22_standard/lib.rs"; // Place your URL here
  return (
    <button
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-violet-300 px-4 py-2 font-semibold
        uppercase text-violet-300 transition-all duration-500
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-300
        before:transition-transform before:duration-1000
        before:content-[""]
        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiLogIn />
      <span>Source Code</span>
    </button>
  );
};

const RoundedSlideButton2 = () => {
  const url = "https://github.com/InkWhale-net/contracts/blob/feature/upgrade-op-4/op4_contracts/contracts/psp22_standard/psp22_standard.json"; // Place your URL here
  return (
    <button
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-violet-300 px-4 py-2 font-semibold
        uppercase text-violet-300 transition-all duration-500
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-300
        before:transition-transform before:duration-1000
        before:content-[""]
        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiLogIn />
      <span>ABI Files</span>
    </button>
  );
};

export const Buy: FC = () => {
  return (
    <div className="bg-violet-700 w-full flex flex-col justify-center items-center text-center relative  h-[400px] md:h-[400px]">
      <MagnetButton /> {/* This is the "BUY NOW" button */}
      <div className="flex items-center mt-4">
        <p className='text-white text-xs mr-2'>
          CA: 5GCu...Q5f7
        </p>
        <button onClick={handleCopyToClipboard} aria-label="Copy Contract Address" className="text-blue-500 hover:text-blue-700">
          <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g>
              <path fill="#000000" d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" />
            </g>
          </svg>
        </button>
      </div>
      <div className="flex mt-4 space-x-4"> {/* Ensure this div is correctly using flex and space-x-4 */}
        <RoundedSlideButton1 />
        <RoundedSlideButton2 />
      </div>
      <div className="absolute z-20 top-[80%] mt-2"> {/* Image positioned to overlap and be slightly lower */}
  <Image 
  z-index="9999"
    src={liquidity} 
    alt="Liquidity Image" 
    width={640} 
    height={142} 
    layout="fixed"
  />
</div>
    </div>
  );
};