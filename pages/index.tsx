import type { NextPage } from "next";
import { useScramble } from "use-scramble";
import { useState, useEffect } from "react";

const RitualV: NextPage = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  // Separate scramble effects for each unit
  const { ref: daysRef } = useScramble({
    text: days,
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: true
  });

  const { ref: hoursRef } = useScramble({
    text: hours,
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: true
  });

  const { ref: minutesRef } = useScramble({
    text: minutes,
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: true
  });

  const { ref: secondsRef } = useScramble({
    text: seconds,
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 3,
    overflow: true
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-01-01T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      // Pad numbers with leading zero except days
      const padNumber = (num: number) => num.toString().padStart(2, '0');

      setDays(d.toString());
      setHours(padNumber(h));
      setMinutes(padNumber(m));
      setSeconds(padNumber(s));
    };

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Initial calculation
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const scrambleConfig = {
    speed: 0.8,
    tick: 1,
    step: 3,
    scramble: 42,
    overflow: true
  };

  const [descriptionText, setDescriptionText] = useState("Ritual is a habit tracking and analytics app that helps you create and maintain good long-term habits.");
  const [launchText, setLaunchText] = useState("Launching January 1st, 2025");

  const { ref: descriptionRef } = useScramble({
    text: descriptionText,
    ...scrambleConfig
  });

  const { ref: launchRef } = useScramble({
    text: launchText,
    ...scrambleConfig
  });

  const handleHover = (setText: React.Dispatch<React.SetStateAction<string>>, text: string) => {
    setText("");
    setTimeout(() => setText(text), 100);
  };

  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex flex-col items-center justify-between px-4">
      {/* Top section with description */}
      <div className="w-full max-w-4xl mt-16">
        <div 
          ref={descriptionRef} 
          className="text-center cursor-pointer"
          style={{ fontSize: '32px', lineHeight: '1.4' }}
          onMouseEnter={() => handleHover(setDescriptionText, descriptionText)}
        />
      </div>

      {/* Center section with logo and text */}
      <div className="flex items-center gap-2" style={{ fontSize: '56px' }}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-12 h-12" 
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="10"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="10"/>
        </svg>
        Ritual
      </div>

      {/* Bottom section with countdown and launch date */}
      <div className="mb-16 flex flex-col items-center gap-8">
        {/* Countdown container */}
        <div className="border border-black p-8" style={{ minWidth: '500px' }}>
          <div className="flex justify-between items-end px-4">
            <div className="flex flex-col items-center">
              <span ref={daysRef} style={{ fontSize: '48px', fontWeight: '400' }}>
                {days}
              </span>
              <span style={{ fontSize: '14px', color: '#4B5563' }}>days</span>
            </div>
            <div className="flex flex-col items-center">
              <span ref={hoursRef} style={{ fontSize: '48px', fontWeight: '400' }}>
                {hours}
              </span>
              <span style={{ fontSize: '14px', color: '#4B5563' }}>hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span ref={minutesRef} style={{ fontSize: '48px', fontWeight: '400' }}>
                {minutes}
              </span>
              <span style={{ fontSize: '14px', color: '#4B5563' }}>mins</span>
            </div>
            <div className="flex flex-col items-center">
              <span ref={secondsRef} style={{ fontSize: '48px', fontWeight: '400' }}>
                {seconds}
              </span>
              <span style={{ fontSize: '14px', color: '#4B5563' }}>seconds</span>
            </div>
          </div>
        </div>
        
        <div 
          ref={launchRef} 
          className="text-center cursor-pointer"
          style={{ fontSize: '32px' }}
          onMouseEnter={() => handleHover(setLaunchText, launchText)}
        />
      </div>
    </div>
  );
};

export default RitualV;