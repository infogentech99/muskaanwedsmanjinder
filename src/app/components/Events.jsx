"use client";
import { CalendarPlus, Bell } from "lucide-react";
export default function Events() {
  const events = [
    {
      title_ceremony: "Bangle Ceremony + Satsang",
      image: "/assets/bangle.webp",
      date: "Sunday, 15th November 2026",
      venue_address:"Bathinda Punjab",
      time: "Join Us at 07:00 PM Onwards",
      link: "https://maps.app.goo.gl/iVRSvGqT9msB8mZT8",
    },

    {
      title_ceremony: "Mehendi",
      image: "/assets/mehandi.webp",
      date: "Wednesday, 18th November 2026",   
      venue_address:"Bathinda Punjab",
      time: "Join Us at 03:00 PM Onwards",
      link: "https://maps.app.goo.gl/iVRSvGqT9msB8mZT8",
    },
    {
      title_ceremony: "Shagun + Jaggo Night",
      image: "/assets/shagun.webp",
      date: "Thursday, 19th November 2026",
      venue_address:"Bathinda Punjab",
      time: "Join Us at 11:00 AM Onwards",
      link: "https://maps.app.goo.gl/iVRSvGqT9msB8mZT8",
    },
    {
      title_ceremony: "Haldi + Chura Ceremony",
      image: "/assets/haldi.webp",
      date: "Friday, 20th November 2026",
      venue_address:"Bathinda Punjab",
      time: "Join Us at 07:30 PM Onwards",
      link: "https://maps.app.goo.gl/iVRSvGqT9msB8mZT8",
    },

    {
      title_ceremony: "Wedding",
      image: "/assets/wedding.webp",
      date: "Saturday, 21th November 2026",
      venue: "GLITZ RESORT",
      venue_address: (
        <>
           JUGIAL ROAD, VILL. GOSAINPUR, PATHANKOT
        </>
      ),
      time: "Join Us at 11:00 AM Onwards",
      link: "https://maps.app.goo.gl/SKnRCxVr7wgdRtXc9",
    },
  ];

  return (
    <div>
      <div
        className="bg-[url('/assets/event_bg.png')]
   
    bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden"
      >
        <div className=" md:pt-24 pt-0 md:pb-50 lg:pb-40 relative z-10 pb-10">
          <div className=" text-center leading-tight text-[32px] sm:text-5xl lg:text-[100px] gap-y-2 pb-0 flex flex-col items-center">
            <h2 className="text-[#B35800] font-cormorant-garamond [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] font-medium font-cormorant-garamond italic md:mt-55 mt-30 px-20">
              From Dreams to Lifelines
            </h2>
            <h2 className="text-[#B35800] md:text-2xl text-[16px] text-center font-cormorant-garamond  px-4 mt-6">
              One flies above the clouds, <br />
              One heals hearts on the ground. <br />
              Together, they begin their forever.
            </h2>

            <img
              src="/assets/couple_main.webp"
              alt="Ganesh"
              className="md:h-full h-70 w-60 object-contain mt-6"
            />

            <h1 className="text-[#B35800] md:text-7xl text-5xl font-dancing-script mt-12">
              Muskaan Saini
            </h1>
            <h2 className="text-[#B35800] md:text-3xl text-[15px] font-cormorant-garamond">
              D/O <br />
              Sdn. Ravinder Kaur & S. Harjinder Singh
            </h2>

            <h2 className="text-[#B35800] md:text-5xl text-2xl font-cormorant-garamond my-4">
              With
            </h2>

            <h1 className="text-[#B35800] md:text-7xl text-5xl font-dancing-script">
              Manjinder Singh
            </h1>
            <h2 className="text-[#B35800] md:text-3xl text-[15px] font-cormorant-garamond">
              S/O <br />
              Sdn. Ravinder Kaur & S. Harjinder Singh
            </h2>

            <h2 className="text-[#B35800] md:text-3xl text-[17px] font-cormorant-garamond mt-12">
              On the following events
            </h2>

            <div className="flex justify-center mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-16 lg:gap-x-40 gap-y-20">
                {events.map((event, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={event.image}
                      alt={event.venue}
                      className="lg:w-80 lg-w-95 sm:w-76 h-auto w-70 "
                    />

                    <h2 className="text-[#B35800] font-cormorant-garamond lg:text-[45px] md:text-2xl text-[28px] mt-4">
                      {event.title_ceremony}
                    </h2>

                    <p className="text-[#B35800] font-cormorant-garamond text-[14px] sm:text-base mt-2">
                      <span className="md:text-[22px] text-[15px]">
                        {event.date}
                      </span>
                      <br />
                      <span className="md:text-[22px] text-[15px]">
                    
                        {event.time}
                      </span>
                    </p>

                    <p className="text-[#B35800] font-cormorant-garamond text-[14px] sm:text-base">
                         <p className="md:text-[22px] text-[15px]">
                        {event.venue}
                      </p>
                      <span className="md:text-[22px] text-[15px]">
                        {event.venue_address}
                      </span>
                    </p>
                    <p className="text-[#B35800] font-cormorant-garamond text-[14px] sm:text-base mt-2">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:text-[20px] text-[14px] underline"
                      >
                        View Direction
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="text-[#B35800] md:text-7xl text-3xl font-cormorant-garamond mt-24">
              Hearts and Horizons
            </h1>
            <img
              src="/assets/logo.png"
              alt="Ganesh"
              className="md:h-full h-40 w-40 object-contain mt-4"
            />

            <p className="font-cormorant-garamond font-medium text-sm md:text-base lg:text-xl mt-8 md:leading-6 text-[#B35800] px-6 text-center md:px-50">
              With Heartfelt Blessings & Warmest Wishes Our Family request the
              honour of your presence to bless this sacred union of love and
              destiny
            </p>

            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#B35800] px-5 py-2 font-eb-garamond uppercase md:text-[14px] text-[12px] mt-4 text-white"
            >
              <CalendarPlus size={18} />
              Add to Calendar
            </a>

            <h1 className="text-[#B35800] md:text-6xl text-3xl font-cormorant-garamond md:mt-20 mt-16">
              Looking forward to <br />
              seeing you
            </h1>

            <div className=" h-100 lg:h-180 flex justify-center gap-0 items-center md:mt-20 lg:mt-15 md:pr-5 lg:pr-10 3xl:pr-30">
              <div className="bg-[url('/assets/RSVP_Symbol.webp')] w-65 h-65 md:w-100 md:h-100 lg:w-150 lg:h-150 bg-contain bg-no-repeat">
                <div className="flex flex-col justify-center items-center mt-17 md:mt-42 md:not-first:mt-4">
                  <h2 className="font-cormorant-garamond font-semibold text-[16px] md:text-sm lg:text-[35px] text-[#8B4302]">
                    Click the link <br />
                    to RSVP
                  </h2>

                  <a
                    href="https://wa.me/6239625121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-2"
                  >
                    <img
                      src="/assets/whatsapp.webp"
                      alt="WhatsApp"
                      className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    />
                    <h2 className="font-cormorant-garamond text-[17px] md:text-sm lg:text-[28px] text-[#8B4302]">
                      Mrs. Indu Saini
                    </h2>
                  </a>

                  <a
                    href="https://wa.me/8198872227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-1 md:mt-3 ml-2"
                  >
                    <img
                      src="/assets/whatsapp.webp"
                      alt="WhatsApp"
                      className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    />
                    <h2 className="font-cormorant-garamond text-[17px] md:text-sm lg:text-[28px] text-[#8B4302] ">
                      Mr. Rajesh Saini
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
