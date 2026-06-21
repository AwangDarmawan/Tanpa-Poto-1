
import MandalaSection from "../Mandala/MandalaSection";
import Timer from "./Timer";



export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex justify-center items-center">
      {/* Mandala */}
       <MandalaSection/>

      

      <div className="relative z-20 text-center px-6 xs:pt-10 ">

        <p className="text-[#D9B16A] text-sm sm:text-base font-serif italic   ">
          The Wedding Of
        </p>

        <h1 data-aos="fade-down-right" className=" text-[#D9B16A]
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

        <h1 data-aos="fade-up-left" className=" text-[#D9B16A]
        text-5xl
        sm:text-6xl
        md:text-7xl
        font-allura ml-20">

          Dinda
        </h1>
        <p className="mt-8 uppercase tracking-[0.4em] text-xs sm:text-sm text-[#D9B16A] font-allura font-black">
  Save The Date
</p>

<h3 className="mt-3 italic text-white text-lg sm:text-xl md:text-2xl font-serif">
  17 Agustus 2025
</h3>

<Timer />

       

      </div>

    </section>
  );
}