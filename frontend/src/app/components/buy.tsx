import React, { useEffect, useRef, useState, FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import partyhat from 'public/images/partyhat.png'
import Image from 'next/image';
import MagnetButton from './magnetbutton'; 



const Copy = () => {
  const contractAddress = "5GCubYQbm9x6TQbthbWpUVrgEibXMDXhgisw8DFYCpPJQ5f7";

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => alert('Contract address copied to clipboard!'))
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-[9999]">
        <div className="mx-auto flex flex-col items-start justify-center p-4 sm:max-w-xl md:max-w-7xl md:p-8">
          <MagnetButton /> {/* Button directly under the BUY NOW text */}
          <div className="flex items-center">
            <p className='text-slate-600 text-xs mr-2'>
              CA: {contractAddress}
            </p>
            <button onClick={handleCopyToClipboard} aria-label="Copy Contract Address" className="text-blue-500 hover:text-blue-700">
              <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <g>
                  <path fill="#000000" d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};


export const Buy: FC = () => {
  return (
    // Add flex, flex-col, justify-center to center content vertically, and items-center to center horizontally (if needed)
    <div className="bg-violet-700 w-full flex flex-col justify-center items-center text-center relative overflow-hidden h-[264px] md:h-[400px]">
      <div className="image-container">
        <Image src={partyhat} alt="Party Hat" width={500} height={500} objectFit="contain" />
      </div>
   
    </div>
  );
};
