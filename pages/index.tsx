import type { NextPage } from "next";
import Image from "next/image";
import { useScramble } from "use-scramble";
import { useState, useEffect } from "react";

const RitualV: NextPage = () => {
  const [countdown, setCountdown] = useState<string>("");
  const { ref: countdownRef } = useScramble({
    text: countdown,
    speed: 1.5,    // Much slower speed
    tick: 5,       // Increased tick duration
    step: 0.5,     // Smaller step size
    scramble: 3,   // Reduced scramble
    overflow: true,
    replay: true,
    playOnMount: true
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-01-01T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrambleConfig = {
    speed: 0.5,
    tick: 1,
    step: 3,
    scramble: 42,
    seed: 1,
    overflow: true,
    replay: true,
    playOnMount: true
  };

  const { ref: taglineRef, replay: replayTagline } = useScramble({
    ...scrambleConfig,
    text: "First it becomes a habit\nthen it becomes a Ritual.",
    speed: 0.8,
  });

  const { ref: descriptionRef, replay: replayDesc } = useScramble({
    ...scrambleConfig,
    text: "Ritual is a habit tracking and analytics app that helps you create and maintain good long-term habits."
  });

  const { ref: launchRef, replay: replayLaunch } = useScramble({
    ...scrambleConfig,
    text: "Launching January 1st, 2025"
  });

  return (
    <div className="w-full relative bg-white h-[1275px] text-left text-29xl text-black font-karla">
      <Image
        className="absolute top-[0px] left-[0px] w-[940px] h-[1275px] object-cover"
        width={940}
        height={1275}
        alt=""
        src="/79b8e81a40cb1ea147955bb04dcd5c2etransformed-2@2x.png"
      />
      <div className="absolute top-[324px] left-[1050px] leading-[17px] font-medium font-alliance-no1">
        Ritual
      </div>
      <Image
        className="absolute top-[308px] left-[998px] w-[52px] h-[49.8px] object-cover"
        width={52}
        height={50}
        alt=""
        src="/6616fd30e8b5516e4dedd4ed-alliumlogov2black-2@2x.png"
      />
      <b 
        ref={taglineRef} 
        className="absolute top-[424px] left-[1027px] leading-[60px] whitespace-pre-line cursor-pointer" 
        onMouseEnter={() => replayTagline()}
        onMouseLeave={() => {}}
      />
      <div 
        ref={descriptionRef} 
        className="absolute top-[600px] left-[1027px] text-[32px] leading-[40px] flex items-center w-[580px] cursor-pointer"
        onMouseEnter={() => replayDesc()}
        onMouseLeave={() => {}}
      />
      <div 
        ref={countdownRef}
        className="absolute top-[1100px] left-[1027px] text-[36px] font-medium"
      />
      <div 
        ref={launchRef} 
        className="absolute top-[1214px] left-[1027px] text-[36px] leading-[17px] cursor-pointer"
        onMouseEnter={() => replayLaunch()}
        onMouseLeave={() => {}}
      />
    </div>
  );
};

export default RitualV;
