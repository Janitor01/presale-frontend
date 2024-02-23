'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import 'chart.js/auto';
import crown from 'public/images/crown.png'






export const About: FC = () => {
  return (
    <>
    <div className="flex flex-col items-center p-4 sm:p-6 md:max-w-[50%] mx-auto font-black text-slate-200">
      <h1 className="text-6xl font-black mb-6">
        ABOUT <span className="text-indigo-500">$IOU</span>
      </h1>
      <h3><span className="important-text">Hey there!</span> Welcome to the world of <span className="text-indigo-500">$IOU</span>, the meme token that <span className="important-text">promises you the moon and stars... Just kidding!</span> I'm <span className="text-indigo-500">Bug Bite</span>, also known around these parts as <span className="text-indigo-500">Janitor</span>, and I'm here to tell you all about the token that <span className="important-text">promises... absolutely nothing!</span> Yep, you read that right.</h3>
      <br />
      <h3>Before diving into the <span className="text-indigo-500">$IOU saga</span>, let me take you back to where it all began. I'm the brains behind <span className="text-indigo-500">Office Party NFTs</span>, an AI-generated bonanza of 404 party apes that became the talk of the town in <span className="text-indigo-500">Aleph Zero</span>. That's right, we sold out faster than you can say "ape into this," making waves in the Aleph Zero ecosystem – a place we call home.</h3>
      <br />
      <h3>Now, let's talk <span className="text-indigo-500">$IOU</span>. Born from the spirit of <span className="important-text">pure, unadulterated meme magic</span>, <span className="text-indigo-500">$IOU</span> is here to not take itself too seriously. In a world where every token claims to be the next big thing, we're here to say, "<span className="important-text">Hey, we're not your next investment; we're your next community.</span>" With <span className="text-indigo-500">$IOU</span>, what we guarantee is <span className="important-text">100% NO utility</span>. That's our promise to you. No dreams of lambos or moon landings here – just good ol' meme fun.</h3>
      <br />
      <h3>Why join us? Well, if you love being part of something that's all about <span className="important-text">community vibes, inside jokes, and the thrill of owning something that's as useless as it is hilarious</span>, then <span className="text-indigo-500">$IOU</span> is for you. It's not about making bank; it's about <span className="important-text">making memories and maybe, just maybe, being part of internet history</span>.</h3>
      <br />
      <h3>So, if you're into <span className="important-text">degenerate meme tokens</span> and looking for a place where <span className="important-text">everyone gets the joke</span>, welcome aboard! <span className="text-indigo-500">$IOU</span> isn't just a token; it's <span className="important-text">a ticket to the party</span>. And in this party, <span className="important-text">everyone's invited</span>.</h3>
      <br />
      <h3>Remember, I'm not promising you riches; I'm promising you a spot in our <span className="important-text">ragtag crew of meme lovers</span>. Let's make <span className="text-indigo-500">$IOU</span> a symbol of <span className="important-text">our unity in the face of the absurdly serious world of crypto</span>.</h3>
      <br />
      <h3>Catch you on the flip side,<br /><span className="text-indigo-500">Bug Bite (Janitor)</span></h3>
    </div>
  </>
  
  
  );
};
export default About;