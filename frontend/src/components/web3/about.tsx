'use client'

import { FC, useState, ReactNode } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import 'chart.js/auto';
import crown from 'public/images/crown.png';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';



type QuestionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

const Question: FC<QuestionProps> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b-[1px] border-b-slate-300 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="py-4 w-full text-left flex items-center justify-between"
      >
        <span className="text-xl font-medium">{title}</span>
        <FiChevronDown
          className={`text-xl transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : '0' }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const About: FC = () => {
  return (
    <>
      

      <div className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-3xl font-semibold mb-4">Frequently Asked Questions</h3>
          <Question title="$IOU..." defaultOpen>
         
   
    <h3><span className="important-text">Hey there!</span> Welcome to the world of <span className="text-indigo-500">$IOU</span>, the meme token that <span className="important-text">promises you the moon and stars... Just kidding!</span> I&apos;m <span className="text-indigo-500">Bug Bite</span>, also known around these parts as <span className="text-indigo-500">Janitor</span>, and I&apos;m here to tell you all about the token that <span className="important-text">promises... absolutely nothing!</span> Yep, you read that right.</h3>
    <br />
    <h3>Before diving into the <span className="text-indigo-500">$IOU saga</span>, let me take you back to where it all began. I&apos;m the brains behind <span className="text-indigo-500">Office Party NFTs</span>, an AI-generated bonanza of 404 party apes that became the talk of the town in <span className="text-indigo-500">Aleph Zero</span>. That&apos;s right, we sold out faster than you can say &quot;ape into this,&quot; making waves in the Aleph Zero ecosystem – a place we call home.</h3>
    <br />
    <h3>Now, let&apos;s talk <span className="text-indigo-500">$IOU</span>. Born from the spirit of <span className="important-text">pure, unadulterated meme magic</span>, <span className="text-indigo-500">$IOU</span> is here to not take itself too seriously. In a world where every token claims to be the next big thing, we&apos;re here to say, &quot;<span className="important-text">Hey, we&apos;re not your next investment; we&apos;re your next community.</span>&quot; With <span className="text-indigo-500">$IOU</span>, what we guarantee is <span className="important-text">100% NO utility</span>. That&apos;s our promise to you. No dreams of lambos or moon landings here – just good ol&apos; meme fun.</h3>
    <br />
    <h3>Why join us? Well, if you love being part of something that&apos;s all about <span className="important-text">community vibes, inside jokes, and the thrill of owning something that&apos;s as useless as it is hilarious</span>, then <span className="text-indigo-500">$IOU</span> is for you. It&apos;s not about making bank; it&apos;s about <span className="important-text">making memories and maybe, just maybe, being part of internet history</span>.</h3>
    <br />
    <h3>So, if you&apos;re into <span className="important-text">degenerate meme tokens</span> and looking for a place where <span className="important-text">everyone gets the joke</span>, welcome aboard! <span className="text-indigo-500">$IOU</span> isn&apos;t just a token; it&apos;s <span className="important-text">a ticket to the party</span>. And in this party, <span className="important-text">everyone&apos;s invited</span>.</h3>
    <br />
    <h3>Remember, I&apos;m not promising you riches; I&apos;m promising you a spot in our <span className="important-text">ragtag crew of meme lovers</span>. Let&apos;s make <span className="text-indigo-500">$IOU</span> a symbol of <span className="important-text">our unity in the face of the absurdly serious world of crypto</span>.</h3>
    <br />
    <h3>Catch you on the flip side,<br /><span className="text-indigo-500">Bug Bite (Janitor)</span></h3>
    <br />
  
          </Question>

          <Question title="Was there a presale?">
            <p>There were two presale&apos;s for $IOU. Both sold out in minutes after going live!</p>
            <br />
            <p> Presale one had a price of 0.0001 $AZERO which is the same as the launching price once it gets listed on Common. Presale two had a price of 0.00012 $AZERO per $IOU. </p>
            <br />
            <p>You read that correctly! A 20% premium over launching price, that&apos;s how you know we have a dedicated community!</p>
            <br />
          </Question>
          <Question title="Where can I buy $IOU?">
            <p>You can buy $IOU in <span className="text-indigo-500"><a href="https://app.common.fi">Common</a></span>, the main DEX of Aleph Zero. We were the first tradable token on the platform! Make sure to copy our contract and paste it in the DEX!</p><br />
          </Question>
          <Question title="Office Party...">
          <p>
  The Office Party NFT project operates with a unique approach to its roadmap, recognizing that the journey is just as important as the destination. Rather than having a set roadmap with predetermined milestones, Office Party views the development of the project as a shared roadtrip that the community embarks on together.
</p>
<br />
<p>
  This means that the direction and priorities of the project are shaped by the collective interests and contributions of its members. The community has the power to steer the project in new and exciting directions, and the team behind Office Party is committed to adapting and evolving the project in response to the needs and desires of its community.
</p>
<br />
<p>
  Office Party was the first collection to be sold out on the Aleph Zero network.
</p>
<br />

          </Question>
          <Question title="Where can I get an Office Party NFT?">
            <p>You can buy an Office party NFT on <span className="text-indigo-500"><a href="https://a0.artzero.io/collection/5DMq6XZMLRLB3UjTktP5miotabFrjCss22TtrJhVAsRwBZfJ?is_for_sale=true">ArtZero</a></span> - the main marketplace of Aleph Zero! </p><br />
          </Question>

          <Question title="Future Plans?">
            <p>We stick true to our promise of 100% no utility - 100% community, that does not mean that there will never be any treats for holders in the future... </p><br />
          </Question>
          {/* Add more questions as needed */}
        </div>
      </div>
    </>
  );
};

export default About;
