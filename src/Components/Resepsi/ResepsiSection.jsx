import { FaMapMarkerAlt } from "react-icons/fa";
// import { GiLinkedRings } from "react-icons/gi";
import MandalaSection from "../Mandala/MandalaSection";
import TanggalResepsi from "./TanggalResepsi";
import Cincin from "../../assets/Img/cincin.png"


export default function ResepsiSection() {
  return (
    <section className="relative overflow-hidden py-24">

      <MandalaSection />

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Ring */}
        {/* <GiLinkedRings
          className="
          text-[#D9B16A]
          text-6xl
          md:text-7xl
          "
        /> */}
        <img
  src={Cincin}
  alt="Wedding Ring"
  className="
    w-16
    sm:w-20
    md:w-24
    lg:w-28
    object-contain
    animate-pulse
    drop-shadow-[0_0_15px_rgba(217,177,106,.4)]
  "
/>

        {/* Title */}

        <h2
          className="
          mt-5
font-allura
text-[clamp(3rem,8vw,5rem)]
bg-gradient-to-b
from-[#F8E8B5]
via-[#D9B16A]
to-[#8A6438]
bg-clip-text
text-transparent
drop-shadow-lg
          "
        >
          Resepsi
        </h2>

        {/* Date */}

        <TanggalResepsi />

        <p
          className="
          mt-8
          text-white
          text-base
          md:text-lg
          font-space
          font-semibold
        "
        >
          Pukul :
          <span className="">
            {" "}
            08.00 WIB s/d Selesai
          </span>
        </p>

        {/* Location */}

        <h3
          className="
          mt-6
font-semibold
text-xl
bg-gradient-to-r
from-[#D9B16A]
via-[#e0b65c]
to-[#A57740]
bg-clip-text
text-transparent
font-serif
italic
        "
        >
          Lokasi Acara
        </h3>

        <p
          className="
          mt-3
          max-w-md
          text-white/80
          leading-7
          text-sm
          md:text-base
          italic font-serif
        "
        >
          Kp.Babakan Desa Tanjungsari Kec.Tanjungsari Kab.Bogor
        </p>

         <button data-aos="fade-up-right"
      className="
     mt-10
inline-flex
items-center
gap-3

rounded-full

bg-gradient-to-t
from-[#D9B16A]
via-[#F7E6C0]
to-[#A57740]

px-8
py-4

font-semibold
text-black

shadow-[0_8px_20px_rgba(217,177,106,.35)]

transition-all
duration-500

hover:scale-105
hover:shadow-[0_0_35px_rgba(217,177,106,.55)]
italic
    "
    >
      <FaMapMarkerAlt />

      Lihat Lokasi
    </button>

      </div>

    </section>
  );
}