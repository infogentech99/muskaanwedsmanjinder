"use client"
import Image from "next/image";
import IntroVideo from "./components/IntroVideo";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import { useEffect, useState, useRef } from "react";
export default function Home() {



 const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);



  return (
    <>
    <IntroVideo />

<button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/laavan.mp3" loop preload="auto" playsInline />
<div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  >
    <source src="/assets/first_section.mp4" type="video/mp4" />
  </video>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center px-4">

    <img
      src="/assets/ganesh_img.png"
      alt="Ganesh"
      className="md:h-35 md:w-35 h-23 w-25 object-contain"
    />
<h2 className="text-white md:text-2xl text-[14px] font-cormorant-garamond uppercase mt-2">
     || ॐ श्री गणेशाय नम: ||
    </h2>
    <h2 className="text-white md:text-3xl text-xl font-cormorant-garamond uppercase mt-20">
      Celebrating The Union Of
    </h2>

    <h1 className="text-white md:text-7xl text-5xl font-dancing-script mt-12">
      Muskaan Saini
    </h1>

    <h2 className="text-white md:text-5xl text-3xl font-cormorant-garamond my-4">
      Weds
    </h2>

    <h1 className="text-white md:text-7xl text-5xl font-dancing-script">
      Manjinder Singh
    </h1>

    <h2 className="text-white md:text-3xl text-xl font-cormorant-garamond uppercase mt-20">
      19th November 2026
    </h2>

  </div>
</div>

<Countdown/>
<Events/>
    </>
  );
}
