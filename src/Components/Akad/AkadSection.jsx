// import { FaMapMarkerAlt } from "react-icons/fa";
// // import { GiLinkedRings } from "react-icons/gi";
// import MandalaSection from "../Mandala/MandalaSection";
// import Cincin from "../../assets/Img/cincin.png"
// import TanggalAkad from "./TanggalAkad";


// export default function AkadSection() {
//   return (
//     <section className="relative overflow-hidden py-24">

//       <MandalaSection />

//       <div className="relative z-10 flex flex-col items-center text-center px-6">

//         {/* Ring */}
//         {/* <GiLinkedRings
//           className="
//           text-[#D9B16A]
//           text-6xl
//           md:text-7xl
//           "
//         /> */}
//         <img
//   src={Cincin}
//   alt="Wedding Ring"
//   className="
//     w-16
//     sm:w-20
//     md:w-24
//     lg:w-28
//     object-contain
//     animate-pulse
//     drop-shadow-[0_0_15px_rgba(217,177,106,.4)]
//   "
// />

//         {/* Title */}

//         <h2
//           className="
//           mt-5
// font-allura
// text-[clamp(3rem,8vw,5rem)]
// bg-gradient-to-b
// from-[#F8E8B5]
// via-[#D9B16A]
// to-[#8A6438]
// bg-clip-text
// text-transparent
// drop-shadow-lg
//           "
//         >
//           Syukuran & di mempelai pria
//         </h2>

//         {/* Date */}

//         <TanggalAkad />

//         {/* Time */}

//         <p
//           className="
//           mt-8
//           text-white
//           text-base
//           md:text-lg
//           font-space
//           font-semibold
//         "
//         >
//           Pukul :
//           <span className="">
//             {" "}
//             09.00 WIB s/d Selesai
//           </span>
//         </p>

//         {/* Location */}

//         <h3
//           className="
//           mt-6
// font-semibold
// text-xl
// bg-gradient-to-r
// from-[#D9B16A]
// via-[#e0b65c]
// to-[#A57740]
// bg-clip-text
// text-transparent
// font-serif
// italic
//         "
//         >
//           Lokasi Acara
//         </h3>

//         <p
//           className="
//           mt-3
//           max-w-md
//           text-white/80
//           leading-7
//           text-sm
//           md:text-base
//           italic font-serif
//         "
//         >
//           Kp.Babakan Desa Tanjungsari Kec.Tanjungsari Kab.Bogor
//         </p>

//          <button data-aos="fade-up"
//       className="
//      mt-10
// inline-flex
// items-center
// gap-3

// rounded-full

// bg-gradient-to-t
// from-[#D9B16A]
// via-[#F7E6C0]
// to-[#A57740]

// px-8
// py-4

// font-semibold
// text-black

// shadow-[0_8px_20px_rgba(217,177,106,.35)]

// transition-all
// duration-500

// hover:scale-105
// hover:shadow-[0_0_35px_rgba(217,177,106,.55)]
// italic
//     "
//     >
//       <FaMapMarkerAlt />

//       Lihat Lokasi
//     </button>

//       </div>

//     </section>
//   );
// }


import { FaMapMarkerAlt } from "react-icons/fa";
import MandalaSection from "../Mandala/MandalaSection";
import Cincin from "../../assets/Img/cincin.png";
import TanggalAkad from "./TanggalAkad";

export default function AkadSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        w-full min-h-screen
        py-16 min-[360px]:py-20
        sm:py-24 md:py-28 lg:py-32
        px-3 min-[360px]:px-4 sm:px-6
      "
    >
      {/* Background Ornament */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MandalaSection />
      </div>

      <div
        className="
          relative z-10
          mx-auto w-full max-w-3xl
          flex flex-col items-center
          text-center
        "
      >
        {/* Ring */}
        <img
          src={Cincin}
          alt="Wedding Ring"
          className="
            w-14 min-[360px]:w-16
            sm:w-20 md:w-24 lg:w-28
            h-auto object-contain
            animate-pulse
            drop-shadow-[0_0_15px_rgba(217,177,106,.4)]
          "
        />

        {/* Title */}
        <h2
          className="
            mt-5 sm:mt-6
            w-full max-w-2xl
            font-allura
            text-[clamp(2.5rem,8vw,5rem)]
            leading-[1.15]
            px-1
            break-words
            bg-gradient-to-l
            from-[#F8E8B5]
            via-[#D9B16A]
            to-[#F8E8B5]
            bg-clip-text
            text-transparent
            drop-shadow-lg
          "
        >
          Syukuran Pernikahan
          <span className="block text-[0.7em] my-1">&</span>
          Tasyakuran Khitanan
        </h2>

        {/* Event Location Description */}
        <p
          className="
            mt-3 sm:mt-4
            max-w-xl
            px-2
            text-[#D9B16A]
            text-sm min-[360px]:text-base
            sm:text-lg
            leading-relaxed
            font-serif italic
          "
        >
          Diselenggarakan Bersamaan di Kediaman (Mempelai Pria)
        </p>

        {/* Date */}
        <div className="mt-7 sm:mt-9 md:mt-10 w-full">
          <TanggalAkad />
        </div>

        {/* Time */}
        <p
          className="
            mt-6 sm:mt-8
            px-2
            text-white
            text-sm min-[360px]:text-base
            sm:text-lg md:text-xl
            leading-relaxed
            font-space font-semibold
          "
        >
          Pukul :
          <span className="ml-1 font-normal">
            08.00 WIB s/d Selesai
          </span>
        </p>

        {/* Location */}
        <div className="mt-7 sm:mt-9 w-full flex flex-col items-center">
          <h3
            className="
              font-semibold
              text-lg min-[360px]:text-xl
              sm:text-2xl
              bg-gradient-to-r
              from-[#D9B16A]
              via-[#e0b65c]
              to-[#A57740]
              bg-clip-text
              text-transparent
              font-serif italic
            "
          >
            Lokasi Acara
          </h3>

          <p
            className="
              mt-3
              w-full max-w-md
              px-2
              text-white/80
              leading-relaxed sm:leading-7
              text-xs min-[360px]:text-sm
              sm:text-base md:text-lg
              italic font-serif
              break-words
            "
          >
            Kp. Cinangsi, RT 04 RW 01 Desa Mentengsari,
            Kec.Cikalongkulon, Kab. Cianjur
          </p>
        </div>

        {/* Location Button */}
        <a
          href="https://www.google.com/maps/place/Mesjid+Jami+Cinangsi/@-6.726181,107.2126224,759m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69ab90a54814f3:0xb3eb8cca7b40b915!8m2!3d-6.726181!4d107.2126224!16s%2Fg%2F11f15lr8mg?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          className="
            mt-8 sm:mt-10
            inline-flex items-center justify-center
            gap-2 sm:gap-3
            w-full max-w-[220px] sm:max-w-[240px]
            rounded-full
            bg-gradient-to-t
            from-[#D9B16A]
            via-[#F7E6C0]
            to-[#A57740]
            px-5 sm:px-8
            py-3 sm:py-4
            text-sm sm:text-base
            font-semibold text-black
            shadow-[0_8px_20px_rgba(217,177,106,.35)]
            transition-all duration-500
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(217,177,106,.55)]
            active:scale-95
            italic
          "
        >
          <FaMapMarkerAlt className="shrink-0" />
          <span>Lihat Lokasi</span>
        </a>
      </div>
    </section>
  );
}
