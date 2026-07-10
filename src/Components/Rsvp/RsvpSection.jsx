import { FaEnvelopeOpenText, FaHeart } from "react-icons/fa";
import RsvpForm from "./RsvpForm";
import { useEffect, useState } from "react";
import { getData } from "../../Services/Api";
import MandalaSection from "../Mandala/MandalaSection";


export default function RsvpSection() {
  const [datas, setDatas] = useState([]);
  
  const fetchData = async () => {
  try {
    const data = await getData();
    setDatas(data || []);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    

    fetchData();
  }, []);
  return (
    <section id="rsvp" className="relative z-20 px-5 py-24">
        <MandalaSection />
        
      <div className=" mx-auto w-full max-w-5xl text-center  lg:px-[330px]">
        
            <FaEnvelopeOpenText className="mx-auto text-4xl  
    text-[clamp(3rem,8vw,5rem)]
    text-[#D9B16A]
    drop-shadow-[0_0_12px_rgba(217,177,106,.4)]" />

            <p className="mt-4 font-space text-[11px] uppercase tracking-[0.35em] text-white/70">
              RSVP
            </p>

            <h2  data-aos="fade-up" className=" mt-4
        font-allura
        text-[clamp(3rem,8vw,5rem)]
        bg-gradient-to-b
        from-[#FFF5D6]
        via-[#D9B16A]
        to-[#8A6438]
        bg-clip-text
        text-transparent">
               Kehadiran Anda 
            </h2>
            
            <div className="my-3 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/30" />

              <FaHeart className="  animate-pulse text-lg text-[#D9B16A]" />

              <div className="h-px w-16 bg-white/30" />
            </div>

            <p className="mx-auto max-w-2xl font-space leading-8 text-white/80">
              Mohon konfirmasi kehadiran dan berikan doa terbaik untuk kedua
              mempelai.
            </p>

          </div>

        <div
          data-aos="fade-up"
          className="
            rounded-[40px]
            border
            
          
            shadow-2xl

            px-6
            pt-1
            pb-6

            sm:px-8
            md:px-12
             border-[#D9B16A]/30
      bg-white/5
      p-6
      backdrop-blur-md
      transition
      duration-300
      hover:border-[#D9B16A]
          "
        >
          {/* Header */}

          {/* <div className="text-center"> */}
{/* 
            <FaEnvelopeOpenText className="mx-auto text-4xl text-white" />

            <p className="mt-4 font-space text-[11px] uppercase tracking-[0.35em] text-white/70">
              RSVP
            </p>

            <h2 className="mt-3 font-serif  font-semibold italic text-4xl text-white sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl">
              Konfirmasi Kehadiran
            </h2> */}
{/* 
            <div className="my-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/30" />

              <FaHeart className="animate-heartbeat text-lg" />

              <div className="h-px w-16 bg-white/30" />
            </div>

            <p className="mx-auto max-w-2xl font-space leading-8 text-white/80">
              Mohon konfirmasi kehadiran dan berikan doa terbaik untuk kedua
              mempelai.
            </p>

          </div> */}

          <RsvpForm  PropfetchData={fetchData}  />
           {/* DATA LIST */}
          <div className="mt-3 space-y-4">
           
            {datas.length === 0 ? (
              <p className="text-center  text-white">
                Belum ada RSVP
              </p>
            ) : (
              datas.map((item) => (
                <div
                  key={item.id}
                  className="
                   
                    rounded-xl
                    p-4
                    shadow-sm
                    border
                     border-[#D9B16A]/30
      bg-white/5
    
      backdrop-blur-md
      transition
      duration-300
      hover:border-[#D9B16A]
                    
                  "
                >
                  <div className="flex justify-between items-start gap-3 z-10 ">
                    <div className="flex-1">
                      <p className="font-bold text-white break-words font-space">
                        {item.nama}
                      </p>

                      <p className="mt-2 text-sm text-white/80 break-words font-space">
                        {item.pesan}
                      </p>
                    </div>

                    <span
                      className={`
                        whitespace-nowrap
                        px-3 py-1
                        rounded-full
                        text-xs font-serif italic
                        ${
                          item.kehadiran === "Ya"
                            ? "bg-green-100 text-green-700"
                            : item.kehadiran === "Mungkin"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {item.kehadiran}
                    </span>
                  </div>
                </div>
              ))
            )}
        </div>
        </div>
      {/* </div> */}
    </section>
  );
}