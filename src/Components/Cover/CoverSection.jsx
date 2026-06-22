import {
  FaEnvelopeOpen
} from "react-icons/fa";
import MandalaSection from "../Mandala/MandalaSection";
import { motion } from "framer-motion";
import { useState } from "react";



import { useNavigate , useParams} from "react-router-dom";
export default function CoverSection() {
  const [isExit, setIsExit] = useState(false);
  
  const navigate = useNavigate();
 
      const { nama } = useParams();

      const handleOpen = () => {
  setIsExit(true);

  setTimeout(() => {
        localStorage.setItem("playMusic", "true");
    navigate("/home");
    
  }, 90); // sama dengan durasi animasi
};
  return (

<motion.div
  initial={{
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  }}
  animate={
    isExit
      ? {
          y: "-105%",
          opacity: 0,
          scale: 0.97,
          filter: "blur(6px)",
        }
      : {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }
  }
  transition={{
    duration: 1.7,
     ease: "easeInOut", // smooth easeOut
  }}

>
 

    <section className="relative overflow-hidden min-h-screen flex justify-center items-center">
      {/* Mandala */}
       <MandalaSection/>

      

      <div className="relative z-20 text-center px-6 xs:pt-10 ">

        <p className="text-[#D9B16A] text-sm sm:text-base font-serif italic   ">
          The Wedding Of
        </p>

        <h1 data-aos="fade-down-right" className="  bg-gradient-to-t
        from-[#FFF5D6]
        via-[#D9B16A]
        to-[#8A6438]
        bg-clip-text
        text-transparent
        text-5xl
        sm:text-6xl
        md:text-7xl
        
        leading-tight
        font-allura
        mr-20">

          Aditya
        </h1>

        <p className="text-[#D9B16A] xs:text-3xl text-5xl
    sm:text-6xl
    md:text-7xl my-2 font-allura">
          &
        </p>

        <h1 data-aos="fade-up-left" className="  bg-gradient-to-b
        from-[#FFF5D6]
        via-[#D9B16A]
        to-[#8A6438]
        bg-clip-text
        text-transparent
        text-5xl
        sm:text-6xl
        md:text-7xl
        font-allura ml-20">

          Dinda
        </h1>

        <div className="mt-10 xs:mt-1">

          <p className="text-white text-sm font-serif italic">
            Kepada Yth.
          </p>

          <p className="text-white text-sm font-serif italic">
            Bapak/Ibu/Saudara/i
          </p>

          <h2 className="font-space italic text-2xl font-semibold mt-4  bg-gradient-to-t
        from-[#FFF5D6]
        via-[#D9B16A]
        to-[#8A6438]
        bg-clip-text
        text-transparent" data-aos="fade-up">
           {nama}
          </h2>

          {/* <p className="text-gray-300 text-xs mt-2 font-serif italic">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p> */}

        </div>

        <button
       
  // onClick={() => navigate("/home")}

             onClick={handleOpen}
          className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
        bg-gradient-to-r
        from-[#8A6438]
        via-[#D9B16A]
        to-[#8A6438]
          px-8
          py-3
          text-white
          font-semibold
          duration-300
          shadow-lg
          hover:scale-105
          font-serif italic
          "
        >

          <FaEnvelopeOpen />

          BUKA UNDANGAN

        </button>

      </div>

    </section>
    </motion.div>
  );
}