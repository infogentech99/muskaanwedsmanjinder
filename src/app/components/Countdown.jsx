"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const TARGET_DATE = new Date("2026-11-21").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url('/assets/countdown_bg.webp')] bg-no-repeat bg-cover py-33">
    <div className="flex  flex-col justify-center items-center">
          <h2
          className="font-cormorant-garamond font-medium italic text-4xl md:text-5xl lg:text-[100px] text-center 
                               md:pt-30 lg:pt-100 text-white"
        >
          The Countdown
        </h2>
       
        
        <p className="font-cormorant-garamond font-medium text-sm md:text-base lg:text-2xl mt-4 md:leading-6 text-white">
          To Forever Begins
        </p>
        <p className="font-cormorant-garamond font-medium text-sm md:text-base lg:text-xl mt-4 md:leading-6 text-white px-6 text-center md:px-50">
          With Heartfelt Blessings & Warmest Wishes Our Family request the
          honour of your presence to bless this sacred union of love and destiny
        </p>
    </div>

      <div className="flex justify-center mt-12 md:mt-20">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">

    {/* Days */}
    <div
      className="flex h-30 w-30 flex-col items-center justify-center
      bg-[#F9EBD9] font-cormorant-garamond text-center
      text-4xl text-[#95222F] font-bold
      md:h-37.5 md:w-37.5 md:text-3xl
      lg:h-45 lg:w-70 lg:text-[52px]
      border rounded-xl drop-shadow-lg"
    >
      {timeLeft.days}

      <p className="font-cormorant-garamond text-[16px] font-medium md:text-sm lg:text-base text-[#636D3E] mt-1">
        DAYS
      </p>
    </div>

    {/* Hours */}
    <div
      className="flex h-30 w-30 flex-col items-center justify-center
      bg-[#F9EBD9] font-cormorant-garamond text-center
      text-4xl text-[#95222F] font-bold
      md:h-37.5 md:w-37.5 md:text-3xl
      lg:h-45 lg:w-70 lg:text-[52px]
      border rounded-xl drop-shadow-lg"
    >
      {timeLeft.hours}

      <p className="font-cormorant-garamond text-[16px] font-medium md:text-sm lg:text-base text-[#636D3E] mt-1">
        HOURS
      </p>
    </div>

    {/* Minutes */}
    <div
      className="flex h-30 w-30 flex-col items-center justify-center
      bg-[#F9EBD9] font-cormorant-garamond text-center
      text-4xl text-[#95222F] font-bold
      md:h-37.5 md:w-37.5 md:text-3xl
      lg:h-45 lg:w-70 lg:text-[52px]
      border rounded-xl drop-shadow-lg"
    >
      {timeLeft.minutes}

      <p className="font-cormorant-garamond text-[16px] font-medium md:text-sm lg:text-base text-[#636D3E] mt-1">
        MINUTES
      </p>
    </div>

    {/* Seconds */}
    <div
      className="flex h-30 w-30 flex-col items-center justify-center
      bg-[#F9EBD9] font-cormorant-garamond text-center
      text-4xl text-[#95222F] font-bold
      md:h-37.5 md:w-37.5 md:text-3xl
      lg:h-45 lg:w-70 lg:text-[52px]
      border rounded-xl drop-shadow-lg"
    >
      {timeLeft.seconds}

      <p className="font-cormorant-garamond text-[16px] font-medium md:text-sm lg:text-base text-[#636D3E] mt-1">
        SECONDS
      </p>
    </div>

  </div>
</div>
  
    </div>
  );
}
