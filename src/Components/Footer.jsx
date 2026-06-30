// import {  FaLink } from "react-icons/fa";

export default function Footer() {
  return (
    <footer  className="rounded-2xl relative z-10 mt-10 border  border-[#D9B16A]/30 bg-black/50 text-white
     lg:mx-[300px] font-space">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6  ">

        {/* Copyright */}
        <p  className="text-center text-xs text-white/70 sm:text-left">
          © {new Date().getFullYear()} 4darDigital Hub. All Rights Reserved.
        </p>

        {/* Brand */}
        {/* <div className="text-sm font-semibold tracking-wide">
          4darDigital 
        </div>

         {/* Project Section */}
        
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mt-1 italic text-[#D9B16A]">
    4daDigital
  </h2>
  <p className="mt-3 text-sm sm:text-base font-semibold text-white-900 animate-pulse italic text-center">
    🎉 Promo spesial bulan ini! diskon 60% Lihat katalog template sekarang sebelum kehabisan.
  </p>

  <a
    href="https://web-4dadigital.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      justify-center
      mt-6
      
      py-3
      rounded-full
      bg-gradient-to-r
     from-[#8A6438]
        via-[#D9B16A]
        to-[#8A6438]
      text-white
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      shadow-xl
      w-full
      text-sm sm:text-base
      font-playfair
      
      
      
    "
  >
    🌐 Lihat Semua Template
  </a>

       
      </div>
    </footer>
  );
}